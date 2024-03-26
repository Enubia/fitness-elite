<script setup lang="ts">
import { Icon } from '#components';

defineProps<{ showLocalName?: boolean }>();

const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value);
});

const currentLocale = computed(() => {
    return locales.value.find(i => i.code === locale.value);
});

const DynamicIcon = defineComponent({
    props: {
        name: { type: String, required: true },
    },
    setup(props) {
        return () => h(Icon, { name: props.name });
    },
});
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div :class="showLocalName ? 'flex justify-center items-center gap-2' : ''">
                <DynamicIcon :name="currentLocale?.flag" />
                <span v-if="showLocalName">{{ currentLocale?.name }}</span>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem v-for="item in availableLocales" :key="item.code">
                <a
                    href="#" class="flex w-full items-center justify-center gap-3"
                    @click.prevent.stop="setLocale(item.code)"
                >
                    <DynamicIcon :name="item.flag" />
                    <span>{{ item.name }}</span>
                </a>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

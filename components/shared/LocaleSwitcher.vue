<script setup>
import { Icon } from '#components';

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

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
            <Button variant="ghost" size="lg">
                <DynamicIcon :name="currentLocale.flag" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem v-for="item in availableLocales" :key="item.code">
                <NuxtLink :to="switchLocalePath(item.code)" class="flex w-full items-center justify-center gap-3">
                    <DynamicIcon :name="item.flag" />
                    <span>{{ item.name }}</span>
                </NuxtLink>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

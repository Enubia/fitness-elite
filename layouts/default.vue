<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { HamburgerMenuIcon } from '@radix-icons/vue';
import { VisuallyHidden } from 'radix-vue';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const isDesktop = useMediaQuery('(min-width: 835px)');
</script>

<template>
    <header class="flex justify-between content-center md:px-3 py-5">
        <NuxtLink class="ps-5 md:ps-20" to="/">
            <NuxtImg
                :class="isDesktop ? 'w-96' : 'h-20'"
                :src="isDesktop ? '/svg/logo.svg' : '/svg/logo-mobile.svg'"
                alt="Logo"
            />
        </NuxtLink>

        <NavigationMenu v-if="isDesktop" class="pe-20">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NuxtLink to="/contact">
                        <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                            Kontakt
                        </NavigationMenuLink>
                    </NuxtLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <Sheet v-else>
            <SheetTrigger class="pe-3 md:pe-0">
                <HamburgerMenuIcon class="w-10 h-10" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <VisuallyHidden>Menu</VisuallyHidden>
                    </SheetTitle>
                </SheetHeader>
                <SheetDescription class="mt-5 grid gap-6 justify-center">
                    <NuxtLink to="/contact" class="text-center">
                        <SheetClose>
                            <Button variant="ghost" size="lg">
                                Kontakt
                            </Button>
                        </SheetClose>
                    </NuxtLink>
                    <NuxtLink to="/" class="text-center">
                        <SheetClose>
                            <Button variant="ghost" size="lg">
                                Start
                            </Button>
                        </SheetClose>
                    </NuxtLink>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <div class="flex justify-center content-center">
            <p>&copy; {{ new Date().getFullYear() }}</p>
        </div>
    </footer>
</template>

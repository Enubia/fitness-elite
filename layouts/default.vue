<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { HamburgerMenuIcon, InstagramLogoIcon } from '@radix-icons/vue';
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

const isMobile = useMediaQuery('(max-width: 834px)');
</script>

<template>
    <header class="flex justify-between content-center md:px-3 py-5">
        <NuxtLink class="ps-5 md:ps-20" to="/">
            <NuxtImg
                :class="!isMobile ? 'w-96' : 'h-20'"
                :src="!isMobile ? '/svg/logo.svg' : '/svg/logo-mobile.svg'"
                alt="Logo"
            />
        </NuxtLink>

        <NavigationMenu v-if="!isMobile" class="pe-20">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NuxtLink to="/contact">
                        <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                            Kontakt
                        </NavigationMenuLink>
                    </NuxtLink>
                    <NuxtLink to="/privacy-policy">
                        <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                            Datenschutz
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
                    <NuxtLink to="/privacy-policy" class="text-center">
                        <SheetClose>
                            <Button variant="ghost" size="lg">
                                Datenschutz
                            </Button>
                        </SheetClose>
                    </NuxtLink>
                    <NuxtLink to="/imprint" class="text-center">
                        <SheetClose>
                            <Button variant="ghost" size="lg">
                                Impressum
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

    <footer class="p-10 lg:p-20">
        <div class="md:flex justify-between content-center">
            <div>
                <p class="my-2">
                    &copy; {{ new Date().getFullYear() }} THOMAS LINDNER, B.A
                </p>
                <p class="my-2">
                    FITNESSWISSENSCHAFTLER & ONLINE FITNESS COACH
                </p>
            </div>
            <div class="flex mt-4 lg:mt-0 ">
                <a href="https://www.instagram.com/fitness_elite.eu" target="_blank">
                    <InstagramLogoIcon class="w-10 h-10" />
                </a>
                <a href="https://www.facebook.com/reel/472712058295541" target="_blank">
                    <Icon name="uil:facebook-f" class="w-10 h-10" />
                </a>
            </div>
        </div>
    </footer>
</template>

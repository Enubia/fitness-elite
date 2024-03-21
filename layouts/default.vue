<script setup lang="ts">
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
</script>

<template>
    <header class="sticky top-0 z-40 flex content-center justify-between bg-background py-5 md:px-3 lg:relative lg:top-auto">
        <NuxtLink class="ps-5 md:ps-10 lg:ps-20" to="/">
            <NuxtImg class="hidden lg:inline-flex" src="/svg/logo.svg" alt="Logo" />
            <NuxtImg class="inline lg:hidden" src="/svg/logo-mobile.svg" alt="Logo" />
        </NuxtLink>

        <div class="hidden pe-20 lg:inline-flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem class="flex gap-5">
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
                        <NuxtLink to="/imprint">
                            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                                Impressum
                            </NavigationMenuLink>
                        </NuxtLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div class="inline-flex pe-5 md:pe-10 lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <Icon name="radix-icons:hamburger-menu" class="size-10" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            <VisuallyHidden>Menu</VisuallyHidden>
                        </SheetTitle>
                    </SheetHeader>
                    <SheetDescription class="mt-5 grid justify-center gap-6">
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
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </div>
    </header>

    <main>
        <slot />
    </main>

    <footer class="p-10 lg:p-20">
        <div class="content-center justify-between md:flex">
            <div>
                <p class="my-2">
                    &copy; {{ new Date().getFullYear() }} THOMAS LINDNER, B.A
                </p>
                <p class="my-2">
                    FITNESSWISSENSCHAFTLER & ONLINE FITNESS COACH
                </p>
            </div>
            <div class="mt-4 flex gap-4 lg:mt-0 ">
                <a href="https://www.instagram.com/fitness_elite.eu" target="_blank">
                    <Icon name="uil:instagram" class="size-10" />
                </a>
                <a href="https://www.facebook.com/reel/472712058295541" target="_blank">
                    <Icon name="uil:facebook-f" class="size-10" />
                </a>
            </div>
        </div>
    </footer>
</template>

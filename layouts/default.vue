<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue';
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu';

const localeRoute = useLocaleRoute();
</script>

<template>
    <header
        class="sticky top-0 z-40 flex items-center justify-between bg-background py-5 md:px-3 lg:relative lg:top-auto"
    >
        <div class="w-3/4 ps-5 md:ps-10 lg:ps-20">
            <NuxtLink :to="localeRoute('/')">
                <NuxtImg src="/svg/logo.svg" alt="Logo" />
            </NuxtLink>
        </div>

        <div class="flex w-1/4 justify-end">
            <div class="hidden pe-5 lg:inline-flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem class="flex gap-5">
                            <NuxtLink :to="localeRoute('/contact')">
                                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                                    Kontakt
                                </NavigationMenuLink>
                            </NuxtLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div class="hidden pe-20 lg:inline-flex">
                <LocaleSwitcher />
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
                            <NuxtLink :to="localeRoute('/contact')" class="text-center">
                                <SheetClose>
                                    <Button variant="ghost" size="lg">
                                        Kontakt
                                    </Button>
                                </SheetClose>
                            </NuxtLink>
                            <LocaleSwitcher show-local-name />
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>

    <main>
        <slot />
    </main>

    <footer class="p-10 text-muted-foreground lg:p-20">
        <div class="items-center justify-between text-center md:flex md:text-left">
            <div>
                <p class="my-2 uppercase">
                    &copy; {{ new Date().getFullYear() }} Thomas Lindner, B.A
                </p>
                <p class="my-2 uppercase">
                    Fitnesswissenschaftler & Online Fitness Coach
                </p>
            </div>

            <div class="mt-4 items-center gap-16 lg:mt-0 lg:flex">
                <div>
                    <p class="my-2 uppercase">
                        <NuxtLink :to="localeRoute('/imprint')" class="hover:underline">
                            Impressum
                        </NuxtLink>
                    </p>
                    <p class="my-2 uppercase">
                        <NuxtLink :to="localeRoute('/privacy-policy')" class="hover:underline">
                            Datenschutz
                        </NuxtLink>
                    </p>
                </div>
                <div class="mt-4 lg:mt-0">
                    <a href="https://www.instagram.com/fitness_elite.eu" target="_blank">
                        <Icon name="uil:instagram" class="size-10 hover:text-slate-700/90" />
                    </a>
                    <a href="https://www.facebook.com/reel/472712058295541" target="_blank">
                        <Icon name="uil:facebook-f" class="size-10 hover:text-slate-700/90" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

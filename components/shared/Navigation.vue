<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
</script>

<template>
    <div class="flex justify-between content-center px-3">
        <NuxtLink to="/">
            <img class="w-96" src="/svg/logo.svg" alt="Logo">
        </NuxtLink>
        <NavigationMenu>
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
    </div>
</template>

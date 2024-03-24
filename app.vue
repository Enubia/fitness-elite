<script setup lang="ts">
import Toaster from '~/components/ui/toast/Toaster.vue';

useSeoMeta({
    author: 'Thomas Lindner',
    ogTitle: 'Fitness Elite | Your all in one coaching',
    ogDescription: 'Unleash your full potential with the all in one coaching "Elite Evolution"',
    ogImage: '/images/zeus-try.webp',
    ogUrl: 'https://fitness-elite.eu',
    twitterTitle: 'Fitness Elite | Your all in one coaching',
    twitterDescription: 'Unleash your full potential with the all in one coaching "Elite Evolution"',
    twitterImage: '/images/zeus-try.webp',
    twitterCard: 'summary_large_image',
});

useHead({
    htmlAttrs: {
        lang: 'de',
    },
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
    ],
});
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <Toaster />
    </div>
</template>

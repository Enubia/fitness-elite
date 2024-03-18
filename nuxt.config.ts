// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    nitro: {
        preset: 'cloudflare-pages',
    },

    modules: [
        'nitro-cloudflare-dev',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxt/image',
    ],

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },
});

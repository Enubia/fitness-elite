// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },

    components: {
        dirs: [
            './components/pages',
        ],
    },

    modules: [
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        'shadcn-nuxt',
        'nuxt-zod-i18n',
        '@nuxtjs/i18n',
    ],

    googleFonts: {
        families: {
            Anton: true,
            Montserrat: true,
        },
    },

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

    i18n: {
        defaultLocale: 'de-DE',
        langDir: './locales',
        lazy: true,
        locales: [
            {
                code: 'de-DE',
                dir: 'ltr',
                file: 'de-DE.json',
                flag: 'gb',
                isCatchallLocale: true,
                iso: 'de-DE',
                name: 'German',
            },
        ],
        strategy: 'prefix_except_default',
        types: 'composition',
    },
});

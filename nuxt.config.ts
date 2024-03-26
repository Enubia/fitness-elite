// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },

    components: {
        dirs: [
            './components/pages',
            './components/shared',
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
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
            fallbackLocale: 'de',
        },
        defaultLocale: 'de',
        // not used yet
        langDir: './locales',
        // lazy: true,
        locales: [
            {
                iso: 'de-DE',
                code: 'de',
                flag: 'circle-flags:de',
                name: 'Deutsch',
                file: 'de-DE.json',
                isCatchallLocale: true,
            },
            {
                iso: 'en-US',
                code: 'en',
                flag: 'circle-flags:us',
                name: 'English',
                file: 'en-US.json',
            },
        ],
        strategy: 'prefix_except_default',
        types: 'composition',
    },
});

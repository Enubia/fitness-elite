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
});

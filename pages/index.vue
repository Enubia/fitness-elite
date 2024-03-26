<script lang="ts" setup>
useSeoMeta({
    title: 'Fitness Elite | Your all in one coaching',
    description: 'Unleash your full potential with the all in one coaching "Elite Evolution"',
    robots: 'index, follow',
});

const localeRoute = useLocaleRoute();
</script>

<template>
    <section id="hero" class="h-[85vh] md:h-[90vh] lg:h-[95vh]">
        <div class="flex h-full justify-center">
            <div class="absolute bottom-28 grid w-5/6 justify-center gap-5 lg:w-1/4">
                <div
                    id="hero-title"
                    class="text-center font-heading text-3xl font-bold uppercase tracking-[0.02em] text-primary-foreground lg:text-5xl"
                >
                    <h1>
                        Unleash your full potential
                        <br>
                        with the all in one coaching
                    </h1>
                    <br>
                    <span class="text-4xl italic text-primary">"Elite Evolution"</span>
                </div>
                <div class="flex justify-center">
                    <NuxtLink :to="localeRoute('/questionnaire')" class="flex w-2/3 justify-center">
                        <Button size="xl" class="w-full text-lg uppercase">
                            Starte jetzt
                        </Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <IndexEliteEvolutionSection class="mt-20" />
        <IndexYourCoachSection class="mt-20" />
        <IndexCarouselSection class="mt-20" />
        <IndexFAQSection class="mt-20" />
        <div class="my-20 flex justify-center">
            <NuxtLink :to="localeRoute('/questionnaire')">
                <Button size="xl" class="text-lg uppercase">
                    Starte jetzt
                </Button>
            </NuxtLink>
        </div>
    </div>
</template>

<style>
    #hero {
        background: url('/images/zeus-try.webp') center center no-repeat;
        background-size: cover;

        #hero-title {
            text-shadow: 1px 1px 2px #000;
        }
    }
</style>

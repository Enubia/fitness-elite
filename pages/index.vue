<script setup lang="ts">
import CarouselSection from '~/components/pages/index/CarouselSection.vue';
import EliteEvolutionSection from '~/components/pages/index/EliteEvolutionSection.vue';
import YourCoachSection from '~/components/pages/index/YourCoachSection.vue';
import FAQSection from '~/components/pages/index/FAQSection.vue';

useSeoMeta({
    title: 'Fitness Elite | Your all in one coaching',
    description: 'Unleash your full potential with the all in one coaching "Elite Evolution"',
});
</script>

<template>
    <section id="hero" class="h-[85vh] md:h-[90vh] lg:h-[95vh]">
        <div class="flex h-full justify-center">
            <div class="absolute bottom-28 grid w-5/6 justify-center gap-5 lg:w-1/4">
                <div
                    id="hero-title"
                    class="text-center font-heading text-3xl font-bold uppercase tracking-[0.02em] text-primary-foreground lg:text-5xl"
                >
                    <span>
                        Unleash your full potential
                        <br>
                        with the all in one coaching
                    </span>
                    <br>
                    <span class="text-4xl italic text-primary">"Elite Evolution"</span>
                </div>
                <div class="flex justify-center">
                    <Button size="xl" class="w-2/3 text-lg uppercase">
                        Starte jetzt
                    </Button>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <EliteEvolutionSection class="mt-20" />
        <YourCoachSection class="mt-20" />
        <CarouselSection class="mt-20" />
        <FAQSection class="mt-20" />
        <div class="my-20 flex justify-center">
            <Button size="xl" class="text-lg uppercase">
                Starte jetzt
            </Button>
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

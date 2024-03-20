<script setup lang="ts">
useSeoMeta({
    title: 'Fitness Elite | Your all in one coaching',
    description: 'Unleash your full potential with the all in one coaching "Elite Evolution"',
});
</script>

<template>
    <section id="hero" class="h-[85vh] md:h-[90vh] lg:h-[95vh]">
        <div class="flex h-full justify-center">
            <div class="absolute bottom-16 grid w-5/6 justify-center  gap-4 lg:w-1/4">
                <div
                    class="text-center font-heading text-3xl font-bold uppercase tracking-[0.02em] text-primary-foreground"
                >
                    <span>Unleash your full potential</span>
                    <span>with the all in one coaching</span>
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
</template>

<style>
    #hero {
        background: url('/images/zeus-try.png') center center no-repeat;
        background-size: cover;
    }
</style>

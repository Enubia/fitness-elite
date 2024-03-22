<script setup lang="ts">
import { Card, CardContent } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

useSeoMeta({
    title: 'Fitness Elite | Kontakt',
    description: 'Kontakt von Fitness Elite',
    robots: 'index, follow',
    author: 'Thomas Lindner',
});

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const occupation = ref('');
const message = ref('');

function sendMessage() {
    console.log(firstName.value, lastName.value, email.value, occupation.value, message.value);
}
</script>

<template>
    <div class="bg-foreground text-background">
        <div class="container justify-center py-16 lg:flex lg:justify-between lg:px-20">
            <div class="lg:w-1/3">
                <h1 class="mb-4 text-5xl font-bold uppercase">
                    Kontakt
                </h1>
                <div class="mt-4">
                    <b>Ich freue mich auf deine Nachricht!</b>
                    <br>
                    <a
                        aria-label="Chat on WhatsApp"
                        href="https://wa.me/436765552777"
                        class="mt-4 text-primary underline"
                        target="_blank"
                    >
                        <Icon name="mdi:whatsapp" class="size-6" />
                        <span>+43 676 55 52 777</span>
                    </a>
                </div>
            </div>
            <div class="mt-10 justify-center lg:mt-0 lg:flex lg:w-2/5">
                <Card class="w-full rounded-sm bg-foreground text-background">
                    <CardContent>
                        <div class="items-center gap-4 lg:flex">
                            <div class="mt-3 lg:w-1/2">
                                <label for="firstName">Vorname</label>
                                <Input id="firstName" v-model="firstName" type="text" />
                            </div>
                            <div class="mt-3 lg:w-1/2">
                                <label for="lastName">Nachname</label>
                                <Input id="lastName" v-model="lastName" type="text" />
                            </div>
                        </div>
                        <div class="mt-3 w-full">
                            <label for="email">Email</label>
                            <Input id="email" v-model="email" type="email" />
                        </div>
                        <div class="mt-3 w-full">
                            <label for="occupation">Betreff</label>
                            <Input id="occupation" v-model="occupation" type="text" />
                        </div>
                        <div class="mt-3 w-full">
                            <label for="message">Nachricht</label>
                            <Textarea v-model="message" rows="10" />
                        </div>
                        <Button size="xl" class="mt-4 w-full hover:bg-primary/90 lg:w-auto" @click="sendMessage">
                            Send message
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useToast } from '~/components/ui/toast';

useSeoMeta({
    title: 'Fitness Elite | Kontakt',
    description: 'Kontakt von Fitness Elite',
    robots: 'index, follow',
});

const isDisabled = ref(false);

const formSchema = toTypedSchema(z.object({
    firstName: z.string().min(2).max(20),
    lastName: z.string().max(20),
    email: z.string().email(),
    occupation: z.string().min(2).max(50),
    message: z.string().min(10).max(500),
}));

const form = useForm({
    validationSchema: formSchema,
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        message: '',
    },
});

const { toast } = useToast();

const onSubmit = form.handleSubmit(async (values) => {
    isDisabled.value = true;

    const { status } = await useFetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values),
    });

    if (status.value === 'error') {
        toast({
            title: 'Fehler',
            description: 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
            variant: 'destructive',
        });
    }

    if (status.value === 'success') {
        toast({
            title: 'Erfolgreich',
            description: 'Deine Nachricht wurde erfolgreich gesendet. Ich werde mich so schnell wie möglich bei dir melden.',
        });
        form.resetForm();
    }

    isDisabled.value = false;
});
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
                        aria-label="Chat on WhatsApp" href="https://wa.me/436765552777"
                        class="mt-4 text-primary underline" target="_blank"
                    >
                        <Icon name="mdi:whatsapp" class="size-6" />
                        <span>+43 676 55 52 777</span>
                    </a>
                </div>
            </div>
            <div class="mt-10 justify-center lg:mt-0 lg:flex lg:w-2/5">
                <Card class="w-full rounded-sm bg-foreground text-background">
                    <CardContent>
                        <form @submit="onSubmit">
                            <div class="items-center gap-4 lg:flex">
                                <FormField v-slot="{ componentField: firstName }" name="firstName">
                                    <FormItem class="mt-3">
                                        <FormLabel>
                                            <span>Vorname</span>
                                            <sup>
                                                <Icon name="mdi:asterisk" class="inline size-2 text-destructive" />
                                            </sup>
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="text" v-bind="firstName" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                                <FormField v-slot="{ componentField: lastName }" name="lastName">
                                    <FormItem class="mt-3">
                                        <FormLabel>Nachname</FormLabel>
                                        <FormControl>
                                            <Input type="text" v-bind="lastName" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>
                            <div class="mt-3 w-full">
                                <FormField v-slot="{ componentField: email }" name="email">
                                    <FormItem>
                                        <FormLabel>
                                            <span>Email</span>
                                            <sup>
                                                <Icon name="mdi:asterisk" class="inline size-2 text-destructive" />
                                            </sup>
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="email" v-bind="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>
                            <div class="mt-3 w-full">
                                <FormField v-slot="{ componentField: occupation }" name="occupation">
                                    <FormItem>
                                        <FormLabel>
                                            <span>Betreff</span>
                                            <sup>
                                                <Icon name="mdi:asterisk" class="inline size-2 text-destructive" />
                                            </sup>
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="text" v-bind="occupation" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>
                            <div class="mt-3 w-full">
                                <FormField v-slot="{ componentField: message }" name="message">
                                    <FormItem>
                                        <FormLabel>
                                            <span>Nachricht</span>
                                            <sup>
                                                <Icon name="mdi:asterisk" class="inline size-2 text-destructive" />
                                            </sup>
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea v-bind="message" rows="10" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>
                            <Button
                                :disabled="isDisabled" type="submit"
                                class="mt-4 flex w-full justify-center hover:bg-primary/90 disabled:bg-gray-500 lg:w-1/3"
                            >
                                <Icon v-if="isDisabled" name="svg-spinners:90-ring-with-bg" class="me-2 size-6" />
                                <span>Absenden</span>
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>

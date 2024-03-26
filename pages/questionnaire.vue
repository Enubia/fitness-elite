<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { z } from 'zod';
import { useToast } from '~/components/ui/toast';

useSeoMeta({
    title: 'Fitness Elite | Fragebogen',
    description: 'Fragebogen von Fitness Elite',
    robots: 'index, follow',
});

const isDisabled = ref(false);

const formSchema = toTypedSchema(z.object({
    goal: z.enum(['muscle-building', 'fat-loss', 'gain-energy', 'healthy-lifestyle', 'i-want-it-all']),
    challenge: z.string().min(10).max(500),
    result: z.string().min(10).max(500),
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(20),
    referrer: z.enum(['referral', 'internet-search', 'instagram', 'facebook']),
}));

const form = useForm({
    validationSchema: formSchema,
    initialValues: {
        challenge: '',
        result: '',
        name: '',
        email: '',
        phone: '',
    },
});

const { toast } = useToast();

const submit = form.handleSubmit(async (values) => {
    isDisabled.value = true;

    const goals = {
        'muscle-building': 'Muskelaufbau',
        'fat-loss': 'Gewichtsverlust',
        'gain-energy': 'Energie gewinnen',
        'healthy-lifestyle': 'Gesunder Lebensstil',
        'i-want-it-all': 'Ich will alles',
    };

    const referrers = {
        referral: 'Empfehlung',
        'internet-search': 'Internet-Suche',
        instagram: 'Instagram',
        facebook: 'Facebook',
    };

    const parsedValues = {
        ...values,
        goal: goals[values.goal as keyof typeof goals],
        referrer: referrers[values.referrer as keyof typeof referrers],
    };

    const { status } = await useFetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(parsedValues),
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
        <div class="container gap-48 py-8 lg:flex">
            <div class="lg:w-1/3">
                <h1 class="text-center text-3xl font-bold">
                    Fragebogen
                </h1>
                <p class="mt-4 text-center">
                    Bitte fülle den Fragebogen aus, damit ich dich besser kennenlernen kann und wir gemeinsam
                    durchstarten können.
                </p>
            </div>
            <div class="mt-4 lg:mt-0 lg:w-2/3">
                <div class="mb-1 flex items-center gap-1">
                    <Icon name="mdi:information-variant-circle" class="text-primary" />
                    <small>Deine Daten sind bei mir sicher und werden nicht an Dritte weitergegeben.</small>
                </div>
                <Card class="w-full rounded-sm bg-foreground text-background">
                    <CardContent>
                        <form class="mt-8" @submit.prevent="submit">
                            <FormField v-slot="{ componentField: goal }" name="goal">
                                <FormItem class="mt-3 opacity-100 transition-opacity duration-700 ease-in ">
                                    <FormLabel>Was ist dein Ziel?</FormLabel>
                                    <Select v-bind="goal">
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Wähle eine Option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="muscle-building">
                                                    Muskelaufbau
                                                </SelectItem>
                                                <SelectItem value="fat-loss">
                                                    Gewichtsverlust
                                                </SelectItem>
                                                <SelectItem value="gain-energy">
                                                    Energie gewinnen
                                                </SelectItem>
                                                <SelectItem value="healthy-lifestyle">
                                                    Gesunder Lebensstil
                                                </SelectItem>
                                                <SelectItem value="i-want-it-all">
                                                    Ich will alles
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField: challenge }" name="challenge">
                                <FormItem class="mt-3">
                                    <FormLabel>Was ist deine größte Herausforderung zur Zeit?</FormLabel>
                                    <FormControl>
                                        <Input type="text" v-bind="challenge" placeholder="Motivation zu finden" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField: result }" name="result">
                                <FormItem class="mt-3">
                                    <FormLabel>
                                        Wie sieht dein Traumergebnis nach deinem erfolgreichen Coaching aus?
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="text" v-bind="result" placeholder="Ein gesunder lifestyle" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField: name }" name="name">
                                <FormItem class="mt-3">
                                    <FormLabel>Wie lautet dein Name (Vor- und Nachname)?</FormLabel>
                                    <FormControl>
                                        <Input type="text" v-bind="name" placeholder="Max Mustermann" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField: email }" name="email">
                                <FormItem class="mt-3">
                                    <FormLabel>Wie lautet deine E-Mail-Adresse?</FormLabel>
                                    <FormControl>
                                        <Input type="email" v-bind="email" placeholder="max@mustermann.at" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField: phone }" name="phone">
                                <FormItem class="mt-3">
                                    <FormLabel>
                                        Wie lautet deine Telefonnummer unter welcher ich dich erreichen kann?
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="text" v-bind="phone" placeholder="0664123456789" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField: referrer }" name="referrer">
                                <FormItem class="mt-3">
                                    <FormLabel>Wie hast du von mir erfahren?</FormLabel>
                                    <Select v-bind="referrer">
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Wähle eine Option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="referral">
                                                    Empfehlung
                                                </SelectItem>
                                                <SelectItem value="internet-search">
                                                    Internet-Suche
                                                </SelectItem>
                                                <SelectItem value="instagram">
                                                    Instagram
                                                </SelectItem>
                                                <SelectItem value="facebook">
                                                    Facebook
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
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

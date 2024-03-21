<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';
import { Card, CardContent } from '~/components/ui/card';

const carouselItems = [
    {
        image: '/images/andreas.webp',
        description: '"Mit Thomas seiner Hilfe konnte ich endlich Muskeln aufbauen. Ich war immer schon sehr dünn. Egal wie viel ich gegessen habe oder wie viel ich trainiert habe, nichts hat geholfen. Ein Freund hat mir Thomas vorgestellt und ich habe mich für sein Online Coaching angemeldet. Das war die beste Entscheidung und ich wünschte ich hätte es schon früher getan! Ich bin jetzt schon sehr zufrieden wie sich mein Körper in kurzer Zeit verändert hat und gespannt was noch alles möglich ist. Danke für alles!"',
        name: 'Andreas M.',
    },
    {
        image: '/images/roman.webp',
        description: '"Ich habe mit Thomas immer professionell trainieren können. Die Beratung war ausgezeichnet und hat sehr weiter geholfen. Das Training selber war lustig und hilfreich. Ich kann nur meine Empfehlung aus sprechen."',
        name: 'Roman D.',
    },

    {
        image: '/images/guenther.webp',
        description: '"Bei Thomas bekommt man alles was man sich von einem guten Personal Trainer wünscht! Das Trainings ist abwechslungsreich und herausfordernd. Thomas motiviert mich über meine Grenzen hinauszugehen und nicht aufzugeben. Seit unserer Zusammenarbeit ist einiges passiert: ich fühle mich fitter und ausgeglichener im Alltag, mein Gewand spannt nicht mehr und das beste von allem: meine Rückenschmerzen sind verschwunden."',
        name: 'Günther E.',
    },
    {
        image: '/images/carina.webp',
        description: '"Das Training mit Thomas ist anspruchsvoll, abwechslungsreich und wird nie langweilig. Er stellt sich auf meine Bedürfnisse ein, lässt nicht locker und bringt mich immer wieder an meine Grenzen. Thomas achtet sehr darauf, dass sich bei der Ausübung der Übungen keine Fehler einschleichen. Kurz gesagt er ist ein toller Trainer und es macht Spass mit ihm zu trainieren. Echt zu empfehlen."',
        name: 'Keith Finley',
    },
    {
        image: '/images/lisa.webp',
        description: '"Thomas ist ein Coach der viel Motivation mit sich bringt und stets ein kritisches Auge hat. Er geht auf die persönlichen Bedürfnisse und Wünsche während des Trainings ein und findet die Balance zwischen der eigenen Individualität und neuesten wissenschaftlichen Erkenntnissen. Auch beim Essen hat Thomas alltagstaugliche, einfache Ideen für eine ausgewogene gesunde Ernährung, bei der man auch easy mal cheaten darf."',
        name: 'Lisa H.',
    },
    {
        image: '/images/rene.webp',
        description: '"Das tolle am Training mit Thomas ist, dass er immer auf dich als Individuum eingeht und dem zur folge auch alles auf dich abstimmt. Sein Know-How ist stets spürbar. Durch seinen Mix aus Professionalität, Wissen, Empathie und Humor empfehle ich jeden seine körperlichen Ziele mit Thomas zu erreichen."',
        name: 'René K.',
    },
    {
        image: '/images/markus.webp',
        description: '"Personal Training von und mit Thomas ist Training auf einem ganz neuen Niveau…Ich habe bereits genug Erfahrungen mit anderen Coaches gemacht, doch erst durch Thomas gelang es mir immer wieder neue Plateaus zu erreichen und im wahrsten Sinne über mich „hinauszuwachsen“ Mein Fazit: einmal Fitness Elite immer Fitness Elite 😘"',
        name: 'Markus T.',
    },
    {
        image: '/images/ozana.webp',
        description: '"Sport ist Mord 🤣 Thomas hat mit seinem Training meine Rückenschmerzen getötet und mir ein rundum neues Körpergefühl gegeben. Nun spüre ich Muskeln deren Existenz mir vorher nicht bekannt waren. Die Kombination aus Kraft-/Cardio-/und Hittraining hat meinen Körper neu geformt. Eine Stunde Training mit ihm ist schweißtreibend aber doch mit viel Spaß verbunden. Thomas ist witzig, er hört zu, motiviert und geht auf mich ein. Thomas ist fachlich sehr kompetent, er erklärt alles verständlich und nachvollziehbar. Ich würde jedem der keine Angst vor Herausforderungen hat Thomas als Personaltrainer empfehlen. 5 von 5 Sternen 🌟"',
        name: 'Ozana Z.',
    },
    {
        image: '/images/chiara.webp',
        description: '"Als Leistungssportlerin kann ich mich nur glücklich schätzen Thomas zu meinem Trainerteam zählen zu dürfen! Die optimale Betreuung rund ums Krafttrainings lässt mich meine Stärken festigen, meine Schwächen verbessern. Dadurch konnte ich mich bis jetzt vor Verletzungen schützen und meine Leistung steigern. Thomas ist eine wahnsinnige Bereicherung für mein Trainerteam! Das haben auch schon der Rest meines Rudertrainierteams gemerkt, die meine körperliche Entwicklung nur loben!"',
        name: 'Chiara H.',
    },
    {
        image: '/images/lukas.webp',
        description: '"Das Training mit Thomas hat mich sehr überrascht - natürlich im positiven Sinne! Ich habe bisher durchaus Erfahrung mit Coaches aus verschiedenen Bereichen gesammelt und hab nicht erwartet, dass Thomas oder auch irgendjemand anders in der Branche, derart spezifisch auf die individuellen Bedürfnisse, Schwächen und Stärken jedes einzelnen eingeht. Thomas analysiert und bearbeitet diese mit einer Genauigkeit, Professionalität und Leidenschaft die nicht jeder mit sich bringt! Bei spezifischen Fragen zu Übungsausführungen oder ähnlichem kann er mir sehr gut weiterhelfen und sollte ich mal bei einer Übung noch zu unsicher gewesen sein, wurde schnell ein guter Ersatz gefunden, welcher mich auf sicherer Art und Weise weiter brachte. Das Training mit Thomas findet für mich stets für sowohl Körper als auch fürs Köpfchen statt :)"',
        name: 'Lukas A.',
    },
    {
        image: '/images/sophie.webp',
        description: '"Spaß beim Training und ernsthafte Erfolge lassen sich nicht vereinbaren? Beim Training mit Thomas wirst Du eines Besseren belehrt. 💪🏻😊"',
        name: 'Sophie H.',
    },
    {
        image: '/images/sabrina.webp',
        description: '"Thomas spult bei seinen Trainings kein Programm von der Stange ab, sondern geht wirklich auf die individuellen Challenges des einzelnen ein, motiviert und vergisst dabei trotz aller Professionalität nicht auf den Humor bei der Sache. Er legt viel Wert auf die genaue Ausführung der Technik und bringt viel Kreativität mit, damit das Training auch nach längerer Phase nicht eintönig wird. Thomas ist eine echte Empfehlung, wenn man sich ein sportliches Ziel gesetzt hat und dieses auf zielstrebige Weise und in gelockerter Atmosphäre erreichen möchte."',
        name: 'Sabrina S.',
    },
    {
        image: '/images/maurice.webp',
        description: '"Das Online Fitness Coaching war die Beste Entscheidung, die ich treffen konnte, um endlich Fortschritte zu erzielen und diese auch zu halten. Ich habe vor dem Coaching schon lange trainiert, länger als mir lieb ist, ohne bahnbrechende Erfolge. In meinem Coaching Zeitraum von 6 Monaten habe ich mehr erreicht als in den ganzen Jahren davor. Hätte ich gerne eher mit dem Coaching gestartet? JA! Kann ich das Coaching weiterempfehlen? Definitiv!"',
        name: 'Maurice S.',
    },
];
</script>

<template>
    <section>
        <h2 class="text-center font-heading text-4xl font-bold uppercase md:text-5xl">
            Erfahrungsberichte
        </h2>
        <div class="mt-5">
            <Carousel
                class="w-full" :opts="{
                    align: 'start',
                    loop: true,
                }" :plugins="[Autoplay({
                    delay: 5000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: true,
                })]"
            >
                <CarouselContent>
                    <CarouselItem v-for="(item, index) in carouselItems" :key="index" class="md:basis-1/2 lg:basis-1/3">
                        <div class="p-1">
                            <Card class="border-none">
                                <CardContent class="rounded-sm bg-foreground p-6 text-background">
                                    <div class="flex justify-center">
                                        <NuxtImg
                                            :src="item.image" :alt="item.name"
                                            class="mt-5 size-40 rounded-full object-cover"
                                        />
                                    </div>
                                    <p class="mt-5">
                                        {{ item.description }}
                                    </p>
                                    <small class="mt-3">{{ item.name }}</small>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="hidden lg:inline-flex" />
                <CarouselNext class="hidden lg:inline-flex" />
            </Carousel>
        </div>
    </section>
</template>

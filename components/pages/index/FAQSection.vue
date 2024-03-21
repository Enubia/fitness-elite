<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
</script>

<template>
    <section>
        <div class="justify-center gap-28 lg:flex">
            <div class="uppercase lg:w-2/5 lg:text-center">
                <h2 class="font-heading text-5xl font-bold">
                    Faq
                </h2>
                <p class="mt-5">
                    Antworten auf die häufigsten Fragen
                </p>
            </div>
            <div class="mt-5 lg:mt-0 lg:w-3/5">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger class="text-lg">
                            <span>Ist <b class="text-primary/90">ELITE EVOLUTION</b> das richtige für mich?</span>
                        </AccordionTrigger>
                        <AccordionContent class="text-lg">
                            <p>
                                <ul>
                                    <li class="mt-2">
                                        Willst Du endlich Dein maximales Potenzial ausschöpfen und Deine Ziele
                                        erreichen?
                                    </li>
                                    <li class="mt-2">
                                        Willst Du einen Coach an Deiner Seite dem Du vertrauen kannst?
                                    </li>
                                    <li class="mt-2">
                                        Willst Du eine sportwissenschaftliche Strategie, die Dich zum Erfolg
                                        führt?
                                    </li>
                                    <li class="mt-2">
                                        Willst Du dein Training, deine Ernährung und deinen Alltag optimieren
                                        aber auch vereinfachen?
                                    </li>
                                    <li class="mt-2">
                                        Dann ist ELITE EVOLUTION genau das richtige für Dich!
                                    </li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger class="text-lg">
                            <span>Wie läuft der Bewerbungsprozess ab?</span>
                        </AccordionTrigger>
                        <AccordionContent class="text-lg">
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    I. Bewerbungsfragebogen
                                </h3>
                                <span>
                                    Klicke auf den Button „STARTE JETZT“ um zum Bewerbungsfragebogen zu gelangen und
                                    Deinen Termin für Dein unverbindliches und kostenloses Erstgespräch zu
                                    wählen.
                                </span>
                            </div>
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    II. Unverbindliches und kostenloses Kennenlernen
                                </h3>
                                <span>
                                    Ich freue mich auf ein gegenseitiges Kennenlernen in einem unverbindlichen
                                    Erstgespräch und beantworte Dir alle offenen Fragen.
                                </span>
                            </div>
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    III. Anmeldung
                                </h3>
                                <span>
                                    Herzlich willkommen im Team! Ich freue mich, dass Du den ersten Schritt zur besten
                                    Version deiner Selbst gegangen bist.
                                </span>
                            </div>

                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    IV. Onboarding
                                </h3>
                                <span>
                                    Du bekommst Deinen persönlichen Zugang zur Cloud, unserer Schnittstelle zu deinem
                                    Erfolg. Hier findest du Formulare zum Ausfüllen, welche mir detaillierte
                                    Informationen liefern, die ich eingangs von Dir benötige. Darunter fällt unter
                                    anderem die Evaluierung Deines IST-Zustandes sowie Deine Zielsetzung.
                                </span>
                            </div>
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    V. Kickoff
                                </h3>
                                <span>
                                    Jetzt kann es losgehen und wir können gemeinsam durchstarten!
                                </span>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger class="text-lg">
                            <span>Vorteile von Online Coaching vs. Personal Training?</span>
                        </AccordionTrigger>
                        <AccordionContent class="text-lg">
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    Flexibilität und Zugänglichkeit
                                </h3>
                                <span>
                                    Online Fitness Coaching ermöglicht es Dir, von überall aus zu trainieren, solange Du
                                    Zugang zum Internet hast.
                                </span>
                            </div>
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    Kosteneffizienz
                                </h3>
                                <span>
                                    Online Coaching ist in der Regel kostengünstiger als Personal Training obwohl die
                                    Rundum Betreuung wesentlich umfangreicher ist.
                                </span>
                            </div>
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    Schnellere Kommunikation und Unterstützung
                                </h3>
                                <span>
                                    Durch die Cloud basierte Zusammenarbeit habe ich stets einen Überblick über Deinen
                                    Fortschritt und Du kannst mich stets für Fragen kontaktieren. Du musst also nicht
                                    bis zum nächsten Personal Training warten, damit wir Dein Problem lösen.
                                </span>
                            </div>
                            <div>
                                <h3 class="my-3 font-bold text-primary/90">
                                    Maximale Flexibilität Deiner Trainingszeit
                                </h3>
                                <span>
                                    Du kannst Deine Trainingseinheiten zu einem Zeitpunkt durchführen, der am besten zu Deinem Zeitplan passt, anstatt sich an feste Termine halten zu müssen.
                                </span>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useMonitorSize } from "~/composables/monitor-size";

const size = useMonitorSize();
const nomSite = "Cercle d'escrime de Laxou";
</script>

<template>
  <div>
    <UPageHeader class="text-3xl font-bold mx-5 md:mx-0">
      {{ nomSite }}
    </UPageHeader>
    <div
      class="flex items-center justify-center gap-4 my-4 flex-col mx-5 md:flex-row md:mx-0"
    >
      <div>
        <p class="w-full">Bienvenue sur le site de notre club</p>
        <p>Nous vous accueillons dans notre club à partir de 6 ans.</p>
        <p>
          Nous y pratiquons l'escrime dans une ambiance conviviale et familiale,
          que vous soyez débutant ou compétiteur.
        </p>
        <p>
          Vous pourrez y découvrir les disciplines sportives et artistiques de
          l'escrime.
        </p>

        <p>
          Rendez-nous visite à la salle d'escrime de Laxou,
          <a
            href="https://www.google.com/maps/place/Cercle+d'escrime+de+Laxou/@48.6862635,6.1408367,17z/data=!3m1!4b1!4m6!3m5!1s0x4794a3a376d0bfcd:0x13141d7e43640ddd!8m2!3d48.68626!4d6.143417!16s%2Fg%2F11qn7cz4_2?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            class="text-primary hover:underline"
          >
            Liberté, 54520 Laxou 3 Pl. de la
          </a>
        </p>

        <!-- Que vous soyez débutant, passionné ou compétiteur, le Cercle d'Escrime
        de Laxou vous ouvre ses portes dans une ambiance conviviale et
        familiale. Depuis de nombreuses années, notre club transmet les valeurs
        qui font la richesse de l'escrime : le respect, la maîtrise de soi, le
        dépassement de soi et le plaisir de partager une même passion. Encadrés
        par des maîtres d'armes qualifiés, nos adhérents, enfants comme adultes,
        peuvent découvrir ou perfectionner leur pratique du fleuret, de l'épée
        et de l'escrime artistique. Notre objectif est simple : permettre à
        chacun de progresser à son rythme, que ce soit pour le loisir, la
        compétition ou simplement pour découvrir un sport unique alliant
        réflexion, précision et convivialité. Nous vous invitons à parcourir
        notre site pour découvrir le club, les horaires des entraînements, nos
        actualités et les modalités d'inscription. Au plaisir de vous accueillir
        prochainement sur les pistes ! -->
      </div>
      <ClientOnly class="w-2/5">
        <!-- 48.68598888971369, 6.142893896318755 -->
        <AddressMap
          :lat="48.68598888971369"
          :lng="6.142893896318755"
          label="Gymnase Pergaud, 3 Pl. de la Liberté, 54520 Laxou"
        />
        <template #fallback
          ><div
            class="h-[400px] w-full rounded-lg bg-elevated relative overflow-hidden flex items-center justify-center"
          >
            <!-- spinner + texte -->
            <div class="relative flex flex-col items-center gap-3 text-muted">
              <UIcon name="i-lucide-map-pin" class="size-8 animate-bounce" />
              <p class="text-sm">Chargement de la carte...</p>
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "../assets/img/logo_cercle_escrime2.png";
import { useMonitorSize } from "@/composables/monitor-size";

const items = [
  { label: "Accueil", to: "/", icon: "i-lucide-home" },
  // { label: "Test", to: "/test" },
  { label: "Info pratiques", to: "/info", icon: "i-lucide-info" },
  {
    label: "Resultats",
    to: "/results",
    icon: "i-lucide-trophy",
  },
  { label: "Contact", to: "/contact", icon: "i-lucide-phone" },
  {
    label: "Reseaux",
    icon: "i-lucide-users",
    children: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/cercleescrimelaxou/",
        target: "_blank",
        icon: "skill-icons:instagram",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/CercledEscrimeLaxou",
        target: "_blank",
        icon: "i-logos:facebook",
      },
    ],
  },
];

const size = useMonitorSize();
</script>

<template>
  <UHeader
    :ui="{
      body: 'bg-background-layout',
      content: 'bg-background-layout',
    }"
    class="bg-background-layout lg:mx-0"
    color="neutral"
  >
    <template #left>
      <div @click="$router.push('/')" class="flex items-center cursor-pointer">
        <img :src="logo" alt="logo" class="w-20 h-20" loading="lazy" />
        <h1 class="text-2xl ml-2 font-bold">Cercle d'escrime de Laxou</h1>
      </div>
    </template>
    <template #right>
      <div class="hidden lg:flex">
        <UNavigationMenu
          :items="items"
          color="neutral"
          :ui="{
            viewport: 'bg-background-layout',
            linkLeadingIcon: 'text-primary',
          }"
        />
      </div>
    </template>

    <template #body>
      <div class="flex lg:hidden w-full">
        <UNavigationMenu
          :items="items"
          color="neutral"
          class="max-md:flex-col"
          orientation="vertical"
          :ui="{
            linkLeadingIcon: 'text-primary',
            root: 'w-full',
          }"
        />
      </div>
    </template>
  </UHeader>
</template>

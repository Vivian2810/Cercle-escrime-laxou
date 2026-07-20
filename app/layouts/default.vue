<script setup lang="ts">
import logo from "../assets/img/logo_cercle_escrime2.png";
import { useMonitorSize } from "@/composables/monitor-size";

const items = [
  { label: "Accueil", to: "/", icon: "i-lucide-home" },
  // { label: "Test", to: "/test" },
  { label: "Contact", to: "/contact", icon: "i-lucide-phone" },
  { label: "Info pratiques", to: "/info", icon: "i-lucide-info" },
  {
    label: "Resultats",
    to: "/results",
    icon: "i-lucide-trophy",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/CercledEscrimeLaxou",
    target: "_blank",
    icon: "i-logos:facebook",
  },
];

const size = await useMonitorSize();
</script>

<template>
  <UHeader
    :ui="{
      body: 'bg-background-layout',
      content: 'bg-background-layout',
    }"
    class="bg-background-layout"
    color="neutral"
  >
    <template #left>
      <img :src="logo" alt="logo" class="w-20 h-20" loading="lazy" />
      <h1 class="text-2xl ml-2 font-bold">Cercle d'escrime de Laxou</h1>
    </template>
    <template #right>
      <div class="hidden lg:flex">
        <UNavigationMenu :items="items" color="neutral">
          <template #item="{ item }">
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              class="size-4 text-primary"
            />
            <span class="text-md whitespace-nowrap">{{ item.label }}</span>
          </template>
        </UNavigationMenu>
      </div>
    </template>

    <template #body>
      <div class="flex lg:hidden">
        <UNavigationMenu
          :items="items"
          color="neutral"
          class="max-md:flex-col"
          :orientation="size.idSize.value === 3 ? 'vertical' : 'horizontal'"
        >
          <template #item="{ item }">
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              class="size-4 text-primary"
            />
            <span class="text-md whitespace-nowrap">{{ item.label }}</span>
          </template>
        </UNavigationMenu>
      </div>
    </template>
  </UHeader>
</template>

<style scoped>
/* .custom-underline {
  position: relative;
  display: inline-block;
}

.custom-underline:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1rem;

  width: 100%;
  height: 1rem;

  background: url("@/assets/img/fleuret.png") no-repeat;

  background-size: contain;
} */
</style>

<script setup lang="ts">
import logo from "../assets/img/logo_cercle_escrime2.png";

const items = [
  { label: "Accueil", to: "/" },
  { label: "Test", to: "/test" },
  { label: "Contact", to: "/contact" },
  { label: "Info pratiques", to: "/info" },
  { label: "Resultats", to: "/results" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/CercledEscrimeLaxou",
    target: "_blank",
  },
];
</script>

<template>
  <UHeader class="bg-background-layout">
    <template #left>
      <img :src="logo" alt="logo" class="w-20 h-20" loading="lazy" />
      <h1 class="text-2xl font-bold">Cercle d'escrime de Laxou</h1>
    </template>
    <template #right>
      <UNavigationMenu :items="items" color="neutral">
        <template #item="{ item }">
          <span class="text-lg whitespace-nowrap">{{ item.label }}</span>
        </template>
      </UNavigationMenu>
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

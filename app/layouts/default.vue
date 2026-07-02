<script setup lang="ts">
import logo from "../assets/img/logo_cercle_escrime.png";
// id 0 -> lien interne / id 1 -> lien externe
const listPages = [
  { name: "Accueil", path: "/", id: 0 },
  { name: "Test", path: "/test", id: 0 },
  // { name: "Contact", path: "/contact" },
  // { name: "Info", path: "/info" },
  // { name: "Resultats", path: "/results" },
  {
    name: "Facebook",
    path: "https://www.facebook.com/CercledEscrimeLaxou",
    id: 1,
  },
];

</script>

<template>
  <div
    class="w-full bg-background-layout flex justify-between items-center px-5"
  >
    <p class="text-lg font-bold">Cercle d'escrime de Laxou</p>
    <img :src="logo" alt="logo">

    <nav>
      <ul class="flex space-x-4 p-4">
        <li v-for="page in listPages" :key="page.path">
          <NuxtLink
            v-if="page.id === 0"
            id="link"
            :to="page.path"
            class="hover:underline rounded-sm hover:bg-hover-menu p-2"
            >{{ page.name }}</NuxtLink
          >
          <a
            v-else
            id="link"
            :href="page.path"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline rounded-sm hover:bg-hover-menu p-2"
            >{{ page.name }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="css"></style>

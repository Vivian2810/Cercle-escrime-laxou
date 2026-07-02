<script setup lang="ts">
import logo from "../assets/img/logo_cercle_escrime2.png";
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
    class="w-full bg-background-layout flex justify-between items-center px-5 py-3"
  >
  <h1 class="text-2xl font-bold">Cercle d'escrime de Laxou</h1>
  <img :src="logo" alt="logo" class="w-24 h-24" loading="lazy">

    <nav>
      <ul class="flex space-x-4 p-4 text-lg">
        <li v-for="page in listPages" :key="page.path">
          <NuxtLink
            v-if="page.id === 0"
            id="link"
            :to="page.path"
            class=" rounded-sm hover:bg-hover-menu p-2 custom-underline"
            >{{ page.name }}</NuxtLink
          >
          <a
            v-else
            id="link"
            :href="page.path"
            target="_blank"
            rel="noopener noreferrer"
            class="custom-underline rounded-sm hover:bg-hover-menu p-2"
            >{{ page.name }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.custom-underline {
  position: relative;
  display: inline-block;
}

.custom-underline:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -.5rem;

  width: 100%;
  height: 1rem;

  background: url('@/assets/img/fleuret.png') no-repeat;

  background-size: contain;
}
</style>

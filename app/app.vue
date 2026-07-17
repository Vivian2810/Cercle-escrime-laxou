<template>
  <UApp class="bg-background-layout text-text-layout">
    <NuxtLayout />
    <UMain
      class="flex flex-col min-h-screen mx-0 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80"
    >
      <NuxtPage />
    </UMain>
    <UFooter class="bg-background-layout">
      <div class="flex flex-col items-center justify-center w-full h-full">
        <p class="text-sm text-text-layout">
          &copy; 2024 Cercle d'escrime de Laxou. Tous droits réservés.
        </p>
        <p class="text-sm text-text-layout">
          Conception et développement par Vivian
        </p>
        <UButton
          icon="i-lucide-github"
          variant="ghost"
          target="_blank"
          href="https://github.com/Vivian2810"
        ></UButton>
      </div>
    </UFooter>
  </UApp>
</template>

<style lang="css"></style>

<script lang="ts" setup>
import { useMonitorSize } from "~/composables/monitor-size";

const size = useMonitorSize();
</script>

<template>
  <UPageHeader class="md:mx-0" title="Contact"/>
  <!-- formulaire de contact -->
  <div class="md:flex mx-auto gap-4 my-4 items-center">
    <div class="md:w-1/2 mx-auto pl-4 py-3">
      <p class="text-center md:hidden">
        Vous pouvez nous contacter sur avec le formulaire ci-dessous ou nous
        constater au :
        <br />
        <a href="tel:+33661373036" class="font-bold text-primary"
          >03 73 75 24 35</a
        >
      </p>
      <p class="hidden md:block text-center">
        Vous pouvez nous contacter sur avec le formulaire ou nous constater au :
        <br />
        <span class="font-bold text-primary">03 73 75 24 35</span>
      </p>
    </div>

    <USeparator
      orientation="vertical"
      color="primary"
      class="hidden md:block h-60 mx-5"
    />

    <div class="md:w-1/2 mx-auto pl-4 py-3">
      <ContactForm />
    </div>
  </div>
</template>

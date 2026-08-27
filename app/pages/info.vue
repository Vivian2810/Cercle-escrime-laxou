<script lang="ts" setup>
import { ref, watch } from "vue";

const items = [
  { label: "Horraires", id: 1 },
  { label: "Tarifs", id: 2 },
  { label: "Contact", id: 3 },
  { label: "Accès", id: 4 },
  { label: "Règlement", id: 5 },
  { label: "Inscriptions", id: 6 },
  { label: "Autres", id: 7 },
];

const selectedItem = ref<string | string[] | undefined>(items[0]?.label);

const content = await useContent("content-info");
</script>

<template>
  <UPageHeader class="md:mx-0" title="Informations pratiques" />
  <div class="flex my-4 items-start">
    <!-- <UNavigationMenu
      :model-value="selectedItem"
      :items="items"
      class="mr-6 w-min border-2 px-4 py-2 rounded-2xl border-primary"
      color="neutral"
      orientation="vertical"
    >
      <template #item="{ item }">
        <span
          class="custom-underline rounded-2xl cursor-pointer text-base w-full h-full"
          @click="selectedItem = item.label"
        >
          {{ item.label }}
        </span>
      </template>
    </UNavigationMenu> -->
    <div
      class="flex flex-col gap-2 w-1/4 border-primary border-2 rounded-2xl px-2 py-2"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="custom-underline rounded-lg px-3 py-1 cursor-pointer text-sm w-full h-full hover:bg-gray-600/30 transition-colors duration-300 ease-in-out"
        @click="selectedItem = item.label"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="w-full flex flex-col text-2xl font-bold mx-4">
      <h3 class="underline">
        {{ selectedItem }}
      </h3>
      <div v-if="selectedItem === 'Horraires'" class="flex flex-col gap-2">
        <div class="my-2 text-sm">
          <p>
            {{ content.data?.value?.horraire?.content }}
          </p>
          <!-- <p>
            {{ content.data?.value?.horraire?.subcontent }}
          </p> -->
        </div>
        <div class="w-full flex">
          <div
            v-for="(value, key) in content.data?.value?.horraire?.cours"
            :key="key"
            class="gap-2 w-1/3 mx-2"
          >
            <h3 class="font-bold text-center">
              {{ value.title }}
            </h3>
            <div
              v-for="(item, index) in value.timeList"
              :key="index"
              class="flex flex-col items-center justify-center gap-2 border-2 border-gray-400 rounded-md my-0.5 py-0.5 px-1"
            >
              <p class="text-md text-primary font-bold text-center">
                {{ item?.time }}
              </p>
              <p class="text-sm text-center text-gray-300">
                {{ item?.level }}
              </p>
              <p
                v-if="item && 'subtitle' in item && item.subtitle"
                class="italic"
              >
                {{ item.subtitle }}
              </p>
              <p v-if="item?.weapon" class="text-sm text-center text-gray-500">
                {{ item.weapon }}
              </p>
            </div>
          </div>
        </div>
        <p class="italic text-sm text-center text-gray-400 my-2">
          {{ content.data?.value?.horraire?.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

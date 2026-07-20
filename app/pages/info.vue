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

const selectedItem = ref<string | string[] | undefined>(undefined);

watch(selectedItem, (newValue) => {
  console.log("Selected item changed:", newValue);
});
console.log("Selected item:", selectedItem.value);
</script>

<template>
  <UPageHeader class="text-3xl font-bold mb-4">
    Informations pratiques
  </UPageHeader>
  <div class="flex">
    <UNavigationMenu
      :model-value="selectedItem"
      :items="items"
      class="mr-6 w-min border-2 px-4 py-2 rounded-2xl border-primary"
      color="neutral"
      orientation="vertical"
      @update="selectedItem = $event"
      @onSelect="selectedItem = $event"
    >
      <template #item="{ item }">
        <span class="custom-underline rounded-2xl cursor-pointer text-base">{{
          item.label
        }}</span>
      </template>
    </UNavigationMenu>
    <div class="w-full bg-amber-300 min-h-[400px] flex items-center justify-center text-2xl font-bold text-primary:">
        {{ selectedItem }}
    </div>
  </div>
</template>

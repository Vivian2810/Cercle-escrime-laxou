<script lang="ts" setup>
import { id } from '@nuxt/ui/runtime/locale/index.js';

const items = [
    { label: 'Horraires', id: 1 },
    { label: 'Tarifs', id: 2 },
    { label: 'Contact', id: 3 },
    { label: 'Accès', id: 4 },
    { label: 'Règlement', id: 5 },
    { label: 'Inscriptions', id: 6 },
    { label: 'Autres', id: 7 },
]
</script>

<template>
    <h1 class="text-lg">Informations</h1>
    <UNavigationMenu :items="items" class="mr-6 w-min border-2 px-4 py-2 rounded-2xl " color="neutral" orientation="vertical">
        <template #item="{ item }">
            <span
                class="custom-underline hover:bg-hover-menu rounded-2xl cursor-pointer text-md"
                >{{ item.label }}</span
            >
        </template>
    </UNavigationMenu>
</template>
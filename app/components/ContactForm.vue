<!-- components/ContactForm.vue -->
<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { error } from "node:console";

const schema = z.object({
  name: z.string().min(2, "2 caractères minimum"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "10 caractères minimum"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: "",
  email: "",
  message: "",
});

const pending = ref(false);
const status = ref<"idle" | "success" | "error">("idle");

async function onSubmit(event: FormSubmitEvent<Schema>) {
  pending.value = true;
  status.value = "idle";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: event.data,
    });
    status.value = "success";
    state.name = "";
    state.email = "";
    state.message = "";
  } catch (error) {
    status.value = "error";
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Nom" name="name" required>
      <UInput
        v-model="state.name"
        placeholder="Votre nom"
        class="w-full"
        size="xl"
        variant="soft"
      />
    </UFormField>

    <UFormField label="Email" name="email" required>
      <UInput
        v-model="state.email"
        type="email"
        placeholder="vous@exemple.com"
        class="w-full"
        size="xl"
        trailing-icon="i-lucide-at-sign"
        variant="soft"
      />
    </UFormField>

    <UFormField label="Message" name="message" required>
      <UTextarea
        v-model="state.message"
        :rows="5"
        placeholder="Votre message..."
        class="w-full"
        variant="soft"
      />
    </UFormField>

    <UButton
      type="submit"
      :loading="pending"
      :disabled="pending"
      label="Envoyer"
      block
    />
  </UForm>

  <Alerte
    title="Message envoyé !"
    description="Nous vous repondrons rapidement."
    color="success"
    :open="status === 'success'"
    @close="status = 'idle'"
  />
  <Alerte
    title="Une erreur est survenue"
    description="Merci de réessayer plus tard."
    color="error"
    :open="status === 'error'"
    @close="status = 'idle'"
  />
</template>

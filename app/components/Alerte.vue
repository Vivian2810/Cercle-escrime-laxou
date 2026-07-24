<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  status?: string;
  color?:
    | "success"
    | "error"
    | "warning"
    | "info"
    | "primary"
    | "secondary"
    | "neutral"
    | undefined;
  icon?: string;
  variant?: string;
  open?: boolean;
  duration?: string;
}>();

const $emit = defineEmits(["close"]);

const colors = {
  success: "bg-success-800",
  error: "bg-error-800",
  warning: "bg-warning-800",
  info: "bg-info-800",
  primary: "bg-primary-800",
  secondary: "bg-secondary-800",
  neutral: "bg-neutral-800",
};

const progress = ref(100);
const duration = parseInt(props.duration ?? "0", 10) || 5000;
let timeout: any = null;
let interval: any = null;

const startTime = () => {
  progress.value = 100;
  timeout = null;
  interval = null;

  const start = Date.now();

  interval = setInterval(() => {
    const elapsed = Date.now() - start;
    progress.value = Math.max(0, 100 - (elapsed / duration) * 100);
  }, 30);

  timeout = setTimeout(() => {
    closeAlert();
  }, duration);
};

watch(
  () => props.open,
  (value) => {
    if (value) startTime();
  },
  { immediate: true },
);

const bgClass = computed(() => {
  return colors[props.color ?? "success"];
});

function closeAlert() {
  clearTimeout(timeout);
  clearInterval(interval);
  $emit("close");
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <UAlert
      v-if="props.open"
      :color="props.color"
      :title="props.title"
      :description="props.description + ' ' + Math.round(progress) + ' %'"
      variant="soft"
      icon="i-lucide-terminal"
      :close="{
        icon: 'i-lucide-x',
        class: 'absolute top-2 right-2 cursor-pointer',
        size: 'md',
        onClick: () => {
          closeAlert();
        },
      }"
      :class="bgClass"
      class="absolute z-100 top-5 right-5 w-1/5"
    >
      <template #description>
        <div>
          {{ props.description + " " + props.color }}
        </div>
        <div
          class="absolute bottom-0 left-0 h-0.5"
          :class="'bg-' + [props.color]"
          :style="{ width: `${progress}%` }"
        />
      </template>
    </UAlert>
  </Transition>
</template>

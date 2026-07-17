<script setup lang="ts">
import "leaflet/dist/leaflet.css";

const props = defineProps<{
  lat: number;
  lng: number;
  label?: string;
  zoom?: number;
}>();

const mapContainer = ref<HTMLElement | null>(null);
let map: any = null;


onMounted(async () => {
  const L = await import("leaflet");
  
  const myIcon = L.icon({
    iconUrl: new URL(
      "../assets/img/fleuret.png",
      import.meta.url,
    ).href,
    iconSize: [20, 65],
    iconAnchor: [10, 50],
    popupAnchor: [0, -50],
    className: "custom-marker-icon",
  });

  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL(
      "leaflet/dist/images/marker-icon-2x.png",
      import.meta.url,
    ).href,
    iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url)
      .href,
    shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
      .href,
  });

  map = L.map(mapContainer.value!, {
    scrollWheelZoom: false,
  }).setView([props.lat, props.lng], props.zoom ?? 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  const safeLabel = document.createElement("div");
  safeLabel.textContent = props.label ?? "Notre adresse";
  L.marker([props.lat, props.lng], { icon: myIcon }).addTo(map).bindPopup(safeLabel).openPopup();
});

onUnmounted(() => {
  map?.remove();
  map = null;
});
</script>

<template>
  <div
    ref="mapContainer"
    class="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-lg z-0"
  />
</template>

<style>
.custom-marker-icon {
  transform: rotate(90deg);
}
</style>
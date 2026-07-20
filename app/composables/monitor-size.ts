import { onMounted, onUnmounted, reactive, toRefs } from "vue";

const isClient = typeof window !== "undefined";

const getIdSize = (width: number) => {
  // desktop = 1 / Tablette = 2 / Mobile = 3
  if (width >= 1024) {
    return 1;
  } else if (width >= 768) {
    return 2;
  } else {
    return 3;
  }
};

export function useMonitorSize() {
  const sizes = reactive({
    browserWidth: isClient ? window.innerWidth : 0,
    deviceWidth: isClient ? screen.width : 0,
    idSize: isClient ? getIdSize(window.innerWidth) : 1,
  });

  const browserResized = () => {
    sizes.browserWidth = window.innerWidth;
    sizes.deviceWidth = screen.width;
    sizes.idSize = getIdSize(window.innerWidth);
  };

  onMounted(() => {
    // Au montage côté client, on est sûr que window existe :
    // on remet les valeurs à jour au cas où le rendu initial était SSR (valeurs à 0).
    browserResized();
    window.addEventListener("resize", browserResized);
  });

  onUnmounted(() => {
    if (isClient) {
      window.removeEventListener("resize", browserResized);
    }
  });

  return {
    ...toRefs(sizes),
  };
}

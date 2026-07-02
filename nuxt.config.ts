// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
  pages: true,
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    config: {},
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/your-favicon-name.ico" }],
    },
  },
});

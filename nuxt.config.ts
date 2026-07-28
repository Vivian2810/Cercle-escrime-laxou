// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vercel/analytics"],
  css: ["@/assets/css/main.css"],
  pages: true,
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    resendApiKey: "",
    contactEmail: "",
  },
});

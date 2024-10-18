// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@pinia/nuxt",
  ],
  primevue: {
    importTheme: { from: "@/themes/main.js" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

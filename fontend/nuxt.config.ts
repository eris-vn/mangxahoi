// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  modules: ["@primevue/nuxt-module", "@nuxt/icon", "@nuxt/fonts", "nuxt-vue3-google-signin"],
  primevue: {
    importTheme: { from: "@/themes/main.js" },
  },
  googleSignIn: {
    clientId: '81902586117-qin78jipkm7eu8e41tqtqtiv5vu0tdv0.apps.googleusercontent.com',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

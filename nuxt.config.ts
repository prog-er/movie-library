// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/css/tailwind.css"],
  compatibilityDate: "2024-07-31",
  runtimeConfig: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
  plugins: ["~/plugins/pinia.js"],
  modules: [
    // другие модули
    "@pinia/nuxt",
  ],
});

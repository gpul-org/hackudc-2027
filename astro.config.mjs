// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hackudc.gpul.org",

  i18n: {
    locales: ["es", "en", "gl"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["400 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Roboto Slab",
      cssVariable: "--font-roboto-slab",
      weights: ["400 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["serif"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});

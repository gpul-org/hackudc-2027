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

  build: {
    inlineStylesheets: "always",
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
      provider: fontProviders.local(),
      name: "HackUDC Rockwell",
      cssVariable: "--font-rockwell",
      fallbacks: ["Rockwell", "Georgia", "Times New Roman", "serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/rockwell-light.woff2"],
            weight: 300,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/rockwell-regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/rockwell-italic.woff2"],
            weight: 400,
            style: "italic",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/rockwell-bold.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/rockwell-bold-italic.woff2"],
            weight: 700,
            style: "italic",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/rockwell-extra-bold.woff2"],
            weight: 800,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});

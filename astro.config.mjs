// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hackudc.com",

  i18n: {
    locales: ["es", "en", "gl"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/sBOCOznVlHM/maxresdefault.jpg",
      },
      // Project covers synced from Devpost (src/data/projects-2026.json).
      {
        protocol: "https",
        hostname: "d112y698adiu2z.cloudfront.net",
        pathname: "/photos/production/software_thumbnail_photos/**",
      },
    ],
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
      provider: fontProviders.fontsource(),
      name: "Arvo",
      cssVariable: "--font-arvo",
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: [],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});

import type { ImageMetadata } from "astro";

// File order and descriptions live together in copy.ts for each locale.
export const galleryImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp,avif,gif,tif,tiff}",
  { eager: true },
);

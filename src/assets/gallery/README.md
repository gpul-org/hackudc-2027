# Photo gallery

Add images here (JPEG, PNG, WebP, AVIF, GIF or TIFF). Use web-friendly static
formats; convert HEIC or RAW files before adding them. Portrait, landscape and
panoramic images retain their proportions and are displayed without cropping.

In `src/i18n/copy.ts`, add a `["filename.webp", "Individual description"]` entry
to `galleryPhotos` in **es, en and gl**, in the same order. The description is
the image alt text, available to screen readers. Describe what is actually in
each photograph. No component imports or dimensions need updating.

Remove the entry in all three locales to remove a photo from the carousel;
then delete its file if no longer needed. An empty list hides the section, and
a single image is displayed without carousel controls.

The selection uses supplied HackUDC 2026 photos. Imported photos are resized to 2000px wide and encoded as WebP, preserving
their framing and watermark.

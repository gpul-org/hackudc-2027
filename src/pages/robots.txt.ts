import type { APIRoute } from "astro";

// Decorative scene art (alt="") pollutes image search for "hackudc" with
// context-free seagulls and buildings. Pages can't send X-Robots-Tag on
// GitHub Pages, so keep only the image crawler away from those files; Astro
// preserves source names in /_astro/, so prefixes survive content hashing.
const blockedImagePrefixes = [
  "gaviota-",
  "mascot.",
  "compass",
  "button-",
  "farola.",
  "rosa-ventos.",
  "sponsors-",
  "stats-",
  "emilia-",
  "error-cloud.",
  "crab-laptop.",
  "shrimp-sunglasses.",
  "2026_",
  "gpul.",
  "lanyard.",
  "mlh-trust-badge-",
];

const getRobotsTxt = (sitemapURL?: URL) => `\
User-agent: *
Allow: /

User-agent: Googlebot-Image
${blockedImagePrefixes.map((prefix) => `Disallow: /_astro/${prefix}`).join("\n")}
${sitemapURL ? `\nSitemap: ${sitemapURL.href}` : ""}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = site ? new URL("sitemap-index.xml", site) : undefined;
  return new Response(getRobotsTxt(sitemapURL));
};

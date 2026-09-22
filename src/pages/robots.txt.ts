import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL?: URL) => `\
User-agent: *
Allow: /
${sitemapURL ? `\nSitemap: ${sitemapURL.href}` : ""}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = site ? new URL("sitemap-index.xml", site) : undefined;
  return new Response(getRobotsTxt(sitemapURL));
};

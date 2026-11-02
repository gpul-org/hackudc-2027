import type { APIRoute } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { copy } from "@/i18n/copy";

export const GET: APIRoute = () => {
  const t = copy.en;
  const content = `# HackUDC

> ${t.homeDescription}

## Organization

${t.organizationIntro}

${t.organizationFaq.map(([question, answer]) => `### ${question}\n\n${answer.replaceAll("{manifestoUrl}", getAbsoluteLocaleUrl("en", "manifesto"))}`).join("\n\n")}

## HackUDC 2027

${t.faq[0][1]} ${t.signupShort}: https://os.hackudc.com/signup?next=%2Fmy-applications%2F1

## Official sources

- [English website](${getAbsoluteLocaleUrl("en", "")}): Event information, applications and frequently asked questions.
- [Spanish website](${getAbsoluteLocaleUrl("es", "")}): Información del evento en español.
- [Galician website](${getAbsoluteLocaleUrl("gl", "")}): Información do evento en galego.
- [Manifesto](${getAbsoluteLocaleUrl("en", "manifesto")}): Organization and guiding principles.
- [Sponsorship](${getAbsoluteLocaleUrl("en", "sponsors")}): Sponsorship packages and contact information.
- [Brand resources](${getAbsoluteLocaleUrl("en", "brand")}): Official logos and publishing guidelines.
- [GPUL](https://gpul.org/): The association organizing HackUDC.

Contact: hackudc@gpul.org
`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

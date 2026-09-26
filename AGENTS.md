## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Conventions

### Structure and stack

- **Astro 7 + Tailwind 4 + pnpm** + React. Internal imports **always use `@/`**; the one exception is the `layout:` key in `.md` frontmatter, which must stay relative.
- `src/components/` (PascalCase) · `src/i18n/copy.ts` · `src/layouts/` · `src/styles/global.css`. UI icons come from `@lucide/astro/icons/*`, brand icons from `@/assets/icons/*.svg`, illustrations from `public/assets/{brand,scene}/`.

### i18n

- Locales `es` (default, no prefix) · `en` · `gl`. **All copy lives in `src/i18n/copy.ts`**, typed with `type Copy` + `Record<Locale, Copy>` and lists as tuples (`[string, string][]`): adding a key forces a translation in all three languages.
- **Always** build URLs with `getRelativeLocaleUrl(locale, path)`, never by concatenating strings.

### Components

- Fixed pattern: `interface Props { locale: Locale }` → `const t = copy[Astro.props.locale]`. One `<section>` per section with `id` + `aria-labelledby`; derived data as `const` in the frontmatter, rendered with `.map()` in the template.
- Long repeated class strings go into a `const` and are interpolated. `HomePage.astro` orchestrates the page and documents section order with comments.

### Styles

- No `tailwind.config`: the theme is defined with `@theme` in `src/styles/global.css`. **Use only the brand tokens** (`ink`, `red`, `blue`, `cream`, `yellow`), never arbitrary colors.
- Reuse the shared utilities before writing new classes: `page-wrap`, `reveal`, `eyebrow`, `display-heading`, `small-link`. `prettier-plugin-tailwindcss` sorts classes: run `pnpm format` before committing.
- **Always check the mobile layout** after UI changes. Default Tailwind breakpoints (no custom ones): `lg` (1024px) is the desktop/mobile split (`max-lg:` for mobile-only tweaks; e.g. `FloatingNav` is hidden), `sm` (640px) covers small phones, and short landscape viewports use `max-height` queries (`30rem`/`36rem`). Scoped `<style>` and `matchMedia` must use the same values (`64rem`, `1024px`, `639px`).
- Follow the [HackUDC 2027 brand guidelines](./BRAND_GUIDELINES.md) for logo, colour, typography, voice, and accessibility decisions.

### Behavior and code conventions

- **Accessibility and motion are not optional**: `motion-reduce:animate-none` plus a `prefers-reduced-motion` check in scripts, `aria-hidden` on decorative icons, `aria-label` on icon-only links, `sr-only` for the real `<h1>` text.
- Client scripts: plain `<script>`, everything inside `astro:page-load` (`<ClientRouter />` is active), with `observer?.disconnect()` + an `AbortController` and listeners registered with `{ signal }`. State and hooks travel through `data-*` attributes, not classes.
- Comments are sparse, in English, and explain the **why**. Commits follow Conventional Commits with a scope (`feat(nav):`, `fix(hero):`), also in English.
- Commit messages are a **single subject line**: do not add a body or long description.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

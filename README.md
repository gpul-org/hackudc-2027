# HackUDC 2027

Website for HackUDC 2027, built with [Astro](https://docs.astro.build).

## Brand guidelines

Follow the [HackUDC 2027 brand guidelines](./BRAND_GUIDELINES.md) for logo,
colour, typography, voice, and accessibility decisions.

## Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm build`   | Builds the production site to `@/dist/`      |
| `pnpm preview` | Previews the build locally, before deploying |
| `pnpm format`  | Formats the codebase with Prettier           |

## License

The source code of this website is released under the [MIT License](./LICENSE),
Copyright (c) 2026 GPUL (Grupo de Programadores e Usuarios de Linux).

### What the license does not cover

The MIT license applies to the code only. It does not cover:

- **HackUDC brand assets**: the logos and wordmarks (`public/brand`,
  `src/assets/brand`), the illustrations and mascots (`src/assets/scene`,
  including Emilia), and the identity described in
  [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md). They are not covered by the MIT
  license and all rights are reserved by GPUL.
- **Rockwell font files** (`src/assets/fonts`): Rockwell is a commercial
  typeface and cannot be relicensed under MIT. These files are excluded from
  the license.
- **`src/data/projects-2026.json`**: content synced from Devpost and written by
  the participants.
- **Third-party dependencies**, which keep their own licenses.

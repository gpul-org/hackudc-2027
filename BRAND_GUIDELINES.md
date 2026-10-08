# HackUDC 2027 brand guidelines

This is the working rulebook for HackUDC 2027. It defines the visual and
verbal system for digital, editorial, event, and partner communications.

## Brand character

HackUDC is open, technically capable, collaborative, and rooted in community.
The identity balances clear engineering structure with warm, energetic cultural
references.

- Be direct, optimistic, and inclusive.
- Favour clarity over decoration and confidence over hype.
- Make participation, making, and collaboration feel accessible.
- Use playful details as accents; keep information architecture practical.

## Logo

Use only the supplied files in `src/assets/brand/`.

| Variant          | Use                                                 |
| ---------------- | --------------------------------------------------- |
| Navy horizontal  | Default mark on cream or light-blue surfaces.       |
| Cream horizontal | Mark on ink or black surfaces.                      |
| Navy vertical    | Narrow or stacked formats on light surfaces.        |
| Cream vertical   | Narrow or stacked formats on ink or black surfaces. |
| Mobile navy      | Compact light-surface layouts only.                 |

Horizontal is the general-use version. Use compact horizontal when fitting the
horizontal name would make the text too small. Vertical is for narrow surfaces
such as bottles or other merchandise; prefer compact horizontal when it fits.

All three formats (horizontal, compact horizontal, and vertical) follow these
logo/background combinations:

| Logo colour | Backgrounds                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| Navy        | Sky blue or white. Primary version.                                              |
| Cream       | Navy or black.                                                                   |
| Red         | White preferred; light blue is also allowed.                                     |
| Black       | White. Exceptional use when navy clashes with the composition.                   |
| Sky blue    | Navy or other dark surfaces if the combination works and contrast is sufficient. |

Keep the logo intact, legible, and surrounded by clear space. Do not stretch,
crop, rotate, redraw, add effects, place it on a low-contrast surface, or
combine it with another wordmark.

## Colour palette

Use the named tokens from `src/styles/global.css` in all product work. Do not
introduce raw colours into components.

|                                                     Swatch                                                      | Token    | Hex       | Role                                                       |
| :-------------------------------------------------------------------------------------------------------------: | -------- | --------- | ---------------------------------------------------------- |
| <span style="display:inline-block;width:4rem;height:1.5rem;background:#030846;border:1px solid #030846"></span> | `ink`    | `#030846` | Primary text, borders, and dark surfaces.                  |
| <span style="display:inline-block;width:4rem;height:1.5rem;background:#bf2100;border:1px solid #bf2100"></span> | `red`    | `#bf2100` | High-attention accent and sponsorship identity.            |
| <span style="display:inline-block;width:4rem;height:1.5rem;background:#a3d5ff;border:1px solid #030846"></span> | `blue`   | `#a3d5ff` | Open, light surface and secondary accent.                  |
| <span style="display:inline-block;width:4rem;height:1.5rem;background:#fafafa;border:1px solid #030846"></span> | `cream`  | `#fafafa` | Default light surface and text on dark/red surfaces.       |
| <span style="display:inline-block;width:4rem;height:1.5rem;background:#f5dc8f;border:1px solid #030846"></span> | `yellow` | `#f5dc8f` | Reserved decorative highlight; use sparingly.              |
| <span style="display:inline-block;width:4rem;height:1.5rem;background:#000000;border:1px solid #030846"></span> | `black`  | `#000000` | Technical exception only; prefer `ink` for interface text. |

### Alternative tones from hackOS

The event software uses these sRGB mixes of brand tokens. They are acceptable
for surfaces, secondary text and interface states; logo colours remain unchanged.
The hex values below are rounded to 8-bit sRGB. Mix percentages total 100%.
Cream means `#FAFAFA`, not pure white. Use the resulting HEX at 100% opacity
in design tools, or `color-mix(in srgb, <colour> <percentage>, <colour>
<percentage>)` in CSS. Element opacity depends on the background and is not
a substitute for a solid mix. To derive other shades, adjust the ratio of the
same two colours and check text contrast on the final surface.

| Tone        | Hex       | Mix                      | Use                                         |
| ----------- | --------- | ------------------------ | ------------------------------------------- |
| Soft blue   | `#DCEDFC` | 35% `blue` + 65% `cream` | Controls and selected surfaces.             |
| Pale blue   | `#EDF4FB` | 15% `blue` + 85% `cream` | Secondary surfaces.                         |
| Blue canvas | `#F0F6FB` | 12% `blue` + 88% `cream` | Page backgrounds.                           |
| Soft navy   | `#484C78` | 72% `ink` + 28% `cream`  | Secondary text on light surfaces.           |
| Blue navy   | `#3B5087` | 65% `ink` + 35% `blue`   | Informational icons/text on light surfaces. |
| Soft red    | `#DF988A` | 45% `red` + 55% `cream`  | Notices and actions on dark surfaces.       |

### Colour application

- `cream` is the default background; `ink` is the default text colour.
- White and sky blue can both be background colours; use sky blue sparingly.
- Use `blue` for spacious, light surfaces and `red` for high-attention brand
  moments, especially sponsorship.
- Use one dominant surface colour per composition. Let `ink`, `cream`, or a
  single accent create the hierarchy.
- On light surfaces, use `ink` borders and dividers, optionally with reduced
  opacity. On ink or red surfaces, use `cream` borders and dividers.
- Yellow is an accent signal, never a general-purpose text or background
  colour.
- Keep transitions between colour surfaces flat. Do not use gradients as a
  general separator.

### Red and light blue

The red logo may appear on white (preferred) or light blue. This logo rule
is separate from text accessibility: check contrast for each text/background
combination and prefer ink for body text on light blue.

## Typography

| Role               | Typeface                                           | Direction                                               |
| ------------------ | -------------------------------------------------- | ------------------------------------------------------- |
| Display            | Rockwell, with the supplied serif fallback stack   | Major headlines, section titles, and prominent numbers. |
| Interface and body | Inter, with the supplied sans-serif fallback stack | Navigation, labels, CTAs, metadata, and paragraphs.     |

- Use serif display type for hierarchy, not dense interface text.
- Headlines are compact and balanced with tight leading. Body copy has
  generous line-height and a limited reading measure.
- Small labels may be uppercase, black weight, and widely tracked. Store copy
  in natural case and apply uppercase in presentation.
- Use tabular figures for prices, counts, dates, or values that may change.
- Do not introduce additional typefaces, decorative display fonts, or thin
  weights for small text.

## Layout and graphic language

- Build compositions from confident colour blocks, generous whitespace, and
  strong horizontal or vertical alignment.
- Use `ink` outlines to give frames and illustrated objects a clear,
  engineered edge.
- Rounded pills are for compact controls and labels. Larger content surfaces
  stay square or lightly framed rather than becoming soft cards.
- Use coastal and technical motifs—navigation, light, buildings, tools, and
  making—as supporting illustration, never as a substitute for information.
- Keep imagery graphic and purposeful: flat brand colours, clear silhouettes,
  and limited visual layers.
- Avoid decorative gradients, glass effects, glow, photorealistic stock
  imagery, or a mix of unrelated illustration styles.

## Buttons and interaction

- Primary actions use an `ink` surface with `cream` text; an optional hover
  state may use `red`.
- Secondary actions use a `cream` surface with `ink` text; an optional hover
  state may use `blue`.
- Use a clear verb for every action label. Keep labels short and specific.
- Interaction feedback should be subtle and quick. It must never be the only
  indication of state.
- Focus indicators are required and use the red brand accent.

## Voice and copy

- Write in plain, active language. Prefer concrete verbs: “Join”, “Build”,
  “Create”, “Download”, and “Contact”.
- Be welcoming to newcomers without talking down to experienced participants.
- Keep instructions short, practical, and free of unnecessary jargon.
- Use the same term for the same thing across a journey.
- Avoid corporate filler, exclusionary language, and exaggerated claims.

## Accessibility and quality checks

- Check every text/background pair for readable contrast, especially small
  labels and text placed on coloured surfaces.
- Do not encode essential information through colour alone.
- Preserve semantic headings, descriptive links, keyboard access, and visible
  focus states.
- Respect reduced-motion preferences. Motion should support hierarchy, not
  distract from content.
- Test brand applications at narrow and wide sizes before release.

## Do and do not

| Do                                                        | Do not                                              |
| --------------------------------------------------------- | --------------------------------------------------- |
| Use the supplied logo variant with a contrasting surface. | Distort, or decorate the logo.                      |
| Create hierarchy with `ink`, `cream`, and one accent.     | Combine several accent colours in one view.         |
| Use bold labels and restrained graphic motifs.            | Add gradients, glows, or ornamental effects.        |
| Keep interfaces clear, direct, and keyboard-accessible.   | Depend on colour or animation to communicate state. |

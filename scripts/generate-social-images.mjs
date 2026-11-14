import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { openSync } from "fontkit";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
// Native Node runs outside Astro's alias resolver; load the shared copy by URL.
const { copy } = await import(new URL("src/i18n/copy.ts", root).href);
const width = 1200;
const height = 630;
const css = await readFile(new URL("src/styles/global.css", root), "utf8");
const colour = (name) => {
  const value = css.match(new RegExp(`--color-${name}:\\s*([^;]+);`))?.[1];
  if (!value) throw new Error(`Missing brand colour: ${name}`);
  return value.trim();
};
const ink = colour("ink");
const blue = colour("blue");
const cream = colour("cream");
const red = colour("red");
const inter = openSync(
  fileURLToPath(new URL("src/assets/fonts/inter-latin.woff2", root)),
);

// Outline the local font so generated assets never depend on system fonts.
function textPaths(text, size, weight, center, baseline, fill) {
  const font = inter.getVariation({ wght: weight });
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;
  const textWidth =
    run.positions.reduce((sum, p) => sum + p.xAdvance, 0) * scale;
  let cursor = center - textWidth / 2;
  const paths = run.glyphs
    .map((glyph, index) => {
      const p = run.positions[index];
      const result = `<path d="${glyph.path.toSVG()}" transform="translate(${cursor + p.xOffset * scale} ${baseline - p.yOffset * scale}) scale(${scale} ${-scale})"/>`;
      cursor += p.xAdvance * scale;
      return result;
    })
    .join("");
  return { svg: `<g fill="${fill}">${paths}</g>`, width: textWidth };
}

function svgLayer(content) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${content}</svg>`,
  );
}

async function image(file, size, left, top) {
  const input = await sharp(await readFile(new URL(`src/assets/${file}`, root)))
    .resize({ width: size })
    .png()
    .toBuffer();
  return { input, left, top };
}

// Coordinates use the 1200 × 630 reference canvas; every asset keeps its ratio.
const [building, logo, mlh, emilia, crab, shrimp] = await Promise.all([
  image("scene/building-wide.svg", 980, 110, 270),
  image("brand/logo-navy.svg", 720, 240, 84),
  image("brand/mlh-trust-badge-2027-white.svg", 100, 1064, 0),
  image("scene/emilia-simpatica.webp", 150, 58, 439),
  image("scene/crab-laptop.webp", 155, 1005, 435),
  image("scene/shrimp-sunglasses.webp", 180, 916, 175),
]);
const screenLogo = await sharp(
  await readFile(new URL("src/assets/brand/gpul-white.svg", root)),
)
  .resize({ width: 50 })
  .rotate(3, { background: "transparent" })
  .png()
  .toBuffer();

const background = svgLayer(
  `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${blue}"/><stop offset=".45" stop-color="${blue}"/><stop offset="1" stop-color="${cream}"/></linearGradient></defs><rect width="1200" height="630" fill="url(#sky)"/>`,
);
const fade = svgLayer(
  `<defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${cream}" stop-opacity="0"/><stop offset=".92" stop-color="${cream}"/></linearGradient></defs><rect y="380" width="1200" height="250" fill="url(#fade)"/>`,
);

const outputs = [
  ["es", "public/og.png"],
  ["en", "public/en/og.png"],
  ["gl", "public/gl/og.png"],
];
for (const [locale, path] of outputs) {
  const t = copy[locale];
  const labelWidth = Math.ceil(
    textPaths(t.edition, 18, 800, 0, 0, cream).width + 44,
  );
  const left = 960 - labelWidth;
  const edition = `<path fill="${red}" d="M${left} 43H950L960 58.5 950 74H${left}L${left + 10} 58.5Z"/>${textPaths(t.edition, 18, 800, left + labelWidth / 2, 65, cream).svg}`;
  const location = textPaths(
    t.socialImage.location,
    19,
    500,
    600,
    603,
    ink,
  ).svg;
  const output = new URL(path, root);
  await mkdir(new URL("./", output), { recursive: true });
  const png = await sharp(background)
    .composite([
      building,
      { input: fade, left: 0, top: 0 },
      logo,
      mlh,
      { input: svgLayer(edition + location), left: 0, top: 0 },
      emilia,
      crab,
      { input: screenLogo, left: 1085, top: 449 },
      shrimp,
    ])
    .png()
    .toBuffer();
  await writeFile(output, png);
  console.log(`Generated ${path} (${width} × ${height}, ${locale})`);
}

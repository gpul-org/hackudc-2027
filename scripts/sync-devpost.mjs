// Pulls last edition's projects from Devpost into src/data/projects-2026.json.
// Devpost has no public API, so this reads the gallery and project pages. The
// output is committed: builds never depend on Devpost being up or unchanged.
// Run with `pnpm sync:devpost`.
import { writeFile } from "node:fs/promises";

const hackathon = "https://hackudc-2026.devpost.com";
const output = new URL("../src/data/projects-2026.json", import.meta.url);
const delayMs = 250;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const entities = {
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
  "&lt;": "<",
  "&gt;": ">",
};

// Tags are stripped until none are left, since removing one can join the
// pieces of another. Entities are then decoded in a single pass, so "&amp;lt;"
// stays the text "&lt;" instead of turning into "<".
const decode = (text) => {
  let plain = text;
  let previous;
  do {
    previous = plain;
    plain = plain.replace(/<[^>]*>/g, "");
  } while (plain !== previous);
  return plain
    .replace(/&(?:amp|quot|#39|lt|gt);/g, (entity) => entities[entity])
    .replace(/\s+/g, " ")
    .trim();
};

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "hackudc.com project sync" },
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

function parseGallery(html) {
  return html
    .split('class="large-4 small-12 columns gallery-item"')
    .slice(1)
    .map((item) => ({
      url: item.match(/href="(https:\/\/devpost\.com\/software\/[^"]+)"/)?.[1],
      // Some teams append the event to their title ("K2 Platform | HackUDC 2026").
      name: decode(item.match(/<h5>([\s\S]*?)<\/h5>/)?.[1] ?? "").replace(
        /\s*\|\s*HackUDC 2026$/i,
        "",
      ),
      tagline: decode(
        item.match(/class="small tagline">([\s\S]*?)<\/p>/)?.[1] ?? "",
      ),
      image: item.match(
        /class="software_thumbnail_image[^"]*"[^>]*src="([^"]+)"/,
      )?.[1],
      members: (item.match(/class="user-profile-link"/g) ?? []).length,
    }))
    .filter((project) => project.url && project.name);
}

function parseProject(html) {
  const prizes = [
    ...html.matchAll(
      /<span class="winner label[^"]*">Winner<\/span>([\s\S]*?)<\/li>/g,
    ),
  ].map(([, prize]) => decode(prize));
  const builtWith = html.match(/id="built-with"[\s\S]*?<\/ul>/)?.[0] ?? "";
  const stack = [
    ...builtWith.matchAll(/class="cp-tag[^"]*">([\s\S]*?)<\/span>/g),
  ]
    .map(([, tag]) => decode(tag))
    .filter(Boolean);
  const links =
    html.match(/data-role="software-urls"[\s\S]*?<\/ul>/)?.[0] ?? "";
  const repo = links.match(
    /href="(https:\/\/(?:github|gitlab)\.com\/[^"]+)"/,
  )?.[1];
  return { prizes, stack, repo };
}

const projects = [];
for (let page = 1; ; page++) {
  const found = parseGallery(
    await fetchHtml(`${hackathon}/project-gallery?page=${page}`),
  );
  if (!found.length) break;
  projects.push(...found);
  await sleep(delayMs);
}

for (const [index, project] of projects.entries()) {
  Object.assign(project, parseProject(await fetchHtml(project.url)));
  // The gallery falls back to a placeholder GIF for projects without a cover.
  if (project.image?.includes("thumbnail-placeholder")) delete project.image;
  console.log(`${index + 1}/${projects.length} ${project.name}`);
  await sleep(delayMs);
}

await writeFile(
  output,
  `${JSON.stringify({ source: `${hackathon}/project-gallery`, syncedAt: new Date().toISOString().slice(0, 10), projects }, null, 2)}\n`,
);
console.log(`Saved ${projects.length} projects to ${output.pathname}`);

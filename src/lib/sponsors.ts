export type Sponsor = {
  enterpriseId: number;
  name: string;
  website: string | null;
  logoUrl: string | null;
  logoNegativeUrl: string | null;
  priority: number;
};

const cacheKey = "hackudc:sponsors:v1";
const cacheDuration = 15 * 60 * 1000;
const gpulLogo =
  "https://s3.dani.md/hackos/enterprises/1/logo-default-217ade5cf4aa82d0326736c708142269.png";

// Development fixture exercises every place in the building before announcements start.
const previewSponsors: Sponsor[] = [
  {
    enterpriseId: 1,
    name: "GPUL",
    website: "https://gpul.org/",
    logoUrl: gpulLogo,
    logoNegativeUrl: gpulLogo,
    priority: 1,
  },
  ...Array.from({ length: 2 }, (_, index) => ({
    enterpriseId: index + 2,
    name: "GPUL",
    website: "https://gpul.org/",
    logoUrl: gpulLogo,
    logoNegativeUrl: gpulLogo,
    priority: 2,
  })),
  ...Array.from({ length: 4 }, (_, index) => ({
    enterpriseId: index + 4,
    name: "GPUL",
    website: "https://gpul.org/",
    logoUrl: gpulLogo,
    logoNegativeUrl: gpulLogo,
    priority: 3,
  })),
];

function safeUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function parseSponsors(value: unknown): Sponsor[] {
  if (
    !value ||
    typeof value !== "object" ||
    !("items" in value) ||
    !Array.isArray(value.items)
  ) {
    throw new Error("Invalid sponsor response");
  }

  return value.items.flatMap((item: unknown) => {
    if (
      !item ||
      typeof item !== "object" ||
      !("enterpriseId" in item) ||
      typeof item.enterpriseId !== "number" ||
      !("name" in item) ||
      typeof item.name !== "string" ||
      !("priority" in item) ||
      typeof item.priority !== "number"
    )
      return [];

    const sponsor = item as Record<string, unknown>;
    return [
      {
        enterpriseId: item.enterpriseId,
        name: item.name,
        priority: item.priority,
        website: safeUrl(sponsor.website),
        logoUrl: safeUrl(sponsor.logoUrl),
        logoNegativeUrl: safeUrl(sponsor.logoNegativeUrl),
      },
    ];
  });
}

export async function getSponsors(signal: AbortSignal): Promise<Sponsor[]> {
  if (import.meta.env.DEV) return previewSponsors;

  let cached: { items: Sponsor[]; expires: number } | undefined;
  try {
    const stored = localStorage.getItem(cacheKey);
    if (stored) {
      const parsed: unknown = JSON.parse(stored);
      if (
        parsed &&
        typeof parsed === "object" &&
        "expires" in parsed &&
        typeof parsed.expires === "number" &&
        "items" in parsed
      ) {
        cached = { expires: parsed.expires, items: parseSponsors(parsed) };
      }
    }
  } catch {
    // Storage can be disabled; the network path still works.
  }
  if (cached && cached.expires > Date.now()) return cached.items;

  try {
    const response = await fetch("https://api.dani.md/api/public/sponsors", {
      signal,
    });
    if (!response.ok)
      throw new Error(`Sponsor request failed: ${response.status}`);
    const items = parseSponsors(await response.json());
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ items, expires: Date.now() + cacheDuration }),
      );
    } catch {
      // Browsers without storage still receive fresh results.
    }
    return items;
  } catch (error) {
    if (signal.aborted) throw error;
    if (cached) return cached.items;
    throw error;
  }
}

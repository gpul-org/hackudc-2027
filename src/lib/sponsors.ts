export type Sponsor = {
  enterpriseId: number;
  name: string;
  website: string | null;
  logoUrl: string | null;
  logoNegativeUrl: string | null;
  priority: number;
};

const cacheKey = "hackudc:sponsors:v1";
const sponsorsEndpoint = import.meta.env.DEV
  ? "https://api.dani.md/api/public/sponsors"
  : "https://api.hackudc.com/api/public/sponsors";
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
  let cached: { items: Sponsor[] } | undefined;
  try {
    const stored = localStorage.getItem(cacheKey);
    if (stored) {
      const parsed: unknown = JSON.parse(stored);
      if (parsed && typeof parsed === "object" && "items" in parsed) {
        cached = { items: parseSponsors(parsed) };
      }
    }
  } catch {
    // Storage can be disabled; the network path still works.
  }
  try {
    const response = await fetch(sponsorsEndpoint, {
      cache: "no-store",
      signal,
    });
    if (!response.ok)
      throw new Error(`Sponsor request failed: ${response.status}`);
    const items = parseSponsors(await response.json());
    try {
      localStorage.setItem(cacheKey, JSON.stringify({ items }));
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

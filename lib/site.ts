/**
 * Public site origin used for canonical URLs, sitemaps, and social previews.
 * Prefer NEXT_PUBLIC_SITE_URL on each deployment (e.g. https://showcase.taiora.ai).
 * Falls back to the current Vercel deployment host, then production.
 */
export function getSiteUrl() {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.SITE_URL?.trim();

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const vercelHost = process.env.VERCEL_URL?.trim().replace(/^https?:\/\//, "");
  if (vercelHost) {
    return `https://${vercelHost.replace(/\/$/, "")}`;
  }

  return "https://www.taiora.ai";
}

export const SITE_URL = getSiteUrl();
export const SITE_NAME = "Tai Ora";
export const SITE_TAGLINE =
  "Ethical technology for clearer choices, authentic stories, and human wellbeing.";

export function absoluteUrl(pathname: string) {
  return new URL(pathname, `${getSiteUrl()}/`).toString();
}

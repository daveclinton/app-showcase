export const SITE_URL = "https://www.taiora.ai";
export const SITE_NAME = "Tai Ora";
export const SITE_TAGLINE =
  "Ethical technology for clearer choices, authentic stories, and human wellbeing.";

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

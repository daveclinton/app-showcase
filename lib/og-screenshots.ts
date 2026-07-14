import { existsSync } from "node:fs";
import path from "node:path";

/** Static marketing + content routes that get viewport OG screenshots. */
export const OG_SCREENSHOT_ROUTES = [
  "/",
  "/about",
  "/about-us",
  "/brand",
  "/business-card",
  "/contact",
  "/creators",
  "/how-it-works",
  "/iwi-funders",
  "/iwi-and-funders",
  "/partner",
  "/privacy-policy",
  "/terms-of-use",
  "/blog",
] as const;

/** Map a site path to the public OG screenshot filename (no directory). */
export function ogScreenshotFilename(pagePath: string) {
  const normalized =
    !pagePath || pagePath === "/"
      ? "home"
      : pagePath.replace(/^\//, "").replace(/\/+$/, "").replace(/\//g, "--");

  return `${normalized}.png`;
}

/** Public URL path for a page's viewport OG screenshot. */
export function ogScreenshotPublicPath(pagePath: string) {
  return `/og-screenshots/${ogScreenshotFilename(pagePath)}`;
}

/**
 * Returns the public screenshot path when the PNG exists on disk.
 * Safe to call from Node (generateMetadata / createPageMetadata on server).
 */
export function resolveOgScreenshotPath(pagePath: string): string | undefined {
  const publicPath = ogScreenshotPublicPath(pagePath);
  const absolute = path.join(process.cwd(), "public", publicPath);

  if (existsSync(absolute)) {
    return publicPath;
  }

  return undefined;
}

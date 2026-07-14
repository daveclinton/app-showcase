/**
 * Capture 1200×630 viewport screenshots for Open Graph previews.
 *
 * Usage:
 *   OG_BASE_URL=https://showcase.taiora.ai npm run og:screenshots
 *   OG_BASE_URL=http://localhost:3000 npm run og:screenshots
 *
 * Optional:
 *   OG_ROUTES=/about,/blog,/blog/why-we-built-veevu  (override route list)
 *   OG_BLOG_SLUGS=why-we-built-veevu                 (extra blog posts)
 */
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";

// Resolve playwright from local node_modules or the global install.
const require = createRequire(import.meta.url);
function loadPlaywright() {
  try {
    return require("playwright");
  } catch {
    try {
      const globalRoot = execSync("npm root -g", { encoding: "utf8" }).trim();
      return require(path.join(globalRoot, "playwright"));
    } catch (error) {
      console.error(
        "Playwright is required. Install with: npm install -D playwright && npx playwright install chromium",
      );
      throw error;
    }
  }
}
const { chromium } = loadPlaywright();

const WIDTH = 1200;
const HEIGHT = 630;
const OUT_DIR = path.join(process.cwd(), "public", "og-screenshots");

const DEFAULT_ROUTES = [
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
];

function filenameForRoute(route) {
  const normalized =
    !route || route === "/"
      ? "home"
      : route.replace(/^\//, "").replace(/\/+$/, "").replace(/\//g, "--");
  return `${normalized}.png`;
}

function parseRoutes() {
  if (process.env.OG_ROUTES?.trim()) {
    return process.env.OG_ROUTES.split(",")
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => (r.startsWith("/") ? r : `/${r}`));
  }

  const routes = [...DEFAULT_ROUTES];
  const blogSlugs = (process.env.OG_BLOG_SLUGS || "why-we-built-veevu")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  for (const slug of blogSlugs) {
    routes.push(`/blog/${slug}`);
  }

  return routes;
}

async function dismissOverlays(page) {
  // Hide cookie bar / toasters if they still render.
  await page.addStyleTag({
    content: `
      [class*="cookie"], [id*="cookie"],
      [data-sonner-toaster], [data-sonner-toast] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `,
  });
}

async function captureRoute(page, baseUrl, route) {
  const url = new URL(route, baseUrl).toString();
  const file = path.join(OUT_DIR, filenameForRoute(route));

  console.log(`→ ${route}`);
  await page.goto(url, {
    waitUntil: "networkidle",
    timeout: 90_000,
  });
  await page.waitForTimeout(600);
  await dismissOverlays(page);
  await page.waitForTimeout(200);

  await page.screenshot({
    path: file,
    type: "png",
    fullPage: false,
    animations: "disabled",
  });

  return file;
}

async function main() {
  const baseUrl = (
    process.env.OG_BASE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://showcase.taiora.ai"
  ).replace(/\/$/, "");

  const routes = parseRoutes();
  await mkdir(OUT_DIR, { recursive: true });

  console.log(`OG screenshots`);
  console.log(`  base:   ${baseUrl}`);
  console.log(`  output: ${OUT_DIR}`);
  console.log(`  size:   ${WIDTH}×${HEIGHT}`);
  console.log(`  routes: ${routes.length}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    colorScheme: "dark",
  });

  // Pre-accept cookies so the banner never appears.
  await context.addInitScript(() => {
    const consent = {
      preferences: { essential: true, analytics: false },
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("taiora-cookie-consent", JSON.stringify(consent));
    } catch {
      // ignore
    }
  });

  const page = await context.newPage();
  const manifest = [];

  for (const route of routes) {
    try {
      const file = await captureRoute(page, baseUrl, route);
      manifest.push({
        route,
        file: path.relative(process.cwd(), file),
        url: `/og-screenshots/${filenameForRoute(route)}`,
      });
    } catch (error) {
      console.error(`  ✗ failed ${route}:`, error instanceof Error ? error.message : error);
    }
  }

  await browser.close();

  const manifestPath = path.join(OUT_DIR, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  console.log(`\nDone. ${manifest.length}/${routes.length} screenshots written.`);
  console.log(`Manifest: ${path.relative(process.cwd(), manifestPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

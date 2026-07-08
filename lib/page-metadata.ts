import type { Metadata } from "next";

import { absoluteUrl, getSiteUrl, SITE_NAME } from "@/lib/site";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /**
   * Absolute or site-relative image URL.
   * Defaults to the dynamic `/og` card generator for this page.
   */
  image?: string;
  imageAlt?: string;
  /** Shown as the label on the generated OG card (e.g. author name). */
  ogLabel?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noIndex?: boolean;
  /** When true, do not append "| Tai Ora" (for the homepage default). */
  absoluteTitle?: boolean;
};

/** Build a path for the dynamic OG image route (`app/og/route.tsx`). */
export function buildOgImagePath({
  title,
  tagline,
  author,
}: {
  title: string;
  tagline?: string;
  author?: string;
}) {
  const params = new URLSearchParams();
  params.set("title", title.trim().slice(0, 140));

  if (tagline?.trim()) {
    params.set("tagline", tagline.trim().slice(0, 150));
  }

  if (author?.trim()) {
    params.set("author", author.trim().slice(0, 50));
  }

  return `/og?${params.toString()}`;
}

/** Absolute URL for the dynamic OG image (for scrapers and social previews). */
export function buildOgImageUrl(input: {
  title: string;
  tagline?: string;
  author?: string;
}) {
  return absoluteUrl(buildOgImagePath(input));
}

/**
 * Keep OG image URLs same-origin via relative paths when possible so Next.js
 * metadataBase resolves them to the current deployment (showcase vs prod).
 */
function toMetadataImageUrl(image: string) {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    try {
      const site = getSiteUrl();
      const parsed = new URL(image);
      // If the absolute URL already points at this deployment, prefer pathname+search
      // so metadataBase stays the source of truth.
      if (parsed.origin === site) {
        return `${parsed.pathname}${parsed.search}`;
      }
      return image;
    } catch {
      return image;
    }
  }

  return image.startsWith("/") ? image : `/${image}`;
}

export function buildPageTitle(title: string, absoluteTitle = false) {
  if (
    absoluteTitle ||
    title === SITE_NAME ||
    title.endsWith(`| ${SITE_NAME}`)
  ) {
    return title;
  }
  return `${title} | ${SITE_NAME}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  ogLabel,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = buildPageTitle(title, absoluteTitle);
  const canonicalPath = path === "" || path === "/" ? "/" : path;

  // Relative path → resolved against metadataBase (current deployment origin).
  const ogImage = toMetadataImageUrl(
    image ??
      buildOgImagePath({
        title,
        tagline: description,
        author: ogLabel ?? authors?.[0],
      }),
  );
  const ogAlt = imageAlt ?? fullTitle;

  return {
    title: absoluteTitle ? { absolute: fullTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      // Relative so Next resolves with metadataBase for this host.
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: ogAlt,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

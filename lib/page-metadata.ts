import type { Metadata } from "next";

import { absoluteUrl, SITE_NAME } from "@/lib/site";

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

function resolveImageUrl(image: string) {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  const path = image.startsWith("/") ? image : `/${image}`;
  return absoluteUrl(path);
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
  const url = absoluteUrl(canonicalPath);

  // Prefer an explicit image; otherwise generate one via `/og` for this page.
  const ogImage = resolveImageUrl(
    image ??
      buildOgImagePath({
        title,
        tagline: description,
        author: ogLabel ?? authors?.[0],
      }),
  );
  const ogAlt = imageAlt ?? fullTitle;

  const ogImages = [
    {
      url: ogImage,
      secureUrl: ogImage,
      width: 1200,
      height: 630,
      type: "image/png",
      alt: ogAlt,
    },
  ];

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
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: ogImages,
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
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

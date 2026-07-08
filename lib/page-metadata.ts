import type { Metadata } from "next";

import { absoluteUrl, SITE_NAME } from "@/lib/site";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute or site-relative image URL. Defaults to dynamic OG card. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noIndex?: boolean;
  /** When true, do not append "| Tai Ora" (for the homepage default). */
  absoluteTitle?: boolean;
};

function toAbsoluteImage(image: string) {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return absoluteUrl(image.startsWith("/") ? image : `/${image}`);
}

export function buildPageTitle(title: string, absoluteTitle = false) {
  if (absoluteTitle || title === SITE_NAME || title.endsWith(`| ${SITE_NAME}`)) {
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
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = buildPageTitle(title, absoluteTitle);
  const canonicalPath = path === "" ? "/" : path;
  const url = absoluteUrl(canonicalPath);
  const ogImage =
    image != null
      ? toAbsoluteImage(image)
      : absoluteUrl(
          `/og?title=${encodeURIComponent(title)}&tagline=${encodeURIComponent(description)}`,
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
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
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

import { ImageResponse } from "next/og";

import { StandardOgArt } from "@/lib/og-art";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const runtime = "edge";

function clean(value: string | null, fallback: string, maxLength: number) {
  return value?.trim().slice(0, maxLength) || fallback;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = clean(url.searchParams.get("title"), SITE_NAME, 140);
  const label = clean(url.searchParams.get("author"), SITE_NAME, 50);
  const tagline = clean(
    url.searchParams.get("tagline"),
    SITE_TAGLINE,
    150,
  );
  const logoUrl = new URL("/logo.png", url.origin).toString();

  return new ImageResponse(
    <StandardOgArt
      title={title}
      label={label}
      logoUrl={logoUrl}
      tagline={tagline}
    />,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
  );
}

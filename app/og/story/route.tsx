import { ImageResponse } from "next/og";

import { StoryOgArt } from "@/lib/og-art";
import { SITE_NAME } from "@/lib/site";

export const runtime = "edge";

function clean(value: string | null, fallback: string, maxLength: number) {
  return value?.trim().slice(0, maxLength) || fallback;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = clean(url.searchParams.get("title"), SITE_NAME, 140);
  const label = clean(url.searchParams.get("author"), SITE_NAME, 50);
  const readAt = clean(
    url.searchParams.get("url"),
    "www.taiora.ai/blog",
    90,
  );
  const logoUrl = new URL("/logo.png", url.origin).toString();

  return new ImageResponse(
    <StoryOgArt
      title={title}
      readAt={readAt}
      label={label}
      logoUrl={logoUrl}
    />,
    {
      width: 1080,
      height: 1920,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
  );
}

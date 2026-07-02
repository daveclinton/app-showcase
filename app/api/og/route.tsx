import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const geistMedium = fetch(
  new URL(
    "../../../node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
    import.meta.url,
  ),
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const fontData = await geistMedium;
  const url = new URL(req.url);
  const values = Object.fromEntries(url.searchParams);
  const mode = (values.mode || "dark") as "dark" | "light";
  const logoUrl = new URL("/logo.png", url.origin).toString();

  return new ImageResponse(
    (
      <div
        tw={cn(
          "relative flex h-full w-full items-center justify-center p-20 text-center",
          mode === "dark" ? "bg-[#004c45] text-white" : "bg-white text-[#004c45]",
        )}
      >
        <div tw="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Tai Ora logo" height={112} src={logoUrl} width={112} />
          <div
            tw={cn(
              "mx-12 h-32 w-1",
              mode === "dark" ? "bg-[#d4af37]" : "bg-[#91c9ad]",
            )}
          />
          <span tw="text-8xl font-medium tracking-tighter">Tai Ora</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}

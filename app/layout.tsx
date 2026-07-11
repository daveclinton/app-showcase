import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Source_Serif_4 } from "next/font/google";
import { CookieConsentProvider } from "@/components/cookie-consent/cookie-consent-provider";
import { CookieConsentScripts } from "@/components/cookie-consent/cookie-consent-scripts";
import { SiteShell } from "@/components/site-shell";
import CookieConsent from "@/components/shadcn-space/blocks/cookie-consent-01";
import { Toaster } from "@/components/ui/sonner";
import { buildOgImagePath } from "@/lib/page-metadata";
import { resolveOgScreenshotPath } from "@/lib/og-screenshots";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();
const siteTitle = "Tai Ora - Wellbeing Through Authenticity & Connection";
const siteDescription =
  "Tai Ora is a wellbeing platform built on authenticity, connection, and aroha. Rooted in Mauri values, we welcome all cultures to reclaim time, identity, and wellbeing.";
const openGraphDescription =
  "Join Tai Ora, a wellbeing platform grounded in cultural values, authenticity, and aroha. Reclaim your time, identity, and wellbeing through community and connection.";
const twitterDescription =
  "Tai Ora is a cultural wellbeing platform rooted in authenticity, aroha, and community connection. Welcoming all cultures to live authentically.";
// Viewport screenshot when present; otherwise designed /og card.
const ogImagePath =
  resolveOgScreenshotPath("/") ??
  buildOgImagePath({
    title: "Tai Ora",
    tagline: siteDescription,
  });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Tai Ora",
  },
  description: siteDescription,
  applicationName: "Tai Ora",
  authors: [{ name: "Tai Ora" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tai Ora",
    "wellbeing platform",
    "authenticity and connection",
    "aroha",
    "cultural wellness",
    "Mauri values",
    "community wellbeing",
    "sustainable wellbeing",
  ],
  openGraph: {
    title: siteTitle,
    description: openGraphDescription,
    url: "/",
    siteName: "Tai Ora",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Tai Ora - Wellbeing Through Authenticity & Connection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@taiora",
    creator: "@taiora",
    title: siteTitle,
    description: twitterDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Tai Ora - Wellbeing Through Authenticity & Connection",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <CookieConsentProvider>
          <SiteShell>{children}</SiteShell>
          <CookieConsent />
          <CookieConsentScripts />
          <Toaster theme="dark" position="top-right" />
        </CookieConsentProvider>
      </body>
    </html>
  );
}

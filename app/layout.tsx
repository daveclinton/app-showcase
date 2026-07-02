import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Source_Serif_4 } from "next/font/google";
import { CookieConsentProvider } from "@/components/cookie-consent/cookie-consent-provider";
import { CookieConsentScripts } from "@/components/cookie-consent/cookie-consent-scripts";
import { AppLaunchBanner } from "@/components/app-launch-banner";
import CookieConsent from "@/components/shadcn-space/blocks/cookie-consent-01";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const siteUrl = "https://www.taiora.ai";
const siteTitle = "Tai Ora - Wellbeing Through Authenticity & Connection";
const siteDescription =
  "Tai Ora is a wellbeing platform built on authenticity, connection, and aroha. Rooted in Māori values, we welcome all cultures to reclaim time, identity, and wellbeing.";
const openGraphDescription =
  "Join Tai Ora, a wellbeing platform grounded in cultural values, authenticity, and aroha. Reclaim your time, identity, and wellbeing through community and connection.";
const twitterDescription =
  "Tai Ora is a cultural wellbeing platform rooted in authenticity, aroha, and community connection. Welcoming all cultures to live authentically.";
const ogImageUrl = "/api/og?mode=dark";

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
  title: siteTitle,
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
    "Māori values",
    "community wellbeing",
    "sustainable wellbeing",
  ],
  openGraph: {
    title: siteTitle,
    description: openGraphDescription,
    url: siteUrl,
    siteName: "Tai Ora",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
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
    images: [ogImageUrl],
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
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <AppLaunchBanner />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <CookieConsent />
          <CookieConsentScripts />
          <Toaster theme="dark" position="top-right" />
        </CookieConsentProvider>
      </body>
    </html>
  );
}

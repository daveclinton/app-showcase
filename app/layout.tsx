import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

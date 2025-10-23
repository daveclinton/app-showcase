import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tai Ora - Wellbeing Through Authenticity & Connection",
    default:
      "Tai Ora - A Wellbeing Platform for Authenticity, Connection & Aroha",
  },
  description:
    "Tai Ora is a wellbeing platform built on authenticity, connection, and aroha. Rooted in Māori values, we welcome all cultures to reclaim time, identity, and wellbeing.",
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
  authors: [{ name: "Tai Ora", url: "https://www.taiora.ai" }],
  generator: "Next.js",
  applicationName: "Tai Ora",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://www.taiora.ai",
  },
  openGraph: {
    title: "Tai Ora - Wellbeing Through Authenticity & Connection",
    description:
      "Join Tai Ora, a wellbeing platform grounded in cultural values, authenticity, and aroha. Reclaim your time, identity, and wellbeing through community and connection.",
    url: "https://www.taiora.ai",
    siteName: "Tai Ora",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.taiora.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tai Ora - Wellbeing Through Authenticity & Connection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Ora - Wellbeing Through Authenticity & Connection",
    description:
      "Tai Ora is a cultural wellbeing platform rooted in authenticity, aroha, and community connection. Welcoming all cultures to live authentically.",
    site: "@taiora",
    creator: "@taiora",
    images: ["https://www.taiora.ai/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

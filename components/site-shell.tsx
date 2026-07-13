"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

function isBlogPath(pathname: string) {
  return pathname === "/blog" || pathname.startsWith("/blog/");
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hideSiteHeader = isHome || isBlogPath(pathname);
  const hideSiteFooter = isHome;

  return (
    <div className="flex min-h-dvh flex-col">
      {hideSiteHeader ? null : <SiteHeader />}
      {isHome ? <HomeConnectLink /> : null}
      <div className="flex-1">{children}</div>
      {hideSiteFooter ? null : <Footer />}
    </div>
  );
}

function HomeConnectLink() {
  return (
    <Link
      href="/contact"
      className="fixed right-4 top-4 z-50 rounded-full border border-[#c97900] bg-[#000508]/70 px-4 py-2 text-sm font-semibold text-[#ffb51f] no-underline shadow-[0_12px_28px_rgba(0,0,0,0.34)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px md:right-6 md:top-6"
    >
      Let&apos;s Connect
    </Link>
  );
}

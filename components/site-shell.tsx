"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hideSiteFooter = isHome;

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      {hideSiteFooter ? null : <Footer />}
    </div>
  );
}

"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brand", label: "Brand" },
  { href: "/creators", label: "Creators" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/iwi-funders", label: "Iwi & Funders" },
  { href: "/blog", label: "Blog" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
  { href: "/waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Blog listing and article pages use their own navigation chrome.
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 text-[#f7f9f8] md:top-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex min-h-16 items-center justify-between gap-3 rounded-full border border-[#00e5d4]/20 bg-[#001014]/82 px-3 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.42),inset_0_0_28px_rgba(0,229,212,0.05)] backdrop-blur-xl md:px-4">
          <Link
            href="/"
            className="inline-flex min-h-11 shrink-0 items-center rounded-full px-3 text-lg font-semibold text-[#ffb51f] no-underline transition hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#00e5d4]/35 active:text-[#d88719] lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            Tai Ora
          </Link>

          <nav aria-label="Site navigation" className="hidden min-w-0 flex-1 lg:block">
            <ul className="flex min-w-0 items-center gap-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-full px-3 py-2 text-sm font-semibold no-underline transition focus-visible:ring-[3px] focus-visible:ring-[#00e5d4]/35 active:translate-y-px ${
                        isActive
                          ? "bg-[#ffb51f]/12 text-[#ffe3a4]"
                          : "text-[#d8e0df] hover:bg-[#00e5d4]/8 hover:text-[#ffb51f]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/contact"
            className="ml-auto hidden shrink-0 rounded-full border border-[#c97900] bg-[#000508]/70 px-4 py-2 text-sm font-semibold text-[#ffb51f] no-underline transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px sm:inline-flex"
          >
            Let&apos;s Connect
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[#00e5d4]/20 bg-[#000508]/70 text-[#ffb51f] transition hover:border-[#ffb51f]/55 hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#00e5d4]/35 active:translate-y-px lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mt-3 overflow-hidden rounded-[28px] border border-[#00e5d4]/20 bg-[#001014]/95 shadow-[0_18px_42px_rgba(0,0,0,0.42)] backdrop-blur-xl transition lg:hidden ${
            menuOpen
              ? "max-h-[620px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="p-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-base font-semibold no-underline transition focus-visible:ring-[3px] focus-visible:ring-[#00e5d4]/35 active:translate-y-px ${
                        isActive
                          ? "bg-[#ffb51f]/12 text-[#ffe3a4]"
                          : "text-[#d8e0df] hover:bg-[#00e5d4]/8 hover:text-[#ffb51f]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 sm:hidden">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl border border-[#c97900] bg-[#000508]/70 px-4 py-3 text-center text-base font-semibold text-[#ffb51f] no-underline transition hover:border-[#ffb51f] hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px"
                >
                  Let&apos;s Connect
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

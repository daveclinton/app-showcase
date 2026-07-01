"use client";

import { DrawerContent, HeaderDrawer } from "@/components/ui/responsive-header";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "IWI & Funders", href: "/iwi-and-funders" },
  { label: "Creators", href: "/creators" },
  { label: "Brand", href: "/brand" },
  { label: "About Us", href: "/about-us" },
  { label: "Partner", href: "/partner" },
  { label: "Blog", href: "/blog" },
  { label: "Business Card", href: "/business-card" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

const panels = [
  {
    title: "Aroha",
    className: "bg-[linear-gradient(135deg,var(--mauri-card),var(--mauri-sage))]",
  },
  {
    title: "Mauri",
    className: "bg-[linear-gradient(135deg,var(--mauri-muted),var(--mauri-card))]",
  },
  {
    title: "Ora",
    className: "bg-[linear-gradient(135deg,var(--mauri-gold),var(--mauri-mint))]",
  },
];

export function SiteHeader() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 pt-3 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-md p-3 text-foreground">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-taiora-gold-light no-underline transition-colors hover:text-mauri-mint focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-3xl"
          onClick={() => setHeaderOpen(false)}
        >
          Tai Ora
        </Link>

        <div className="flex items-center gap-2">
          <HeaderDrawer
            open={headerOpen}
            setOpen={setHeaderOpen}
            drawerBtn={() => (
              <button
                type="button"
                aria-label={headerOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={headerOpen}
                className="inline-flex size-10 items-center justify-center rounded-md bg-background/80 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-surface-active data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                data-state={headerOpen ? "open" : "closed"}
              >
                {headerOpen ? <X aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
              </button>
            )}
          >
            <DrawerContent>
              <div className="relative mx-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-y-auto rounded-md bg-background/95 p-4 text-foreground backdrop-blur-xl md:p-6">
                {!isDesktop ? (
                  <div className="absolute bottom-1 left-0 flex w-full justify-center">
                    <div className="my-4 h-[0.3rem] w-16 shrink-0 rounded-full bg-muted-foreground" />
                  </div>
                ) : null}

                <div className="mx-auto grid gap-4">
                  <div className="flex items-center justify-between pb-3">
                    {isDesktop ? (
                      <button
                        type="button"
                        aria-label="Close navigation"
                        className="flex size-10 items-center justify-center rounded-md bg-foreground text-background transition-colors hover:bg-mauri-mint focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-muted-foreground"
                        onClick={() => setHeaderOpen(false)}
                      >
                        <X aria-hidden="true" />
                      </button>
                    ) : (
                      <span className="size-10" aria-hidden="true" />
                    )}
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      Tai Ora
                    </h2>
                    <span className="size-10" aria-hidden="true" />
                  </div>

                  <div className="grid gap-6 py-2 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
                    <nav aria-label="Primary navigation">
                      <ul className="space-y-2 pr-0 text-lg font-semibold uppercase md:space-y-4 md:pr-8 md:text-2xl">
                        {navItems.map((item) => {
                          const isActive =
                            item.href === "/"
                              ? pathname === item.href
                              : pathname === item.href ||
                                pathname.startsWith(`${item.href}/`);

                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                  "relative flex w-fit items-center gap-2 text-foreground no-underline transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-link-hover hover:after:origin-bottom-left hover:after:scale-x-100 focus-visible:ring-[3px] focus-visible:ring-ring/50 active:text-mauri-mint",
                                  isActive &&
                                    "text-primary after:origin-bottom-left after:scale-x-100",
                                )}
                                onClick={() => setHeaderOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>

                    {isDesktop ? (
                      <div className="grid grid-cols-3 gap-4 py-4">
                        {panels.map((panel) => (
                          <figure
                            key={panel.title}
                            className={cn(
                              "group relative min-h-52 overflow-hidden rounded-md",
                              panel.className,
                            )}
                          >
                            <figcaption className="absolute bottom-3 left-3 rounded-md bg-background/75 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
                              {panel.title}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </DrawerContent>
          </HeaderDrawer>
          <Link
            href="/partner"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-extrabold text-white no-underline shadow-xs transition-colors hover:bg-primary-hover hover:text-white focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-primary-active active:text-white sm:px-5"
          >
            Lets Connect
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import { DrawerContent, HeaderDrawer } from "@/components/ui/responsive-header";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type SVGProps, useId, useState } from "react";

interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src: string;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Mauri", href: "https://mauri.taiora.ai/", external: true },
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
    image: "/app-screenshots/app-showcase-one.webp",
    alt: "Tai Ora app showcase screen",
  },
  {
    image: "/app-screenshots/brand.webp",
    alt: "Tai Ora glow journey screen",
  },
  {
    image: "/app-screenshots/browse-products.webp",
    alt: "Tai Ora trending products screen",
  },
];

function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  "aria-label": ariaLabel = "iPhone 15 Pro",
  ...props
}: Iphone15ProProps) {
  const clipPathId = useId().replace(/:/g, "");

  return (
    <svg
      aria-label={ariaLabel}
      fill="none"
      height={height}
      role="img"
      viewBox="0 0 433 882"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
      />
      <path
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
      />
      <path
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
      />
      <path
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
      />
      <path
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
      />
      <path
        className="fill-white dark:fill-[#262626]"
        d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
      />
      <path
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        opacity="0.5"
      />
      <path
        className="fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]"
        d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
      />
      <image
        clipPath={`url(#${clipPathId})`}
        height="843.5"
        href={src}
        preserveAspectRatio="xMidYMid slice"
        width="389.5"
        x="21.25"
        y="19.25"
      />
      <path
        className="fill-[#F5F5F5] dark:fill-[#262626]"
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
      />
      <path
        className="fill-[#F5F5F5] dark:fill-[#262626]"
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
      />
      <path
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
      />
      <defs>
        <clipPath id={clipPathId}>
          <rect height="843.5" rx="55.75" ry="55.75" width="389.5" x="21.25" y="19.25" />
        </clipPath>
      </defs>
    </svg>
  );
}

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
                            item.external
                              ? false
                              : item.href === "/"
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
                      <div className="grid grid-cols-3 gap-8 py-4">
                        {panels.map((panel) => (
                          <div key={panel.image} className="flex items-center justify-center">
                            <Iphone15Pro
                              src={panel.image}
                              aria-label={panel.alt}
                              className="h-auto w-full max-w-[13rem] drop-shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.03]"
                            />
                          </div>
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

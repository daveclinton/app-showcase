"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const dismissalKey = "taiora-app-launch-banner-dismissed";

const storeLinks = [
  {
    href: "#",
    icon: "/appstore.svg",
    kicker: "Download on the",
    label: "App Store",
  },
  {
    href: "#",
    icon: "/googleplay.svg",
    kicker: "Get it on",
    label: "Google Play",
  },
];

export function AppLaunchBanner() {
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(window.localStorage.getItem(dismissalKey) !== "true");
  }, []);

  useEffect(() => {
    const updatePosition = () => setAtTop(window.scrollY < 8);

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (!visible || !atTop || !bannerRef.current) {
      root.style.setProperty("--app-launch-banner-offset", "0px");
      return;
    }

    const updateOffset = () => {
      root.style.setProperty(
        "--app-launch-banner-offset",
        `${bannerRef.current?.offsetHeight ?? 0}px`,
      );
    };

    updateOffset();

    const resizeObserver = new ResizeObserver(updateOffset);
    resizeObserver.observe(bannerRef.current);

    return () => {
      resizeObserver.disconnect();
      root.style.setProperty("--app-launch-banner-offset", "0px");
    };
  }, [visible, atTop]);

  const dismiss = () => {
    window.localStorage.setItem(dismissalKey, "true");
    setVisible(false);
  };

  if (!visible || !atTop) {
    return null;
  }

  return (
    <aside
      aria-label="Tai Ora app launch announcement"
      className="fixed inset-x-0 top-0 z-[60]"
      ref={bannerRef}
    >
      <div className="flex w-full flex-col gap-3 bg-surface px-4 py-3 text-foreground shadow-2xl shadow-mauri-green-deep/30 backdrop-blur md:flex-row md:items-center md:justify-between md:gap-4 md:px-6">
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-sm font-semibold uppercase text-primary">
            Tai Ora is live
          </p>
          <p className="text-sm font-medium leading-6 text-muted-foreground md:text-base">
            We have launched on both the App Store and Google Play.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {storeLinks.map((store) => (
            <Button
              asChild
              key={store.label}
              variant="ghost"
              className="h-11 rounded-md bg-black px-3 text-white hover:bg-black/85 hover:text-white focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-black/75 active:text-white"
            >
              <Link
                href={store.href}
                aria-label={`${store.kicker} ${store.label}`}
                className="gap-2 no-underline"
              >
                <Image
                  src={store.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                  aria-hidden="true"
                />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[0.52rem] font-medium uppercase tracking-wide">
                    {store.kicker}
                  </span>
                  <span className="text-sm font-semibold">{store.label}</span>
                </span>
              </Link>
            </Button>
          ))}
          <Button
            type="button"
            aria-label="Dismiss app launch announcement"
            size="icon"
            variant="ghost"
            className="bg-background/70 text-foreground hover:bg-accent hover:text-accent-foreground active:bg-surface-active"
            onClick={dismiss}
          >
            <X aria-hidden="true" />
          </Button>
        </div>
      </div>
    </aside>
  );
}

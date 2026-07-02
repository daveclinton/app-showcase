"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const storeLinks = [
  {
    href: "https://apps.apple.com/ke/app/tai-ora/id6756413932",
    icon: "/appstore.svg",
    kicker: "Download on the",
    label: "App Store",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.taiora.app",
    icon: "/googleplay.svg",
    kicker: "Get it on",
    label: "Google Play",
  },
];

export function HomeHero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-background px-4 pt-28 text-foreground md:px-8 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--mauri-green-deep)_92%,black)_0%,var(--background)_48%,color-mix(in_srgb,var(--mauri-muted)_82%,black)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-[42rem] w-64 rounded-[50%] border border-primary/10 opacity-55 md:left-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-28 h-[32rem] w-36 rounded-[50%] border border-mauri-sage/10 opacity-60 md:left-8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-[34rem] w-[58rem] rotate-[-18deg] rounded-[50%] border-t border-primary/45 opacity-90"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-4 h-[25rem] w-[50rem] rotate-[-18deg] rounded-[50%] border-t border-mauri-sage/35 opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col items-center justify-center gap-8 py-8 text-center md:gap-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          className="flex w-full flex-col items-center gap-5"
        >
          <h1 className="text-balance text-6xl font-extrabold uppercase leading-[0.82] tracking-[0.16em] text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.18)] sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10.5rem]">
            Tai Ora
          </h1>
          <div className="flex w-full max-w-4xl items-center gap-5" aria-hidden="true">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-primary/25" />
            <span className="flex size-10 items-center justify-center rounded-full border border-primary text-primary">
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="size-7 rounded-full"
              />
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-primary to-primary/25" />
          </div>
          <p className="text-3xl font-extrabold uppercase leading-tight tracking-[0.42em] text-primary md:text-5xl">
            I see you
          </p>
          <p className="max-w-3xl text-balance text-lg font-medium leading-8 text-foreground md:text-2xl md:leading-10">
            Empowering people through{" "}
            <span className="text-mauri-sage">ethical, practical</span> and{" "}
            <span className="text-mauri-sage">supportive AI pathways.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3"
          aria-label="Download Tai Ora"
        >
          {storeLinks.map((store) => (
            <Button
              asChild
              key={store.label}
              variant="outline"
              className="h-16 rounded-md border-primary/65 bg-black/45 px-5 text-white shadow-lg shadow-black/20 backdrop-blur hover:border-primary hover:bg-surface-hover hover:text-white active:bg-surface-active active:text-white md:h-[4.5rem] md:px-7"
            >
              <Link
                href={store.href}
                aria-label={`${store.kicker} ${store.label}`}
                className="gap-3 no-underline"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={store.icon}
                  alt=""
                  width={34}
                  height={34}
                  className="size-8 md:size-9"
                  aria-hidden="true"
                />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[0.62rem] font-medium uppercase tracking-wide md:text-xs">
                    {store.kicker}
                  </span>
                  <span className="text-lg font-semibold md:text-2xl">{store.label}</span>
                </span>
              </Link>
            </Button>
          ))}
        </motion.div>

        <Button
          asChild
          variant="link"
          className="mt-2 h-auto flex-col gap-3 text-primary hover:text-link-hover active:text-mauri-mint"
        >
          <Link href="#ecosystem" className="no-underline">
            <span className="text-sm font-semibold">Scroll to explore</span>
            <ChevronDown aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

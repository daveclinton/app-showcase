"use client";

import { Button } from "@/components/ui/button";
import { radialPageBackground } from "@/lib/page-background";
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
    <section
      className="relative isolate min-h-svh overflow-hidden px-4 pt-28 text-foreground md:px-8 md:pt-32"
      style={radialPageBackground}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 z-0 h-[42rem] w-64 rounded-[50%] border border-primary/10 opacity-55 md:left-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-28 z-0 h-[32rem] w-36 rounded-[50%] border border-mauri-sage/10 opacity-60 md:left-8"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-5%] right-[-10%] z-0 w-[90%]"
        viewBox="0 0 800 800"
        fill="none"
      >
        <defs>
          <linearGradient id="goldFade" x1="0" y1="780" x2="780" y2="20">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="52%" stopColor="#f2c66d" />
            <stop offset="100%" stopColor="#fff2c9" />
          </linearGradient>
          <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 0 780 C 250 780, 500 550, 780 20"
          fill="none"
          stroke="url(#goldFade)"
          strokeWidth="1.8"
          filter="url(#glow)"
          opacity="0.95"
        />
        <path
          d="M 30 820 C 245 720, 500 515, 760 70"
          fill="none"
          stroke="url(#goldFade)"
          strokeWidth="1.2"
          filter="url(#glow)"
          opacity="0.68"
        />
        <path
          d="M 120 820 C 330 680, 545 470, 820 120"
          fill="none"
          stroke="url(#goldFade)"
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.52"
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-border"
      />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col items-center justify-center gap-8 py-8 text-center md:gap-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          className="flex w-full flex-col items-center gap-5"
        >
          <h1 className="text-balance text-6xl font-extrabold uppercase leading-[0.82] tracking-[0.16em] text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.18)] sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10.5rem]">
            <span aria-hidden="true">
              Tai{" "}
              <span className="relative inline-block">
                O
                <span
                  className="pointer-events-none absolute -right-[0.18em] top-[0.04em] size-[0.48em] rounded-full opacity-90 mix-blend-screen blur-[1px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,242,201,0.95) 0%, rgba(242,198,109,0.62) 36%, rgba(212,175,55,0.22) 62%, transparent 74%)",
                  }}
                />
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[0.08em] top-[0.12em] size-[0.26em] overflow-visible opacity-95 mix-blend-screen drop-shadow-[0_0_10px_rgba(242,198,109,0.9)]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 0.8L14.7 9.3L23.2 12L14.7 14.7L12 23.2L9.3 14.7L0.8 12L9.3 9.3L12 0.8Z"
                    fill="#fff2c9"
                  />
                  <path
                    d="M12 4.5L13.6 10.4L19.5 12L13.6 13.6L12 19.5L10.4 13.6L4.5 12L10.4 10.4L12 4.5Z"
                    fill="#f2c66d"
                  />
                </svg>
              </span>
              ra
            </span>
            <span className="sr-only">Tai Ora</span>
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

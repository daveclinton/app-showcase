"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

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

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background px-3 pb-6 pt-32 md:px-6 md:pb-24 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,color-mix(in_srgb,var(--mauri-sage)_24%,transparent),transparent_42%),radial-gradient(circle_at_88%_82%,color-mix(in_srgb,var(--mauri-gold)_14%,transparent),transparent_38%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="p-0 md:p-8 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto mb-8 flex w-fit justify-center md:mb-10"
          >
            <div className="animate-heartbeat relative flex size-32 items-center justify-center overflow-hidden rounded-full shadow-xl shadow-primary/70 ring-2 ring-primary/50 md:size-40">
              <div
                aria-hidden="true"
                className="animate-ping-slow absolute inset-0 rounded-full bg-gradient-to-br from-primary/35 to-mauri-sage/35"
              />
              <Image
                src="/logo.png"
                alt="Tai Ora"
                width={160}
                height={160}
                className="relative z-10 size-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-balance text-foreground uppercase"
          >
            I see You
          </motion.h1>

          <div className="mt-7 grid gap-8 md:mt-10 md:gap-10 lg:mt-16 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-stretch lg:gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex flex-col gap-5 lg:order-2 lg:min-h-[12.75rem] lg:max-w-md lg:justify-center lg:justify-self-end lg:gap-6"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="flex flex-wrap gap-3"
              >
                {storeLinks.map((store) => (
                  <Button
                    asChild
                    key={store.label}
                    variant="ghost"
                    className="h-14 rounded-md bg-black px-4 text-white hover:bg-black/85 hover:text-white focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-black/75 active:text-white"
                  >
                    <Link
                      href={store.href}
                      aria-label={`${store.kicker} ${store.label}`}
                      className="gap-2.5 no-underline"
                    >
                      <Image
                        src={store.icon}
                        alt=""
                        width={30}
                        height={30}
                        className="size-7"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col items-start leading-none">
                        <span className="text-[0.6rem] font-medium uppercase tracking-wide">
                          {store.kicker}
                        </span>
                        <span className="text-base font-semibold">{store.label}</span>
                      </span>
                    </Link>
                  </Button>
                ))}
              </motion.div>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-[17rem_22rem] md:items-stretch lg:order-1 lg:gap-5">
              <motion.figure
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-[4/3] w-full overflow-hidden bg-muted shadow-lg md:rounded-xl"
              >
                <Image
                  src="/left-hero.png"
                  alt="Portrait representing authentic wellbeing and connection"
                  fill
                  priority
                  sizes="(max-width: 767px) calc(100vw - 1.5rem), 17rem"
                  className="object-cover object-[center_20%]"
                />
              </motion.figure>

              <motion.aside
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="flex flex-col border border-border bg-surface p-5 shadow-sm md:rounded-xl md:p-6"
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                  className="text-lg font-medium leading-8 text-muted-foreground"
                >
                  Tai Ora helps people make informed wellbeing choices through
                  trusted video guidance and authentic real life product
                  journeys.
                </motion.p>
              </motion.aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

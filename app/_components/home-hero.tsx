"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-10 pt-28 md:pb-20 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--mauri-sage)_18%,transparent),transparent_36%),radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--mauri-gold)_16%,transparent),transparent_34%)]"
      />

      <div className="relative flex min-h-[calc(100svh-7rem)] w-full flex-col items-center justify-center overflow-hidden px-4 py-16 text-center md:px-8 md:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <div className="animate-heartbeat relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-xl shadow-primary/50 ring-2 ring-primary/50 md:size-20">
              <div
                aria-hidden="true"
                className="animate-ping-slow absolute inset-0 rounded-full bg-gradient-to-br from-primary/35 to-mauri-sage/35"
              />
              <Image
                src="/logo.png"
                alt="Tai Ora"
                width={80}
                height={80}
                className="relative z-10 size-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-1 sm:items-start sm:text-left">
              <p className="text-sm font-semibold uppercase text-primary">
                Wellbeing through authenticity
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Maori-led, values-aligned, and open to all cultures.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-normal text-balance text-foreground md:text-7xl"
            >
              I see you.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-lg font-medium leading-8 text-muted-foreground md:text-xl md:leading-9"
            >
              Tai Ora connects people, creators, brands, iwi, and funders through
              trusted wellbeing products that protect identity, build confidence,
              and make every recommendation feel human.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="flex flex-wrap justify-center gap-3"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Button asChild size="lg">
                <Link href="/creators" className="no-underline">
                  Explore creators
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/partner" className="no-underline">
                  Partner with Tai Ora
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/4PnOQZH9weU";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--mauri-sage)_18%,transparent),transparent_36%),radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--mauri-gold)_16%,transparent),transparent_34%)]"
      />

      <div className="relative flex min-h-[calc(100svh-6rem)] w-full items-center overflow-hidden px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 lg:grid-cols-[minmax(28rem,0.86fr)_minmax(36rem,1.14fr)] lg:items-center xl:gap-14">
          <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:items-start"
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
                  Mauri-led, values-aligned, and open to all cultures.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-5">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-4xl text-6xl font-extrabold leading-[0.9] tracking-normal text-balance text-foreground md:text-8xl lg:text-[6.5rem]"
              >
                I see you.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                className="max-w-2xl text-lg font-medium leading-8 text-muted-foreground md:text-xl md:leading-9 lg:max-w-xl"
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
              className="flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="flex flex-wrap justify-center gap-3 lg:justify-start"
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

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="overflow-hidden rounded-md bg-surface shadow-2xl shadow-mauri-green-deep/30 lg:justify-self-stretch"
          >
            <div className="relative aspect-video w-full">
              <iframe
                src={youtubeEmbedUrl}
                title="Tai Ora in action"
                className="absolute inset-0 size-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

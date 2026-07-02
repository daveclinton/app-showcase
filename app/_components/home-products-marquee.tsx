"use client";

import Link from "next/link";
import {
  BadgeCheck,
  BrainCircuit,
  ArrowRight,
  LucideIcon,
  HeartHandshake,
  Leaf,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    name: "Mauri",
    eyebrow: "Reflective wellbeing",
    description:
      "A guided space to pause, process your thoughts, and reconnect with what matters.",
    href: "https://mauri.taiora.ai/",
    image: "/app-screenshots/mauri-web.png",
    icon: Leaf,
  },
  {
    name: "Veevu",
    eyebrow: "Video-led discovery",
    description:
      "Short, human product previews that help people understand what they are choosing.",
    href: "/brand",
    image: "/app-screenshots/browse-products.webp",
    icon: PlayCircle,
  },
  {
    name: "iGLO",
    eyebrow: "Authentic reviews",
    description:
      "Real journey tracking and reviews that show impact beyond a single product moment.",
    href: "/creators",
    image: "/app-screenshots/discover.jpeg",
    icon: Sparkles,
  },
  {
    name: "Future AI Pathways",
    eyebrow: "Future readiness",
    description:
      "AI-supported pathways for discovering opportunities, building skills, and growing with confidence.",
    href: "/partner",
    image: "/app-screenshots/app-showcase-one.webp",
    icon: BrainCircuit,
  },
];

const principles = [
  {
    title: "Mauri-led",
    description: "Rooted in Te Tiriti values and designed with matauranga Mauri.",
    icon: HeartHandshake,
  },
  {
    title: "Ethical AI",
    description: "AI that supports people without taking away agency or context.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted and safe",
    description: "Privacy-first experiences where data is protected and never sold.",
    icon: ShieldCheck,
  },
  {
    title: "People first",
    description: "Technology shaped around connection, wellbeing, and real potential.",
    icon: Users,
  },
];

type EcosystemCard = {
  title: string;
  eyebrow: string;
  description: string;
  href?: string;
  icon: LucideIcon;
};

const ecosystemCards: EcosystemCard[] = [
  ...products.map((product) => ({
    title: product.name,
    eyebrow: product.eyebrow,
    description: product.description,
    href: product.href,
    icon: product.icon,
  })),
  ...principles.map((principle) => ({
    title: principle.title,
    eyebrow: "Tai Ora principle",
    description: principle.description,
    icon: principle.icon,
  })),
];

const autoplayDuration = 5000;

function EcosystemCard({
  title,
  eyebrow,
  description,
  href,
  icon: Icon,
}: EcosystemCard) {
  const cardContent = (
    <Card className="relative h-full w-full cursor-pointer gap-0 overflow-hidden rounded-md border border-border bg-surface p-0 text-foreground shadow-none ring-0 [--card-spacing:0px] transition-[background-color,border-color] hover:border-primary/45 hover:bg-surface-hover active:bg-surface-active">
      <span className="absolute top-3 right-3 z-10 rounded-md bg-primary px-2.5 py-1 text-[0.65rem] font-bold uppercase leading-none text-primary-foreground shadow-md">
        {eyebrow}
      </span>
      <CardContent className="flex min-h-40 flex-1 flex-col p-5">
        <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
          <Icon aria-hidden="true" />
        </span>
        <h3
          className="mt-2 overflow-hidden pr-20 text-base font-semibold leading-5 text-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
          title={title}
        >
          {title}
        </h3>
        <p
          className="mt-1 overflow-hidden text-sm font-medium leading-5 text-foreground/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
          title={description}
        >
          {description}
        </p>

        <div className="mt-auto flex justify-end pt-2">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-link transition-colors group-hover:text-link-hover group-active:text-mauri-mint">
            Learn more
            <ArrowRight aria-hidden="true" />
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="group flex h-full items-center justify-center">
      {href ? (
        <Link
          href={href}
          className="block h-full w-full rounded-md no-underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {cardContent}
        </Link>
      ) : (
        <div className="h-full w-full">{cardContent}</div>
      )}
    </div>
  );
}

export function HomeProductsMarquee() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const startedAtRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const resetProgress = () => {
      startedAtRef.current = performance.now();
      setProgress(0);
    };

    const tick = (timestamp: number) => {
      if (startedAtRef.current === null) {
        startedAtRef.current = timestamp;
      }

      const elapsed = timestamp - startedAtRef.current;
      const nextProgress = Math.min(elapsed / autoplayDuration, 1);
      setProgress(nextProgress);

      if (elapsed >= autoplayDuration) {
        carouselApi.scrollNext();
        startedAtRef.current = timestamp;
        setProgress(0);
      }

      frameRef.current = window.requestAnimationFrame(tick);
    };

    resetProgress();
    carouselApi.on("select", resetProgress);
    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      carouselApi.off("select", resetProgress);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
    };
  }, [carouselApi]);

  const progressDegrees = progress * 360;

  return (
    <section className="overflow-hidden bg-background px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-extrabold leading-tight text-balance text-foreground md:text-6xl">
            Our ecosystem
          </h2>

          <div
            aria-label={`${Math.round(progress * 100)}% until next ecosystem slide`}
            className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-surface text-primary shadow-sm"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(var(--primary) ${progressDegrees}deg, color-mix(in srgb, var(--primary) 18%, transparent) 0deg)`,
              }}
            />
            <div className="relative flex size-11 items-center justify-center rounded-full bg-background">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            </div>
          </div>
        </div>

        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-stretch">
            {ecosystemCards.map((card) => (
              <CarouselItem
                key={card.title}
                className="flex pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <EcosystemCard {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden bg-surface text-foreground hover:bg-surface-hover active:bg-surface-active md:inline-flex" />
          <CarouselNext className="hidden bg-surface text-foreground hover:bg-surface-hover active:bg-surface-active md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}

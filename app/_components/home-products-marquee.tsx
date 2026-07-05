import { Card, CardContent } from "@/components/ui/card";
import { radialPageBackground } from "@/lib/page-background";
import {
  ArrowRight,
  BarChart3,
  Heart,
  Leaf,
  Lock,
  Play,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Mauri",
    description: "Pause, reflect and process your thoughts.",
    href: "https://mauri.taiora.ai/",
    image: "/app-screenshots/mauri-web.png",
    icon: Leaf,
  },
  {
    name: "Veevu",
    description: "Short product video previews.",
    href: "/brand",
    image: "/app-screenshots/browse-products.webp",
    icon: Play,
  },
  {
    name: "iGLO",
    description: "Track your journey with real authentic reviews.",
    href: "/creators",
    image: "/app-screenshots/discover.jpeg",
    icon: BarChart3,
  },
  {
    name: "Future AI Pathways",
    description: "Discover opportunities and build the skills for what's next.",
    href: "/partner",
    image: "/app-screenshots/app-showcase-one.webp",
    icon: Sparkles,
  },
];

const principles = [
  {
    title: "Mauri led",
    description: "Rooted in Te Tiriti values and designed with matauranga Mauri.",
    icon: Sparkles,
  },
  {
    title: "Ethical AI",
    description: "AI that empowers, supports and uplifts people, not replaces.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted and safe",
    description: "Your privacy is yours. Your data is protected and never sold.",
    icon: Lock,
  },
  {
    title: "People first",
    description: "Technology that strengthens connection, wellbeing and potential.",
    icon: Heart,
  },
];

type ProductCard = {
  name: string;
  description: string;
  href: string;
  image: string;
  icon: LucideIcon;
};

function EcosystemProductCard({
  name,
  description,
  href,
  image,
  icon: Icon,
}: ProductCard) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-md no-underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Card className="relative h-full min-h-[25rem] overflow-hidden rounded-md border border-border bg-surface p-0 text-foreground shadow-none transition-[background-color,border-color,transform] hover:-translate-y-1 hover:border-primary/55 hover:bg-surface-hover active:translate-y-0 active:bg-surface-active">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-45 transition-opacity group-hover:opacity-55"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,76,69,0.18),rgba(0,18,16,0.82)_64%,rgba(0,18,16,0.94))]"
        />
        <CardContent className="relative flex h-full min-h-[25rem] flex-col items-center px-6 py-8 text-center">
          <span className="flex size-20 items-center justify-center rounded-full border border-primary/25 bg-background/75 text-primary shadow-2xl shadow-black/30 ring-1 ring-mauri-sage/20 backdrop-blur">
            <Icon aria-hidden="true" />
          </span>
          <h3 className="mt-10 text-2xl font-semibold uppercase leading-tight tracking-[0.2em] text-mauri-sage">
            {name}
          </h3>
          <span className="mt-4 h-px w-10 bg-primary" aria-hidden="true" />
          <p className="mt-8 text-balance text-lg font-medium leading-8 text-white">
            {description}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-8 text-base font-semibold text-link transition-colors group-hover:text-link-hover group-active:text-mauri-mint">
            Learn more
            <ArrowRight aria-hidden="true" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

export function HomeProductsMarquee() {
  return (
    <section
      id="ecosystem"
      className="px-4 py-16 text-foreground md:px-8 md:py-20"
      style={radialPageBackground}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.45em] text-primary">
            Discover the
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold uppercase leading-tight tracking-[0.24em] text-foreground md:text-5xl">
            Tai Ora Ecosystem
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <EcosystemProductCard key={product.name} {...product} />
          ))}
        </div>

        <div className="grid gap-6 rounded-md border border-border bg-surface/45 p-6 md:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {principles.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-background/65 text-primary">
                <Icon aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold uppercase leading-6 text-mauri-sage">
                  {title}
                </h3>
                <p className="text-sm font-medium leading-6 text-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

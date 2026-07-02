import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Marquee } from "@/components/shadcn-space/animations/marquee";

const products = [
  {
    name: "Mauri",
    description: "Pause, reflect, and process your thoughts.",
    action: "Learn more",
  },
  {
    name: "Veevu",
    description: "Short product video previews.",
  },
  {
    name: "iGLO",
    description: "Track your journey with real, authentic reviews.",
  },
  {
    name: "Future AI Pathways",
    description: "Discover opportunities and build the skills for what's next.",
  },
  {
    name: "Maori Led",
    description:
      "Rooted in Te Tiriti values and designed with matauranga Maori.",
  },
  {
    name: "Ethical AI",
    description: "AI that empowers, supports, and uplifts people.",
  },
  {
    name: "Trusted and Safe",
    description: "Your privacy is yours. Your data is protected and never sold.",
  },
  {
    name: "People First",
    description:
      "Technology that strengthens connection, wellbeing, and potential.",
  },
];

const firstRow = products.slice(0, products.length / 2);
const secondRow = products.slice(products.length / 2);

function ProductCard({
  name,
  description,
  action,
}: {
  name: string;
  description: string;
  action?: string;
}) {
  return (
    <Card className="h-full w-72 border-border bg-surface shadow-none transition-[background-color,border-color,transform] hover:border-primary/40 hover:bg-surface-hover active:bg-surface-active">
      <CardHeader className="flex grid-cols-none flex-row items-center gap-3">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-background ring-1 ring-primary/30">
          <Image
            src="/logo.png"
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <CardTitle className="truncate text-base font-semibold text-foreground">
            {name}
          </CardTitle>
          {action ? (
            <CardDescription className="text-xs font-medium text-link">
              {action}
            </CardDescription>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export function HomeProductsMarquee() {
  return (
    <section className="overflow-hidden bg-background px-3 py-14 md:px-6 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="max-w-3xl px-1 md:px-0">
          <p className="text-sm font-semibold uppercase text-primary">
            Tai Ora ecosystem
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-balance text-foreground md:text-5xl">
            Products and principles built around people.
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:26s]">
            {firstRow.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:26s]">
            {secondRow.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}

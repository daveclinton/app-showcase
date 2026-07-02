import { Button } from "@/components/ui/button";
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

export function HomeAppStrip() {
  return (
    <section className="bg-primary px-6 py-14 text-primary-foreground md:px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-normal">
            Own AI in your Sound
          </p>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-balance md:text-6xl">
            Guided by values, grounded in culture and wellbeing.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          {storeLinks.map((store) => (
            <Button
              asChild
              key={store.label}
              variant="ghost"
              className="h-14 rounded-md bg-black px-4 text-white hover:bg-black/85 hover:text-white focus-visible:ring-[3px] focus-visible:ring-background/50 active:bg-black/75 active:text-white"
            >
              <Link
                href={store.href}
                aria-label={`${store.kicker} ${store.label}`}
                className="gap-2.5 no-underline"
                target="_blank"
                rel="noreferrer"
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
        </div>
      </div>
    </section>
  );
}

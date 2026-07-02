import { HomeHero } from "./_components/home-hero";
import { HomeProductsMarquee } from "./_components/home-products-marquee";

const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/4PnOQZH9weU";

function HomeVideoSection() {
  return (
    <section className="bg-background px-4 pb-20 pt-6 text-foreground md:px-8 md:pb-28 md:pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.36em] text-primary">
            Watch Tai Ora
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            People, purpose and ethical AI in motion.
          </h2>
        </div>

        <div className="overflow-hidden rounded-md border border-border bg-surface shadow-2xl shadow-mauri-green-deep/35">
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
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HomeHero />
      <HomeProductsMarquee />
      <HomeVideoSection />
    </main>
  );
}

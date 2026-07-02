import { HomeHero } from "./_components/home-hero";
import { HomeProductsMarquee } from "./_components/home-products-marquee";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HomeHero />
      <HomeProductsMarquee />
    </main>
  );
}

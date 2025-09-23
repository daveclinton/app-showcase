import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="mx-auto relative">
          <HeroSection />
        </main>
      </div>
    </div>
  );
}

import AboutSection from "@/components/about-section";
import { Footer } from "@/components/footer";
import FounderSection from "@/components/founder-section";
import HeroSection from "@/components/hero-section";
import InnovationsSection from "@/components/innovations-section";
import { ValuesSection } from "@/components/values-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <InnovationsSection />

      <ValuesSection />
      <Footer />
    </>
  );
}

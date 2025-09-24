import { DashboardPreview } from "@/components/dashboard-preview";
import { HeroSection } from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <DashboardPreview />
      <HowItWorks />
    </div>
  );
}

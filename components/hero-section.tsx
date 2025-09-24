import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "./header";
import BackgroundSvg from "./background";
import { AnimatedSection } from "./animated-section";
import { DashboardPreview } from "./dashboard-preview";

export function HeroSection() {
  return (
    <section
      className="relative bg-[#006666] mx-auto rounded-2xl overflow-hidden my-8 px-4 w-full 
                 max-w-[1220px] min-h-[500px] md:min-h-[600px] lg:min-h-[810px] flex flex-col"
    >
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div
        className="relative z-10 flex flex-[0.5] flex-col justify-center text-center px-4
                   space-y-6 md:space-y-7 lg:space-y-8"
      >
        <BackgroundSvg />
        <Link
          href="https://vercel.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-secondary-foreground 
                             hover:bg-secondary/90 px-8 py-6 rounded-full font-medium text-base 
                             shadow-lg ring-1 ring-white/10"
          >
            Download Now
          </Button>
        </Link>

        <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
          Match with your true customers
        </h1>

        <p className="text-white text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto">
          Partner with Tai Ora to showcase your products through authentic
          previews and real journeys that build trust and loyalty.
        </p>
      </div>
      <AnimatedSection>
        <DashboardPreview />
      </AnimatedSection>
    </section>
  );
}

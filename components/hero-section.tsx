import { ArrowUpRight } from "lucide-react";
import React from "react";
import BackgroundSvg from "./background";

export function HeroSection() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-amber-400 text-black px-6 py-3 rounded-full mb-8 font-medium hover:bg-amber-500 transition-colors cursor-pointer">
        Download App
        <ArrowUpRight className="w-4 h-4" />
      </div>

      <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
        Match with your
        <br />
        true customers
      </h1>

      <p className="text-gray-200 text-lg lg:text-xl max-w-2xl mx-auto text-balance">
        iGlo™ allows creators to journal authentic experiences and monetise
        their reviews.
      </p>
    </div>
  );
}

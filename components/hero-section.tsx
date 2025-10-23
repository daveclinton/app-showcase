"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 max-w-7xl mx-auto max-h-[650px]">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Sell your products on Tai Ora — free for your first two months!
            </h1>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed max-w-lg">
              Join by <span className="font-semibold">10 November 2025</span>{" "}
              and be part of our early access launch. Discover conscious deals,
              wellbeing insights, and real stories from creators who value truth
              and clarity.
            </p>
          </div>

          <div className="pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base transition-colors">
              Join Free Now
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-3 gap-4 auto-rows-max">
            <div className="col-span-1 row-span-2">
              <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/veevo.png"
                  alt="Creator sharing journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-foreground text-background rounded-2xl p-4 shadow-md h-full flex flex-col justify-center">
                <div className="flex gap-1 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary text-primary"
                    />
                  ))}
                  <Star size={18} className="text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold">Creators love Tai Ora!</p>
              </div>
            </div>

            <div className="col-span-2">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/veevo.png"
                  alt="Ethical brand connection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-primary rounded-2xl h-40 shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2 text-primary-foreground">
                    🎯
                  </div>
                  <p className="text-xs font-semibold text-primary-foreground">
                    Early Access
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-2">
              <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/veevo.png"
                  alt="Conscious shopping experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-foreground text-background rounded-2xl p-4 shadow-md h-full flex flex-col justify-between">
                <div className="flex gap-1 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold">Kathryn Murphy</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-primary rounded-2xl h-24 shadow-lg flex items-center justify-center">
                <p className="text-primary-foreground font-bold text-center px-2">
                  +20% Conversion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

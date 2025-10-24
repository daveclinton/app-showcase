"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-background text-foreground overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:max-h-[650px]">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 max-w-2xl mx-auto lg:ml-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Brand & Creators! Sell your products on Tai Ora
            </h1>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed max-w-lg">
              Join by <span className="font-semibold">10 November 2025</span>{" "}
              and be part of our early access launch.
            </p>
          </div>

          <div className="pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base transition-colors">
              Join Free Now
            </Button>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="relative right-0 lg:right-[-8%] bg-card rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm">
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
                  <p className="text-sm font-semibold">
                    Creators love Tai Ora!
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/left-hero.png"
                    alt="Ethical brand connection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/jebet.gif"
                    alt="Early Access Promotion"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="col-span-1 row-span-2">
                <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/one.png"
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
      </div>
    </section>
  );
}

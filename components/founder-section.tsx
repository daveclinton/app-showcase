"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="w-full bg-muted/60 text-foreground py-10 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Image */}
        <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shadow-md flex-shrink-0">
          <Image
            src="/founder.jpg"
            alt="Tania Pickering, Founder of Tai Ora"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <p className="text-base sm:text-lg text-foreground/90 italic leading-relaxed">
            “Tai Ora is designed to help people feel seen, supported, and
            empowered in their wellbeing journey.”
          </p>
          <p className="text-sm font-semibold text-foreground/80">
            — Tania Pickering, Founder
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            Learn more about our story <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-muted text-foreground mt-10 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20">
        <div className="relative bg-primary rounded-3xl p-4 sm:p-6 md:p-8 flex items-center justify-center">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/discover.png"
              alt="Tai Ora Platform Overview"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="space-y-6 max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What is Tai Ora?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
            Tai Ora is a digital wellbeing platform that connects users with
            trustworthy creators and ethical brands. We cut through the
            influencer hype to deliver clarity, authenticity, and collective
            wellbeing through innovative tools like{" "}
            <span className="font-semibold">VeeVu™</span> and{" "}
            <span className="font-semibold">iGlo™</span>.
          </p>

          <div className="pt-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Purpose</h3>
              <p className="text-foreground/80">
                Empowering authentic voices for collective wellbeing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Vision</h3>
              <p className="text-foreground/80">
                A world where trust guides every choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

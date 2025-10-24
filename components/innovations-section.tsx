"use client";
import "swiper/css/autoplay";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function InnovationsSection() {
  const mockups = [
    { src: "/veevo-mockup.png", alt: "VeeVu mockup on phone" },
    { src: "/mock-2.png", alt: "VeeVu interface preview" },
    { src: "/mock-3.png", alt: "iGlo interface preview" },
    { src: "/product.png", alt: "iGlo interface preview" },
    { src: "/wall-sign.png", alt: "iGlo interface preview" },
    { src: "/billboard.png", alt: "iGlo interface preview" },
  ];

  return (
    <section className="w-full bg-background text-foreground py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Innovations
          </h2>

          <div className="bg-muted rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/Veevu.png"
                alt="VeeVu logo"
                width={36}
                height={36}
                className="object-contain rounded-full"
              />
              <h3 className="text-xl font-semibold">VeeVu™</h3>
            </div>
            <p className="text-base text-foreground/90 mb-3">
              Watch authentic previews through VeeVu™ — see product benefits in
              seconds, no hype.
            </p>
            <p className="text-sm text-foreground/80">
              Instantly transforms long product videos into short, powerful
              previews that highlight what truly matters. No gimmicks, just
              clear, authentic insights.
            </p>
          </div>

          {/* iGlo card */}
          <div className="bg-muted rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/iGloIcon.png"
                alt="iGlo logo"
                width={36}
                height={36}
                className="object-contain rounded-full"
              />
              <h3 className="text-xl font-semibold">iGlo™</h3>
            </div>
            <p className="text-base text-foreground/90 mb-3">
              Follow trustworthy journeys on iGlo™ — capture reflections,
              photos, and progress over time.
            </p>
            <p className="text-sm text-foreground/80">
              Document your full product journey with photos, notes, and
              reflections. Creates an AI-verified record of real results,
              building trust and offering authentic proof.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[450px] rounded-3xl bg-primary p-3 shadow-lg flex items-center justify-center">
            <Swiper
              key="innovations-swiper"
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.5}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-white !opacity-100",
              }}
              className="w-full h-full"
            >
              {mockups.map((mock, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={mock.src}
                      alt={mock.alt}
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

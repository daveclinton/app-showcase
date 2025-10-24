"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeroSection() {
  const reviews = [
    {
      name: "Tania Pickering",
      avatar: "/founder.jpg",
      comment:
        "Tai Ora is designed to help people feel seen, supported, and empowered in their wellbeing journey.",
      rating: 5,
    },
    {
      name: "Jacob Lee",
      avatar: "/avatar2.jpg",
      comment: "Finally a platform that values creators. Highly recommend.",
      rating: 4,
    },
    {
      name: "Emily Stone",
      avatar: "/avatar3.jpg",
      comment: "Easy setup and great support team. Perfect for small brands.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-background text-foreground overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:max-h-[650px]">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 max-w-2xl mx-auto lg:ml-0">
          <div className="flex items-center mb-2">
            <Image
              src="/logo.png"
              alt="Tai Ora Logo"
              width={80}
              height={80}
              className="object-contain rounded-full"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              I SEE YOU
            </h1>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed max-w-lg">
              Tai Ora connects creators, brands and users through authentic
              product journeys, with{" "}
              <span className="font-semibold">VeeVu™</span> previews and{" "}
              <span className="font-semibold">iGlo™</span> reviews that help
              people choose with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base transition-colors">
              I am a Creator
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 rounded-lg font-semibold text-base border-2"
            >
              I am a Brand
            </Button>
          </div>
        </div>

        {/* Right content */}
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
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full"
                  >
                    {reviews.map((review, i) => (
                      <SwiperSlide key={i}>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                          <div className="flex flex-col">
                            <div className="flex gap-1 mb-1 justify-center sm:justify-start">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className="fill-primary text-primary"
                                />
                              ))}
                              {[...Array(5 - review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className="text-muted-foreground"
                                />
                              ))}
                            </div>
                            <p className="text-sm font-semibold">
                              {review.name}
                            </p>
                            <p className="text-xs mt-1 text-background/80">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="col-span-2">
                <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/left-hero.png"
                    alt="Ethical brand connection"
                    fill
                    className="object-cover"
                    unoptimized
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
                    unoptimized
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
                <div className="bg-gradient-to-br from-pink-300 via-rose-200 to-purple-200 rounded-2xl h-40 shadow-lg flex flex-col items-center justify-center overflow-hidden">
                  <p className="text-foreground font-bold text-sm text-center z-10">
                    Level up your business
                  </p>

                  <div className="absolute inset-0">
                    <span className="absolute top-4 left-6 text-3xl animate-bounce-slow">
                      💅
                    </span>
                    <span className="absolute bottom-6 right-5 text-4xl animate-bounce">
                      💄
                    </span>
                    <span className="absolute top-10 right-12 text-3xl animate-bounce-slower">
                      🌸
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="bg-[#F9F37B] rounded-2xl h-24 shadow-lg flex items-center justify-center">
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

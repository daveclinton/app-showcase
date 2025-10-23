"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-[600px] overflow-hidden flex items-center justify-center">
      <div
        className="relative h-full w-full rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/founder.jpg')",
        }}
      >
        <div className="relative z-20 flex flex-col items-start mt-45 lg:mt-20 h-full text-white px-10 md:px-20 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Creators and Communities
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Connecting culture, creativity, and wellbeing through shared stories
            and meaningful innovation.
          </p>
          <Button className="bg-[#EFBF04] text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-lg">
            Join Us Today
          </Button>
        </div>

        <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-white rounded-bl-3xl overflow-visible flex items-center justify-center">
          <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-lg shadow-amber-400/70 ring-2 ring-amber-300/50">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
            <Image
              src="/logo.png"
              alt="Tai Ora logo"
              fill
              className="object-cover relative z-10"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[30%] w-[45%] bg-white rounded-tr-3xl overflow-visible flex items-center justify-center">
          <div className="flex items-center bg-[#004C45] text-white rounded-2xl px-6 py-4 shadow-lg max-w-md z-20 space-x-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/veevo.png"
                alt="Wellbeing"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold">Nurturing Wellbeing</h3>
              <p className="text-sm opacity-90">
                Grounded in authenticity, aroha, and community connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-[600px]  overflow-hidden flex items-center justify-center">
      <div
        className="relative h-full w-full rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/founder.jpg')",
        }}
      >
        <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-white rounded-bl-3xl overflow-visible">
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-teal-600 z-10" />
        </div>
        <div className="absolute bottom-0 left-0 h-[30%] w-[45%] bg-white rounded-tr-3xl overflow-visible">
          <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-teal-600 z-10" />
        </div>
      </div>
    </section>
  );
}

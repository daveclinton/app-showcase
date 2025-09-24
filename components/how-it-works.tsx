"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Upload, Sparkles, LineChart } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto  mb-16">
        <h1 className="text-5xl font-bold">How It Works</h1>
        <p className="text-gray-200 mt-4 text-lg">
          A simple process to turn your uploads into engaging previews.
        </p>
      </div>
      <div className="grid lg:grid-cols-2  gap-32 items-center">
        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative"
          >
            <Image
              src="/how-it-works.png"
              alt="Mobile app mockup showing money transfer interface"
              width={500}
              height={1000}
            />
          </motion.div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-balance">
              Different uploads. Different outcomes.
            </h2>
            <p className="text-gray-200 text-lg text-pretty">
              Create meaningful previews designed for product pages, ads and
              quick decisions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <Upload className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Upload your video
                </h3>
                <p className="text-gray-200">
                  Share product benefits, usage and your authentic experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Auto create VeeVu™
                </h3>
                <p className="text-gray-200">
                  A short, engaging preview that showcases product highlights.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <LineChart className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  iGlo™ journey built
                </h3>
                <p className="text-gray-200">
                  A full, AI-verified record showing truthful results over time.
                </p>
              </div>
            </div>
          </div>
          <Button className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-5 rounded-full font-medium">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}

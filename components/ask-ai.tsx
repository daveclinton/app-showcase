"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl font-bold">Ask AI</h1>
        <p className="text-gray-200 mt-4 text-lg">
          Smarter answers and faster insights — launching soon.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Coming Soon</h2>
            <p className="text-gray-200 text-lg">
              We’re building something powerful. Stay tuned for AI-driven
              answers, data insights, and more.
            </p>
          </div>
          <Button
            disabled
            className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-5 rounded-full font-medium"
          >
            <Clock className="w-5 h-5" />
            Available Soon
          </Button>
        </div>

        <div className="flex shadow-2xl p-10 rounded-2xl justify-center lg:justify-end">
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
              src="/ask-ai.png"
              alt="Ask AI preview"
              width={800}
              height={1000}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

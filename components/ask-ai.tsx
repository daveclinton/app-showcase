"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Upload, Sparkles, LineChart } from "lucide-react";

export default function AskAI() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl font-bold">Ask AI</h1>
        <p className="text-gray-200 mt-4 text-lg">
          Get instant answers and insights powered by AI.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-balance">
              Smarter answers. Faster decisions.
            </h2>
            <p className="text-gray-200 text-lg text-pretty">
              Use AI to ask questions, explore data, and uncover insights in
              seconds.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <Upload className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload your data</h3>
                <p className="text-gray-200">
                  Bring in files, notes, or context for AI to analyze instantly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ask anything</h3>
                <p className="text-gray-200">
                  Get clear, AI-driven answers to your most important questions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <LineChart className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Track insights</h3>
                <p className="text-gray-200">
                  Review patterns and trends with AI-verified results over time.
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-5 rounded-full font-medium">
            Ask AI Now
          </Button>
        </div>
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
              src="/ask-ai.png"
              alt="Ask AI interface preview"
              width={800}
              height={1000}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

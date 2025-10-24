"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function TaiOraAlertBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  if (pathname !== "/" || !isVisible) return null;

  return (
    <div className="w-full bg-[#F9F37B] text-gray-900 shadow-md border-b border-yellow-300 animate-slideDown">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base font-medium">
            Tai Ora connects creators, brands, and users through authentic
            product journeys. Join by{" "}
            <span className="font-semibold text-gray-800">
              10 November 2025
            </span>{" "}
            and be part of our early access launch.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-gray-900 text-[#F9F37B] hover:bg-gray-800 font-semibold px-6 py-2 rounded-md transition"
          >
            Join Free Now
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="h-8 w-8 flex items-center justify-center text-gray-900 hover:bg-gray-800/10 rounded-md transition"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

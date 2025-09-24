import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="text-xl font-semibold">Tai Ora</div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-white transition-colors">
            HOME
          </a>
          <a href="#" className="text-white hover:text-white transition-colors">
            IWI & FUNDERS
          </a>
          <a href="#" className="text-white hover:text-white transition-colors">
            CREATORS
          </a>
          <a href="#" className="text-white hover:text-white transition-colors">
            BRAND
          </a>
        </nav>

        <Button
          variant="secondary"
          className="bg-white text-gray-800 hover:bg-gray-100 rounded-full px-6"
        >
          Sign Up
        </Button>
      </header>
      <main className="px-6 lg:px-12 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-black px-6 py-3 rounded-full mb-8 font-medium hover:bg-amber-500 transition-colors cursor-pointer">
              Download App
              <ArrowUpRight className="w-4 h-4" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
              Match with your
              <br />
              true customers
            </h1>

            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto text-balance">
              iGlo™ allows creators to journal authentic experiences and
              monetise their reviews.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/tai-hero-image.png"
                alt="Pays_e mobile app interface showing money transfer features, account balance, and portfolio management"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import { Button } from "./ui/button";
import { Shield, Zap, Globe } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Transfer money with confidence
            </h2>
            <p className="text-gray-400 text-lg text-pretty">
              Experience seamless money transfers with bank-level security,
              instant notifications, and competitive exchange rates. Send money
              globally in seconds, not days.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Bank-level Security
                </h3>
                <p className="text-gray-400">
                  Your money and data are protected with enterprise-grade
                  encryption and fraud detection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Instant Transfers
                </h3>
                <p className="text-gray-400">
                  Send money instantly to friends, family, or businesses
                  worldwide with just a few taps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400/20 p-3 rounded-full">
                <Globe className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-400">
                  Transfer to over 200 countries with competitive exchange rates
                  and low fees.
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-3 rounded-full font-medium">
            Get Started Today
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/how-it-works.png"
              alt="Mobile app mockup showing money transfer interface"
              width={500}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

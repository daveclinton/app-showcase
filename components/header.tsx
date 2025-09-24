import type React from "react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
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
  );
}

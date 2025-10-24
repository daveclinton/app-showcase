"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-12 bg-background text-foreground relative">
      <div className="text-xl font-semibold text-foreground">Tai Ora</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          HOME
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          IWI & FUNDERS
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          CREATORS
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          BRAND
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          ABOUT US
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          PARTNERS
        </a>
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Button
          variant="secondary"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
        >
          Download App
          <Download className="ml-2" size={18} />
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center text-foreground focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-t border-border flex flex-col items-start p-6 space-y-4 md:hidden z-50">
          <a
            href="#"
            className="w-full text-foreground hover:text-primary transition-colors"
          >
            HOME
          </a>
          <a
            href="#"
            className="w-full text-foreground hover:text-primary transition-colors"
          >
            IWI & FUNDERS
          </a>
          <a
            href="#"
            className="w-full text-foreground hover:text-primary transition-colors"
          >
            CREATORS
          </a>
          <a
            href="#"
            className="w-full text-foreground hover:text-primary transition-colors"
          >
            BRAND
          </a>
          <a
            href="#"
            className="w-full text-foreground hover:text-primary transition-colors"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="w-full text-foreground hover:text-primary transition-colors"
          >
            PARTNERS
          </a>
          <Button
            variant="secondary"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 w-full"
          >
            Download App
            <Download className="ml-2" size={18} />
          </Button>
        </div>
      )}
    </header>
  );
}

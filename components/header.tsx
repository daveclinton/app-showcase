import type React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-12 bg-background text-foreground">
      <div className="text-xl font-semibold text-foreground">Tai Ora</div>
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
      </nav>
      <Button
        variant="secondary"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
      >
        Sign Up
        <ExternalLink />
      </Button>
    </header>
  );
}

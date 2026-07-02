import { CookieSettingsLink } from "@/components/cookie-consent/cookie-settings-link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/iwi-and-funders", label: "IWI & Funders" },
  { href: "/creators", label: "Creators" },
  { href: "/brand", label: "Brand" },
  { href: "/about-us", label: "About Us" },
  { href: "/partner", label: "Partner" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

const actionLinks = [
  {
    href: "https://mauri.taiora.ai/",
    label: "Visit Mauri",
    icon: ExternalLink,
  },
  {
    href: "/partner",
    label: "Partner with Tai Ora",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-mauri-green/15 bg-white text-mauri-green">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="w-fit text-inherit no-underline transition-colors hover:text-mauri-gold focus-visible:ring-[3px] focus-visible:ring-mauri-sage/50 active:text-mauri-gold-deep"
            aria-label="Tai Ora home"
          >
            <span className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-md"
                aria-hidden="true"
              />
              <Logo className="text-mauri-green" />
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {actionLinks.map(({ href, label, icon: Icon }) => (
              <Button
                asChild
                key={label}
                size="icon"
                variant="ghost"
                className="border border-mauri-green/15 bg-mauri-green/5 text-mauri-green hover:bg-mauri-green hover:text-white active:bg-mauri-muted active:text-white data-[state=active]:bg-mauri-green data-[state=active]:text-white"
              >
                <Link
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-normal">
              Tai Ora
            </p>
            <p className="max-w-2xl text-lg font-medium leading-8 text-mauri-green">
              Connecting creators with brands for authentic partnerships and campaigns.
            </p>
            <p className="text-base font-semibold text-mauri-muted">
              Privacy-first. Consent-led. Values-aligned.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-base leading-7 text-mauri-green md:items-end md:text-right">
            <p className="text-sm font-semibold uppercase tracking-normal text-mauri-gold-deep">
              Company
            </p>
            <div className="flex flex-col gap-1">
              <p>Auckland, New Zealand.</p>
              <p className="font-semibold text-mauri-muted">Australia</p>
              <p>Tai Ora Pty Ltd — ABN 17 688 356 532</p>
              <p className="font-semibold text-mauri-muted">New Zealand</p>
              <p>Tai Ora AI Limited — NZBN 9429053144133</p>
            </div>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-3 text-sm font-semibold md:gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-mauri-green no-underline transition-colors hover:text-mauri-gold focus-visible:ring-[3px] focus-visible:ring-mauri-sage/50 active:text-mauri-gold-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsLink className="text-sm font-semibold text-mauri-green" />
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-2 border-t border-mauri-green/15 pt-5 text-sm font-medium text-mauri-green/80 md:flex-row md:items-center md:justify-between">
          <p>&copy; Tai Ora {new Date().getFullYear()}. Patent Pending.</p>
          <p>Wellbeing through authenticity and connection.</p>
        </div>
      </div>
    </footer>
  );
}

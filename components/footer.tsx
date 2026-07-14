import Image from "next/image";
import Link from "next/link";

import { socialLinks } from "@/lib/social-links";

const footerLinks = [
  { href: "/business-card", label: "Business Card" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

const socials = [
  {
    href: socialLinks.instagram,
    label: "Instagram",
    icon: "/instagram.svg",
  },
  {
    href: socialLinks.facebook,
    label: "Facebook",
    icon: "/facebook.svg",
  },
  {
    href: socialLinks.linkedin,
    label: "LinkedIn",
    icon: "/linkedin-logo-svgrepo-com.svg",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#00e5d4]/12 bg-[#000508] text-[#f7f9f8]">
      <div className="mx-auto grid max-w-[1350px] gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr] md:px-10 lg:px-11">
        <div className="flex flex-col gap-5">
          <Link
            href="/"
            className="flex w-fit items-center gap-3 text-[#f7f9f8] no-underline transition hover:text-[#ffb51f] focus-visible:ring-[3px] focus-visible:ring-[#00e5d4]/35"
            aria-label="Tai Ora home"
          >
            <Image
              src="/logo.png"
              alt="Tai Ora logo"
              width={56}
              height={56}
              className="size-14 rounded-full shadow-[0_0_22px_rgba(0,229,212,0.2)]"
            />
            <span className="text-2xl font-semibold">Tai Ora</span>
          </Link>

          <p className="max-w-xl text-lg leading-8 text-[#d8e0df]">
            Helping people make informed wellbeing choices through authentic
            stories and ethical technology.
          </p>
          <p className="text-base font-semibold text-[#b4dac6]">
            Privacy-first. Consent-led. Values-aligned.
          </p>
          <div className="flex gap-3">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                aria-label={`Tai Ora on ${label}`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#00e5d4]/20 bg-[#001014] transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:bg-surface-hover active:translate-y-px active:bg-surface-active focus-visible:ring-[3px] focus-visible:ring-[#00e5d4]/35"
              >
                <Image
                  src={icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:items-end md:text-right">
          <div className="flex flex-col gap-2 text-base leading-7 text-[#d8e0df]">
            <p className="text-sm font-semibold uppercase text-[#ffb51f]">
              Company
            </p>
            <p>Auckland, New Zealand.</p>
            <p className="font-semibold text-[#b4dac6]">Australia</p>
            <p>Tai Ora Pty Ltd — ABN 17 688 356 532</p>
            <p className="font-semibold text-[#b4dac6]">New Zealand</p>
            <p>Tai Ora AI Limited — NZBN 9429053144133</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4 md:justify-end">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-[#ffb51f] no-underline transition hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:text-[#d88719]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm font-medium text-[#aab8b7]">
            © Tai Ora 2025–2026. Patent pending.
          </p>
        </div>
      </div>
    </footer>
  );
}

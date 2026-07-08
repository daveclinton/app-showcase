import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { socialLinks } from "@/lib/social-links";

const socials = [
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: "/instagram.svg",
  },
  { label: "Facebook", href: socialLinks.facebook, icon: "/facebook.svg" },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: "/linkedin-logo-svgrepo-com.svg",
  },
  { label: "X", href: socialLinks.x, icon: "/x.svg" },
];

export default function ContactPage() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-[#000508] px-6 py-24 text-[#f7f9f8] md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(0,229,212,0.16),transparent_28%),radial-gradient(circle_at_76%_30%,rgba(255,181,31,0.12),transparent_24%),linear-gradient(180deg,#000508_0%,#001116_48%,#00080c_100%)]"
      />

      <header className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
        <Image
          src="/logo.png"
          alt="Tai Ora"
          width={144}
          height={144}
          className="size-28 rounded-full object-cover shadow-[0_0_28px_rgba(0,229,212,0.24),0_14px_30px_rgba(0,0,0,0.38)] md:size-36"
          priority
        />
        <h1 className="text-4xl font-semibold md:text-6xl">Let&apos;s connect</h1>
        <p className="max-w-3xl text-lg leading-8 text-[#b4dac6] md:text-xl">
          We&apos;d love to hear from you, whether you&apos;re curious about Tai
          Ora, want to collaborate, or just want to say kia ora.
        </p>
      </header>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <section className="rounded-2xl border border-[#ffb51f]/25 bg-[#000508]/78 p-6 shadow-[0_18px_42px_rgba(0,0,0,0.28)] md:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-[#ffb51f]">
            Send a message
          </h2>
          <ContactForm />
        </section>

        <aside className="flex flex-col gap-6">
          <section className="rounded-2xl border border-[#00e5d4]/20 bg-[#001014]/78 p-6">
            <h2 className="text-xl font-semibold text-[#ffb51f]">
              Get in touch
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              <a
                href="mailto:hello@taiora.ai"
                className="flex items-center gap-3 text-[#d8e0df] transition hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <Mail />
                hello@taiora.ai
              </a>
              <a
                href="mailto:partnerships@taiora.ai"
                className="flex items-center gap-3 text-[#d8e0df] transition hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <Mail />
                partnerships@taiora.ai
              </a>
            </div>
          </section>

          <section className="rounded-2xl border border-[#00e5d4]/20 bg-[#001014]/78 p-6">
            <h2 className="text-xl font-semibold text-[#ffb51f]">Follow us</h2>
            <div className="mt-5 flex flex-col gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-md border border-[#00e5d4]/25 bg-surface px-4 py-3 text-[#b4dac6] transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:bg-surface-hover hover:text-[#ffb51f] active:translate-y-px active:bg-surface-active focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <span className="flex items-center gap-3">
                    <Image
                      src={icon}
                      alt=""
                      width={22}
                      height={22}
                      className="size-[22px] invert"
                    />
                    {label}
                  </span>
                  <ExternalLink />
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

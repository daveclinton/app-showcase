import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { createPageMetadata } from "@/lib/page-metadata";

const CANVA_EMBED_URL =
  "https://www.canva.com/design/DAHOBcQiNZI/f2b-VVqSz0vTSL18AKDUmw/view?embed";

export const metadata: Metadata = createPageMetadata({
  title: "Business Card",
  description:
    "A concise Tai Ora contact point for partners, creators, and collaborators who want to connect with the ecosystem.",
  path: "/business-card",
});

export default function BusinessCardPage() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-[#000508] px-6 py-24 text-[#f7f9f8] md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(0,229,212,0.16),transparent_28%),radial-gradient(circle_at_76%_30%,rgba(255,181,31,0.12),transparent_24%),linear-gradient(180deg,#000508_0%,#001116_48%,#00080c_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-20%] top-24 -z-10 h-[520px] w-[420px] rotate-[32deg] rounded-full border border-[#ffb51f]/25 shadow-[0_0_42px_rgba(255,181,31,0.24),inset_0_0_34px_rgba(0,229,212,0.12)] md:right-[-5%]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <Image
          src="/logo.png"
          alt="Tai Ora"
          width={144}
          height={144}
          className="size-28 rounded-full object-cover shadow-[0_0_28px_rgba(0,229,212,0.24),0_14px_30px_rgba(0,0,0,0.38)] md:size-36"
          priority
        />
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Business Card
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[#b4dac6] md:text-xl md:leading-9">
          A concise Tai Ora contact point for partners, creators, and
          collaborators who want to connect with the ecosystem.
        </p>
      </div>

      <section className="mx-auto mt-14 max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-[#00e5d4]/20 bg-[#001014]/78 shadow-[0_18px_42px_rgba(0,0,0,0.28),inset_0_0_28px_rgba(0,229,212,0.04)]">
          <div className="relative aspect-[16/9] w-full">
            <iframe
              src={CANVA_EMBED_URL}
              title="Tai Ora business card"
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center">
          {["Tai Ora AI Limited", "Auckland, New Zealand", "Patent pending"].map(
            (highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[#00e5d4]/20 bg-[#001014]/72 px-4 py-2 text-sm font-medium text-[#b4dac6]"
              >
                {highlight}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex rounded-2xl border border-[#c97900] bg-[#000508]/70 px-6 py-3 font-semibold text-[#ffb51f] no-underline transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px"
          >
            Contact Tai Ora
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import Image from "next/image";

import { WaitlistForm } from "@/components/forms/waitlist-form";


export const metadata: Metadata = createPageMetadata({
  title: 'Join the Waitlist',
  description: 'Be the first to hear about launches, product updates, and early access across the Tai Ora ecosystem.',
  path: '/waitlist',
});

export default function WaitlistPage() {
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
        <h1 className="text-4xl font-semibold md:text-6xl">
          Join the Waitlist
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[#b4dac6] md:text-xl">
          Be the first to hear about launches, product updates, and early
          access across the Tai Ora ecosystem.
        </p>
      </header>

      <section className="mx-auto mt-14 max-w-2xl rounded-2xl border border-[#ffb51f]/25 bg-[#000508]/78 p-6 shadow-[0_18px_42px_rgba(0,0,0,0.28)] md:p-8">
        <h2 className="mb-2 text-2xl font-semibold text-[#ffb51f]">
          Get early access
        </h2>
        <p className="mb-7 leading-7 text-[#b4dac6]">
          Share your name and email to receive updates from Tai Ora.
        </p>
        <WaitlistForm />
      </section>
    </main>
  );
}

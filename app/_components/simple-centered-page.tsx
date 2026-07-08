import Link from "next/link";

type SimpleCenteredPageProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  highlights?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function SimpleCenteredPage({
  title,
  eyebrow = "TAI ORA",
  description = "This Tai Ora page is being prepared. Return to the ecosystem landing page to explore the current experience.",
  highlights = [
    "Premium wellbeing",
    "Ethical AI pathways",
    "Māori-led values",
  ],
  ctaLabel = "Back to Tai Ora",
  ctaHref = "/",
}: SimpleCenteredPageProps) {
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
        <p className="text-sm font-semibold uppercase text-[#ffb51f]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[#b4dac6] md:text-xl md:leading-9">
          {description}
        </p>

        <div className="grid w-full gap-4 pt-3 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-[#00e5d4]/20 bg-[#001014]/70 px-5 py-4 text-sm font-semibold text-[#e4eaea] shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
            >
              {highlight}
            </div>
          ))}
        </div>

        <Link
          href={ctaHref}
          className="rounded-2xl border border-[#c97900] bg-[#000508]/70 px-6 py-3 font-semibold text-[#ffb51f] no-underline transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px"
        >
          {ctaLabel}
        </Link>
      </div>
    </main>
  );
}

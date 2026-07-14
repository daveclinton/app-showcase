import Image from "next/image";
import Link from "next/link";

type PageSection = {
  title: string;
  body?: string | string[];
  items?: string[];
};

type PageForm = {
  title: string;
  description?: string;
  fields: string[];
  privacyNote?: string;
  note?: string;
  submitLabel: string;
};

type SimpleCenteredPageProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  highlights?: string[];
  sections?: PageSection[];
  form?: PageForm;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function SimpleCenteredPage({
  title,
  description = "This Tai Ora page is being prepared. Return to the ecosystem landing page to explore the current experience.",
  sections = [],
  form,
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
        <Image
          src="/logo.png"
          alt="Tai Ora"
          width={144}
          height={144}
          className="size-28 rounded-full object-cover shadow-[0_0_28px_rgba(0,229,212,0.24),0_14px_30px_rgba(0,0,0,0.38)] md:size-36"
          priority
        />
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[#b4dac6] md:text-xl md:leading-9">
          {description}
        </p>
      </div>

      {sections.length > 0 || form ? (
        <div className="mx-auto mt-14 grid max-w-5xl gap-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-[#00e5d4]/20 bg-[#001014]/78 p-6 text-left shadow-[0_18px_42px_rgba(0,0,0,0.28),inset_0_0_28px_rgba(0,229,212,0.04)] md:p-8"
            >
              <h2 className="text-2xl font-semibold text-[#ffb51f]">
                {section.title}
              </h2>
              {section.body ? (
                <div className="mt-4 flex flex-col gap-4 text-base leading-8 text-[#d8e0df] md:text-lg">
                  {(Array.isArray(section.body)
                    ? section.body
                    : [section.body]
                  ).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.items ? (
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-[#00e5d4]/14 bg-[#000508]/55 px-4 py-3 text-[#f7f9f8]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {form ? (
            <section className="rounded-2xl border border-[#ffb51f]/25 bg-[#000508]/78 p-6 text-left shadow-[0_18px_42px_rgba(0,0,0,0.28),inset_0_0_28px_rgba(255,181,31,0.04)] md:p-8">
              <h2 className="text-2xl font-semibold text-[#ffb51f]">
                {form.title}
              </h2>
              {form.description ? (
                <p className="mt-3 text-base leading-8 text-[#d8e0df] md:text-lg">
                  {form.description}
                </p>
              ) : null}
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {form.fields.map((field) => (
                  <div
                    key={field}
                    className="rounded-xl border border-[#00e5d4]/14 bg-[#001014]/72 px-4 py-3 text-[#b4dac6]"
                  >
                    {field}
                  </div>
                ))}
              </div>
              {form.privacyNote ? (
                <p className="mt-5 text-sm leading-7 text-[#d8e0df]">
                  {form.privacyNote}
                </p>
              ) : null}
              {form.note ? (
                <p className="mt-5 text-sm leading-7 text-[#aab8b7]">
                  {form.note}
                </p>
              ) : null}
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-2xl border border-[#c97900] bg-[#000508]/70 px-6 py-3 font-semibold text-[#ffb51f] no-underline transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px"
              >
                {form.submitLabel}
              </Link>
            </section>
          ) : null}
        </div>
      ) : null}
    </main>
  );
}

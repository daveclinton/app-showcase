import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Compass,
  Heart,
  LockKeyhole,
  Play,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const storeLinks = [
  {
    href: "https://apps.apple.com/ke/app/tai-ora/id6756413932",
    icon: "/appstore.svg",
    kicker: "Download on the",
    label: "App Store",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.taiora.app",
    icon: "/googleplay.svg",
    kicker: "GET IT ON",
    label: "Google Play",
  },
];

const ecosystemCards = [
  {
    title: "MAURI",
    body: "Pause, reflect and process your thoughts.",
    icon: KoruMark,
    href: "https://mauri.taiora.ai/",
    art: "from-[#003b3d]/80 via-[#00141a]/75 to-[#000508]",
    glow: "bg-[#00e5d4]/20",
    label: "Live now",
  },
  {
    title: "VEEVU™",
    body: "Short product video previews.",
    icon: Play,
    href: "/creators",
    art: "from-[#3c2f11]/55 via-[#00141a]/85 to-[#000508]",
    glow: "bg-[#ffb51f]/20",
  },
  {
    title: "IGLO™",
    body: "Track your journey with real authentic reviews.",
    icon: BarChart3,
    href: "/brand",
    art: "from-[#004645]/70 via-[#001a1d]/85 to-[#000508]",
    glow: "bg-[#00bdb2]/20",
  },
  {
    title: "FUTURE AI PATHWAYS",
    body: "Discover opportunities and build the skills for what's next.",
    icon: Compass,
    href: "/partner",
    art: "from-[#151527] via-[#11101c] to-[#000508]",
    glow: "bg-[#8e4dcc]/25",
    purple: true,
  },
];

const values = [
  {
    title: "MĀORI LED",
    body: "Rooted in Te Tiriti values and designed with mātauranga Māori.",
    icon: KoruLine,
    tone: "teal",
  },
  {
    title: "ETHICAL AI",
    body: "AI that empowers, supports and uplifts people, not replaces.",
    icon: ShieldCheck,
    tone: "gold",
  },
  {
    title: "TRUSTED & SAFE",
    body: "Your privacy is yours. Your data is protected and never sold.",
    icon: LockKeyhole,
    tone: "teal",
  },
  {
    title: "PEOPLE FIRST",
    body: "Technology that strengthens connection, wellbeing and potential.",
    icon: Heart,
    tone: "gold",
  },
] satisfies {
  title: string;
  body: string;
  icon: IconComponent;
  tone: "teal" | "gold";
}[];

export default function HomePage() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#000508] text-[#f7f9f8]">
      <section className="relative isolate min-h-[860px] overflow-hidden px-5 pb-16 pt-32 sm:px-8 md:min-h-[980px] md:px-10 md:pt-40 lg:min-h-[1080px] lg:px-11">
        <BackgroundLight />

        <div className="relative z-10 mx-auto flex max-w-[1350px] flex-col items-center text-center">
          <div className="mt-5 flex w-full max-w-[800px] items-center gap-5 md:mt-8">
            <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#d88719)]" />
            <span className="flex size-12 items-center justify-center rounded-full border border-[#ffb51f] text-[#ffb51f] shadow-[0_0_16px_rgba(255,181,31,0.28)]">
              <KoruLine aria-hidden="true" className="size-7" />
            </span>
            <span className="h-px flex-1 bg-[linear-gradient(90deg,#d88719,transparent)]" />
          </div>

          <h1
            aria-label="TAI ORA"
            className="relative mt-16 flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[64px] font-light leading-none text-[#f7f9f8] drop-shadow-[0_0_18px_rgba(255,255,255,0.16)] sm:gap-x-8 sm:text-[88px] md:text-[112px] lg:gap-x-11 lg:text-[132px]"
          >
            <span>T</span>
            <span className="relative inline-flex">
              A
              <span className="absolute bottom-[0.2em] left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#00e5d4] shadow-[0_0_12px_rgba(0,229,212,0.8)] md:size-4" />
            </span>
            <span>I</span>
            <span className="relative">
              O
              <span className="absolute -right-2 -top-1 size-9 rounded-full bg-[#ffe3a4]/70 blur-xl md:size-12" />
            </span>
            <span>R</span>
            <span className="relative inline-flex">
              A
              <span className="absolute bottom-[0.2em] left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#00e5d4] shadow-[0_0_12px_rgba(0,229,212,0.8)] md:size-4" />
            </span>
          </h1>

          <p
            aria-label="I SEE YOU"
            className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[34px] font-medium leading-tight text-[#ffb51f] sm:text-[44px] md:text-[58px] lg:text-[64px]"
          >
            {"I SEE YOU".split("").map((char, index) => (
              <span key={`${char}-${index}`}>
                {char === " " ? "\u00a0" : char}
              </span>
            ))}
          </p>

          <p className="mt-7 max-w-[850px] text-xl leading-8 text-[#f7f9f8] sm:text-2xl sm:leading-10 md:text-[32px] md:leading-[1.45]">
            Empowering people through{" "}
            <span className="text-[#00e5d4]">ethical</span>,{" "}
            <span className="text-[#00e5d4]">practical</span> and{" "}
            <span className="text-[#00e5d4]">supportive</span> AI pathways.
          </p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:gap-12">
            {storeLinks.map((store) => (
              <Link
                key={store.label}
                href={store.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${store.kicker} ${store.label}`}
                className="flex min-h-20 w-full max-w-[315px] items-center justify-center gap-4 rounded-[14px] border border-[#c97900] bg-[#000508]/85 px-7 py-4 text-white no-underline shadow-[0_0_18px_rgba(255,181,31,0.1)] transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-white hover:shadow-[0_0_24px_rgba(255,181,31,0.25)] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px active:border-[#d88719] md:min-h-[98px]"
              >
                <Image
                  src={store.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-10 md:size-12"
                  aria-hidden="true"
                />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-sm font-medium md:text-base">
                    {store.kicker}
                  </span>
                  <span className="mt-1 text-2xl font-semibold md:text-[32px]">
                    {store.label}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <a
            href="#ecosystem"
            className="mt-11 flex flex-col items-center gap-3 text-base font-medium text-[#ffb51f] no-underline transition hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:text-[#d88719] md:text-lg"
          >
            Scroll to explore
            <ArrowDown aria-hidden="true" className="size-7" />
          </a>
        </div>
      </section>

      <section
        id="ecosystem"
        className="relative isolate border-t border-[#00e5d4]/10 bg-[#00080c] px-5 pb-16 pt-12 sm:px-8 md:px-10 lg:px-11 lg:pb-24"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,181,31,0.38),transparent)]" />
        <div className="absolute left-1/2 top-14 -z-10 size-44 -translate-x-1/2 rounded-full bg-[#ffb51f]/10 blur-3xl" />

        <div className="mx-auto max-w-[1350px]">
          <div className="flex flex-col items-center text-center">
            <p
              aria-label="DISCOVER THE"
              className="flex flex-wrap justify-center gap-x-3 text-base font-medium text-[#ffb51f] md:text-lg"
            >
              {"DISCOVER THE".split("").map((char, index) => (
                <span key={`${char}-${index}`}>
                  {char === " " ? "\u00a0" : char}
                </span>
              ))}
            </p>
            <h2
              aria-label="TAI ORA ECOSYSTEM"
              className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[28px] font-normal leading-tight text-[#f7f9f8] sm:text-[34px] md:text-[42px]"
            >
              {"TAI ORA ECOSYSTEM".split("").map((char, index) => (
                <span key={`${char}-${index}`}>
                  {char === " " ? "\u00a0" : char}
                </span>
              ))}
            </h2>
            <span className="mt-5 h-px w-36 bg-[linear-gradient(90deg,transparent,#ffb51f,transparent)] shadow-[0_0_18px_rgba(255,181,31,0.5)]" />
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ecosystemCards.map((card) => (
              <EcosystemCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mt-14 grid overflow-hidden rounded-2xl border border-[#00e5d4]/25 bg-[linear-gradient(180deg,rgba(0,24,28,0.92),rgba(0,8,12,0.96))] shadow-[0_18px_42px_rgba(0,0,0,0.35),inset_0_0_40px_rgba(0,229,212,0.04)] md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <ValueItem key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BackgroundLight() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_18%,rgba(255,181,31,0.12)_0%,transparent_18%),radial-gradient(circle_at_62%_25%,rgba(0,180,170,0.18)_0%,transparent_34%),radial-gradient(circle_at_50%_55%,rgba(0,65,70,0.20)_0%,transparent_40%),linear-gradient(180deg,#000508_0%,#001116_42%,#000a0e_100%)]" />
      <div className="absolute right-[-18%] top-[22%] h-[620px] w-[520px] rotate-[30deg] rounded-full border border-[#ffb51f]/35 shadow-[0_0_34px_rgba(255,181,31,0.34),inset_0_0_28px_rgba(0,229,212,0.18)] md:right-[-6%] md:h-[860px] md:w-[700px]" />
      <div className="absolute right-[-16%] top-[25%] h-[650px] w-[560px] rotate-[31deg] rounded-full border border-[#00e5d4]/20 md:right-[-7%] md:h-[880px] md:w-[740px]" />
      <svg
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[430px] w-full opacity-90"
      >
        <path
          d="M0 388 C 172 305, 255 375, 394 336 C 579 285, 737 208, 920 263 C 1103 318, 1231 203, 1440 61"
          fill="none"
          stroke="url(#goldWave)"
          strokeWidth="4"
        />
        <path
          d="M0 420 C 202 315, 279 423, 469 348 C 658 272, 813 285, 1002 312 C 1173 336, 1299 209, 1440 121"
          fill="none"
          stroke="url(#tealWave)"
          strokeWidth="2"
        />
        <path
          d="M0 448 C 210 367, 313 404, 493 374 C 701 339, 837 379, 1029 354 C 1188 333, 1290 265, 1440 190"
          fill="none"
          stroke="rgba(255,227,164,0.28)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="goldWave" x1="0" x2="1440" y1="0" y2="0">
            <stop stopColor="rgba(255,181,31,0)" />
            <stop offset="0.16" stopColor="#FFE3A4" />
            <stop offset="0.55" stopColor="#D88719" />
            <stop offset="1" stopColor="#FFB51F" />
          </linearGradient>
          <linearGradient id="tealWave" x1="0" x2="1440" y1="0" y2="0">
            <stop stopColor="rgba(0,229,212,0)" />
            <stop offset="0.4" stopColor="#008D85" />
            <stop offset="1" stopColor="#00E5D4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-24 left-[8%] size-24 rounded-full bg-[#ffb51f]/20 blur-2xl" />
    </div>
  );
}

function EcosystemCard({
  title,
  body,
  icon: Icon,
  href,
  art,
  glow,
  label,
  purple,
}: {
  title: string;
  body: string;
  icon: IconComponent;
  href: string;
  art: string;
  glow: string;
  label?: string;
  purple?: boolean;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group/card relative min-h-[430px] overflow-hidden rounded-2xl border bg-[linear-gradient(180deg,rgba(0,70,70,0.52),rgba(0,8,12,0.92))] p-8 text-center no-underline shadow-[0_18px_40px_rgba(0,0,0,0.38),inset_0_0_40px_rgba(0,229,212,0.05)] transition hover:-translate-y-1.5 hover:border-[#ffb51f]/70 hover:text-inherit hover:shadow-[0_22px_48px_rgba(0,0,0,0.45),0_0_28px_rgba(0,229,212,0.18)] focus-visible:ring-[3px] focus-visible:ring-[#00e5d4]/35 active:translate-y-px md:min-h-[538px] ${
        purple ? "border-[#704a88]" : "border-[#00e5d4]/35"
      }`}
    >
      <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${art}`} />
      <div
        className={`absolute left-1/2 top-12 -z-10 size-40 -translate-x-1/2 rounded-full ${glow} blur-2xl`}
      />
      <CardScene purple={purple} />

      {label ? (
        <span className="absolute right-4 top-4 rounded-full border border-[#ffb51f]/45 bg-[#000508]/70 px-3 py-1 text-xs font-semibold text-[#ffb51f]">
          {label}
        </span>
      ) : null}

      <span
        className={`mx-auto flex size-24 items-center justify-center rounded-full border bg-[radial-gradient(circle_at_35%_25%,rgba(0,229,212,0.45),rgba(0,56,60,0.95)_48%,rgba(0,8,12,1)_100%)] shadow-[0_12px_22px_rgba(0,0,0,0.45),0_0_18px_rgba(0,229,212,0.18)] transition group-hover/card:shadow-[0_14px_24px_rgba(0,0,0,0.45),0_0_26px_rgba(255,181,31,0.28)] md:size-28 ${
          purple ? "border-[#8e4dcc]/60" : "border-[#00e5d4]/40"
        }`}
      >
        <Icon
          aria-hidden="true"
          className={`size-12 drop-shadow-[0_0_10px_rgba(255,181,31,0.42)] md:size-14 ${
            purple ? "text-[#d58aff]" : "text-[#ffb51f]"
          }`}
        />
      </span>

      <h3
        className={`mt-10 text-[26px] font-medium leading-tight ${
          purple ? "text-[#d58aff]" : "text-[#00e5d4]"
        }`}
      >
        {title}
      </h3>
      <span className="mx-auto mt-5 block h-px w-14 bg-[#d88719]" />
      <p className="mx-auto mt-8 max-w-[230px] text-lg leading-8 text-[#f7f9f8] md:text-[21px]">
        {body}
      </p>

      <span className="absolute inset-x-8 bottom-8 flex items-center justify-center gap-3 text-lg font-medium text-[#ffb51f] transition group-hover/card:text-[#ffe3a4]">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-5 transition group-hover/card:translate-x-1.5"
        />
      </span>
    </Link>
  );
}

function CardScene({ purple }: { purple?: boolean }) {
  if (purple) {
    return (
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-44">
        <div className="absolute bottom-0 left-1/2 h-36 w-16 -translate-x-1/2 rounded-t-full border border-[#ffb51f]/70 shadow-[0_0_28px_rgba(255,181,31,0.45)]" />
        <div className="absolute bottom-0 left-1/2 h-1 w-40 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#ffb51f,transparent)]" />
        <div className="absolute bottom-0 left-1/2 h-32 w-px -translate-x-1/2 bg-[linear-gradient(180deg,#ffe3a4,transparent)]" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 opacity-70">
      <div className="absolute bottom-8 left-6 right-6 h-px bg-[linear-gradient(90deg,transparent,rgba(0,229,212,0.45),transparent)]" />
      <div className="absolute bottom-16 left-8 right-10 h-px bg-[linear-gradient(90deg,transparent,rgba(255,181,31,0.3),transparent)]" />
      <div className="absolute bottom-24 left-1/3 size-2 rounded-full bg-[#00e5d4] shadow-[0_0_18px_rgba(0,229,212,0.7)]" />
      <div className="absolute bottom-32 right-1/3 size-1.5 rounded-full bg-[#ffb51f] shadow-[0_0_14px_rgba(255,181,31,0.7)]" />
    </div>
  );
}

function ValueItem({
  title,
  body,
  icon: Icon,
  tone,
}: {
  title: string;
  body: string;
  icon: IconComponent;
  tone: "teal" | "gold";
}) {
  const isGold = tone === "gold";

  return (
    <div className="relative flex min-h-[230px] flex-col gap-4 border-b border-[#00e5d4]/20 p-8 last:border-b-0 md:border-r md:last:border-r-0 xl:border-b-0">
      <span
        className={`flex size-16 items-center justify-center rounded-full border shadow-[0_10px_20px_rgba(0,0,0,0.36)] ${
          isGold
            ? "border-[#ffb51f]/45 bg-[#1a1508]"
            : "border-[#00e5d4]/35 bg-[#003b3d]"
        }`}
      >
        <Icon
          aria-hidden="true"
          className={`size-8 ${isGold ? "text-[#ffb51f]" : "text-[#00e5d4]"}`}
        />
      </span>
      <h3
        className={`text-xl font-semibold leading-snug ${
          isGold ? "text-[#ffb51f]" : "text-[#00e5d4]"
        }`}
      >
        {title}
      </h3>
      <p className="text-base leading-8 text-[#f7f9f8] md:text-lg">{body}</p>
    </div>
  );
}

function KoruMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
      <path
        d="M43 16c-11-9-29 1-27 17 1 11 10 17 19 15 8-2 12-9 9-15-3-7-13-7-16-1-2 4 0 8 4 9"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M34 49c3-9 10-14 20-17-8 7-12 14-13 22-3-2-5-3-7-5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function KoruLine({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <path
        d="M31 13c-8-6-20 1-18 12 1 8 8 12 14 10 5-1 8-6 6-10-2-5-9-5-11-1-2 3 0 6 3 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M25 36c3-5 7-8 13-10-4 4-6 8-7 14-2-1-4-2-6-4Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheck({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <path
        d="M24 5 38 10v12c0 9-5.5 16.5-14 21-8.5-4.5-14-12-14-21V10l14-5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="m18 24 4 4 9-10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

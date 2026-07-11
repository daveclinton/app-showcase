import {
  ArrowDown,
  ArrowRight,
  Heart,
  LockKeyhole,
} from "lucide-react";
import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Tai Ora - Wellbeing Through Authenticity & Connection",
  description:
    "Tai Ora is a wellbeing platform built on authenticity, connection, and aroha. Rooted in Mauri values, we welcome all cultures to reclaim time, identity, and wellbeing.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Tai Ora",
    "wellbeing platform",
    "authenticity and connection",
    "aroha",
    "VeeVu",
    "iGlo",
    "Mauri",
  ],
});

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
    logo: {
      src: "/mauri-logo.png",
      alt: "Mauri logo",
      className: "size-[72px] translate-y-0.5 md:size-[84px]",
    },
    href: "https://mauri.taiora.ai/",
    art: "from-[#003b3d]/80 via-[#00141a]/75 to-[#000508]",
    glow: "bg-[#00e5d4]/20",
    label: "Live now",
  },
  {
    title: "VEEVU™",
    body: "Short product video previews.",
    logo: {
      src: "/veevu-new",
      alt: "Veevu logo",
      className: "size-[88px] md:size-[102px]",
    },
    href: "/brand",
    art: "from-[#3c2f11]/55 via-[#00141a]/85 to-[#000508]",
    glow: "bg-[#ffb51f]/20",
  },
  {
    title: "IGLO™",
    body: "Track your journey with real authentic reviews.",
    logo: {
      src: "/iglo-new.png",
      alt: "Iglo logo",
      className: "size-[88px] md:size-[102px]",
    },
    href: "/creators",
    art: "from-[#004645]/70 via-[#001a1d]/85 to-[#000508]",
    glow: "bg-[#00bdb2]/20",
  },
  {
    title: "FUTURE AI PATHWAYS",
    body: "Discover opportunities and build the skills for what's next.",
    logo: {
      src: "/future-pathways-new.png",
      alt: "Future AI Pathways logo",
      className: "size-[88px] md:size-[102px]",
    },
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
      <section className="relative isolate flex min-h-svh items-center overflow-hidden px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-11">
        <BackgroundLight />

        <div className="relative z-10 mx-auto flex max-w-[1350px] flex-col items-center text-center">
          <div className="flex size-[76px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#148f87_0%,#00514f_42%,#001b20_100%)] shadow-[0_0_22px_rgba(0,229,212,0.25),0_12px_28px_rgba(0,0,0,0.45)] sm:size-[96px] md:size-[116px] lg:size-[124px]">
            <Image
              src="/new-tai-ora-logo.png"
              alt="Tai Ora logo"
              width={168}
              height={168}
              priority
              className="size-full rounded-full object-contain"
            />
          </div>

          <div className="mt-3 flex w-full max-w-[620px] items-center gap-3 md:mt-5 md:gap-4">
            <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#d88719)]" />
            <span className="flex size-9 items-center justify-center rounded-full border border-[#ffb51f] text-[#ffb51f] shadow-[0_0_16px_rgba(255,181,31,0.28)] md:size-11">
              <KoruLine aria-hidden="true" className="size-5 md:size-6" />
            </span>
            <span className="h-px flex-1 bg-[linear-gradient(90deg,#d88719,transparent)]" />
          </div>

          <h1
            aria-label="TAI ORA"
            className="relative mt-5 flex w-full justify-center md:mt-8"
          >
            <Image
              src="/tai-ora-hero-name.png"
              alt=""
              width={1038}
              height={240}
              priority
              className="h-auto w-full max-w-[340px] drop-shadow-[0_0_18px_rgba(255,255,255,0.16)] sm:max-w-[560px] md:max-w-[720px] lg:max-w-[820px]"
            />
          </h1>

          <p
            aria-label="I SEE YOU"
            className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[26px] font-medium leading-tight text-[#ffb51f] sm:text-[34px] md:text-[44px] lg:text-[50px]"
          >
            {"I SEE YOU".split("").map((char, index) => (
              <span key={`${char}-${index}`}>
                {char === " " ? "\u00a0" : char}
              </span>
            ))}
          </p>

          <p className="mt-4 max-w-[720px] text-base leading-7 text-[#f7f9f8] sm:text-lg sm:leading-8 md:text-2xl md:leading-9">
            Empowering people through{" "}
            <span className="text-[#00e5d4]">ethical</span>,{" "}
            <span className="text-[#00e5d4]">practical</span> and{" "}
            <span className="text-[#00e5d4]">supportive</span> AI pathways.
          </p>

          <div className="mt-5 flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-5 md:mt-6 md:gap-8">
            {storeLinks.map((store) => (
              <Link
                key={store.label}
                href={store.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${store.kicker} ${store.label}`}
                className="flex min-h-14 w-full max-w-[250px] items-center justify-center gap-3 rounded-[14px] border border-[#c97900] bg-[#000508]/85 px-4 py-2.5 text-white no-underline shadow-[0_0_18px_rgba(255,181,31,0.1)] transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-white hover:shadow-[0_0_24px_rgba(255,181,31,0.25)] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px active:border-[#d88719] sm:max-w-[270px] md:min-h-[76px]"
              >
                <Image
                  src={store.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-8 md:size-10"
                  aria-hidden="true"
                />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[11px] font-medium md:text-sm">
                    {store.kicker}
                  </span>
                  <span className="mt-1 text-lg font-semibold md:text-2xl">
                    {store.label}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <a
            href="#ecosystem"
            className="mt-5 flex animate-bounce flex-col items-center gap-1.5 text-sm font-medium text-[#ffb51f] no-underline transition hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:text-[#d88719] md:mt-7 md:gap-2 md:text-base"
          >
            Scroll to explore
            <ArrowDown aria-hidden="true" className="size-6" />
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
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#020712_0%,#030b16_46%,#000508_100%)]"
    >
      <svg
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[44%] w-full sm:h-[48%] md:h-[52%]"
      >
        <defs>
          <linearGradient
            id="heroRibbonGold"
            x1="0"
            x2="1440"
            y1="520"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#003b3d" stopOpacity="0" />
            <stop offset="0.24" stopColor="#006a64" stopOpacity="0.28" />
            <stop offset="0.54" stopColor="#00b7a8" stopOpacity="0.48" />
            <stop offset="0.74" stopColor="#e8b24a" stopOpacity="0.96" />
            <stop offset="1" stopColor="#f2c14e" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="heroRibbonTeal"
            x1="0"
            x2="1440"
            y1="520"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00b7a8" stopOpacity="0" />
            <stop offset="0.36" stopColor="#00b7a8" stopOpacity="0.5" />
            <stop offset="0.72" stopColor="#f2c14e" stopOpacity="0.72" />
            <stop offset="1" stopColor="#f2c14e" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="heroRibbonGoldSoft"
            x1="0"
            x2="1440"
            y1="520"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#003b3d" stopOpacity="0" />
            <stop offset="0.42" stopColor="#00b7a8" stopOpacity="0.22" />
            <stop offset="0.76" stopColor="#e8b24a" stopOpacity="0.46" />
            <stop offset="1" stopColor="#f2c14e" stopOpacity="0" />
          </linearGradient>
          <filter
            id="heroRibbonBloom"
            x="-20%"
            y="-40%"
            width="140%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="heroRibbonGlow"
            x="-20%"
            y="-40%"
            width="140%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M-160 492 C 124 438, 302 378, 514 296 C 730 212, 926 162, 1151 98 C 1296 57, 1390 28, 1548 -28"
          fill="none"
          stroke="url(#heroRibbonGoldSoft)"
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.14"
        />
        <path
          d="M-140 474 C 132 420, 340 374, 538 290 C 730 208, 908 170, 1128 112 C 1298 67, 1398 36, 1552 -18"
          fill="none"
          stroke="url(#heroRibbonTeal)"
          strokeLinecap="round"
          strokeWidth="1.25"
          opacity="0.18"
        />
        <path
          d="M-122 456 C 154 406, 338 352, 554 268 C 746 193, 934 146, 1150 86 C 1320 39, 1422 12, 1556 -46"
          fill="none"
          stroke="url(#heroRibbonGoldSoft)"
          strokeLinecap="round"
          strokeWidth="3"
          opacity="0.18"
        />
        <path
          d="M-102 438 C 170 389, 358 332, 574 250 C 770 176, 960 134, 1172 72 C 1336 24, 1436 -4, 1562 -62"
          fill="none"
          stroke="url(#heroRibbonTeal)"
          strokeLinecap="round"
          strokeWidth="1"
          opacity="0.22"
        />
        <path
          d="M-84 420 C 190 366, 382 306, 600 226 C 800 153, 980 115, 1190 52 C 1350 4, 1448 -22, 1570 -84"
          fill="none"
          stroke="url(#heroRibbonGold)"
          strokeLinecap="round"
          strokeWidth="4"
          opacity="0.32"
          filter="url(#heroRibbonGlow)"
        />
        <path
          d="M-60 402 C 212 345, 404 286, 620 204 C 820 128, 1002 96, 1210 34 C 1366 -12, 1470 -38, 1586 -106"
          fill="none"
          stroke="url(#heroRibbonTeal)"
          strokeLinecap="round"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <path
          d="M-48 382 C 232 322, 430 260, 646 178 C 850 100, 1028 76, 1230 14 C 1388 -35, 1488 -58, 1598 -128"
          fill="none"
          stroke="url(#heroRibbonGold)"
          strokeLinecap="round"
          strokeWidth="6"
          opacity="0.66"
          filter="url(#heroRibbonBloom)"
        />
        <path
          d="M-24 360 C 250 298, 452 234, 670 152 C 874 75, 1060 54, 1254 -6 C 1410 -54, 1506 -78, 1612 -154"
          fill="none"
          stroke="url(#heroRibbonGold)"
          strokeLinecap="round"
          strokeWidth="8"
          opacity="0.84"
          filter="url(#heroRibbonBloom)"
        />
        <path
          d="M-6 338 C 270 274, 476 212, 694 128 C 894 51, 1086 34, 1274 -28 C 1426 -78, 1520 -98, 1622 -178"
          fill="none"
          stroke="url(#heroRibbonTeal)"
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.42"
          filter="url(#heroRibbonGlow)"
        />
        <path
          d="M20 316 C 292 250, 500 186, 720 100 C 918 23, 1110 8, 1300 -54 C 1448 -102, 1536 -124, 1632 -204"
          fill="none"
          stroke="url(#heroRibbonGoldSoft)"
          strokeLinecap="round"
          strokeWidth="4"
          opacity="0.26"
        />
        <path
          d="M42 292 C 318 224, 526 160, 746 76 C 948 -1, 1134 -16, 1320 -78 C 1464 -126, 1550 -146, 1644 -230"
          fill="none"
          stroke="url(#heroRibbonTeal)"
          strokeLinecap="round"
          strokeWidth="1.25"
          opacity="0.34"
        />
        <path
          d="M70 268 C 340 198, 558 134, 776 50 C 974 -26, 1162 -42, 1340 -104 C 1484 -154, 1570 -174, 1654 -256"
          fill="none"
          stroke="url(#heroRibbonGoldSoft)"
          strokeLinecap="round"
          strokeWidth="3"
          opacity="0.18"
        />
        <path
          d="M98 240 C 366 170, 584 106, 802 22 C 1000 -54, 1184 -68, 1362 -134 C 1500 -185, 1586 -206, 1666 -286"
          fill="none"
          stroke="url(#heroRibbonTeal)"
          strokeLinecap="round"
          strokeWidth="1"
          opacity="0.24"
        />
        <path
          d="M130 210 C 394 142, 612 78, 832 -8 C 1024 -83, 1216 -100, 1384 -164 C 1520 -216, 1602 -238, 1678 -318"
          fill="none"
          stroke="url(#heroRibbonGoldSoft)"
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.16"
        />
        <path
          d="M162 178 C 420 114, 640 48, 860 -40 C 1050 -116, 1240 -132, 1408 -198 C 1540 -250, 1618 -270, 1690 -352"
          fill="none"
          stroke="url(#heroRibbonTeal)"
          strokeLinecap="round"
          strokeWidth="1"
          opacity="0.16"
        />
        <path
          d="M198 142 C 452 82, 668 16, 890 -70 C 1080 -144, 1264 -164, 1434 -232 C 1562 -284, 1640 -306, 1704 -390"
          fill="none"
          stroke="url(#heroRibbonGoldSoft)"
          strokeLinecap="round"
          strokeWidth="1.5"
          opacity="0.1"
        />
      </svg>
    </div>
  );
}

function EcosystemCard({
  title,
  body,
  icon: Icon,
  logo,
  href,
  art,
  glow,
  label,
  purple,
}: {
  title: string;
  body: string;
  icon?: IconComponent;
  logo?: {
    src: string;
    alt: string;
    className?: string;
  };
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
        {logo ? (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={96}
            height={96}
            className={`object-contain object-center drop-shadow-[0_0_12px_rgba(255,181,31,0.38)] ${
              logo.className || "size-[76px] md:size-[88px]"
            }`}
          />
        ) : Icon ? (
          <Icon
            aria-hidden="true"
            className={`size-12 drop-shadow-[0_0_10px_rgba(255,181,31,0.42)] md:size-14 ${
              purple ? "text-[#d58aff]" : "text-[#ffb51f]"
            }`}
          />
        ) : null}
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

      <span className="absolute inset-x-8 bottom-8 flex items-center justify-center gap-2 text-sm font-semibold text-[#ffb51f] transition group-hover/card:text-[#ffe3a4] md:text-base">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition group-hover/card:translate-x-1.5"
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

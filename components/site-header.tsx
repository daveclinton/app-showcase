"use client";

import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ExternalLink,
  Lightbulb,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useState,
  useSyncExternalStore,
  type ComponentType,
  type SVGProps,
} from "react";
import { DropdownMenu } from "radix-ui";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type NavCard = {
  href: string;
  label: string;
  description: string;
  image?: string;
  icon?: IconComponent;
  tone: "aqua" | "rose" | "gold" | "mint";
  external?: boolean;
};

type NavFooterLink = {
  href: string;
  label: string;
  icon: IconComponent;
  external?: boolean;
};

type DropdownNavItem = {
  type: "dropdown";
  label: string;
  sectionLabel: string;
  cards: NavCard[];
  footerLinks: NavFooterLink[];
};

const navItems = [
  {
    type: "dropdown",
    label: "Our Products",
    sectionLabel: "Features",
    cards: [
      {
        href: "/",
        label: "Tai Ora",
        description: "Bring the ecosystem into one clear place.",
        image: "/new-tai-ora-logo.png",
        tone: "aqua",
      },
      {
        href: "/brand",
        label: "VeeVu",
        description: "Find trusted product previews from real creators.",
        image: "/veevu-new.png",
        tone: "rose",
      },
      {
        href: "/creators",
        label: "iGlo",
        description: "Keep authentic review journeys moving.",
        image: "/iglo-new.png",
        tone: "gold",
      },
    ],
    footerLinks: [
      {
        href: "https://mauri.taiora.ai/",
        label: "Open Mauri",
        icon: Sparkles,
        external: true,
      },
      {
        href: "/partner",
        label: "Build with Tai Ora",
        icon: MessageCircle,
      },
    ],
  },
  {
    type: "dropdown",
    label: "Resources",
    sectionLabel: "Explore",
    cards: [
      {
        href: "/blog",
        label: "Knowledge Hub",
        description: "Read stories, updates and founder notes.",
        image: "/part-one-image.png",
        tone: "mint",
      },
      {
        href: "/how-it-works",
        label: "How it works",
        description: "See the workflow from journey to outcome.",
        icon: Lightbulb,
        tone: "aqua",
      },
      {
        href: "/iwi-funders",
        label: "Iwi & Funders",
        description: "Review partnership framing and impact pathways.",
        icon: BookOpen,
        tone: "gold",
      },
    ],
    footerLinks: [
      {
        href: "/business-card",
        label: "View business card",
        icon: BookOpen,
      },
      {
        href: "/contact",
        label: "Talk to the team",
        icon: MessageCircle,
      },
    ],
  },
] satisfies DropdownNavItem[];

const subscribeToScroll = (callback: () => void) => {
  window.addEventListener("scroll", callback, { passive: true });

  return () => window.removeEventListener("scroll", callback);
};

const getScrollSnapshot = () =>
  typeof window !== "undefined" && window.scrollY > 1;

const getServerScrollSnapshot = () => false;

function useWindowScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerScrollSnapshot,
  );
}

function isLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function isCardActive(pathname: string, card: NavCard) {
  return card.external ? false : isLinkActive(pathname, card.href);
}

function isItemActive(pathname: string, item: DropdownNavItem) {
  return item.cards.some((card) => isCardActive(pathname, card));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useWindowScrolled();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 min-h-16 border-b border-transparent bg-background/30 text-foreground backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-150",
        scrolled &&
          "border-border/70 bg-background/75 shadow-[0_1px_0_rgb(255_255_255_/_10%)]",
      )}
    >
      <div className="relative mx-auto h-16 max-w-[1414px]">
        <Link
          href="/"
          aria-label="Tai Ora home"
          className="absolute left-4 top-[15px] flex h-[34px] max-h-9 w-[33px] items-center justify-center p-0 text-primary no-underline focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:left-6"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={33}
            height={34}
            className="size-[33px] rounded-[6px] object-cover"
            priority
          />
        </Link>

        <nav
          aria-label="Site navigation"
          className="absolute left-1/2 top-[17px] hidden h-[30px] -translate-x-1/2 items-center justify-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <DesktopDropdownItem
              key={item.label}
              item={item}
              pathname={pathname}
            />
          ))}
        </nav>

        <div className="absolute right-[68px] top-3.5 flex h-9 max-w-[calc(100vw-120px)] items-center lg:right-6">
          <Link
            href="/contact"
            className="inline-flex max-w-full min-w-0 items-center justify-center truncate rounded-full border border-[#c97900] bg-[#000508]/70 px-3 py-2 text-xs font-semibold text-[#ffb51f] no-underline transition hover:-translate-y-0.5 hover:border-[#ffb51f] hover:text-[#ffe3a4] focus-visible:ring-[3px] focus-visible:ring-[#ffb51f]/35 active:translate-y-px min-[360px]:px-4 min-[360px]:text-sm"
          >
            Let&apos;s Connect
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="absolute right-3 top-2.5 inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface text-primary transition hover:bg-surface-hover hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-surface-active sm:right-4 lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-3 top-[72px] max-h-[calc(100dvh-84px)] overflow-auto rounded-lg border border-border bg-popover text-popover-foreground shadow-[0_18px_60px_rgba(0,0,0,0.38)] transition lg:hidden",
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile navigation" className="p-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <MobileDropdownItem
                key={`${pathname}-${item.label}`}
                item={item}
                pathname={pathname}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function DesktopDropdownItem({
  item,
  pathname,
}: {
  item: DropdownNavItem;
  pathname: string;
}) {
  const active = isItemActive(pathname, item);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={cn(
          "flex h-[30px] items-center justify-center gap-2 rounded px-2.5 py-[5px] text-center text-sm font-semibold leading-5 text-foreground outline-none transition data-[state=open]:text-primary data-[state=open]:[&_svg]:rotate-180 hover:text-link-hover focus-visible:text-link-hover focus-visible:shadow-[inset_0_-2px_0_var(--link)] active:text-primary-active",
          active && "text-primary",
          item.label === "Our Products" ? "w-[130px]" : "w-[109.4px]",
        )}
      >
        <span>{item.label}</span>
        <ChevronDown
          aria-hidden="true"
          className="size-[10.4px] shrink-0 transition-transform"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="center"
          avoidCollisions
          collisionPadding={24}
          sideOffset={14}
          className="z-50 w-[min(calc(100vw-2rem),780px)] overflow-hidden rounded-lg border border-border bg-surface/95 text-foreground shadow-[0_18px_60px_rgba(0,0,0,0.38)] outline-none backdrop-blur-xl"
        >
          <div className="px-4 pb-4 pt-4">
            <p className="text-sm font-semibold leading-5 text-muted-foreground">
              {item.sectionLabel}
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {item.cards.map((card) => (
                <MegaCard key={card.label} card={card} pathname={pathname} />
              ))}
            </div>
          </div>

          <div className="grid border-t border-border bg-surface-active md:grid-cols-2">
            {item.footerLinks.map((footerLink) => (
              <MegaFooterLink
                key={footerLink.label}
                footerLink={footerLink}
              />
            ))}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function MegaCard({
  card,
  pathname,
}: {
  card: NavCard;
  pathname: string;
}) {
  const active = isCardActive(pathname, card);
  const content = (
    <>
      <div
        className={cn(
          "flex h-28 items-center justify-center overflow-hidden rounded-md border p-4 transition-colors",
          card.tone === "aqua" && "border-border bg-muted",
          card.tone === "rose" && "border-border bg-surface-active",
          card.tone === "gold" && "border-primary/35 bg-surface",
          card.tone === "mint" && "border-accent/35 bg-surface-hover",
        )}
      >
        {card.image ? (
          <Image
            src={card.image}
            alt=""
            width={176}
            height={176}
            className="max-h-20 w-auto object-contain"
          />
        ) : card.icon ? (
          <card.icon
            aria-hidden="true"
            className="size-14 stroke-[1.5] text-primary"
          />
        ) : null}
      </div>
      <h3 className="mt-3 text-lg font-bold leading-6 text-foreground">
        {card.label}
      </h3>
      <p className="mt-1 text-sm leading-5 text-muted-foreground">
        {card.description}
      </p>
    </>
  );
  const className = cn(
    "block rounded-md p-0 text-foreground no-underline outline-none transition hover:[&_h3]:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50",
    active && "[&_h3]:text-primary",
  );

  return (
    <DropdownMenu.Item asChild>
      {card.external ? (
        <a
          href={card.href}
          target="_blank"
          rel="noreferrer"
          className={className}
        >
          {content}
        </a>
      ) : (
        <Link
          href={card.href}
          aria-current={active ? "page" : undefined}
          className={className}
        >
          {content}
        </Link>
      )}
    </DropdownMenu.Item>
  );
}

function MegaFooterLink({
  footerLink,
}: {
  footerLink: NavFooterLink;
}) {
  const Icon = footerLink.icon;
  const content = (
    <>
      <Icon aria-hidden="true" className="size-4 text-muted-foreground" />
      <span>{footerLink.label}</span>
      {footerLink.external ? (
        <ExternalLink aria-hidden="true" className="size-4" />
      ) : (
        <ArrowRight aria-hidden="true" className="size-4" />
      )}
    </>
  );
  const className =
    "flex min-h-14 items-center justify-center gap-2 px-4 text-sm font-semibold leading-5 text-foreground no-underline transition hover:bg-surface-hover hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-surface-active";

  return footerLink.external ? (
    <a
      href={footerLink.href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <Link href={footerLink.href} className={className}>
      {content}
    </Link>
  );
}

function MobileDropdownItem({
  item,
  pathname,
  onNavigate,
}: {
  item: DropdownNavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(isItemActive(pathname, item));
  const active = isItemActive(pathname, item);

  return (
    <li>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          className={cn(
            "flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold text-foreground outline-none transition hover:bg-surface-hover hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-surface-active [&[data-state=open]>svg]:rotate-180",
            active && "bg-surface-selected text-primary",
          )}
        >
          {item.label}
          <ChevronDown
            aria-hidden="true"
            className="size-4 shrink-0 transition-transform duration-200"
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:hidden">
          <ul className="mt-1 flex flex-col gap-1 border-l border-border pl-3">
            {item.cards.map((card) => {
              const cardActive = isCardActive(pathname, card);
              const cardContent = (
                <>
                  <span className="flex items-center gap-2 font-medium">
                    {card.label}
                    {card.external ? (
                      <ExternalLink aria-hidden="true" className="size-3.5" />
                    ) : null}
                  </span>
                  <span className="mt-1 text-xs leading-5 text-muted-foreground">
                    {card.description}
                  </span>
                </>
              );
              const cardClassName = cn(
                "flex flex-col rounded-md px-3 py-2 text-sm text-foreground no-underline transition hover:bg-surface-hover hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-surface-active",
                cardActive && "bg-surface-selected text-primary",
              );

              return (
                <li key={card.label}>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cardClassName}
                      onClick={onNavigate}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link
                      href={card.href}
                      aria-current={cardActive ? "page" : undefined}
                      className={cardClassName}
                      onClick={onNavigate}
                    >
                      {cardContent}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}

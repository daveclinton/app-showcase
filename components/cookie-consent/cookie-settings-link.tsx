"use client";

import { useCookieConsent } from "@/components/cookie-consent/cookie-consent-provider";
import { cn } from "@/lib/utils";

type CookieSettingsLinkProps = {
  className?: string;
};

export function CookieSettingsLink({ className }: CookieSettingsLinkProps) {
  const { openSettings } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openSettings}
      className={cn(
        "cursor-pointer border-0 bg-transparent p-0 text-inherit no-underline transition-colors hover:text-mauri-gold focus-visible:ring-[3px] focus-visible:ring-mauri-sage/50 active:text-mauri-gold-deep",
        className,
      )}
    >
      Cookie settings
    </button>
  );
}
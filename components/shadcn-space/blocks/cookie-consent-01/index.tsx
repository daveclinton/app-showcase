"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Cookie, Settings2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/components/cookie-consent/cookie-consent-provider";
import {
  getAcceptedPreferences,
  getDefaultPreferences,
  type CookiePreferences,
} from "@/lib/cookie-consent";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type CookieConsentProps = {
  variant?: "site" | "demo";
};

function CookiePreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-muted/40 p-4">
      <div className="min-w-0">
        <p className="font-medium text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 size-4 shrink-0 accent-primary disabled:cursor-not-allowed"
        aria-label={title}
      />
    </div>
  );
}

function CookieConsentBar({
  visible,
  settingsOpen,
  draftPreferences,
  isDemo,
  onOpenSettings,
  onCloseSettings,
  onDraftChange,
  onAcceptAll,
  onRejectAll,
  onSavePreferences,
}: {
  visible: boolean;
  settingsOpen: boolean;
  draftPreferences: CookiePreferences;
  isDemo: boolean;
  onOpenSettings: () => void;
  onCloseSettings: () => void;
  onDraftChange: (preferences: CookiePreferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSavePreferences: () => void;
}) {
  return (
    <div
      className={cn(
        "transition-all duration-500",
        isDemo
          ? "absolute inset-x-0 bottom-0 px-4 pb-6 lg:px-4"
          : "pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-6 lg:px-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="pointer-events-auto mx-auto max-w-7xl">
        <div className="rounded-xl border border-border bg-surface px-5 py-6 shadow-lg ring-1 ring-foreground/10 md:p-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 md:flex-nowrap">
              <div className="flex items-center gap-3">
                <div className="flex h-10 shrink-0 items-center rounded-full bg-secondary px-3">
                  <Cookie className="size-4 text-primary" />
                </div>
                <p className="text-base text-muted-foreground md:text-lg">
                  We use essential cookies to run the site and optional analytics cookies to
                  understand how it is used.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full"
                  aria-label="Cookie settings"
                  aria-expanded={settingsOpen}
                  onClick={settingsOpen ? onCloseSettings : onOpenSettings}
                >
                  <Settings2 />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6"
                  onClick={onRejectAll}
                >
                  Reject all
                </Button>
                <Button size="lg" className="rounded-full px-6" onClick={onAcceptAll}>
                  Accept all
                </Button>
              </div>
            </div>

            {settingsOpen ? (
              <div className="flex flex-col gap-4 border-t border-border pt-5">
                <div className="flex flex-col gap-3">
                  <CookiePreferenceRow
                    title="Essential"
                    description="Required for core site functionality and security."
                    checked
                    disabled
                  />
                  <CookiePreferenceRow
                    title="Analytics"
                    description="Helps us measure visits and improve the experience."
                    checked={draftPreferences.analytics}
                    onChange={(analytics) =>
                      onDraftChange({ essential: true, analytics })
                    }
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href="/privacy-policy"
                    className="text-sm font-medium text-link no-underline hover:text-link-hover"
                  >
                    Read our privacy policy
                  </Link>
                  <Button size="lg" className="rounded-full px-6" onClick={onSavePreferences}>
                    Save preferences
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieConsentSite() {
  const pathname = usePathname();
  const consent = useCookieConsent();
  const [draftPreferences, setDraftPreferences] = useState<CookiePreferences>(
    getDefaultPreferences(),
  );

  useEffect(() => {
    if (consent.settingsOpen) {
      setDraftPreferences(consent.preferences);
    }
  }, [consent.settingsOpen, consent.preferences]);

  if (pathname === "/cookie-consent-01") {
    return null;
  }

  const handleAcceptAll = () => {
    consent.acceptAll();
    toast.success("Cookies accepted. Analytics enabled.");
  };

  const handleRejectAll = () => {
    consent.rejectAll();
    toast.message("Optional cookies rejected.");
  };

  const handleSavePreferences = () => {
    consent.savePreferences(draftPreferences);
    toast.success("Cookie preferences saved.");
  };

  return (
    <CookieConsentBar
      visible={consent.ready && consent.bannerOpen}
      settingsOpen={consent.settingsOpen}
      draftPreferences={draftPreferences}
      isDemo={false}
      onOpenSettings={consent.openSettings}
      onCloseSettings={consent.closeSettings}
      onDraftChange={setDraftPreferences}
      onAcceptAll={handleAcceptAll}
      onRejectAll={handleRejectAll}
      onSavePreferences={handleSavePreferences}
    />
  );
}

function CookieConsentDemo() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draftPreferences, setDraftPreferences] = useState<CookiePreferences>(
    getDefaultPreferences(),
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-[url('https://images.shadcnspace.com/assets/hero-img/cookie-concent-bg-01.webp')] bg-cover bg-bottom bg-no-repeat">
      <div className="relative mx-auto min-h-screen max-w-7xl px-4 lg:px-8 xl:px-16">
        <CookieConsentBar
          visible={visible}
          settingsOpen={settingsOpen}
          draftPreferences={draftPreferences}
          isDemo
          onOpenSettings={() => setSettingsOpen(true)}
          onCloseSettings={() => setSettingsOpen(false)}
          onDraftChange={setDraftPreferences}
          onAcceptAll={() => {
            setDraftPreferences(getAcceptedPreferences());
            setVisible(false);
            setSettingsOpen(false);
            toast.success("Cookies accepted.");
          }}
          onRejectAll={() => {
            setDraftPreferences(getDefaultPreferences());
            setVisible(false);
            setSettingsOpen(false);
            toast.message("Optional cookies rejected.");
          }}
          onSavePreferences={() => {
            setVisible(false);
            setSettingsOpen(false);
            toast.success("Cookie preferences saved.");
          }}
        />
      </div>
    </section>
  );
}

const CookieConsent = ({ variant = "site" }: CookieConsentProps) => {
  if (variant === "demo") {
    return <CookieConsentDemo />;
  }

  return <CookieConsentSite />;
};

export default CookieConsent;
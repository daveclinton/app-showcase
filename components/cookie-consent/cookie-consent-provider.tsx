"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  clearAnalyticsCookies,
  getAcceptedPreferences,
  getDefaultPreferences,
  readStoredConsent,
  writeStoredConsent,
  type CookiePreferences,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  ready: boolean;
  hasConsent: boolean;
  preferences: CookiePreferences;
  bannerOpen: boolean;
  settingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookiePreferences) => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(getDefaultPreferences());
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();

    if (stored) {
      setHasConsent(true);
      setPreferences(stored.preferences);
    } else {
      const timer = window.setTimeout(() => setBannerOpen(true), 1000);
      setReady(true);

      return () => window.clearTimeout(timer);
    }

    setReady(true);
  }, []);

  const persist = useCallback((nextPreferences: CookiePreferences, reloadOnRevoke = false) => {
    const previous = readStoredConsent();
    writeStoredConsent(nextPreferences);
    setPreferences(nextPreferences);
    setHasConsent(true);
    setBannerOpen(false);
    setSettingsOpen(false);

    if (reloadOnRevoke && previous?.preferences.analytics && !nextPreferences.analytics) {
      clearAnalyticsCookies();
      window.location.reload();
    }
  }, []);

  const acceptAll = useCallback(() => {
    persist(getAcceptedPreferences());
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist(getDefaultPreferences());
  }, [persist]);

  const savePreferences = useCallback(
    (nextPreferences: CookiePreferences) => {
      persist(
        {
          essential: true,
          analytics: nextPreferences.analytics,
        },
        true,
      );
    },
    [persist],
  );

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
    setBannerOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
    if (hasConsent) {
      setBannerOpen(false);
    }
  }, [hasConsent]);

  const value = useMemo(
    () => ({
      ready,
      hasConsent,
      preferences,
      bannerOpen,
      settingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeSettings,
    }),
    [
      ready,
      hasConsent,
      preferences,
      bannerOpen,
      settingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeSettings,
    ],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }

  return context;
}
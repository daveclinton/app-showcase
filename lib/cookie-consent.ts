export type CookiePreferences = {
  essential: true;
  analytics: boolean;
};

export type StoredConsent = {
  preferences: CookiePreferences;
  updatedAt: string;
};

export const CONSENT_STORAGE_KEY = "taiora-cookie-consent";
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export function getDefaultPreferences(): CookiePreferences {
  return { essential: true, analytics: false };
}

export function getAcceptedPreferences(): CookiePreferences {
  return { essential: true, analytics: true };
}

function parseLegacyConsent(value: string): StoredConsent | null {
  if (value !== "accepted" && value !== "rejected") {
    return null;
  }

  return {
    preferences: value === "accepted" ? getAcceptedPreferences() : getDefaultPreferences(),
    updatedAt: new Date().toISOString(),
  };
}

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const legacy = parseLegacyConsent(raw);
    if (legacy) {
      writeStoredConsent(legacy.preferences);
      return legacy;
    }

    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed.updatedAt || typeof parsed.preferences?.analytics !== "boolean") {
      return null;
    }

    const age = Date.now() - new Date(parsed.updatedAt).getTime();
    if (age > CONSENT_MAX_AGE_MS) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return {
      preferences: {
        essential: true,
        analytics: parsed.preferences.analytics,
      },
      updatedAt: parsed.updatedAt,
    };
  } catch {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    return null;
  }
}

export function writeStoredConsent(preferences: CookiePreferences): StoredConsent {
  const stored: StoredConsent = {
    preferences: {
      essential: true,
      analytics: preferences.analytics,
    },
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  return stored;
}

export function clearAnalyticsCookies() {
  if (typeof document === "undefined") {
    return;
  }

  const hostname = window.location.hostname;
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name))
    .filter((name) => name.startsWith("_ga") || name.startsWith("_gid") || name.startsWith("_gat"));

  for (const name of cookieNames) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${hostname}`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${hostname}`;
  }
}

export function getGoogleAnalyticsId() {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
}
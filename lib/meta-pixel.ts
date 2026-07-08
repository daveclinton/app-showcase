const configuredPixelId =
  process.env.NEXT_PUBLIC_FB_PIXEL_ID?.trim() ?? "";

export const META_PIXEL_ID = /^\d+$/.test(configuredPixelId)
  ? configuredPixelId
  : "";

type MetaPixelFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  }
}

export function trackMetaPixelEvent(
  eventName: string,
  parameters?: Record<string, unknown>,
) {
  if (typeof window === "undefined" || !window.fbq) {
    return;
  }

  window.fbq("track", eventName, parameters);
}

export function trackMetaPixelPageView() {
  trackMetaPixelEvent("PageView");
}

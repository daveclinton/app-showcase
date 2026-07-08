"use client";

import Script from "next/script";
import { getGoogleAnalyticsId } from "@/lib/cookie-consent";
import { useCookieConsent } from "@/components/cookie-consent/cookie-consent-provider";
import { MetaPixel } from "@/components/cookie-consent/meta-pixel";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

export function CookieConsentScripts() {
  const gaId = getGoogleAnalyticsId();
  const { ready, hasConsent, preferences } = useCookieConsent();
  const analyticsConsent =
    ready && hasConsent && preferences.analytics;
  const googleAnalyticsEnabled = analyticsConsent && Boolean(gaId);
  const metaPixelEnabled = analyticsConsent && Boolean(META_PIXEL_ID);

  if (!gaId && !META_PIXEL_ID) {
    return null;
  }

  return (
    <>
      {gaId ? (
        <Script id="cookie-consent-defaults" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
      ) : null}

      {googleAnalyticsEnabled ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'update', {
                analytics_storage: 'granted',
              });
              gtag('config', '${gaId}', {
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      ) : null}
      {metaPixelEnabled ? <MetaPixel /> : null}
    </>
  );
}

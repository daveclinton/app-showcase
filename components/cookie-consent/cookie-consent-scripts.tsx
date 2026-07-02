"use client";

import Script from "next/script";
import { getGoogleAnalyticsId } from "@/lib/cookie-consent";
import { useCookieConsent } from "@/components/cookie-consent/cookie-consent-provider";

export function CookieConsentScripts() {
  const gaId = getGoogleAnalyticsId();
  const { ready, hasConsent, preferences } = useCookieConsent();
  const analyticsEnabled = ready && hasConsent && preferences.analytics && Boolean(gaId);

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script id="cookie-consent-defaults" strategy="beforeInteractive">
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

      {analyticsEnabled ? (
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
    </>
  );
}
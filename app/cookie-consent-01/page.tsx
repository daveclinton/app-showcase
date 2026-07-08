import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import CookieConsent from "@/components/shadcn-space/blocks/cookie-consent-01";


export const metadata: Metadata = createPageMetadata({
  title: 'Cookie Consent Demo',
  description: 'Cookie consent component demo for Tai Ora.',
  path: '/cookie-consent-01',
  noIndex: true,
});

export default function CookieConsentPage() {
  return <CookieConsent variant="demo" />;
}
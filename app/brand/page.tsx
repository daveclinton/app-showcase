import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'For Brands',
  description: 'Partner with Tai Ora to showcase your products through authentic previews and real journeys that build trust and loyalty.',
  path: '/brand',
});

export default function BrandPage() {
  return (
    <SimpleCenteredPage
      title="Match with your true customers"
      description="Partner with Tai Ora to showcase your products through authentic previews and real journeys that build trust and loyalty."
      highlights={["Authentic previews and reviews", "Transparent creator licensing", "Culture, ethics and trust"]}
      sections={[
        {
          title: "For Brands",
          items: [
            "Short, useful product previews alongside verified reviews and real customer journeys.",
            "Transparent licensing opportunities with creator content",
            "A platform built on culture, ethics and trust that leads to loyalty",
          ],
        },
        {
          title: "Ethical & inclusive by design",
          items: [
            "Consent-first licensing with transparent terms and attribution requirement",
            "Approved previews may be shared externally. Personal iGlo™ journeys remain private unless the user explicitly chooses to share or license content from them.",
            "Edits cannot change the meaning of the creator’s experience",
            "Phase 1: customers will be redirected to purchase through the brand’s website.",
          ],
        },
        {
          title: "What you can do",
          items: [
            "Connect with suitable creators across skincare, haircare, self-care and wellness.",
            "License VeeVu™ previews for paid media and product pages",
            "License verified reviews created from consenting users iGlo™ journeys for approved brand channels.",
            "Request specific briefs or challenges for launches",
            "Access basic, privacy-conscious performance insights.",
          ],
        },
        {
          title: "Licensing options",
          items: [
            "Flexible terms: creator-owned, brand-licensed with flexible durations",
            "Co-branded use may be available with the creator’s explicit approval and clear disclosure of the brand relationship.",
            "Extended licensing may be agreed directly with the creator, with clear terms covering duration, channels, payment and permitted use.",
            "All options uphold creator rights, cultural respect, and transparent usage.",
          ],
        },
      ]}
      secondaryCtaLabel="Email Us To Book a Call"
      secondaryCtaHref="/contact"
      ctaLabel="Partner with Tai Ora"
      ctaHref="/partner"
    />
  );
}

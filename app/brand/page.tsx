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
            "Authentic previews and reviews created by real people",
            "Transparent licensing opportunities with creator content",
            "A platform built on culture, ethics and trust that leads to loyalty",
          ],
        },
        {
          title: "Ethical & inclusive by design",
          items: [
            "Consent-first licensing with transparent terms and attribution requirement",
            "Previews can be shared externally; full journeys remain on Tai Ora",
            "Edits cannot change the meaning of the creator’s experience",
            "Phase 1: all sales redirect to your site for conversion",
          ],
        },
        {
          title: "What you can do",
          items: [
            "Source creator content across skincare, haircare and wellness",
            "License VeeVu™ previews for paid media and product pages",
            "Embed iGlo™ journeys to increase product-page conversion with proof",
            "Run A/B tests with multiple VeeVu™ cuts auto-generated from journeys",
            "Request specific briefs or challenges for launches",
            "Measure performance with transparent, privacy-safe analytics",
          ],
        },
        {
          title: "Licensing options",
          items: [
            "Flexible terms: creator-owned, brand-licensed with flexible durations",
            "Co-branded: your brand identity alongside the creator",
            "Full buyout: optional by mutual agreement with full rights transfer",
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

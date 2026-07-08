import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'Business Card',
  description: 'A concise Tai Ora contact point for partners, creators, and collaborators who want to connect with the ecosystem.',
  path: '/business-card',
});

export default function BusinessCardPage() {
  return (
    <SimpleCenteredPage
      title="Business Card"
      description="A concise Tai Ora contact point for partners, creators, and collaborators who want to connect with the ecosystem."
      highlights={["Tai Ora AI Limited", "Auckland, New Zealand", "Patent pending"]}
      ctaLabel="Contact Tai Ora"
      ctaHref="/contact"
    />
  );
}

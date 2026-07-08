import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'How It Works',
  description: 'Wellbeing is personal. So is Tai Ora. We guide users to creators and brands that align with their individual journeys.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <SimpleCenteredPage
      title="How Tai Ora Works"
      description="Wellbeing is personal. So is Tai Ora. We guide users to creators and brands that align with their individual journeys, building trust, connection and better choices for everyone."
      highlights={["VeeVu™ for discovery", "iGlo™ for proof", "Ethics, culture, and care"]}
      sections={[
        {
          title: "Different uploads. Different outcomes.",
          body: "Creators can upload a VeeVu™ for quick discovery or an iGlo™ for authentic proof. Many choose to share both, giving brands flexible, trustworthy content.",
          items: [
            "VeeVu™: short, meaningful previews cut from the journey for product pages, ads and quick decisions.",
            "iGlo™: the full, AI-verified journey with photos, notes, reflections and truthful results over time.",
            "This two-video approach powers both discovery and trust.",
          ],
        },
        {
          title: "Steps for Creators",
          items: [
            "Record your journey: hook, intro, benefits, demo, CTA.",
            "Upload and describe: title, product, brand, category, key benefits.",
            "Auto create VeeVu™: Tai Ora generates the preview cut from your journey.",
            "iGlo™ builds over time: add photos, notes and reflections as you go.",
            "Publish and license: approve where your content appears and how it is used.",
          ],
        },
        {
          title: "For Brands",
          items: [
            "Authentic previews and reviews created by real people",
            "Transparent licensing opportunities with creator content",
            "A platform built on culture, ethics and trust that leads to loyalty",
          ],
        },
        {
          title: "Ethics, Culture, and Care",
          items: [
            "Cultural inclusivity: Māori-led foundation; we welcome all peoples and cultures with open hearts.",
            "Creator respect: respect for creator IP, informed consent and transparent licensing.",
            "Wellbeing-first: no pressure to exaggerate claims or results.",
          ],
        },
      ]}
      secondaryCtaLabel="I'm a brand"
      secondaryCtaHref="/brand"
      ctaLabel="Explore Tai Ora"
      ctaHref="/"
    />
  );
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'How It Works',
  description: 'Start with what matters to you. Explore products, record your experiences or reflect on your wellbeing. Tai Ora’s wider pathways are evolving to support learning, confidence and practical action.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <SimpleCenteredPage
      title="How Tai Ora Works"
      description="Start with what matters to you. Explore products, record your experiences or reflect on your wellbeing. Tai Ora’s wider pathways are evolving to support learning, confidence and practical action."
      highlights={["VeeVu™ for discovery", "iGlo™ for proof", "Ethics, culture, and care"]}
      sections={[
        {
          title: "VeeVu",
          body: "Explore short beauty and wellbeing product previews. Follow the product link to the retailer or brand website to learn more or make a purchase.",
        },
        {
          title: "iGlo",
          body: "Record your beauty and self-care journey through check-ins, photos, notes and reflections. Track what changes for you over time. Your journey is private by default.",
        },
        {
          title: "Mauri",
          body: "Mauri sits within LydiaGlo, Tai Ora’s wellbeing area. It is an AI-guided space to pause, reflect and find your way forward, with encouragement to connect with trusted people when needed. It is not a therapy, diagnostic or emergency service.",
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

import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'For Creators',
  description: 'iGlo™ allows creators to document authentic product experiences and create earning opportunities from the content they choose to share. Only the original creator can earn from licensing their content through Tai Ora.',
  path: '/creators',
});

export default function CreatorsPage() {
  return (
    <SimpleCenteredPage
      title="Turn your passion into purpose"
      description="iGlo™ allows creators to document authentic product experiences and create earning opportunities from the content they choose to share. Only the original creator can earn from licensing their content through Tai Ora."
      highlights={["Share your authentic journey", "Retain ownership of your story", "Earn through ethical brand partnerships"]}
      sections={[
        {
          title: "Creators: Why Join?",
          body: "Tai Ora is inviting creators to help shape a more authentic way of sharing product experiences. Through iGlo™, you can build trust, help people make informed choices and create value from your lived experience.",
          items: [
            "Share your authentic journey and voice",
            "Retain ownership of your story and content",
            "Earn opportunities through ethical brand partnerships",
            "Help people make better, more informed choices",
          ],
        },
        {
          title: "How it works",
          items: [
            "Sign up: join the Tai Ora creator community.",
            "Start your journey: choose a product and begin documenting your genuine experience.",
            "Track your experience: add photos, notes and reflections over time.",
            "Choose what to share: your journey remains private unless you decide to share content from it.",
            "License and earn: with your permission, content from your iGlo™ journey may be licensed by brands.",
          ],
        },
        {
          title: "Do you sell your own products?",
          body: [
            "Creators who own a product or are authorised to sell on behalf of a brand may apply separately as a brand or seller. Tai Ora’s applicable fees will apply.",
            "Important: VeeVu™ product previews are created by Tai Ora or a brand, not by ordinary creators.",
          ],
        },
      ]}
      ctaLabel="Contact Tai Ora"
      ctaHref="/contact"
    />
  );
}

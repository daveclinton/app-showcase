import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'Iwi & Funders',
  description: 'Building with integrity, guided by kaupapa Māori and open to partnerships that honour tino rangatiratanga, cultural safety and community benefit.',
  path: '/iwi-and-funders',
});

export default function IwiAndFundersPage() {
  return (
    <SimpleCenteredPage
      title="Iwi & Funders"
      description="Building with integrity, guided by kaupapa Māori and open to partnerships that honour tino rangatiratanga, cultural safety and community benefit."
      highlights={["Māori data sovereignty", "Cultural guardianship", "Non-extractive partnership"]}
      sections={[
        {
          title: "Our Commitment to Māori Data Sovereignty",
          body: [
            "Tai Ora is built on Māori data sovereignty and cultural guardianship.",
            "All data, stories and lived experiences shared on the platform remain under the control of the people and communities they come from.",
            "Data is treated as taonga. Tai Ora does not sell personal or cultural data. Use of information is consent based, transparent and designed to enhance mana, collective wellbeing and self determination.",
          ],
        },
        {
          title: "Ways to Engage",
          body: "If this resonates let us begin with a discovery hui. We clarify goals, communities served, cultural and data settings, evaluation needs and pilot scope. From there, we can develop a simple Memorandum of Understanding, agree on how we will work together and create an outcomes plan that sets out how knowledge and benefits will return to whānau.",
        },
      ]}
      ctaLabel="Partner with Tai Ora"
      ctaHref="/partner"
    />
  );
}

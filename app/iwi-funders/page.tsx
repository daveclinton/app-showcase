import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function IwiFundersPage() {
  return (
    <SimpleCenteredPage
      title="Iwi & Funders"
      description="A pathway for iwi, funders, and values-aligned organisations to support wellbeing technology grounded in Te Tiriti values and mātauranga Māori."
      highlights={["Te Tiriti values", "Community wellbeing", "Future pathways"]}
      ctaLabel="Partner with Tai Ora"
      ctaHref="/partner"
    />
  );
}

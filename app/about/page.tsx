import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function AboutPage() {
  return (
    <SimpleCenteredPage
      title="About Tai Ora"
      description="Tai Ora is a Māori-led ethical AI ecosystem shaped around wellbeing, reflection, trust, and practical pathways for people and communities."
      highlights={["Māori-led warmth", "People-first technology", "Built for trust"]}
      ctaLabel="Explore the ecosystem"
      ctaHref="/"
    />
  );
}

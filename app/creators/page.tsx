import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function CreatorsPage() {
  return (
    <SimpleCenteredPage
      title="Creators"
      description="Creator pathways for authentic product previews, trusted recommendations, and campaigns that respect identity, consent, and community."
      highlights={["Veevu previews", "Authentic voice", "Campaign readiness"]}
      ctaLabel="Join the waitlist"
      ctaHref="/waitlist"
    />
  );
}

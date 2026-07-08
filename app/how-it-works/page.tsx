import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function HowItWorksPage() {
  return (
    <SimpleCenteredPage
      title="How It Works"
      description="Tai Ora connects reflection, creator insight, trusted reviews, and future AI pathways into one ecosystem designed to support people rather than replace them."
      highlights={["Reflect with Mauri", "Preview with Veevu", "Track growth with Iglo"]}
      ctaLabel="Explore Tai Ora"
      ctaHref="/"
    />
  );
}

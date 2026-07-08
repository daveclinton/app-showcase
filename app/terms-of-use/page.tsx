import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function TermsOfUsePage() {
  return (
    <SimpleCenteredPage
      title="Terms of Use"
      description="The Tai Ora terms outline respectful, transparent, and values-led use of the ecosystem across wellbeing, creator, and partner experiences."
      highlights={["Respectful use", "Clear expectations", "People-first platform"]}
      ctaLabel="View privacy policy"
      ctaHref="/privacy-policy"
    />
  );
}

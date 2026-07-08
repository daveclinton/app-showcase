import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function PrivacyPolicyPage() {
  return (
    <SimpleCenteredPage
      title="Privacy Policy"
      description="Tai Ora is privacy-first, consent-led, and values-aligned. Your privacy is yours, and your data should be protected with clear intent."
      highlights={["Privacy-first", "Consent-led", "Never sold"]}
      ctaLabel="Read terms of use"
      ctaHref="/terms-of-use"
    />
  );
}

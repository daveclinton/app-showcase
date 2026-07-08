import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function ContactPage() {
  return (
    <SimpleCenteredPage
      title="Contact Tai Ora"
      description="Start a conversation about ethical AI pathways, creator partnerships, Māori-led wellbeing technology, or joining the Tai Ora ecosystem."
      highlights={["Partnerships", "Creator support", "Community pathways"]}
      ctaLabel="Join the waitlist"
      ctaHref="/waitlist"
    />
  );
}

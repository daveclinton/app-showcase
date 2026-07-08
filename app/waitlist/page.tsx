import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function WaitlistPage() {
  return (
    <SimpleCenteredPage
      title="Join the Waitlist"
      description="Register interest in upcoming Tai Ora pathways across creator tools, trusted reviews, brand partnerships, and future AI opportunities."
      highlights={["Early access", "Creator pathways", "Partner updates"]}
      ctaLabel="Contact Tai Ora"
      ctaHref="/contact"
    />
  );
}

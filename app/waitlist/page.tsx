import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function WaitlistPage() {
  return (
    <SimpleCenteredPage
      title="Join the Waitlist"
      description="Be the first to know when we launch."
      highlights={["Early access", "Launch updates", "Privacy respected"]}
      form={{
        title: "Join the Waitlist",
        description: "Share your name and email to receive updates from Tai Ora.",
        fields: ["Full Name", "Email Address"],
        note: "We respect your privacy and will never share your information.",
        submitLabel: "Contact Tai Ora",
      }}
      ctaLabel="Contact Tai Ora"
      ctaHref="/contact"
    />
  );
}

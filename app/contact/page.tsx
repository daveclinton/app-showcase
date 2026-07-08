import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function ContactPage() {
  return (
    <SimpleCenteredPage
      title="Let's connect"
      description="We'd love to hear from you, whether you're curious about Tai Ora, want to collaborate, or just want to say kia ora."
      highlights={["General enquiries", "Press and media", "Partnerships and support"]}
      sections={[
        {
          title: "Get in touch",
          body: [
            "Email us at hello@taiora.ai.",
            "For press and partnerships, email partnerships@taiora.ai.",
          ],
        },
        {
          title: "Follow us",
          items: [
            "Instagram: @tai.ora",
            "LinkedIn: Tai Ora",
            "Facebook: Tai Ora",
          ],
        },
      ]}
      form={{
        title: "Send a message",
        description: "Use these details when contacting Tai Ora so we can route your enquiry clearly.",
        fields: ["Name", "Email", "Type of enquiry", "Message"],
        submitLabel: "Contact Tai Ora",
      }}
      ctaLabel="Join the waitlist"
      ctaHref="/waitlist"
    />
  );
}

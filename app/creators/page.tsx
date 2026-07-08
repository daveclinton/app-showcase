import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function CreatorsPage() {
  return (
    <SimpleCenteredPage
      title="Turn your passion into purpose"
      description="iGlo™ allows creators to journal authentic experiences and monetise their reviews. Only the original creator can earn from their content."
      highlights={["Share your authentic journey", "Build ownership of your story", "Earn through ethical brand partnerships"]}
      sections={[
        {
          title: "Creators: Why Join?",
          body: "Tai Ora is inviting early creators to help shape a new way of sharing and earning. With VeeVu™ and iGlo™, you can build trust, help people make informed choices, and create value from your lived experience.",
          items: [
            "Share your authentic journey and voice",
            "Build ownership of your story and content",
            "Earn opportunities through ethical brand partnerships",
            "Help people make better, more informed choices",
          ],
        },
        {
          title: "How it works",
          items: [
            "Sign up: join our creator community",
            "Create: share authentic experiences",
            "Share: publish your reviews",
            "Earn: monetise your content",
          ],
        },
        {
          title: "Different uploads. Different outcomes.",
          body: "Creators can share their authentic experiences in two complementary formats.",
          items: [
            "VeeVu™: a short, meaningful preview designed for product pages, ads and quick decisions.",
            "iGlo™: a full journey log with photos, notes, reflections and verified results over time.",
            "Together, these build both discovery and trust.",
          ],
        },
        {
          title: "From upload to licence",
          items: [
            "Upload your video: share product benefits, usage and your authentic experience.",
            "Auto create VeeVu™: a short preview that showcases product highlights.",
            "iGlo™ journey built: a full, AI-verified record showing truthful results over time.",
            "License and earn: VeeVu™ and iGlo™ reviews become assets that brands can license.",
          ],
        },
      ]}
      form={{
        title: "Apply to Become a Creator",
        description: "Join our community of authentic creators and start turning your passion into purpose.",
        fields: ["Name", "Email", "Social media", "Why you want to join"],
        note: "Applications are reviewed for fit with Tai Ora's authentic, ethical creator community.",
        submitLabel: "Contact Tai Ora",
      }}
      ctaLabel="Join the waitlist"
      ctaHref="/waitlist"
    />
  );
}

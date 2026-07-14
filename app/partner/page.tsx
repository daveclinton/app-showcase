import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'Partner With Tai Ora',
  description: 'A values-led wellbeing platform helping people make informed choices through authentic journeys and trusted guidance.',
  path: '/partner',
});

export default function PartnerPage() {
  return (
    <SimpleCenteredPage
      title="Partner With Tai Ora"
      description="A values-led wellbeing platform helping people make informed choices through authentic journeys and trusted guidance."
      highlights={["Human-shared authenticity", "Māori-led innovation", "Community-centred impact"]}
      sections={[
        {
          title: "The Meaning of Tai Ora",
          body: "The name Tai Ora brings together tai, reflecting the tides and rhythms of life, and ora, representing health and wellbeing. Together, they express our cultural grounding and vision for purposeful living.",
        },
        {
          title: "Why Partner With Us",
          body: "Sponsors and partners help us expand this vision, creating technology that uplifts people, not just profits. Collaborating with Tai Ora connects your organisation to authentic journeys supported by responsible technology and values-led innovation.",
          items: [
            "Authenticity: real, timestamped journeys shared by people",
            "Cultural grounding: Māori principles of balance and whānau",
            "Ethical innovation: AI that guides and supports, never controls",
            "Giving back: a meaningful portion of future profits will support community wellbeing initiatives",
          ],
        },
        {
          title: "Sponsorship Opportunities",
          items: [
            "Financial sponsorship: fuel product growth, Māori-led creator programmes and community access.",
            "Brand partnership: showcase products through VeeVu™ and iGlo™ journeys that brands and users can trust.",
            "In-kind support: provide products, services, or expertise to empower creators and communities.",
            "Research collaboration: explore research partnerships supporting the responsible development of T.A.I., Tai Ora Angel Intelligence.",
          ],
        },
        {
          title: "Our Values",
          items: [
            "Whakapapa: lineage and connection",
            "Whānau: family and care",
            "Manaakitanga: respect and upliftment",
            "Kaitiakitanga: guardianship and sustainability",
            "Pono: truth and integrity",
            "Kotahitanga: unity and inclusivity",
          ],
        },
        {
          title: "Our Vision & Impact",
          body: "Our profits sustain and support the people building Tai Ora, fuel continued growth and enable us to dedicate a meaningful portion to social and cultural initiatives beyond the platform. Tai Ora is not just technology, it is a global movement for purposeful living.",
          items: [
            "Growing network of creators preparing to share authentic product journeys",
            "Early interest from ethical beauty, self-care and Māori-led brands",
            "Phase 1 focus on high-quality content across skin, hair and self-care",
          ],
        },
        {
          title: "Contact Information",
          body: [
            "For sponsorships and partnerships, contact Tania Pickering, Founder & CEO.",
            "Email: tania@taiora.ai",
            "Tai Ora: Truth in Beauty. Wellness with Purpose.",
          ],
        },
      ]}
      form={{
        title: "Get In Touch",
        description: "Tell us about your partnership interest, goals, and how you'd like to collaborate with Tai Ora.",
        fields: ["Name", "Email", "Organisation", "Partnership interest"],
        privacyNote: "By submitting this form, you agree that Tai Ora may use your information to respond to your enquiry. Your information will not be sold.",
        note: "We aim to respond within 2–3 business days.",
        submitLabel: "Contact Tai Ora",
      }}
      ctaLabel="Contact Tai Ora"
      ctaHref="/contact"
    />
  );
}

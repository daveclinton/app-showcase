import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'Partner With Tai Ora',
  description: 'We welcome partnerships that help people and whānau strengthen wellbeing, build confidence and explore future possibilities. Tai Ora connects ethical technology, authentic personal journeys and developing pathways across identity, learning and practical skills, guided by Māori values.',
  path: '/partner',
});

export default function PartnerPage() {
  return (
    <SimpleCenteredPage
      title="Partner With Tai Ora"
      description="We welcome partnerships that help people and whānau strengthen wellbeing, build confidence and explore future possibilities. Tai Ora connects ethical technology, authentic personal journeys and developing pathways across identity, learning and practical skills, guided by Māori values."
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
            "Financial sponsorship: support community access, rangatahi programmes, evaluation and the development of pathways for wellbeing, confidence and practical learning.",
            "Brand partnership: showcase products through VeeVu™ and iGlo™ journeys that brands and users can trust.",
            "In-kind support: provide products, services, or expertise to empower creators and communities.",
            "Education and community collaboration: explore opportunities to support rangatahi programmes, practical learning, evaluation and access to technology.",
            "Research collaboration: explore opportunities to evaluate and develop ethical technology and wellbeing pathways with education and research partners.",
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
          body: "We are building Tai Ora to help people and whānau explore what matters to them, develop confidence and take practical steps towards their future. As the business grows, we aim to sustain the people building it, improve the ecosystem and contribute to community wellbeing initiatives.",
        },
        {
          title: "Current focus",
          body: "Our foundations are VeeVu™ product previews, iGlo™ personal journeys and LydiaGlo, which contains Mauri for reflection. Rangatahi and education are an early focus as we develop the wider pathways. We welcome partners who can help shape, support and evaluate this work.",
        },
        {
          title: "Contact Information",
          body: [
            "For sponsorships and partnerships, contact Tania Pickering, Founder & CEO.",
            "Email: tania@taiora.ai",
            "Tai Ora: Supporting people and whānau to explore, grow and shape their future.",
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

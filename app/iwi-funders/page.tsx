import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'Iwi & Funders',
  description: 'Building with integrity, guided by kaupapa Māori and open to partnerships that honour tino rangatiratanga, cultural safety and community benefit.',
  path: '/iwi-funders',
});

export default function IwiFundersPage() {
  return (
    <SimpleCenteredPage
      title="Iwi & Funders"
      description="Building with integrity, guided by kaupapa Māori and open to partnerships that honour tino rangatiratanga, cultural safety and community benefit."
      highlights={["Māori data sovereignty", "Cultural guardianship", "Non-extractive partnership"]}
      sections={[
        {
          title: "Our Commitment to Māori Data Sovereignty",
          body: [
            "Tai Ora is built on Māori data sovereignty and cultural guardianship.",
            "All data, stories and lived experiences shared on the platform remain under the control of the people and communities they come from.",
            "Data is treated as taonga. Tai Ora does not sell personal or cultural data. Use of information is consent based, transparent and designed to enhance mana, collective wellbeing and self determination.",
            "Sovereignty is a foundational principle and will not be compromised for scale, funding or growth.",
          ],
        },
        {
          title: "Cultural Alignment and Governance",
          body: [
            "Tai Ora is Māori-led and committed to working in ways that respect tikanga, whakapapa and whānau-centred decision-making.",
            "Where appropriate, we will work with iwi and Māori partners to establish suitable cultural guidance and clear decision-making processes. Roles, consent, responsibilities and data use will be agreed from the beginning so expectations remain transparent and culturally safe.",
          ],
        },
        {
          title: "Partnership Pathways",
          body: [
            "We welcome kōrero with iwi and Māori organisations, kaupapa Māori providers, schools, tertiary providers, community trusts, funders and other values-aligned organisations.",
            "Partnerships may include:",
          ],
          items: [
            "Co-designed rangatahi programmes and workshops",
            "Trials and evaluation of Mauri",
            "Future AI Pathways initiatives",
            "Community or education pilots",
            "Strategic and funding partnerships",
          ],
          afterItems:
            "Each partnership will be shaped around the needs of the people and communities involved.",
        },
        {
          title: "Funding Alignment",
          body: [
            "Tai Ora seeks funding partners who value long-term community benefit, uphold tino rangatiratanga and respect Māori knowledge, leadership and intellectual property.",
            "Funding may support rangatahi programmes, community pilots, evaluation, technology access and the continued development of safe and practical pathways through Tai Ora.",
          ],
        },
        {
          title: "Data and Privacy Commitments",
          body: [
            "Tai Ora does not sell personal data.",
            "Information is collected and used only for clearly defined purposes, with appropriate consent and privacy protections. Where insights are provided to participating organisations, these will be aggregated and de-identified to protect individual privacy.",
            "Any arrangements involving Māori data will be discussed with the relevant partners, including how information is governed, used and returned for the benefit of whānau and communities.",
          ],
        },
        {
          title: "Looking Ahead",
          body: [
            "Tai Ora is more than technology. It is an evolving ecosystem designed to help people feel seen, supported and more confident about their next steps.",
            "Our current focus includes Mauri, a free and private AI-guided space for reflection, and Future AI Pathways, which helps rangatahi explore their strengths, identity and opportunities across AI, technology and the future of work.",
            "As Tai Ora grows, we will continue developing practical pathways that strengthen confidence, connection and informed decision-making.",
          ],
        },
        {
          title: "Ways to Engage",
          body: [
            "If this kaupapa aligns with your organisation, we welcome an initial kōrero.",
            "Together, we can clarify the people being served, the outcomes sought, cultural and data considerations, the proposed scope and how success will be measured. Where there is alignment, we can agree on roles, responsibilities and how knowledge and benefits will return to whānau and communities.",
          ],
        },
      ]}
      secondaryCtaLabel="Contact Tai Ora"
      secondaryCtaHref="/contact"
      ctaLabel="Partner with Tai Ora"
      ctaHref="/partner"
    />
  );
}

import { SimpleCenteredPage } from "../_components/simple-centered-page";

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
          title: "Cultural Alignment & Governance",
          body: "We respect tikanga and kawa and support whānau centred decision making. With iwi partners we set an advisory rōpū and clear governance for hui cadence, escalation and sign offs. We document roles, data flows and consent so expectations stay clear and culturally safe.",
        },
        {
          title: "Partnership Pathways",
          body: "We welcome kōrero with iwi and Māori organisations, kaupapa Māori providers, community trusts, research and clinical teams and values aligned brands. Options include co designed pilots, evaluation programmes, creator enablement and time bound review licences that respect creator authorship and cultural integrity.",
        },
        {
          title: "Funding Alignment",
          body: "We seek funders who put collective benefit before profit, uphold tino rangatiratanga and respect tikanga in practice. Pathways include iwi investment arms, whānau trusts, Māori and philanthropic funds and kaupapa aligned impact investors.",
        },
        {
          title: "Data & Privacy Commitments",
          body: [
            "Your trust is paramount. Data is never sold or shared outside Tai Ora and its communities. Insights are used in collated form only and are never individually identifiable.",
            "Only short preview videos may be shared externally when the creator has given consent. Full journeys remain on Tai Ora. Creators retain authorship and brands receive time bound licences with attribution.",
          ],
        },
        {
          title: "Looking Ahead",
          body: [
            "Tai Ora is more than technology. It is part of a journey of identity, shaped by where we come from, the lessons of our whakapapa and the resilience of our whānau.",
            "As Tai Ora grows, LydiaGlo™ is our next focus, offering guided pathways that support recovery, confidence and connection. SoulGlo™ will provide a safe space for journalling, breath and healing through sound.",
            "At the heart of it all is the same vision to help people reconnect with themselves, their culture and each other so they feel seen, supported and strong in their identity.",
          ],
        },
        {
          title: "Ways to Engage",
          body: "If this resonates let us begin with a discovery hui. We clarify goals, communities served, cultural and data settings, evaluation needs and pilot scope. Then we draft a light Memorandum of Understanding, governance cadence and an outcomes plan including how knowledge and benefits return to whānau.",
        },
      ]}
      secondaryCtaLabel="Contact Tai Ora"
      secondaryCtaHref="/contact"
      ctaLabel="Partner with Tai Ora"
      ctaHref="/partner"
    />
  );
}

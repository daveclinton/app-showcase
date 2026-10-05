import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'About Us',
  description: 'Tai Ora is a Māori-led wellbeing and technology ecosystem supporting people and whānau to reflect, grow and navigate what comes next.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <SimpleCenteredPage
      title="About Us"
      description="Tai Ora is a Māori-led wellbeing and technology ecosystem supporting people and whānau to reflect, grow and navigate what comes next."
      highlights={["Truth in wellbeing", "Authentic human stories", "Ethical technology"]}
      sections={[
        {
          title: "Why Tai Ora Exists",
          body: "People face choices about their wellbeing, identity and future amid overwhelming information and competing expectations. Tai Ora brings together authentic experience, cultural connection, practical tools and ethical technology so people can find clarity, recognise their strengths and take steps that matter to them.",
        },
        {
          title: "Our Story",
          body: [
            "I created Tai Ora because I wanted people to feel seen and supported in the choices they make. I had experienced how confusing product information can be, and I knew that wellbeing is also connected to identity, confidence, relationships and hopes for the future.",
            "Tai Ora brings these connections into one ecosystem. VeeVu™ helps people explore products, and iGlo™ gives them a private place to track their own experiences. LydiaGlo is the wellbeing area containing Mauri, an AI-guided space for reflection. The wider pathways offer different places to begin, depending on what matters to each person and whānau.",
          ],
        },
        {
          title: "Our Purpose",
          body: "Our purpose is to support people and whānau to feel more confident in themselves, connected to their identity and able to shape their future. We bring together reflection, lived experience and ethical technology so people can explore their strengths, build knowledge and take practical steps at their own pace.",
        },
        {
          title: "Our Vision",
          body: "We see Tai Ora as a connected ecosystem where people and whānau can explore the pathways that matter to them, from wellbeing and identity to practical skills and future opportunities. Ethical technology can help people reflect and learn while they remain in control of their own choices.",
        },
        {
          title: "Tai Ora Philosophy of Wellbeing",
          body: [
            "Tai Ora is grounded in the belief that wellbeing is not simply the absence of illness, but the presence of balance, connection, purpose and growth.",
            "True wellbeing emerges when people feel supported in their relationship with themselves, their whānau, their environment and their future.",
            "The role of technology is not to control or dictate, but to gently guide reflection, provide knowledge and help people reconnect with their own wisdom and resilience.",
            "At its heart, the vision remains the same: helping people reconnect with themselves, their culture and each other so they feel seen, supported and strong in their identity.",
          ],
        },
        {
          title: "Our Values",
          items: [
            "Lineage & connection: honouring whakapapa and cultural roots",
            "Family & care: nurturing whānau and community wellbeing",
            "Respect & upliftment: treating people with dignity and encouragement",
            "Guardianship & sustainability: caring for resources and the environment",
            "Truth & integrity: standing by what is honest and authentic",
            "Unity & inclusivity: creating belonging for all",
          ],
        },
        {
          title: "Looking Ahead",
          body: "WhakapapaGlo and Future AI Pathways are in development. Financial confidence, everyday life skills and additional wellbeing support are future possibilities to explore. These pathways will take shape through learning and collaboration with the people and communities involved.",
        },
      ]}
      ctaLabel="Explore the ecosystem"
      ctaHref="/"
    />
  );
}

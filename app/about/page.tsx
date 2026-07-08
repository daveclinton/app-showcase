import { SimpleCenteredPage } from "../_components/simple-centered-page";

export default function AboutPage() {
  return (
    <SimpleCenteredPage
      title="About Us"
      description="Tai Ora was created to restore trust in the choices people make about their wellbeing."
      highlights={["Truth in wellbeing", "Authentic human stories", "Ethical technology"]}
      sections={[
        {
          title: "Why Tai Ora Exists",
          body: [
            "Tai Ora was created to restore trust in the choices people make about their wellbeing.",
            "In a world filled with overwhelming information, marketing noise and conflicting advice, many people struggle to know what truly works for them.",
            "Tai Ora brings together authentic human experience, trusted knowledge and ethical technology to help people make informed decisions and reconnect with their own journey of wellbeing.",
          ],
        },
        {
          title: "Our Story",
          body: [
            "Tai Ora was born from my own journey. I have always looked for better ways to bring ease and clarity into life and I wanted to do the same for wellbeing choices.",
            "That moment of frustration turned into a vision to create Tai Ora, a space that feels authentic, cultural and open to everyone. With tools like VeeVu™ and iGlo™, Tai Ora helps people and brands share real journeys so together we can move beyond the hype and find clarity, connection and collective wellbeing.",
          ],
        },
        {
          title: "Our Purpose",
          body: "At Tai Ora our purpose is simple. We bring truth back to beauty and wellness. We want people to feel seen supported and empowered in the choices they make. Every feature we build is designed to protect authenticity lift voices that matter and return value to the people who create it.",
        },
        {
          title: "Our Vision",
          body: "We see a future where wellbeing is not shaped by trends or noise but by what is real and meaningful. Tai Ora is more than an app. It is a movement to restore trust celebrate culture and create spaces where communities can grow together with confidence and care.",
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
          body: "As Tai Ora grows, new pathways such as T.A.I. (Tai Ora's Angel Intelligence) and LydiaGlo™ will support reflection, guidance and wellbeing recovery journeys.",
        },
      ]}
      ctaLabel="Explore the ecosystem"
      ctaHref="/"
    />
  );
}

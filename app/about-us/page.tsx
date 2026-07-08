import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'About Us',
  description: 'Tai Ora was created to restore trust in the choices people make about their wellbeing.',
  path: '/about-us',
});

export default function AboutUsPage() {
  return (
    <SimpleCenteredPage
      title="About Us"
      description="Tai Ora was created to restore trust in the choices people make about their wellbeing."
      highlights={["Truth in wellbeing", "Authentic human stories", "Ethical technology"]}
      sections={[
        {
          title: "Why Tai Ora Exists",
          body: "Tai Ora brings together authentic human experience, trusted knowledge and ethical technology to help people make informed decisions and reconnect with their own journey of wellbeing.",
        },
        {
          title: "Our Purpose",
          body: "We bring truth back to beauty and wellness. We want people to feel seen supported and empowered in the choices they make.",
        },
        {
          title: "Our Values",
          items: [
            "Lineage & connection",
            "Family & care",
            "Respect & upliftment",
            "Guardianship & sustainability",
            "Truth & integrity",
            "Unity & inclusivity",
          ],
        },
      ]}
      ctaLabel="Explore the ecosystem"
      ctaHref="/"
    />
  );
}

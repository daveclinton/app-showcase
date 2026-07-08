import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'We collect the minimum data needed to operate Tai Ora and its features. We do not sell personal data.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <SimpleCenteredPage
      title="Privacy Policy"
      description="Effective: 08 September 2025. We collect the minimum data needed to operate Tai Ora and its features. We do not sell personal data."
      highlights={["Australian compliance", "Minimum necessary data", "No sale of personal data"]}
      sections={[
        {
          title: "1. Compliance",
          body: "We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). Where applicable, we also follow equivalent requirements in other regions, including the NZ Privacy Act 2020 and EU GDPR.",
        },
        {
          title: "2. Data breaches",
          body: "If a data breach is likely to cause serious harm, we will notify affected individuals and the regulator in line with the Notifiable Data Breaches scheme in Australia.",
        },
        {
          title: "3. Information we collect",
          items: [
            "Account and profile data: name, email, hashed password, preferences",
            "Wellness and app inputs: notes, routines, wellbeing reflections you choose to share",
            "Media uploads: photos, videos, audio, timestamps, device type",
            "Usage and device data: logs, IP, cookies, app version",
            "Communications: messages, survey responses, support requests",
          ],
        },
        {
          title: "4. How we use information",
          body: "We use data to operate and improve the Services, enable creator tools, communicate with you, conduct analytics, detect fraud and security issues, and comply with legal obligations.",
        },
        {
          title: "5. Sharing & disclosure",
          body: "We share data with service providers under contract, with brands only if you explicitly opt in, and as required by law. We may share aggregated or de-identified insights. We do not sell personal data.",
        },
        {
          title: "6. Retention & security",
          body: "We retain account data while active, and content until deleted or licence expiry. We use encryption and safeguards, but no system is 100% secure.",
        },
        {
          title: "7. Your rights",
          body: "You may access, correct, or delete your information, withdraw consent, or opt out of marketing. Complaints can be made to the OAIC in Australia.",
        },
        {
          title: "8. Governing law",
          body: "This Policy is governed by the Privacy Act 1988 (Cth) and Australian law.",
        },
      ]}
      ctaLabel="Read terms of use"
      ctaHref="/terms-of-use"
    />
  );
}

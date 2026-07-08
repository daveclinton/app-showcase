import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { SimpleCenteredPage } from "../_components/simple-centered-page";


export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Use',
  description: 'Use Tai Ora responsibly. Your content remains yours, and you can choose when to license it.',
  path: '/terms-of-use',
});

export default function TermsOfUsePage() {
  return (
    <SimpleCenteredPage
      title="Terms of Use"
      description="Effective: 08 September 2025. Use Tai Ora responsibly. Your content remains yours, and you can choose when to license it."
      highlights={["Your content remains yours", "Guidance only", "Australian law"]}
      sections={[
        {
          title: "1. Who we are",
          body: "These Terms govern your access to and use of Tai Ora's websites, apps, and services. Tai Ora, we, us, or our means Tai Ora Pty Ltd (Australia). Contact: support@taiora.ai or legal@taiora.ai.",
        },
        {
          title: "2. Acceptance",
          body: "By creating an account or using the Services, you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Services.",
        },
        {
          title: "3. Consumer rights",
          body: "Nothing in these Terms excludes, restricts, or modifies any rights or remedies you may have under the Competition and Consumer Act 2010 (Cth), the Australian Consumer Law, or equivalent state or territory legislation.",
        },
        {
          title: "4. Services",
          body: [
            "The Services include wellness, beauty, and educational tools such as VeeVu™, iGlo™, SoulGlo™, LydiaGlo™, HoloPro™, TaniaGlo™, MumGlo™, GloSounds™, and the T.A.I. assistant layer.",
            "T.A.I. provides supportive guidance only. It does not make decisions and is not a substitute for medical, legal, or financial advice.",
          ],
        },
        {
          title: "5. Accounts & eligibility",
          body: "You must be at least 13 years old, or the minimum age of digital consent in your country, to use the Services. If you are under the age of majority, you must have a parent or guardian's consent.",
        },
        {
          title: "6. User content & licensing",
          body: "You retain ownership of content you create or upload. You grant us a worldwide, non-exclusive, royalty-free licence to host, process, and display your User Content as reasonably necessary to operate the Services. Licensing to brands occurs only with your explicit consent inside the app.",
        },
        {
          title: "7. Acceptable use",
          body: "You must not re-upload, copy, or monetise other people's content without permission; scrape, reverse engineer, or interfere with the Services; engage in illegal, fraudulent, or harmful behaviour; or disclose private information without consent.",
        },
        {
          title: "8. Payments & affiliate links",
          body: "For certain products, we may redirect you to a third-party retailer's website and may receive affiliate commissions. We do not control or warrant third-party products or transactions.",
        },
        {
          title: "9. Intellectual property",
          body: "The Services, including the Tai Ora name, logos, trademarks, designs, software, and content, are owned by Tai Ora Pty Ltd and its licensors.",
        },
        {
          title: "10. Governing law & venue",
          body: "These Terms are governed by the laws of Western Australia, Australia. You submit to the exclusive jurisdiction of the courts of Western Australia.",
        },
      ]}
      ctaLabel="View privacy policy"
      ctaHref="/privacy-policy"
    />
  );
}

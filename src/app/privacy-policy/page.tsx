import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | United World Summit",
  description:
    "Privacy Policy for United World Summit — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">
      {/* Hero */}
      <section className="bg-brown-950 py-20">
        <Container>
          <p className="font-(family-name:--font-good-times) text-gold-400 text-xs tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="heading-1 text-white">Privacy Policy</h1>
          <p className="body-large text-white/50 mt-4 max-w-2xl">
            Last updated: April 29, 2026
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="section-py">
        <Container size="narrow">
          <div className="prose prose-stone max-w-none space-y-10 text-stone-700">

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">1. Introduction</h2>
              <p className="body-base">
                United World Summit (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
                protecting the privacy of visitors to our website at{" "}
                <strong>unitedworldsummit.com</strong>. This Privacy Policy
                explains what personal information we collect, how we use it,
                and the rights you have over it.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">2. Information We Collect</h2>
              <p className="body-base mb-3">
                We collect information you provide directly to us:
              </p>
              <ul className="list-disc list-inside space-y-2 body-base pl-2">
                <li>
                  <strong>Contact form submissions</strong> — name, email
                  address, company name, and message content.
                </li>
                <li>
                  <strong>Communications</strong> — emails or messages you send
                  to our team.
                </li>
              </ul>
              <p className="body-base mt-3">
                We also collect limited data automatically when you visit our
                site, such as browser type, pages visited, and referring URL,
                via standard server logs and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 body-base pl-2">
                <li>Respond to your enquiries and contact form submissions.</li>
                <li>
                  Send updates about the United World Summit if you have opted
                  in.
                </li>
                <li>Improve our website and user experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="body-base mt-3">
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">4. Cookies & Tracking</h2>
              <p className="body-base">
                Our site uses a LinkedIn Insight Tag for analytics and
                conversion tracking. This may place a cookie on your browser.
                You can opt out via LinkedIn&apos;s ad settings or by using a
                browser extension that blocks tracking scripts. We do not use
                Google Analytics or any other third-party analytics service
                beyond what is listed here.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">5. Data Retention</h2>
              <p className="body-base">
                Contact form submissions are stored in a secure Google
                Workspace spreadsheet accessible only to our organising team.
                We retain this data for up to 24 months or until you request
                its deletion, whichever comes first.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">6. Third-Party Services</h2>
              <p className="body-base">
                We use the following third-party services that may process your
                data subject to their own privacy policies:
              </p>
              <ul className="list-disc list-inside space-y-2 body-base pl-2 mt-3">
                <li>
                  <strong>Google Apps Script / Google Workspace</strong> —
                  contact form backend.
                </li>
                <li>
                  <strong>Google Maps</strong> — embedded map on the contact
                  page.
                </li>
                <li>
                  <strong>LinkedIn Insight Tag</strong> — analytics pixel.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">7. Your Rights</h2>
              <p className="body-base">
                Depending on your location you may have the right to access,
                correct, or delete your personal data, withdraw consent, or
                lodge a complaint with a supervisory authority. To exercise
                any of these rights, contact us at:
              </p>
              <p className="body-base mt-3 font-semibold text-brown-950">
                info@unitedworldsummit.com
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">8. Security</h2>
              <p className="body-base">
                We implement reasonable technical and organisational measures
                to protect your information against unauthorised access,
                alteration, disclosure, or destruction. However, no internet
                transmission is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">9. Children&apos;s Privacy</h2>
              <p className="body-base">
                Our website is not directed at children under 13. We do not
                knowingly collect personal information from children. If you
                believe a child has submitted information to us, please contact
                us so we can delete it.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">10. Changes to This Policy</h2>
              <p className="body-base">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. Continued use of the site after changes
                constitutes acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-brown-950 mb-3">11. Contact Us</h2>
              <p className="body-base">
                Questions about this Privacy Policy? Reach us at:
              </p>
              <p className="body-base mt-2">
                <strong>United World Summit</strong>
                <br />
                c/o United Gate One
                <br />
                Email:{" "}
                <a
                  href="mailto:info@unitedworldsummit.com"
                  className="text-brown-950 underline hover:text-gold-600 transition-colors"
                >
                  info@unitedworldsummit.com
                </a>
              </p>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}

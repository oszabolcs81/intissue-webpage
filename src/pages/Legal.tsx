import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link, useSearchParams } from "react-router-dom";

type Tab = "privacy" | "imprint";

const Legal = () => {
  const contactEmail = atob("b3JzaS5oYWphc0BnbWFpbC5jb20=");
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>(
    searchParams.get("tab") === "imprint" ? "imprint" : "privacy"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Legal Information – InTissue</title>
        <meta name="description" content="InTissue privacy policy and legal imprint. GDPR-compliant data processing information and company details." />
        <link rel="canonical" href="https://www.intissue.com/legal" />
      </Helmet>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Legal Information</h1>
          <p className="text-muted-foreground text-sm mb-8">
            Please read the following information carefully.
          </p>

          {/* Tab navigation */}
          <div className="flex gap-2 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-5 py-2.5 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === "privacy"
                  ? "bg-card border border-b-card border-border text-foreground -mb-px"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("imprint")}
              className={`px-5 py-2.5 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === "imprint"
                  ? "bg-card border border-b-card border-border text-foreground -mb-px"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Imprint
            </button>
          </div>

          {/* ── PRIVACY POLICY ── */}
          {activeTab === "privacy" && (
            <div className="prose prose-sm max-w-none space-y-8 text-sm text-foreground leading-relaxed">

              <p className="text-muted-foreground text-xs">
                Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}{" "}
                &nbsp;·&nbsp; Legal basis:{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  EU Regulation 2016/679 (GDPR)
                </a>
              </p>

              {/* 1. Controller */}
              <div>
                <h2 className="text-lg font-semibold mb-3">1. Data Controller</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <tbody className="divide-y divide-border">
                      {[
                        ["Name", "BARLINKA Company Szolgáltató Korlátolt Felelősségű Társaság"],
                        ["Registered address", "8174 Balatonkenese, Kárpátalja utca 18., Hungary"],
                        ["Company registration no.", "19-09-520561"],
                        ["VAT number", "14845639-2-19"],
                        ["Website", "https://www.intissue.com"],
                      ].map(([k, v]) => (
                        <tr key={k}>
                          <td className="py-2 px-3 font-medium text-muted-foreground w-56">{k}</td>
                          <td className="py-2 px-3">{v}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="py-2 px-3 font-medium text-muted-foreground w-56">Contact e-mail</td>
                        <td className="py-2 px-3">
                          <a href={`mailto:${contactEmail}`} className="underline hover:text-foreground">{contactEmail}</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. Data collected */}
              <div>
                <h2 className="text-lg font-semibold mb-3">2. Personal Data We Collect and Why</h2>
                <p className="mb-3">
                  This website does not require registration and does not operate user accounts.
                  Personal data is processed only when you voluntarily submit the{" "}
                  <Link to="/contact" className="underline hover:text-foreground">
                    contact form
                  </Link>
                  .
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left px-3 py-2 font-medium text-muted-foreground">Data</th>
                        <th className="text-left px-3 py-2 font-medium text-muted-foreground">Purpose</th>
                        <th className="text-left px-3 py-2 font-medium text-muted-foreground">Legal basis (GDPR Art. 6)</th>
                        <th className="text-left px-3 py-2 font-medium text-muted-foreground">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-3 py-2">Name, e-mail address, message content</td>
                        <td className="px-3 py-2">Responding to your enquiry</td>
                        <td className="px-3 py-2">Art. 6(1)(b) — pre-contractual steps; Art. 6(1)(f) — legitimate interest</td>
                        <td className="px-3 py-2">5 years from last contact</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Data processors */}
              <div>
                <h2 className="text-lg font-semibold mb-3">3. Data Processors and Third Parties</h2>
                <p className="mb-4">
                  We do not sell, rent, or share your personal data with third parties for marketing purposes.
                  The following processors handle data solely on our behalf under binding data-processing agreements:
                </p>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-medium mb-1">Formspree, Inc.</p>
                    <p className="text-muted-foreground text-xs mb-2">
                      620 S. Meridian St., Suite 11A-208, Tallahassee, FL 32301, USA
                    </p>
                    <p className="text-sm">
                      Processes contact form submissions on our behalf. Data is transmitted to and stored on
                      Formspree servers in the United States. Transfer is covered by the EU–US Data Privacy
                      Framework and Formspree's Standard Contractual Clauses.{" "}
                      <a
                        href="https://formspree.io/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                      >
                        Formspree Privacy Policy
                      </a>
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-medium mb-1">GitHub, Inc. (GitHub Pages)</p>
                    <p className="text-muted-foreground text-xs mb-2">
                      88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
                    </p>
                    <p className="text-sm">
                      Hosts and serves this website via GitHub Pages. GitHub may process server logs
                      (IP address, browser, request timestamp) in accordance with its own privacy policy.
                      We have no control over this server-log processing.{" "}
                      <a
                        href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                      >
                        GitHub Privacy Statement
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Cookies */}
              <div>
                <h2 className="text-lg font-semibold mb-3">4. Cookies and Tracking</h2>
                <p>
                  This website does <strong>not</strong> use analytical, advertising, or tracking cookies.
                  Strictly necessary technical cookies may be set by Formspree when the contact form is
                  submitted. No consent is required for strictly necessary cookies under the ePrivacy
                  Directive. We do not use Google Analytics or any other third-party analytics service.
                </p>
              </div>

              {/* 5. International transfers */}
              <div>
                <h2 className="text-lg font-semibold mb-3">5. International Data Transfers</h2>
                <p>
                  Data submitted via the contact form is transferred to the United States (Formspree, GitHub).
                  These transfers are carried out on the basis of adequacy decisions, Standard Contractual
                  Clauses (SCCs), or the EU–US Data Privacy Framework, in accordance with Chapter V of the GDPR.
                </p>
              </div>

              {/* 6. Your rights */}
              <div>
                <h2 className="text-lg font-semibold mb-3">6. Your Rights</h2>
                <p className="mb-3">
                  Under the GDPR you have the following rights with respect to your personal data:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Right of access</strong> (Art. 15) — obtain confirmation and a copy of your data</li>
                  <li><strong>Right to rectification</strong> (Art. 16) — correct inaccurate data</li>
                  <li><strong>Right to erasure</strong> (Art. 17 — "right to be forgotten")</li>
                  <li><strong>Right to restriction</strong> (Art. 18) — limit how we use your data</li>
                  <li><strong>Right to data portability</strong> (Art. 20) — receive your data in a structured format</li>
                  <li><strong>Right to object</strong> (Art. 21) — object to processing based on legitimate interests</li>
                  <li><strong>Right to withdraw consent</strong> — at any time, where processing is based on consent</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at{" "}
                  <a href={`mailto:${contactEmail}`} className="underline hover:text-foreground">{contactEmail}</a>. We will respond within one month
                  (extendable by a further two months where necessary, per GDPR Art. 12(3)).
                </p>
              </div>

              {/* 7. Supervisory authority */}
              <div>
                <h2 className="text-lg font-semibold mb-3">7. Right to Lodge a Complaint</h2>
                <p className="mb-3">
                  You have the right to lodge a complaint with the competent supervisory authority.
                  The lead supervisory authority for Hungary is:
                </p>
                <address className="not-italic bg-muted rounded-lg p-4 text-sm">
                  <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong><br />
                  Address: 1055 Budapest, Alkotmány u. 3., Hungary<br />
                  Postal address: 1363 Budapest, Pf.: 9.<br />
                  Phone: +36 (1) 391-1400<br />
                  E-mail:{" "}
                  <a href="mailto:ugyfelszolgalat@naih.hu" className="underline hover:text-foreground">
                    ugyfelszolgalat@naih.hu
                  </a><br />
                  Web:{" "}
                  <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                    www.naih.hu
                  </a>
                </address>
                <p className="mt-3 text-muted-foreground text-xs">
                  You may also lodge a complaint with the supervisory authority of your EU member state of habitual residence.
                </p>
              </div>

              {/* 8. Changes */}
              <div>
                <h2 className="text-lg font-semibold mb-3">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The "Last updated" date at the top
                  of this page will reflect any changes. Continued use of the website after an update
                  constitutes acceptance of the revised policy.
                </p>
              </div>

            </div>
          )}

          {/* ── IMPRINT ── */}
          {activeTab === "imprint" && (
            <div className="space-y-8 text-sm text-foreground leading-relaxed">

              <p className="text-muted-foreground text-xs">
                Mandatory disclosures pursuant to the EU eCommerce Directive (2000/31/EC) and
                Hungarian Act CVIII of 2001 on Electronic Commerce (Ektv. § 4).
              </p>

              {/* Service provider */}
              <div>
                <h2 className="text-lg font-semibold mb-3">1. Service Provider</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <tbody className="divide-y divide-border">
                      {[
                        ["Full legal name", "BARLINKA Company Szolgáltató Korlátolt Felelősségű Társaság"],
                        ["Trading name", "InTissue"],
                        ["Registered address", "8174 Balatonkenese, Kárpátalja utca 18., Hungary"],
                        ["Company registration no.", "19-09-520561"],
                        ["VAT number", "14845639-2-19"],
                        ["Representative", "Hajas Orsolya"],
                        ["Website", "https://www.intissue.com"],
                      ].map(([k, v]) => (
                        <tr key={k}>
                          <td className="py-2 px-3 font-medium text-muted-foreground w-56">{k}</td>
                          <td className="py-2 px-3">{v}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="py-2 px-3 font-medium text-muted-foreground w-56">Contact e-mail</td>
                        <td className="py-2 px-3">
                          <a href={`mailto:${contactEmail}`} className="underline hover:text-foreground">{contactEmail}</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Hosting provider */}
              <div>
                <h2 className="text-lg font-semibold mb-3">2. Hosting Provider</h2>
                <p>
                  This website is hosted by <strong>GitHub, Inc.</strong> (88 Colin P Kelly Jr St,
                  San Francisco, CA 94107, USA) via the GitHub Pages service.
                  GitHub processes server logs independently under its own privacy policy;
                  the service provider has no control over this processing.
                </p>
              </div>

              {/* Form processor */}
              <div>
                <h2 className="text-lg font-semibold mb-3">3. Contact Form Service</h2>
                <p>
                  The contact form is powered by <strong>Formspree, Inc.</strong> (620 S. Meridian St.,
                  Suite 11A-208, Tallahassee, FL 32301, USA). Messages submitted via the form are
                  forwarded to and stored by Formspree on behalf of the service provider.
                </p>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="text-lg font-semibold mb-3">4. Copyright Notice</h2>
                <p>
                  All content on this website — including text, images, graphics, logos, and design
                  elements — is the exclusive intellectual property of InTissue or is used with
                  proper authorisation. Reproduction, distribution, or commercial use without prior
                  written consent is prohibited and may result in civil or criminal liability.
                </p>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-lg font-semibold mb-3">5. Disclaimer</h2>
                <p>
                  InTissue makes every effort to keep the information on this website accurate and
                  up to date, but accepts no liability for the correctness, completeness, or
                  timeliness of the content. InTissue is not responsible for the content of
                  external websites linked from this site.
                </p>
              </div>

            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Legal;

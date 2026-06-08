import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const catalog = [
  { id: 1, name: "BMG (EQUINE)", spec: "FINE — 1 CC" },
  { id: 2, name: "BMG (EQUINE)", spec: "ULTRAFINE — 1 CC" },
  { id: 3, name: "BMG (EQUINE)", spec: "FINE — 3 CC" },
  { id: 4, name: "BMG (EQUINE)", spec: "ULTRAFINE — 3 CC" },
  { id: 5, name: "BMG (EQUINE)", spec: "FINE — 5 CC" },
  { id: 6, name: "BMG (EQUINE)", spec: "ULTRAFINE — 5 CC" },
  { id: 7, name: "CORTICOCANCELLOUS CHIPS (CANINE)", spec: "FINE — 1 CC" },
  { id: 8, name: "CORTICOCANCELLOUS CHIPS (EQUINE)", spec: "MEDIUM — 1 CC" },
  { id: 9, name: "CORTICOCANCELLOUS CHIPS (CANINE)", spec: "FINE — 3 CC" },
  { id: 10, name: "CORTICOCANCELLOUS CHIPS (EQUINE)", spec: "MEDIUM — 3 CC" },
  { id: 11, name: "CORTICOCANCELLOUS CHIPS (CANINE)", spec: "FINE — 5 CC" },
  { id: 12, name: "CORTICOCANCELLOUS CHIPS (EQUINE)", spec: "MEDIUM — 5 CC" },
  { id: 13, name: "CANCELLOUS BLOCK (EQUINE)", spec: "10×10×10 MM — 1 CC" },
  { id: 14, name: "CANCELLOUS BLOCK (EQUINE)", spec: "30×10×10 MM — 3 CC" },
  { id: 15, name: "CANCELLOUS BLOCK (EQUINE)", spec: "50×10×10 MM — 5 CC" },
  { id: 16, name: "CORTICOCANCELLOUS BLOCK (EQUINE)", spec: "20×10×10 MM — 1 CC" },
  { id: 17, name: "CORTICOCANCELLOUS BLOCK (EQUINE)", spec: "10×10×10 MM — 2 CC" },
];

const INQUIRY_FORM_URL = "https://forms.cloud.microsoft/e/Hws1j3Cvq7?embed=true";
const ORDER_EMAIL = "information@intissue.com";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState<"inquiry" | "order">(
    searchParams.get("type") === "order" ? "order" : "inquiry"
  );
  const [qty, setQty] = useState<Record<number, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);

  const orderLines = catalog
    .filter((c) => qty[c.id] && Number(qty[c.id]) > 0)
    .map((c) => `#${c.id} ${c.name} (${c.spec}) x ${qty[c.id]}`)
    .join("\n");

  const mailtoHref = (() => {
    const subject = `Product Order – ${name}`;
    const body = [
      `Name / Clinic: ${name}`,
      `Email: ${email}`,
      country ? `Country: ${country}` : null,
      "",
      "ORDER DETAILS:",
      orderLines || "(no items selected)",
      notes ? `\nAdditional notes: ${notes}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
    return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  const orderValid = name.trim() !== "" && email.trim() !== "" && orderLines !== "" && consent;

  const inputCls =
    "border border-border rounded-md px-4 py-2.5 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <Layout>
      <Helmet>
        <title>Contact – InTissue</title>
        <meta name="description" content="Contact InTissue for product inquiries or bone graft orders. Send us a message and we'll get back to you shortly." />
        <link rel="canonical" href="https://www.intissue.com/contact" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-14 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url(/images/contact_hero.webp)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        <div className="relative z-10 max-w-xl mx-auto">
          <Mail className="mx-auto mb-4 text-primary" size={32} />
          <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
          <p className="text-muted-foreground">
            Send us a message, a product inquiry or an order request — we'll get back to you shortly.
          </p>
        </div>
      </section>

      <section className="pb-20 pt-6 px-6">
        <div className="max-w-xl mx-auto space-y-5">

          {/* Toggle */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">What can we help with?</span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setType("inquiry")}
                className={`px-4 py-3 rounded-md border text-sm uppercase tracking-wider transition-all ${
                  type === "inquiry"
                    ? "border-primary bg-primary/10 text-foreground font-semibold"
                    : "border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                General Inquiry
              </button>
              <button
                type="button"
                onClick={() => setType("order")}
                className={`px-4 py-3 rounded-md border text-sm uppercase tracking-wider transition-all ${
                  type === "order"
                    ? "border-primary bg-primary/10 text-foreground font-semibold"
                    : "border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                Product Order
              </button>
            </div>
          </div>

          {/* General Inquiry — MS Forms iframe */}
          {type === "inquiry" && (
            <iframe
              src={INQUIRY_FORM_URL}
              title="General Inquiry Form"
              className="w-full rounded-md border border-border"
              style={{ height: "600px" }}
              allowFullScreen
            />
          )}

          {/* Product Order — mailto */}
          {type === "order" && (
            <div className="space-y-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">Name / Clinic</label>
                <input id="name" type="text" required placeholder="Your name or clinic" maxLength={120} value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" required placeholder="your@email.com" maxLength={200} value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="country" className="text-sm font-medium">Country</label>
                <input id="country" type="text" placeholder="Shipping country" maxLength={100} value={country} onChange={(e) => setCountry(e.target.value)} className={inputCls} />
              </div>

              {/* Product table */}
              <div className="space-y-2">
                <span className="text-sm font-medium">Select products &amp; quantities</span>
                <p className="text-xs text-muted-foreground">Enter the desired quantity next to each catalogue item you wish to order.</p>
                <div className="overflow-x-auto rounded-md border border-border">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-muted/40 border-b border-border">
                        <th className="px-2 py-2 text-left font-bold w-8">#</th>
                        <th className="px-2 py-2 text-left font-bold">Product</th>
                        <th className="px-2 py-2 text-left font-bold">Spec</th>
                        <th className="px-2 py-2 text-center font-bold w-20">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {catalog.map((c) => (
                        <tr key={c.id} className="border-b border-border/40">
                          <td className="px-2 py-1.5 font-semibold text-muted-foreground">{c.id}</td>
                          <td className="px-2 py-1.5">{c.name}</td>
                          <td className="px-2 py-1.5 text-muted-foreground">{c.spec}</td>
                          <td className="px-2 py-1.5">
                            <input
                              type="number"
                              min="0"
                              value={qty[c.id] ?? ""}
                              onChange={(e) => setQty((q) => ({ ...q, [c.id]: e.target.value }))}
                              className="w-16 border border-border rounded px-2 py-1 bg-background text-foreground text-center focus:outline-none focus:ring-1 focus:ring-primary/50"
                              placeholder="0"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {orderLines && (
                  <div className="text-xs bg-muted/20 border border-border rounded-md p-3">
                    <p className="font-semibold mb-1">Your order summary:</p>
                    <pre className="whitespace-pre-wrap font-mono text-muted-foreground">{orderLines}</pre>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="notes" className="text-sm font-medium">Additional notes</label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Delivery preferences, billing details, questions…"
                  maxLength={2000}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 shrink-0 accent-primary"
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  I have read and accept the{" "}
                  <Link to="/legal" className="underline hover:text-foreground">Privacy Policy</Link>. I consent to my data being processed for the purpose of responding to my enquiry, in accordance with GDPR Art. 6(1)(b)/(f).
                </label>
              </div>

              <a
                href={orderValid ? mailtoHref : undefined}
                onClick={!orderValid ? (e) => e.preventDefault() : undefined}
                className={`block w-full text-center px-6 py-3 border text-sm tracking-widest uppercase transition-all duration-300 ${
                  orderValid
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    : "border-border text-muted-foreground cursor-not-allowed opacity-50"
                }`}
              >
                Send Order Request
              </a>
              {!orderValid && (
                <p className="text-xs text-muted-foreground text-center">
                  {!name || !email ? "Fill in name and email. " : ""}
                  {!orderLines ? "Select at least one product. " : ""}
                  {!consent ? "Accept the Privacy Policy." : ""}
                </p>
              )}
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default Contact;

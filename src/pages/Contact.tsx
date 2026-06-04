import { useState } from "react";
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

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState<"inquiry" | "order">(
    searchParams.get("type") === "order" ? "order" : "inquiry"
  );
  const [qty, setQty] = useState<Record<number, string>>({});

  const orderLines = catalog
    .filter((c) => qty[c.id] && Number(qty[c.id]) > 0)
    .map((c) => `#${c.id} ${c.name} (${c.spec}) × ${qty[c.id]}`)
    .join("\n");

  const inputCls =
    "border border-border rounded-md px-4 py-2.5 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[36vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url(/images/contact_hero.jpeg)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative z-10 text-center px-6">
          <Mail className="mx-auto mb-4 text-primary" size={32} />
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">
            Send us a message, a product inquiry or an order request — we'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <form action="https://formspree.io/f/mgoqedgv" method="POST" className="space-y-5">

            {/* Request type toggle */}
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

            {/* Hidden field carrying the request type */}
            <input type="hidden" name="request_type" value={type === "order" ? "PRODUCT ORDER" : "GENERAL INQUIRY"} />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">Name / Clinic</label>
              <input id="name" type="text" name="name" required placeholder="Your name or clinic" className={inputCls} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" name="email" required placeholder="your@email.com" className={inputCls} />
            </div>

            {type === "order" && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="country" className="text-sm font-medium">Country</label>
                <input id="country" type="text" name="country" placeholder="Shipping country" className={inputCls} />
              </div>
            )}

            {/* Order table — only in order mode */}
            {type === "order" && (
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
                {/* Hidden field carrying the order details into the email */}
                <input type="hidden" name="order_details" value={orderLines || "(no items selected)"} />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                {type === "order" ? "Additional notes" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                required={type === "inquiry"}
                rows={type === "order" ? 3 : 5}
                placeholder={type === "order" ? "Delivery preferences, billing details, questions…" : "How can we help you?"}
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* GDPR consent */}
            <div className="flex items-start gap-3">
              <input id="consent" type="checkbox" name="consent" required className="mt-0.5 shrink-0 accent-primary" />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                I have read and accept the{" "}
                <Link to="/legal" className="underline hover:text-foreground">Privacy Policy</Link>. I consent to my data being processed for the purpose of responding to my enquiry, in accordance with GDPR Art. 6(1)(b)/(f).
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {type === "order" ? "Send Order Request" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

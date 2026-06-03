import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronDown, ChevronUp } from "lucide-react";

const products = [
  {
    id: "bmg",
    title: "BMG - Bone Matrix Gelatin (equine)",
    image: "/images/animal_treatment.jpg",
    description: "BMG is a partially decalcified, deantigenized, autolyzed, freeze-dried, and sterilized bone matrix concentrate derived from cortical bone, with a minimal collagen content. The purpose of this specialized processing is to preserve the BMPs (bone morphogenetic proteins) activity of the preparation, triggering rapid bone formation through its osteoinductive properties. It is indicated for use in both dentistry and orthopedics.",
    subtitle: "SUITABLE FOR HORSE, DOG, CAT and other species",
    indications: ["Fracture voids and repair","Mal- or non-unions","Bone loss cases","TPLOs and TTAs","Arthrodesis procedures","Any other application where bone graft is needed"],
    available: ["Fine and ultrafine", "1, 3 and 5 cc"],
  },
  {
    id: "chips",
    title: "Corticocancellous chips (canine or equine)",
    image: "/images/animal_treatment.jpg",
    description: "Partially decalcified, autolyzed, and deantigenized freeze-dried bone matrix particles. Due to its osteoconductive properties, it is indicated for filling bone defects and cysts. When applied within the same species, the graft undergoes complete remodeling (creeping substitution), and the resulting new bone is indistinguishable from the host native bone tissue. It can also be combined with BMG.",
    indications: ["Fracture voids and repair","Mal- or non-unions","Bone loss cases","TPLOs and TTAs","Arthrodesis procedures","Any other application where bone graft is needed"],
    available: ["Fine and middle sized particles", "1, 3 and 5 cc"],
  },
  {
    id: "specialty",
    title: "Specialty grafts (equine cancellous and corticocancellous)",
    image: "/images/animal_treatment.jpg",
    description: "These are primarily structural grafts, suitable for restoring bone integrity and biomechanics. Within the same species, they undergo complete remodeling, with cancellous components remodeling more rapidly and cortical bone more slowly.",
    available: ["Cancellous blocks: 1 cc (10x10x10 mm), 3 cc (30x10x10 mm), 5 cc (50x10x10 mm)","Corticocancellous blocks: 1 cc (10x10x10 mm) and 2 cc (20x10x10 mm)","Custom or oversized dimensions available upon request"],
  },
];

const scientific = [
  { term: "Osteoconductive", def: "Acts as a scaffold into which fibroblasts and capillaries from the host tissue can grow." },
  { term: "Osteoinductive", def: "Induces intensive bone formation due to its active BMP (Bone Morphogenetic Protein) content." },
  { term: "Osteogenic", def: "Already contains active bone-forming cells due to its osteoblast content." },
  { term: "Completely remodeled", def: "It is completely resorbed and replaced by new bone." },
];

const AnimalProducts = () => {
  const [open, setOpen] = useState<string | null>("products");
  return (
    <Layout>
      <section className="bg-primary/10 border-b border-border px-6 py-5 text-center">
        <p className="text-sm md:text-base font-medium tracking-wide">
          InTissue - ISO 9001:2015 and ISO 13485:2016 certified veterinary tissue bank
        </p>
      </section>
      <section className="py-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Veterinary Bone Grafts</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Freeze-dried, sterilized bone allografts for equine, canine and feline patients.
        </p>
      </section>
      <section className="px-6 pb-12 max-w-5xl mx-auto space-y-2">
        <div className="border border-border rounded-sm overflow-hidden">
          <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors" onClick={() => setOpen(open === "products" ? null : "products")}>
            <span className="text-lg font-semibold tracking-wide">Product Information</span>
            {open === "products" ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>
          {open === "products" && (
            <div className="px-6 pb-8 space-y-10 border-t border-border">
              {products.map((p) => (
                <div key={p.id} className="pt-8 grid md:grid-cols-2 gap-8 items-start">
                  <img src={p.image} alt={p.title} className="w-full rounded-sm object-cover aspect-video" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
                    {"subtitle" in p && p.subtitle && <p className="font-medium text-sm mb-3">{p.subtitle as string}</p>}
                    {"indications" in p && p.indications && (
                      <>
                        <p className="text-sm font-semibold mb-2">Indications:</p>
                        <ul className="space-y-1 mb-4">
                          {(p.indications as string[]).map((ind) => (
                            <li key={ind} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {ind}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <p className="text-sm font-semibold mb-2">Available:</p>
                    <ul className="space-y-1">
                      {p.available.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border border-border rounded-sm overflow-hidden">
          <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors" onClick={() => setOpen(open === "order" ? null : "order")}>
            <span className="text-lg font-semibold tracking-wide">How to Order</span>
            {open === "order" ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>
          {open === "order" && (
            <div className="px-6 py-8 border-t border-border text-sm text-muted-foreground">
              <p className="text-foreground font-semibold mb-4">Order Inquiry Form</p>
              <p className="mb-6">Please fill in the form below and we will get back to you shortly.</p>
              <form action="https://formspree.io/f/mlgkrzpw" method="POST" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">Name / Clinic *</label>
                    <input type="text" name="name" required className="w-full border border-border rounded-sm px-3 py-2 bg-background text-foreground text-sm focus:outline-none focus:border-foreground/40" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">Email *</label>
                    <input type="email" name="email" required className="w-full border border-border rounded-sm px-3 py-2 bg-background text-foreground text-sm focus:outline-none focus:border-foreground/40" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">Country</label>
                    <input type="text" name="country" className="w-full border border-border rounded-sm px-3 py-2 bg-background text-foreground text-sm focus:outline-none focus:border-foreground/40" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">Product of interest *</label>
                    <select name="product" required className="w-full border border-border rounded-sm px-3 py-2 bg-background text-foreground text-sm focus:outline-none focus:border-foreground/40">
                      <option value="">Select product...</option>
                      <option value="BMG - Bone Matrix Gelatin (equine)">BMG - Bone Matrix Gelatin (equine)</option>
                      <option value="Corticocancellous chips (canine)">Corticocancellous chips (canine)</option>
                      <option value="Corticocancellous chips (equine)">Corticocancellous chips (equine)</option>
                      <option value="Specialty grafts (equine)">Specialty grafts (equine)</option>
                      <option value="Multiple products">Multiple products</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">Quantity / Size needed</label>
                  <input type="text" name="quantity" placeholder="e.g. 3x 5cc BMG" className="w-full border border-border rounded-sm px-3 py-2 bg-background text-foreground text-sm focus:outline-none focus:border-foreground/40" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">Message</label>
                  <textarea name="message" rows={3} className="w-full border border-border rounded-sm px-3 py-2 bg-background text-foreground text-sm focus:outline-none focus:border-foreground/40 resize-none" />
                </div>
                <button type="submit" className="border border-foreground/40 text-sm uppercase tracking-widest px-8 py-3 hover:bg-foreground hover:text-background transition-all">
                  Send Inquiry
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="border border-border rounded-sm overflow-hidden">
          <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors" onClick={() => setOpen(open === "processing" ? null : "processing")}>
            <span className="text-lg font-semibold tracking-wide">Processing</span>
            {open === "processing" ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>
          {open === "processing" && (
            <div className="px-6 py-8 border-t border-border text-sm text-muted-foreground space-y-4">
              <p>We apply Quality Assurance Practices through all stages of our activities.</p>
              <div>
                <p className="font-semibold text-foreground mb-2">Quality Assurance Means:</p>
                <ul className="space-y-1">
                  {["Standard Operating Procedures","Document Control","Donor Screening","Traceability"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="border border-border rounded-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4">Scientific Background</h2>
          <p className="text-muted-foreground text-sm mb-6">An ideal bone graft possesses the following properties:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {scientific.map(({ term, def }) => (
              <div key={term} className="p-4 border border-border rounded-sm">
                <p className="font-semibold text-sm mb-1">{term}</p>
                <p className="text-muted-foreground text-sm">{def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 pb-24 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Scan to visit our website</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.intissue.com&bgcolor=ffffff&color=000000" alt="QR code" className="mx-auto rounded-sm" width={180} height={180} />
      </section>
    </Layout>
  );
};

export default AnimalProducts;

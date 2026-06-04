import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ChevronDown, ChevronUp } from "lucide-react";

const products = [
  {
    id: "bmg",
    title: "BMG — Bone Matrix Gelatin (equine)",
    image: "/images/BMG - Bone Matrix Gelatin (equine).jpg",
    description: "BMG is a partially decalcified, deantigenized, autolyzed, freeze-dried, and sterilized bone matrix concentrate derived from cortical bone, with minimal collagen content. Processing preserves BMP (bone morphogenetic protein) activity, triggering rapid bone formation through osteoinductive properties. Indicated for use in both dentistry and orthopedics.",
    subtitle: "SUITABLE FOR HORSE, DOG, CAT and other species",
    indications: ["Fracture voids and repair","Mal- or non-unions","Bone loss cases","TPLOs and TTAs","Arthrodesis procedures","Any other application where bone graft is needed"],
    available: ["Fine and ultrafine particle sizes","1 cc, 3 cc and 5 cc pack sizes"],
    note: null,
  },
  {
    id: "chips",
    title: "Corticocancellous Chips (canine or equine)",
    image: "/images/Corticocancellous chips ( canine or equine).jpg",
    description: "Partially decalcified, autolyzed, and deantigenized freeze-dried bone matrix particles. Due to osteoconductive properties, indicated for filling bone defects and cysts. When applied within the same species, the graft undergoes complete remodeling (creeping substitution), and resulting new bone is indistinguishable from host native bone tissue. Can be combined with BMG.",
    subtitle: null,
    indications: ["Fracture voids and repair","Mal- or non-unions","Bone loss cases","TPLOs and TTAs","Arthrodesis procedures","Any other application where bone graft is needed"],
    available: ["Fine and medium sized particles","1 cc, 3 cc and 5 cc pack sizes"],
    note: "DOG GRAFTS IS SUITABLE FOR CATS TOO",
  },
  {
    id: "specialty",
    title: "Specialty Grafts (equine cancellous & corticocancellous)",
    image: "/images/Speciality grafts.jpg",
    description: "Primarily structural grafts, suitable for restoring bone integrity and biomechanics. Within the same species, they undergo complete remodeling — cancellous components remodel more rapidly, cortical bone more slowly.",
    subtitle: null,
    indications: null,
    available: [
      "Cancellous blocks: 1 cc (10×10×10 mm), 2 cc (30×10×10 mm), 5 cc (50×10×10 mm)",
      "Corticocancellous blocks: 1 cc (10×10×10 mm), 2 cc (20×10×10 mm)",
      "Custom or oversized dimensions available on request",
    ],
    note: "SUITABLE FOR HORSE, DOG, CAT and other species",
  },
];

const scientific = [
  { term: "Osteoconductive", def: "Acts as a scaffold into which fibroblasts and capillaries from the host tissue can grow." },
  { term: "Osteoinductive", def: "Induces intensive bone formation due to its active BMP (Bone Morphogenetic Protein) content." },
  { term: "Osteogenic", def: "Already contains active bone-forming cells due to its osteoblast content." },
  { term: "Completely remodeled", def: "It is completely resorbed and replaced by new bone." },
];

const packageInsert = `Veterinary Bone Graft – Package Insert & Instructions for Use

Freeze-Dried sterilized bone allograft (particulate or block)
Storage: Room Temperature | Expiration: 5 years (see label)

CIRCULATOR:
1. Remove the Transplant Record and peel pouch containing the graft from the outer pouch. Everything inside the peel pouch is considered sterile.
2. Inspect the pouch. If damaged, consider the graft unsterile.
3. Using sterile technique, peel the pouch open and present the sterile innermost vacuum-sealed pouch to a sterile team member.
4. Complete the Transplant Record, return a copy to InTissue, retain a copy for patient records.

STERILE TEAM MEMBER OR SURGEON:
5. Tear open the innermost pouch and remove the graft.
6. Obtain a few milliliters of blood and/or sterile physiologic solution for rehydration. Typically surgical area provides sufficient blood.
7. To rehydrate (if necessary): Add sufficient blood/rehydration solution to minimally cover the graft. Minimal waiting for particulate grafts; 5–10 minutes for larger grafts.
8. Aspirate or decant excess liquid. Combine graft with patient blood or bone marrow. The graft may be mixed with autograft. Ensure grafts are implanted in a site with good vascular access.

GRAFT DESCRIPTION:
IT grafts are supplied as particulate grafts (BMG, cancellous bone) or as specialty grafts (block).
• BMG or cancellous bone chips: Packaged in cc doses (1, 3 or 5 cc), various particle sizes. No carrier additives.
• Specialty grafts: Cortical or cancellous bone in varying sizes including blocks and diaphyseal shaft sections (on demand). Some partially demineralized; structural grafts are not demineralized.

INDICATIONS & USES:
May be used wherever a bone graft is needed — periodontic, orthopedic, neurosurgical and other reconstructive surgeries. May be used alone or combined with autograft, PRP, PRF, bone marrow, substitutes or other implants. Pack particulate grafts into defect site. Specialty grafts may be cut to fit. All grafts should be implanted in a well-stabilized site.
Packaging and dosages are for single-patient, single-occasion use only.

CONTRAINDICATIONS & PRECAUTIONS:
Caution: Not for use in human patients.
Do not re-sterilize. Do not implant into a site with active or latent infection. As with all transplants, there may be a small risk of disease transmission. Adverse outcomes must be reported promptly to InTissue.

DONOR SUITABILITY:
All required infectious disease testing and screening completed. All donors screened with nucleic acid tests (PCR).
Canine donors: vaccinated for rabies, distemper, parvovirus, hepatitis. Blood tested negative for Brucella canis, Babesia spp, Ehrlichia spp, Anaplasma spp, Dirofilaria immitis.
Equine donors: vaccinated for Rabies and Tetanus. Blood tested negative for Equine Infectious Anemia, EHV1, EHV4, Equine influenza, Streptococcus equi, Babesia caballi, Theileria equi.

PROCESSING:
Processed in sterile laminar airflow using proprietary solutions (may include antibiotics, alcohols, hydrogen peroxide, acids, buffers, enzymes). Steps remove cellular elements and reduce immunogenicity while preserving osteoinductive proteins. Freeze-dried by lyophilization; moisture content < 5%. Sterilized by EO. Sterilization indicator label on packaging.

STORAGE & HANDLING:
Store at room temperature for up to 5 years from packaging date. Protect from heat above 45°C for more than 2 days. After opening, maintain aseptic conditions and implant promptly. If opened > 2 hours, refrigerate in sealed container. Discard if not used within 6 hours.

Manufactured by InTissue (Hisztolabor Ltd), 2 Kocsag, Győr, Hungary 9026
www.intissue.com`;

const AnimalProducts = () => {
  const [open, setOpen] = useState<string | null>("products");
  const [pkgOpen, setPkgOpen] = useState(false);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <Layout>
      <section className="bg-primary/10 border-b border-border px-6 py-5 text-center">
        <p className="text-sm md:text-base font-medium tracking-wide">
          InTissue — ISO 9001:2015 and ISO 13485:2016 certified veterinary tissue bank
        </p>
      </section>

      <section className="py-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Veterinary Bone Grafts</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Freeze-dried, sterilized bone allografts for equine, canine and feline patients.
        </p>
      </section>

      <section className="px-6 pb-12 max-w-5xl mx-auto space-y-2">

        {/* Product Information */}
        <div className="border border-border rounded-sm overflow-hidden">
          <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors" onClick={() => toggle("products")}>
            <span className="text-lg font-semibold tracking-wide">Product Information</span>
            {open === "products" ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>
          {open === "products" && (
            <div className="px-6 pb-8 space-y-12 border-t border-border">
              {products.map((p) => (
                <div key={p.id} className="pt-8 grid md:grid-cols-2 gap-8 items-start">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full rounded-sm object-cover aspect-video"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
                    {p.subtitle && <p className="font-semibold text-sm mb-3 text-primary">{p.subtitle}</p>}
                    {p.indications && (
                      <>
                        <p className="text-sm font-semibold mb-2">Indications:</p>
                        <ul className="space-y-1 mb-4">
                          {p.indications.map((ind) => (
                            <li key={ind} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {ind}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <p className="text-sm font-semibold mb-2">Available:</p>
                    <ul className="space-y-1 mb-4">
                      {p.available.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    {p.note && (
                      <p className="text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-sm px-3 py-2 inline-block">
                        {p.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* How to Order */}
        <div className="border border-border rounded-sm overflow-hidden">
          <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors" onClick={() => toggle("order")}>
            <span className="text-lg font-semibold tracking-wide">How to Order</span>
            {open === "order" ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>
          {open === "order" && (
            <div className="px-6 py-8 border-t border-border space-y-6">
              <div className="text-sm text-muted-foreground space-y-3">
                <p>When inquiring regarding the above, please be sure to include the best contact details for orders and billing.</p>
                <p>Use the catalogue number and/or product name with quantity. All grafts are freeze-dried and sterilized. They can be stored at room temperature for 5 years. Protect from direct sunlight.</p>
              </div>
              <div className="overflow-x-auto">
                <img src="/images/tablazat.png" alt="Product catalogue" className="max-w-full rounded-sm border border-border" />
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">To place an order or inquiry, please use our contact form:</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-foreground/40 text-sm uppercase tracking-widest px-8 py-3 hover:bg-foreground hover:text-background transition-all"
                >
                  Go to Contact Form →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Package Insert */}
        <div className="border border-primary/40 rounded-sm overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-primary/5 transition-colors"
            onClick={() => setPkgOpen(!pkgOpen)}
          >
            <div>
              <span className="text-lg font-semibold tracking-wide">Package Insert & Instructions for Use</span>
              <p className="text-xs text-muted-foreground mt-0.5">Veterinary Bone Graft — full IFU document</p>
            </div>
            {pkgOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
          </button>
          {pkgOpen && (
            <div className="px-6 py-8 border-t border-primary/20 bg-muted/10">
              <pre className="whitespace-pre-wrap text-xs text-muted-foreground leading-relaxed font-sans">
                {packageInsert}
              </pre>
            </div>
          )}
        </div>

        {/* Processing */}
        <div className="border border-border rounded-sm overflow-hidden">
          <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors" onClick={() => toggle("processing")}>
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

      {/* Scientific Background */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="border border-border rounded-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4">Scientific Background</h2>
          <p className="text-muted-foreground text-sm mb-6">An ideal bone graft possesses the following properties:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {scientific.map(({ term, def }) => (
              <div key={term} className="p-4 border border-border rounded-sm">
                <p className="font-semibold text-sm mb-1">{term}</p>
                <p className="text-muted-foreground text-sm">{def}</p>
              </div>
            ))}
          </div>
          <img
            src="/images/newboneformation.jpg"
            alt="New bone formation by BMG after 6 months in horse dentistry"
            className="w-full rounded-sm border border-border"
          />
        </div>
      </section>

      {/* QR + contact */}
      <section className="px-6 pb-24 text-center space-y-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Scan to visit our website</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.intissue.com&bgcolor=ffffff&color=000000"
            alt="QR code"
            className="mx-auto rounded-sm"
            width={180}
            height={180}
          />
        </div>
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-foreground/40 text-sm uppercase tracking-widest px-8 py-3 hover:bg-foreground hover:text-background transition-all"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AnimalProducts;

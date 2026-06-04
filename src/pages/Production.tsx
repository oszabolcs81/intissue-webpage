import Layout from "@/components/Layout";
import { ExternalLink, Instagram, Camera, Monitor } from "lucide-react";

const Production = () => (
  <Layout>
    <section className="py-16 px-6 text-center border-b border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Behind the Scenes</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Production Behind InTissue</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Professional medical photography &amp; videography — without compromise.
          Surgical documentation demands precision. Sterile environments and high-level
          surgical protocols require complete discretion and non-intrusive presence.
        </p>
      </div>
    </section>
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-sm font-semibold mb-8 uppercase tracking-widest text-muted-foreground">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Surgical Documentation", desc: "Pinpoint documentation of procedures in human and veterinary settings." },
          { label: "Implant & Macro Photography", desc: "Implant, device and macro photography for publication-ready use." },
          { label: "Premium Retouching", desc: "High-end retouching and presentation-ready image preparation." },
        ].map(({ label, desc }) => (
          <div key={label} className="p-6 border border-border rounded-sm hover:border-foreground/30 transition-colors">
            <h3 className="font-semibold mb-2 text-sm">{label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <h2 className="text-sm font-semibold mb-8 uppercase tracking-widest text-muted-foreground">Partnership</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 border border-border rounded-sm hover:border-primary/50 transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Camera className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Photography & Videography</p>
              <h3 className="font-semibold">BARLINKA Company Kft</h3>
            </div>
          </div>
          <a href="https://www.instagram.com/orsolyahajasphotography/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <Instagram className="w-4 h-4" />
            @orsolyahajasphotography
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="p-8 border border-border rounded-sm hover:border-primary/50 transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Monitor className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">IT Infrastructure & Web</p>
              <h3 className="font-semibold">Illu Kft</h3>
            </div>
          </div>
          <a href="https://illu.hu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            illu.hu
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Production;

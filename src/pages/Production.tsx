import Layout from "@/components/Layout";
import { ExternalLink, Instagram, Camera, Monitor, Globe, Shield, Cpu } from "lucide-react";

const Production = () => (
  <Layout>
    {/* Header */}
    <section className="py-16 px-6 text-center border-b border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Behind the Scenes</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Production Behind InTissue</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          The visual content and digital infrastructure behind InTissue is built by two dedicated partner teams.
        </p>
      </div>
    </section>

    <section className="px-6 py-16 max-w-5xl mx-auto space-y-16">

      {/* BARLINKA */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Photography & Videography</p>
              <h2 className="text-2xl font-bold">BARLINKA Company Kft</h2>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            BARLINKA Company Kft is responsible for all visual content appearing on this website and in InTissue's professional communications. Working in close collaboration with the InTissue team, they produce photography and video material that meets the high standards required in the medical and veterinary fields — with full discretion and non-intrusive presence wherever content is created.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Medical and veterinary photography",
              "Implant, device and macro photography",
              "Premium retouching & publication-ready image preparation",
              "Professional video production",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://www.instagram.com/orsolyahajasphotography/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline border border-primary/30 rounded-sm px-4 py-2"
          >
            <Instagram className="w-4 h-4" />
            @orsolyahajasphotography
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground bg-muted/10 border border-border rounded-sm p-6">
          <p className="font-semibold text-foreground">Why visual quality matters</p>
          <p>In the medical and veterinary field, the quality of visual documentation directly impacts how expertise is perceived — by colleagues, partners and institutions internationally. Every image and video on this site is produced with that standard in mind.</p>
          <p>BARLINKA's work has been featured in conjunction with institutions including the Semmelweis Children's Hospital PIC Department.</p>
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Illu Kft */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
              <Monitor className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">IT Infrastructure & Web Development</p>
              <h2 className="text-2xl font-bold">Illu Kft</h2>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Illu Kft provides the complete technical background behind InTissue's digital presence. From web design and development to IT infrastructure and ongoing technical consultation, Illu Kft ensures a stable, secure and professional digital environment.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Web design & development (this website)",
              "IT infrastructure management",
              "Technical consultation & system architecture",
              "Digital security & performance optimization",
              "Ongoing technical support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://illu.hu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline border border-primary/30 rounded-sm px-4 py-2"
          >
            <Globe className="w-4 h-4" />
            illu.hu
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-4">
          <div className="bg-muted/10 border border-border rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <p className="font-semibold text-sm">Reliability & Security</p>
            </div>
            <p className="text-sm text-muted-foreground">A professional web presence in the medical sector requires stability, data security and compliance. Illu Kft manages these aspects so InTissue can focus on its core mission.</p>
          </div>
          <div className="bg-muted/10 border border-border rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-primary" />
              <p className="font-semibold text-sm">This Website</p>
            </div>
            <p className="text-sm text-muted-foreground">The intissue.com website was designed and developed by Illu Kft — built as a modern, fast and mobile-optimised platform that represents InTissue's professional standards internationally.</p>
          </div>
        </div>
      </div>

    </section>
  </Layout>
);

export default Production;

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { ExternalLink, Instagram, Camera, Monitor, Globe, Database, Shield } from "lucide-react";

const Production = () => (
  <Layout>
    <Helmet>
      <title>The Connective Layer – InTissue</title>
      <meta name="description" content="Meet the creative and technical partners behind InTissue: BARLINKA (photography) and Illu Kft (enterprise IT and web development)." />
      <link rel="canonical" href="https://www.intissue.com/production" />
    </Helmet>
    {/* Header */}
    <section className="py-16 px-6 text-center border-b border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Connective Layer</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">The Connective Layer of InTissue</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Like connective tissue holds the body together, two dedicated partner teams hold together every visible and invisible layer of our digital presence — quietly, reliably, with precision.
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
            Illu Kft provides solutions across many areas of IT — from infrastructure and complete technical support to web development and digital security. They built and operate the platform you are currently using.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Web design & development (this website)",
              "IT infrastructure and complete support",
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
          {/* Featured: Backup */}
          <div className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/40 rounded-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-primary" />
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Featured Service</p>
            </div>
            <h3 className="text-lg font-bold mb-2">Enterprise-grade Backup Solutions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reliable, enterprise-grade data backup and disaster recovery — protecting business-critical data with industry-leading technology and proven reliability.
            </p>
          </div>
          <div className="bg-muted/10 border border-border rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <p className="font-semibold text-sm">Trusted IT Partner</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Illu Kft delivers comprehensive IT solutions — covering infrastructure, security, development and consultation. A reliable technical partner for businesses that depend on stable digital operations.
            </p>
          </div>
        </div>
      </div>

    </section>
  </Layout>
);

export default Production;

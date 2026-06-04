import Layout from "@/components/Layout";
import { ExternalLink, Instagram, Camera, Monitor, Globe, Database, Shield } from "lucide-react";


const Production = () => (
  <Layout>
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

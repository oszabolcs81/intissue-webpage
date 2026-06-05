import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Clock, Droplet, ShieldCheck, Layers, Activity, BadgeCheck, ArrowRight, Play } from "lucide-react";

const advantages = [
  { icon: Clock, title: "Reduced OR Time", text: "Ready-to-use grafts cut operating time and overall procedure costs." },
  { icon: Droplet, title: "Minimal Blood Loss", text: "No second surgical site means significantly less intraoperative bleeding." },
  { icon: ShieldCheck, title: "No Donor-Site Morbidity", text: "Eliminates the pain and complications of harvesting autologous bone." },
  { icon: Layers, title: "Customizable Forms", text: "Available in tailored quantities, particle sizes and structural blocks." },
  { icon: Activity, title: "Accelerated Healing", text: "Osteoinductive properties drive rapid osseointegration and remodeling." },
  { icon: BadgeCheck, title: "Clinically Proven", text: "Studies show allografts perform on par with autograft in bone healing." },
];

const Index = () => (
  <Layout>
    <Helmet>
      <title>InTissue – Intelligent Tissue Solutions</title>
      <meta name="description" content="InTissue specializes in medical and veterinary surgical education and bone graft solutions. ISO 9001 and ISO 13485 certified tissue bank." />
      <link rel="canonical" href="https://www.intissue.com/" />
    </Helmet>
    {/* Hero */}
    <section
      className="relative flex items-center justify-center"
      style={{ minHeight: "42vh", backgroundImage: "url('/images/hero_banner.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background" />
      <div className="relative text-center px-6 py-14 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Intelligent Tissue Solutions</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Advanced bone grafts for human &amp; veterinary care</h1>
        <p className="text-muted-foreground max-w-xl mx-auto mb-4">
          Freeze-dried, sterilized allografts engineered for predictable regeneration.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-primary underline underline-offset-4 text-sm hover:opacity-80 transition-opacity">
          Get in touch <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>

    {/* Explore Cards */}
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Human Treatment → Videos */}
        <Link to="/videos" className="group relative overflow-hidden rounded-md aspect-[4/5] md:aspect-video block">
          <img src="/images/human_treatment.webp" alt="Human Treatment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-1">Surgery & Periodontology</p>
            <h3 className="text-xl font-semibold mb-1">Human Treatment</h3>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Watch videos <Play className="w-3 h-3" />
            </span>
          </div>
        </Link>

        {/* Animal Treatment — dual link card */}
        <div className="group relative overflow-hidden rounded-md aspect-[4/5] md:aspect-video block">
          <img src="/images/animal_treatment.webp" alt="Animal Treatment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          {/* Products badge */}
          <Link to="/animal" className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg hover:bg-primary/80 transition-colors">
            Products & Info <ArrowRight className="w-3 h-3" />
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-1">Veterinary</p>
            <h3 className="text-xl font-semibold mb-2">Animal Treatment</h3>
            {/* Videos link */}
            <Link to="/videos" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Play className="w-3 h-3" /> Animal videos
            </Link>
          </div>
        </div>

        {/* Tati the Dog → Videos */}
        <Link to="/videos" className="group relative overflow-hidden rounded-md aspect-[4/5] md:aspect-video block">
          <img src="/images/tati_dog.webp" alt="Tati the Dog" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-1">Case Study</p>
            <h3 className="text-xl font-semibold mb-1">Tati the Dog</h3>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Watch video <Play className="w-3 h-3" />
            </span>
          </div>
        </Link>

      </div>
    </section>

    {/* Advantages */}
    <section className="px-6 py-16 bg-muted/10 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Why Banked Bone</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The advantages of allograft tissue</h2>
          <p className="text-muted-foreground">
            Our processed bone grafts give surgeons a safe, effective and convenient alternative to autologous harvesting.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group p-6 rounded-md border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-muted-foreground mb-6 text-lg">
          Learn a revolutionary new technology from the best — from the comfort of your home.
        </p>
        <Link to="/videos" className="inline-flex items-center gap-2 border border-foreground/40 text-sm uppercase tracking-widest px-8 py-3 hover:bg-foreground hover:text-background transition-all">
          Explore our work <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;

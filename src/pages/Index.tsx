import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const advantages = [
  "Reduced OR time and reduces costs",
  "Minimal intraoperative blood loss",
  "Elimination of donor-site morbidity",
  "Autologous harvest sites are frequently limited",
  "Available in customizable quantities and structural forms",
  "Accelerated healing and osseointegration",
  "Studies show that allografts are as effective as autograft in bone healing",
];

const cards = [
  { label: "Human Treatment", img: "/images/human_treatment.jpg", path: "/videos" },
  { label: "Animal Treatment", img: "/images/animal_treatment.jpg", path: "/animal" },
  { label: "Tati the Dog", img: "/images/tati_dog.jpg", path: "/videos" },
];

const Index = () => (
  <Layout>
    {/* Compact Hero */}
    <section
      className="relative flex items-center justify-center"
      style={{ minHeight: "38vh", backgroundImage: "url('/images/hero_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="relative text-center px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">Meet our Intelligent tissue solution</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our courses are coming soon.{" "}
          <Link to="/contact" className="text-primary underline underline-offset-4">Contact us</Link>{" "}
          for more information.
        </p>
      </div>
    </section>

    {/* Explore Cards */}
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <Link key={card.label} to={card.path} className="group relative overflow-hidden rounded-sm aspect-video block">
            <img
              src={card.img}
              alt={card.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-xs uppercase tracking-widest text-primary mb-1">Explore</p>
              <h3 className="text-lg font-semibold">{card.label}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Advantages */}
    <section className="px-6 pb-14">
      <div className="max-w-4xl mx-auto border border-border rounded-sm p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Advantages of utilizing banked bone</h2>
        <ul className="space-y-3">
          {advantages.map((adv) => (
            <li key={adv} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-muted-foreground">{adv}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* About */}
    <section className="px-6 pb-24 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-muted-foreground mb-6">
          Learning a revolutionary new technology from the best, from the comfort of your home.
        </p>
        <Link
          to="/videos"
          className="inline-block border border-foreground/40 text-sm uppercase tracking-widest px-8 py-3 hover:bg-foreground hover:text-background transition-all"
        >
          Find out more
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;

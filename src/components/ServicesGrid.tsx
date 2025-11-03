import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ServiceCard = {
  title: string;
  description: string;
  features: string[];
  image: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Full Roof Replacement",
    description: "Complete strip back to trusses or sarking boards with premium materials",
    features: ["Complete strip back", "New smart ply/membrane", "Counter battens & tile battens", "Premium roof tiles", "Dry ridge & verge systems"],
    image: "/Services/roof Replacement..jpg",
  },
  {
    title: "Roof Repairs & Maintenance",
    description: "Professional roof repairs and ongoing maintenance services",
    features: ["Emergency repairs", "Damaged tile replacement", "Timber treatment", "Structural repairs"],
    image: "/Services/Roof maintenance..jpg",
  },
  {
    title: "Chimney Services",
    description: "Expert chimney removal, rebuilding and maintenance",
    features: ["Chimney removal/rebuilding", "Re-slating & flashing", "Stove flue installations", "Professional repairs"],
    image: "/Services/chimney.jpg",
  },
  {
    title: "Solar Panel Services",
    description: "Safe removal, reinstallation and maintenance of solar panels",
    features: ["Safe removal & reinstallation", "Professional soft washing", "Panel cleaning", "Maintenance services"],
    image: "/Services/Solar panel..jpg",
  },
  {
    title: "Guttering & Roofline",
    description: "Complete guttering and roofline system installation",
    features: ["uPVC gutters & downpipes", "Fascia & soffit replacement", "Dry verge systems", "Professional installation"],
    image: "/Services/gutters.jpg",
  },
];

const ServicesGrid = () => {
  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mr-6">
              OUR SERVICES
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl">
            Expert roofing services across Crosshouse, Kilmarnock and surrounding areas. We deliver quality roof replacements, repairs, chimney work, solar panel services and guttering systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden flex flex-col rounded-3xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-[1.02] h-full"
            >
              {/* Image (ANGE style: aspect wrapper, object-cover, centered) */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service image`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]">
                        <div className="w-1.5 h-1.5 bg-[hsl(var(--primary-orange))] rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button onClick={handleQuoteClick} className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold rounded-full">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;



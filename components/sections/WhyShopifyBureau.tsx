import Link from "next/link";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function WhyShopifyBureau() {
  const USPs = [
    {
      title: "Diepe Shopify Expertise",
      description:
        "Als gespecialiseerd website shopify bureau bouwen we geen standaard templates, maar ontwerpen we maatwerk oplossingen die perfect aansluiten op jouw merk en processen.",
      link: "/shopify-bureau",
      linkLabel: "Ontdek Shopify bureau",
    },
    {
      title: "Conversie-Optimalisatie (CRO)",
      description:
        "Elk e-commerce platform dat we ontwikkelen is mobile-first en geoptimaliseerd voor een vlekkeloze check-out. Meer rendement uit elke bezoeker.",
      link: "/ecommerce-oplossingen",
      linkLabel: "Bekijk e-commerce oplossingen",
    },
    {
      title: "Flexibiliteit met WooCommerce",
      description:
        "Naast Shopify bieden we ook WooCommerce oplossingen aan voor ultieme flexibiliteit en eigenaarschap van je verkoopkanaal.",
      link: "/woocommerce-bureau",
      linkLabel: "Ontdek WooCommerce",
    },
  ];

  return (
    <section
      className="why-shopify-bureau py-20 bg-background-secondary"
      id="waarom-shopify-bureau"
      aria-labelledby="wsb-h"
    >
      <Container>
        <Reveal
          as="header"
          className="section-head  max-w-3xl mx-auto mb-16 text-center"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold text-center">
            Specialistische Aanpak
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6 text-center"
            id="wsb-h"
          >
            Waarom Een <em>website shopify bureau</em>?
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed text-center mx-auto block">
            Een succesvolle webshop vereist meer dan alleen een mooi design. Het
            vereist technische perfectie, doordachte conversiepaden en sterke
            SEO. Sarte Global combineert design met conversiegerichte techniek
            om jouw verkoop naar het volgende niveau te tillen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {USPs.map((usp, index) => (
            <Reveal
              key={usp.title}
              as="div"
              className="p-8 bg-surface border border-border hover:border-accent/40 rounded-xl transition-all duration-300 flex flex-col justify-between"
              index={index}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-text">
                  {usp.title}
                </h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
              <Link
                href={usp.link}
                className="text-accent hover:text-accent-hover text-sm font-medium inline-flex items-center gap-2 group mt-auto"
              >
                {usp.linkLabel}{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center">
          <CTAButton
            label="Start jouw project"
            projectType="Shopify Bureau Project"
          />
          <div className="mt-4 text-xs text-text-muted">
            Of bekijk eerst onze{" "}
            <Link href="/cases" className="underline hover:text-text">
              recente cases
            </Link>
            .
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function WhySarteGlobal() {
  const reasons = [
    {
      title: "Senior Specialisten",
      description: "Jouw project wordt uitsluitend geleerd en gebouwd door ervaren senior designers en developers. Geen junioren of onnodige tussenschakels."
    },
    {
      title: "100% Maatwerk",
      description: "Geen standaard WordPress of Shopify templates die traag laden en op andere websites lijken. Wij ontwerpen alles vanaf kras geoptimaliseerd voor jouw merk."
    },
    {
      title: "Focus op Conversie & SEO",
      description: "We ontwerpen met het doel om bezoekers om te zetten in betalende klanten. Dit combineren we met geavanceerde technische SEO-optimalisatie."
    },
    {
      title: "Transparant & Snel",
      description: "Duidelijke prijsafspraken vooraf en een strakke oplevertermijn. Binnen 2 tot 4 weken staat jouw nieuwe website of webshop volledig live."
    }
  ];

  return (
    <section className="why-sarte-global py-20 bg-background-secondary" id="waarom-sarte-global" aria-labelledby="wsg-h">
      <Container>
        <Reveal as="header" className="section-head text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">Onze Kracht</span>
          <h2 className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6" id="wsg-h">
            Waarom Bedrijven Voor <em>Sarte Global</em> Kiezen
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Wij zijn niet zomaar een ontwikkelbureau. Wij zijn jouw strategische e-commerce partner die meedenkt over de groei van jouw onderneming.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              as="div"
              className="p-8 bg-surface border border-border/80 rounded-xl hover:border-accent/30 transition-all duration-300"
              index={index}
            >
              <h3 className="text-xl font-semibold mb-3 text-text">{reason.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{reason.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center">
          <CTAButton label="Plan een gratis adviesgesprek" projectType="Adviesgesprek" />
          <div className="mt-4 text-xs text-text-muted">
            Wil je meer weten over ons team? Lees dan <Link href="/over-ons" className="underline hover:text-text">over ons</Link> of neem direct <Link href="/contact" className="underline hover:text-text">contact</Link> op.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

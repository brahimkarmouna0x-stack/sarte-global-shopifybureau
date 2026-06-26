import Link from "next/link";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function Ontwikkelingsproces() {
  const steps = [
    {
      num: "01",
      title: "Strategie & Analyse",
      description: "We bepalen de doelstellingen van jouw website shopify bureau project, analyseren de doelgroep en leggen de technische eisen vast."
    },
    {
      num: "02",
      title: "Design & UX/UI",
      description: "We ontwerpen een uniek design dat past bij jouw merkidentiteit, met de focus op een optimale mobiele ervaring en maximale conversie."
    },
    {
      num: "03",
      title: "Development & Integraties",
      description: "Onze specialisten bouwen het ontwerp om naar een razendsnelle, stabiele code met nette koppelingen voor betalingen en logistiek."
    },
    {
      num: "04",
      title: "SEO & Lancering",
      description: "We optimaliseren alle pagina's voor vindbaarheid in Google en voeren uitgebreide technische checks uit voor we live gaan."
    }
  ];

  return (
    <section className="ontwikkelingsproces py-20 bg-background" id="ontwikkelingsproces" aria-labelledby="op-h">
      <Container>
        <Reveal as="header" className="section-head text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">Onze Werkwijze</span>
          <h2 className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6" id="op-h">
            Ons <em>Ontwikkelingsproces</em>
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Van idee tot een winstgevend online verkoopkanaal. Wij hanteren een transparante werkwijze waarbij we snelheid combineren met oog voor detail.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <Reveal
              key={step.num}
              as="div"
              className="relative p-6 bg-background-secondary border border-border/60 rounded-xl"
              index={index}
            >
              <div className="text-3xl font-extrabold text-accent/20 mb-4">{step.num}</div>
              <h3 className="text-lg font-semibold mb-2 text-text">{step.title}</h3>
              <p className="text-text-muted text-xs leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center">
          <CTAButton label="Vraag een offerte aan" projectType="Ontwikkeling" />
          <div className="mt-4 text-xs text-text-muted">
            Meer weten over onze tarieven? Bekijk onze <Link href="#pakketten" className="underline hover:text-text">pakketten</Link>.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

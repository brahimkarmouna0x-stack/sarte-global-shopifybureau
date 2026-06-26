import Link from "next/link";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function HomeFAQ() {
  const faqs = [
    {
      question: "Wat doet een website shopify bureau precies?",
      answer:
        "Een website shopify bureau ontwerpt, ontwikkelt en optimaliseert professionele webshops op het Shopify platform. We zorgen voor een uniek maatwerk design, snelle laadtijden, integraties met logistieke en betaalpartners, en gerichte SEO-optimalisatie om jouw shop direct vindbaar te maken.",
    },
    {
      question: "Wat zijn de kosten voor een Shopify website bureau?",
      answer:
        "De kosten variëren op basis van de complexiteit, het aantal gewenste functionaliteiten, en specifieke maatwerkkoppelingen. Sarte Global hanteert transparante pakketten en prijzen, waardoor je vooraf precies weet waar je aan toe bent. Neem contact op voor een vrijblijvend voorstel.",
    },
    {
      question: "Hoe lang duurt het traject van intake tot lancering?",
      answer:
        "Gemiddeld leveren we een professionele Shopify of WooCommerce webshop op binnen 2 tot 4 weken. Grotere projecten met complexe B2B functionaliteiten of omvangrijke migraties kunnen meer tijd in beslag nemen. We leveren altijd een duidelijke tijdslijn vooraf aan.",
    },
    {
      question: "Kunnen jullie mijn bestaande webshop migreren naar Shopify?",
      answer:
        "Ja, wij verzorgen volledige migraties van WooCommerce, WordPress, Lightspeed of andere platformen naar Shopify. We zorgen ervoor dat al je producten, klanten, en bestelgeschiedenis veilig worden overgezet én dat je SEO-posities behouden blijven door redirects correct in te stellen.",
    },
    {
      question: "Is mijn webshop direct goed vindbaar in Google?",
      answer:
        "Absoluut. Als technisch SEO experts richten we vanaf de basis de juiste URL-structuur, sitemaps, robots.txt en gestructureerde JSON-LD schema's in. Hierdoor snappen zoekmachines direct waar jouw producten over gaan, wat leidt tot betere prestaties in de zoekresultaten.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="home-faq py-20 bg-background"
      id="veelgestelde-vragen"
      aria-labelledby="faq-h"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <Reveal
          as="header"
          className="section-head centered max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Veelgestelde Vragen
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6"
            id="faq-h"
          >
            Veelgestelde Vragen Over <em>websites shopify bureau</em>
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Heb je vragen over het laten maken van een Shopify of WooCommerce
            webshop? Hier vind je antwoorden op de meest gestelde vragen.
          </p>
        </Reveal>

        <div className="lp-faq__list max-w-3xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <Reveal
              key={faq.question}
              as="div"
              className="lp-faq__item-wrap"
              index={index}
            >
              <details
                className="lp-faq__item border-b border-border py-4"
                name="home-faq"
              >
                <summary className="lp-faq__question flex justify-between items-center cursor-pointer py-2 text-lg font-medium text-text select-none list-none">
                  <span>{faq.question}</span>
                  <span className="lp-faq__icon text-accent font-semibold ml-2">
                    +
                  </span>
                </summary>
                <p className="lp-faq__answer text-text-muted mt-2 text-sm leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center">
          <CTAButton
            label="Stel een specifieke vraag"
            projectType="Vraag stellen"
          />
          <div className="mt-4 text-xs text-text-muted">
            Stuur ons direct een e-mail via{" "}
            <a
              href="mailto:info@sarteglobal.com"
              className="underline hover:text-text"
            >
              info@sarteglobal.com
            </a>
            .
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

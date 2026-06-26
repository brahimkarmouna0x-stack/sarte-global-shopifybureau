"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { CTAButton } from "@/components/ui/CTAButton";
import { PricingSection } from "../pricing/PricingSection";

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 1 – HERO (above the fold, single H1)
───────────────────────────────────────────────────────────────────────────── */
function OfferteHero() {
  return (
    <section className="offerte-hero" id="top" aria-labelledby="offerte-h1">
      {/* Decorative orbs */}
      <span className="page-hero__orb page-hero__orb--a" aria-hidden="true" />
      <span className="page-hero__orb page-hero__orb--b" aria-hidden="true" />

      <Container className="offerte-hero__inner">
        <Reveal as="div" className="offerte-hero__badge">
          <span className="offerte-hero__badge-dot" aria-hidden="true" />
          Gemiddeld binnen 4 uur reactie
        </Reveal>

        <Reveal>
          <h1 className="h2 offerte-hero__title" id="offerte-h1">
            Vrijblijvend offerte aanvragen voor <em>jouw website of webshop</em>
          </h1>
        </Reveal>

        <Reveal>
          <p className="sub offerte-hero__sub">
            Vertel ons over jouw project — van een professionele{" "}
            <strong>website laten ontwerpen</strong> tot een volledige{" "}
            <strong>Shopify of WooCommerce webshop</strong>. Wij sturen je
            binnen één werkdag een concreet voorstel bureau.
          </p>
        </Reveal>

        <Reveal as="div" className="offerte-hero__trust-row">
          {[
            { value: "150+", label: "Projecten opgeleverd" },
            { value: "4,9★", label: "Google-beoordeling" },
            { value: "2–4 wkn", label: "Gemiddelde doorlooptijd" },
          ].map((item) => (
            <div key={item.label} className="offerte-hero__trust-item">
              <span className="offerte-hero__trust-value">{item.value}</span>
              <span className="offerte-hero__trust-label">{item.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 2 – CONTACT FORM
───────────────────────────────────────────────────────────────────────────── */
function OfferteFormSection() {
  const [done, setDone] = useState(false);

  return (
    <section
      id="offerte-formulier"
      className="offerte-form-section"
      aria-labelledby="offerte-form-h"
    >
      <Container>
        <div className="offerte-form-section__layout">
          {/* Left: benefits */}
          <Reveal as="aside" className="offerte-form-section__aside">
            <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
              Waarom Sarte Global?
            </span>
            <h2 className="h2 text-3xl font-bold mt-4 mb-6" id="offerte-form-h">
              Jouw project in <em>goede handen</em>
            </h2>
            <ul className="offerte-form-section__benefits">
              {[
                {
                  icon: "⚡",
                  title: "Snelle oplevering",
                  desc: "Volledige website of webshop in 2–4 weken live.",
                },
                {
                  icon: "🎯",
                  title: "Conversiegericht design",
                  desc: "Elk ontwerp is gebouwd om bezoekers om te zetten naar klanten.",
                },
                {
                  icon: "🔍",
                  title: "SEO vanaf dag 1",
                  desc: "Technische SEO en gestructureerde data direct ingebakken.",
                },
                {
                  icon: "💬",
                  title: "Persoonlijk contact",
                  desc: "Directe lijn met jouw vaste projectmanager via WhatsApp.",
                },
                {
                  icon: "🛡️",
                  title: "Transparante prijzen",
                  desc: "Geen verborgen kosten — vooraf weet je exact waar je aan toe bent.",
                },
              ].map((b) => (
                <li key={b.title} className="offerte-form-section__benefit">
                  <span
                    className="offerte-form-section__benefit-icon"
                    aria-hidden="true"
                  >
                    {b.icon}
                  </span>
                  <div>
                    <strong className="block text-sm font-semibold text-text mb-0.5">
                      {b.title}
                    </strong>
                    <span className="text-xs text-text-muted leading-relaxed">
                      {b.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: form */}
          <Reveal as="div" className="offerte-form-section__form-wrap">
            {done ? (
              <div className="contact-form-section__success" role="status">
                <h3>Je bericht is doorgezet naar WhatsApp.</h3>
                <p>
                  We reageren binnenkort vanuit hetzelfde gesprek. Werkt de
                  doorverwijzing niet? Stuur ons een e-mail op{" "}
                  <a href="mailto:info@sarteglobal.com">info@sarteglobal.com</a>
                  .
                </p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setDone(false)}
                >
                  Nog een bericht versturen
                </button>
              </div>
            ) : (
              <ContactForm onComplete={() => setDone(true)} autoFocus={false} />
            )}
            <p className="offerte-form-section__fineprint">
              🔒 Veilige doorverwijzing via WhatsApp. Wij delen jouw gegevens
              nooit met derden.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 3 – SOCIAL PROOF / STATS
───────────────────────────────────────────────────────────────────────────── */
function OfferteStats() {
  const stats = [
    { value: "150+", label: "Websites & webshops opgeleverd" },
    { value: "4,9", label: "Gemiddeld Google-cijfer" },
    { value: "98%", label: "Klanttevredenheid" },
    { value: "2–4 wkn", label: "Gemiddelde doorlooptijd" },
  ];

  return (
    <section className="offerte-stats" aria-labelledby="offerte-stats-h">
      <Container>
        <Reveal
          as="header"
          className="section-head text-center max-w-2xl mx-auto mb-12"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Onze Resultaten
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3"
            id="offerte-stats-h"
          >
            Resultaten die <em>voor zichzelf spreken</em>
          </h2>
        </Reveal>
        <div className="offerte-stats__grid">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              as="div"
              className="offerte-stats__card"
              index={i}
            >
              <span className="offerte-stats__value">{s.value}</span>
              <span className="offerte-stats__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 4 – SERVICES OVERVIEW
───────────────────────────────────────────────────────────────────────────── */
function OfferteServices() {
  const services = [
    {
      icon: "🖥️",
      title: "Website laten ontwerpen",
      description:
        "Een professionele, snelle website bureau — van portfolio tot corporate. Mobile-first, SEO-geoptimaliseerd en conversieklaar.",
      href: "/website-laten-maken",
      cta: "Meer over websites",
      keywords: "website laten ontwerpen",
    },
    {
      icon: "🛍️",
      title: "Shopify webshop bouwen",
      description:
        "Als gespecialiseerd Shopify bureau bouwen we schaalbare webshops met hoge conversie, snelle checkout en sterke integraties.",
      href: "/shopify-bureau",
      cta: "Meer over Shopify",
      keywords: "shopify webshop",
    },
    {
      icon: "🛒",
      title: "WooCommerce webshop",
      description:
        "Maximale flexibiliteit en eigenaarschap met WooCommerce op WordPress — ideaal voor maatwerk B2B en B2C e-commerce.",
      href: "/woocommerce-bureau",
      cta: "Meer over WooCommerce",
      keywords: "woocommerce webshop",
    },
    {
      icon: "📈",
      title: "SEO-optimalisatie",
      description:
        "Technische SEO, content-strategie en structured data om jouw website duurzaam boven de concurrentie in Google te positioneren.",
      href: "/seo-optimalisatie",
      cta: "Meer over SEO",
      keywords: "seo optimalisatie",
    },
    {
      icon: "🚀",
      title: "Landing page laten maken",
      description:
        "Conversiegerichte landing pages voor campagnes, producten of lead-generatie — gebouwd voor maximaal resultaat.",
      href: "/landing-page-laten-maken",
      cta: "Meer over landing pages",
      keywords: "landing page maken",
    },
    {
      icon: "⚙️",
      title: "Website onderhoud",
      description:
        "Proactief beheer, updates, monitoring en snelheidsoptimalisatie — zodat jouw site altijd optimaal presteert.",
      href: "/website-onderhoud",
      cta: "Meer over onderhoud",
      keywords: "website onderhoud",
    },
  ];

  return (
    <section
      className="offerte-services py-20 bg-background-secondary"
      id="diensten"
      aria-labelledby="offerte-services-h"
    >
      <Container>
        <Reveal
          as="header"
          className="section-head text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Onze Diensten
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6"
            id="offerte-services-h"
          >
            Waarvoor wil je een <em>offerte aanvragen</em>?
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Van een nieuwe <strong>website laten ontwerpen</strong> tot een
            complete <strong>website webshop</strong> — wij leveren bureau.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              className="p-8 bg-surface border border-border hover:border-accent/40 rounded-xl transition-all duration-300 flex flex-col"
              index={index}
            >
              <div className="text-3xl mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-accent hover:text-accent-hover text-sm font-medium inline-flex items-center gap-2 group mt-auto"
                aria-label={`Meer informatie over ${service.title}`}
              >
                {service.cta}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center">
          <CTAButton
            label="Direct offerte aanvragen"
            projectType="Offerte Aanvragen"
          />
        </Reveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 5 – HOW IT WORKS (process)
───────────────────────────────────────────────────────────────────────────── */
function OfferteProcess() {
  const steps = [
    {
      num: "01",
      title: "Stuur je offerteverzoek",
      desc: "Vul het formulier in of stuur ons een WhatsApp. Vertel kort over jouw idee, wensen en budget — dat is genoeg om te starten.",
    },
    {
      num: "02",
      title: "Gratis intake gesprek",
      desc: "Binnen één werkdag plannen we een korte kennismaking (telefonisch of online) om jouw project goed te begrijpen.",
    },
    {
      num: "03",
      title: "Concreet voorstel bureau",
      desc: "Je ontvangt een heldere offerte met scope, tijdlijn en transparante prijs — geen vage kostenramingen.",
    },
    {
      num: "04",
      title: "Projectstart & oplevering",
      desc: "Na akkoord gaan we direct aan de slag. Gemiddeld staat jouw nieuwe website of webshop binnen 2–4 weken live.",
    },
  ];

  return (
    <section
      className="offerte-process py-20 bg-background"
      id="werkwijze"
      aria-labelledby="offerte-process-h"
    >
      <Container>
        <Reveal
          as="header"
          className="section-head text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Hoe Het Werkt
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6"
            id="offerte-process-h"
          >
            Van aanvraag naar <em>live website</em> in 4 stappen
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Een transparant en efficiënt proces — zodat jij altijd weet waar je
            aan toe bent.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <Reveal
              key={step.num}
              as="div"
              className="relative p-6 bg-background-secondary border border-border/60 rounded-xl"
              index={index}
            >
              <div className="text-4xl font-extrabold text-accent/20 mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text">
                {step.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center">
          <CTAButton
            label="Start vandaag nog"
            projectType="Offerte Aanvragen"
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

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 6 – USPs / WHY US
───────────────────────────────────────────────────────────────────────────── */
function OfferteWhyUs() {
  const usps = [
    {
      icon: "🏆",
      title: "Gespecialiseerd bureau",
      desc: "We focussen uitsluitend op websites, webshops en SEO. Geen generalist, maar een specialist die het verschil maakt.",
    },
    {
      icon: "📱",
      title: "Mobile-first aanpak",
      desc: "Alle ontwerpen zijn primair gebouwd voor mobiel — waar meer dan 70% van het websiteverkeer vandaan komt.",
    },
    {
      icon: "🔧",
      title: "Technische perfectie",
      desc: "Schone code, snelle laadtijden en Core Web Vitals scores die Google blij maken en bezoekers vasthouden.",
    },
    {
      icon: "📊",
      title: "Data-gedreven beslissingen",
      desc: "We gebruiken analytics, heatmaps en A/B-tests om jouw website continu te verbeteren na de lancering.",
    },
    {
      icon: "🤝",
      title: "Langdurige relaties",
      desc: "We bouwen niet alleen je website — we zijn jouw digitale partner voor de lange termijn.",
    },
    {
      icon: "🌍",
      title: "Werkzaam in heel Nederland",
      desc: "Van Amsterdam tot Eindhoven, van Rotterdam tot Utrecht — we werken voor klanten door heel Nederland.",
    },
  ];

  return (
    <section
      className="offerte-why-us py-20 bg-background-secondary"
      id="waarom-sarte-global"
      aria-labelledby="offerte-why-h"
    >
      <Container>
        <Reveal
          as="header"
          className="section-head text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Onze Expertise
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6"
            id="offerte-why-h"
          >
            Waarom klanten kiezen voor <em>Sarte Global</em>
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Als full-service digitaal bureau combineren we design, techniek en
            marketing voor maximaal rendement.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {usps.map((usp, index) => (
            <Reveal
              key={usp.title}
              as="div"
              className="p-6 bg-surface border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
              index={index}
            >
              <div className="text-2xl mb-3" aria-hidden="true">
                {usp.icon}
              </div>
              <h3 className="text-base font-semibold mb-2 text-text">
                {usp.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {usp.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 7 – TESTIMONIALS (inline mini version)
───────────────────────────────────────────────────────────────────────────── */
function OfferteTestimonials() {
  const reviews = [
    {
      name: "Lars van den Berg",
      role: "E-commerce ondernemer",
      rating: 5,
      text: "Sarte Global heeft mijn Shopify webshop van begin tot eind verzorgd. De webshop staat er fantastisch bij en de omzet is in 3 maanden verdubbeld. Aanrader!",
    },
    {
      name: "Fatima El Amrani",
      role: "Marketingdirecteur",
      rating: 5,
      text: "Professioneel team, snelle communicatie en een eindresultaat dat onze verwachtingen overtrof. De nieuwe website trekt aanzienlijk meer leads.",
    },
    {
      name: "Jeroen Bakker",
      role: "MKB-ondernemer",
      rating: 5,
      text: "Binnen 3 weken een complete website laten ontwerpen én bouwen. Uitstekende kwaliteit, scherpe prijs en top support na de lancering.",
    },
  ];

  return (
    <section
      className="offerte-testimonials py-20 bg-background"
      id="klantreviews"
      aria-labelledby="offerte-reviews-h"
    >
      <Container>
        <Reveal
          as="header"
          className="section-head text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Klantreviews
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6"
            id="offerte-reviews-h"
          >
            Wat onze klanten over ons <em>zeggen</em>
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Meer dan 150 tevreden klanten gingen je voor. Lees hun ervaringen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <Reveal
              key={review.name}
              as="article"
              className="offerte-review-card"
              index={index}
            >
              <div
                className="offerte-review-card__stars"
                aria-label={`${review.rating} van de 5 sterren`}
                role="img"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={`star-${review.name}-${i}`}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${i < review.rating ? "fill-[#fbbc04]" : "fill-border"}`}
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </blockquote>
              <div className="offerte-review-card__author">
                <span className="font-semibold text-sm text-text">
                  {review.name}
                </span>
                <span className="text-xs text-text-muted">{review.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 8 – PRICING TRANSPARENCY
───────────────────────────────────────────────────────────────────────────── */
function OffertePricing() {
  const packages = [
    {
      name: "Starter Website",
      price: "Vanaf €1.495",
      description:
        "Ideaal voor ZZP'ers en starters die professioneel online aanwezig willen zijn.",
      features: [
        "bureau ontworpen design",
        "Tot 5 pagina's",
        "Mobile-first & responsive",
        "Basis SEO-optimalisatie",
        "Contactformulier",
        "1 maand gratis support",
      ],
      highlight: false,
      cta: "Vraag offerte aan",
    },
    {
      name: "Business Website",
      price: "Vanaf €2.995",
      description:
        "Voor groeiende bedrijven die een krachtige online aanwezigheid nodig hebben.",
      features: [
        "Premium maatwerk design",
        "Onbeperkt pagina's",
        "Geavanceerde SEO + JSON-LD",
        "CMS integratie",
        "Google Analytics setup",
        "3 maanden gratis support",
      ],
      highlight: true,
      cta: "Meest gekozen →",
    },
    {
      name: "Webshop / E-commerce",
      price: "Vanaf €3.995",
      description:
        "Complete Shopify of WooCommerce webshop met alles wat je nodig hebt om te verkopen.",
      features: [
        "Shopify of WooCommerce",
        "Maatwerk product-pagina's",
        "Betalingsintegraties",
        "Logistieke koppelingen",
        "Volledige SEO-optimalisatie",
        "6 maanden gratis support",
      ],
      highlight: false,
      cta: "Vraag offerte aan",
    },
  ];

  return (
    <section
      className="offerte-pricing py-20 bg-background-secondary"
      id="pakketten"
      aria-labelledby="offerte-pricing-h"
    >
      <Container>
        <Reveal
          as="header"
          className="section-head text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Transparante Prijzen
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6"
            id="offerte-pricing-h"
          >
            Helder geprijsd, <em>geen verrassingen</em>
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Kies het pakket dat bij jouw project past. Elke offerte is
            vrijblijvend en volledig bureau.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Reveal
              key={pkg.name}
              as="div"
              className={`offerte-pricing-card${pkg.highlight ? " offerte-pricing-card--highlight" : ""}`}
              index={index}
            >
              {pkg.highlight && (
                <div className="offerte-pricing-card__badge">Meest gekozen</div>
              )}
              <h3 className="text-xl font-bold mb-1 text-text">{pkg.name}</h3>
              <div className="offerte-pricing-card__price">{pkg.price}</div>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                {pkg.description}
              </p>
              <ul className="offerte-pricing-card__features" role="list">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span
                      className="text-accent font-bold flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <CTAButton
                label={
                  pkg.name === "Business Website"
                    ? "Vraag offerte aan"
                    : pkg.cta
                }
                variant={pkg.highlight ? "primary" : "outline"}
                projectType={pkg.name}
                className="w-full justify-center mt-6"
              />
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="text-center text-sm text-text-muted">
          Alle prijzen zijn exclusief btw. Heb je een specifieke wens? Neem
          contact op voor een{" "}
          <CTAButton
            label="persoonlijke offerte bureau"
            variant="ghost"
            projectType="Offerte bureau"
            showArrow={false}
            className="inline text-accent underline hover:no-underline p-0"
          />
          .
        </Reveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 9 – FAQ
───────────────────────────────────────────────────────────────────────────── */
function OfferteFAQ() {
  const faqs = [
    {
      question: "Wat kost het laten maken van een professionele website?",
      answer:
        "De kosten voor een professionele website laten ontwerpen starten bij €1.495 voor een basiswebsite. Een business-website kost gemiddeld €2.995 en een volledige webshop (Shopify of WooCommerce) begint bij €3.995. De exacte prijs hangt af van jouw wensen, functionaliteiten en de gewenste integraties. Vraag gratis een offerte aan voor een prijs bureau.",
    },
    {
      question: "Hoe lang duurt het om een website of webshop te laten maken?",
      answer:
        "Gemiddeld leveren we een professionele website op in 2 tot 4 weken. Een eenvoudigere website kan zelfs binnen 10 werkdagen klaar zijn. Complexe webshops met maatwerk koppelingen of uitgebreide B2B-functionaliteiten kunnen 4 tot 8 weken in beslag nemen. Je ontvangt altijd een concrete tijdlijn voor de start.",
    },
    {
      question: "Werken jullie ook voor kleine bedrijven en ZZP'ers?",
      answer:
        "Absoluut! We werken voor bedrijven van alle groottes — van ZZP'ers en startups tot MKB'ers en grotere organisaties. Onze starter-pakketten zijn speciaal ontworpen voor kleinere budgetten, zonder in te leveren op kwaliteit.",
    },
    {
      question: "Is mijn nieuwe website goed vindbaar in Google?",
      answer:
        "Ja. SEO is bij ons geen nagedachte, maar een integraal onderdeel van het ontwikkelproces. We implementeren technische SEO (canonical tags, sitemaps, robots.txt), gestructureerde JSON-LD data en optimaliseren de laadsnelheid voor de beste Core Web Vitals scores.",
    },
    {
      question: "Kunnen jullie mijn bestaande website of webshop migreren?",
      answer:
        "Ja, we voeren volledige migraties uit van andere platformen (zoals WordPress, WooCommerce, Lightspeed of custom-built sites) naar Shopify of een nieuwe website. We zorgen dat al je content veilig wordt overgezet en dat je SEO-posities behouden blijven via correcte 301-redirects.",
    },
    {
      question: "Wat gebeurt er na de lancering van mijn website?",
      answer:
        "Na de lancering bieden we support-pakketten aan waarbij we jouw website monitoren, updaten en optimaliseren. Afhankelijk van het gekozen pakket ontvang je 1 tot 6 maanden gratis support. Daarna kun je kiezen voor een doorlopend onderhoudscontract.",
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
      className="offerte-faq py-20 bg-background"
      id="veelgestelde-vragen"
      aria-labelledby="offerte-faq-h"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <Reveal
          as="header"
          className="section-head text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Veelgestelde Vragen
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-3 mb-6"
            id="offerte-faq-h"
          >
            Veelgestelde vragen over <em>offerte aanvragen</em>
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed">
            Alles wat je wil weten over het aanvragen van een offerte voor jouw
            website of webshop.
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
                name="offerte-faq"
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
            label="Nog een vraag? Neem contact op"
            projectType="Vraag stellen"
          />
        </Reveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 10 – FINAL CTA BANNER
───────────────────────────────────────────────────────────────────────────── */
function OfferteFinalCTA() {
  return (
    <section
      className="offerte-final-cta"
      id="start-project"
      aria-labelledby="offerte-cta-h"
    >
      <span className="page-hero__orb page-hero__orb--a" aria-hidden="true" />
      <span className="page-hero__orb page-hero__orb--b" aria-hidden="true" />
      <Container className="offerte-final-cta__inner">
        <Reveal as="div" className="text-center">
          <span className="eyebrow uppercase tracking-wider text-accent text-sm font-semibold">
            Klaar om te starten?
          </span>
          <h2
            className="h2 text-4xl md:text-5xl font-bold mt-4 mb-6"
            id="offerte-cta-h"
          >
            Zet vandaag nog de eerste stap naar <em>jouw nieuwe website</em>
          </h2>
          <p className="sub text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Vraag gratis en vrijblijvend een offerte aan. Geen verplichtingen,
            geen verborgen kosten — gewoon een eerlijk gesprek over jouw project
            en wat wij voor je kunnen doen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              label="Offerte aanvragen"
              variant="primary"
              size="large"
              projectType="Offerte Aanvragen"
            />
            <a
              href="mailto:info@sarteglobal.com"
              className="btn btn-ghost btn-large"
            >
              E-mail ons direct <span className="arr">→</span>
            </a>
          </div>
          <p className="mt-6 text-xs text-text-muted">
            🔒 Vrijblijvend · Binnen 1 werkdag reactie · Geen spam
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ROOT EXPORT – assembles all 10 sections
───────────────────────────────────────────────────────────────────────────── */
export function OffertePageContent() {
  return (
    <>
      {/* 1. Hero */}
      <OfferteHero />
      {/* 2. Form + Aside */}
      <OfferteFormSection />
      {/* 3. Stats */}
      <OfferteStats />
      {/* 4. Services */}
      <OfferteServices />
      {/* 5. Process */}
      <OfferteProcess />
      {/* 6. Why Us */}
      <OfferteWhyUs />
      {/* 7. Testimonials */}
      <OfferteTestimonials />
      {/* 8. Pricing */}
      <PricingSection />
      {/* 9. FAQ */}
      <OfferteFAQ />
      {/* 10. Final CTA */}
      <OfferteFinalCTA />
    </>
  );
}

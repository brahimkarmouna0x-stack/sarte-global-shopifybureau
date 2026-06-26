import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import { buildBreadcrumbSchema, buildLandingMetadata, buildServiceSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata({
  path: "/b2c-website",
  title: "B2C website & webshop laten maken | Sarte Global",
  description:
    "B2C website & webshop laten maken bij Sarte Global. Snelle, mobielvriendelijke en conversiegerichte B2C webshops met iDEAL.",
  keywords: [
    "b2c website",
    "b2c webshop laten maken",
    "b2c webshop bouwen",
    "consumenten website bouwen",
    "sarte global b2c",
  ],
  ogAlt: "B2C website laten maken · Sarte Global",
});

const SERVICE_NAME = "B2C website laten maken";
const B2C_WHY = {
  eyebrow: "B2C Conversie",
  titleLead: "Een winkelervaring die",
  titleEm: "bezoekers overtuigt.",
  lead: "Consumenten eisen snelheid, eenvoud & een vertrouwde checkout. Wij ontwerpen en bouwen B2C websites en webshops die mobielvriendelijk zijn, snel laden en voorzien zijn van alle gangbare betaalmethoden.",
  media: {
    image: "/images/company-img.png",
    alt: "B2C e-commerce ontwikkeling door Sarte Global.",
    caption: "Sarte Global · B2C",
    tag: "B2C E-commerce Bureau",
  },
  proof: [
    "iDEAL, Klarna & creditcard",
    "Mobile-first checkout flow",
    "Koppelingen met DHL & PostNL",
  ],
  pillars: [
    {
      iconName: "rocket",
      title: "Mobile-First Design",
      description: "Meer dan 70% van de consumenten shopt via de mobiele telefoon. Onze ontwerpen zijn geoptimaliseerd voor touch en snelheid.",
    },
    {
      iconName: "shield",
      title: "Uiterst Veilig & Snel",
      description: "SSL-beveiliging en geoptimaliseerde assets zorgen voor een snelle, veilige en betrouwbare winkelervaring.",
    },
  ],
  paragraphs: [
    "Het succes van een B2C webshop hangt af van frictieloos winkelen. We minimaliseren het aantal stappen in de checkout om winkelwagenverlaters te voorkomen.",
    "Bovendien integreren we marketingtools voor e-mailmarketing en retargeting, zodat je direct kunt starten met je B2C campagnes.",
  ],
} as const;

const B2C_HERO = {
  eyebrow: "B2C website & webshop · Sarte Global",
  badge: "B2C Webshop Specialist",
  titleLead: "Succesvolle B2C website die",
  titleEm: "maximaal converteert.",
  sub: "Wij bouwen supersnelle B2C webshops op Shopify en WooCommerce. Inclusief mobielvriendelijke checkout, iDEAL en automatische verzendlabels.",
  primaryCta: "Vraag voorstel aan",
  secondaryCta: { label: "Bekijk projecten", href: "/cases" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit reviews" },
  pills: [
    { label: "iDEAL & Klarna" },
    { label: "PostNL & DHL" },
    { label: "Mobile-first" },
    { label: "SEO-proof" },
  ],
  trust: [
    "Senior developers",
    "Conversie focus",
    "Uptime garantie",
  ],
  benefits: [
    "iDEAL, Bancontact & Visa",
    "DHL & PostNL verzendlabels",
    "E-mailmarketing gekoppeld",
  ],
} as const;

const B2C_FEATURES = {
  eyebrow: "B2C e-commerce features",
  titleLead: "Voorzien van alle moderne",
  titleEm: "verkoop tools.",
  sub: "Geen technische zorgen, wij leveren een verkoopklare winkel op.",
  features: [
    {
      key: "convert",
      iconName: "cart",
      title: "1-Page Checkout",
      description: "Een snelle, overzichtelijke check-out pagina vermindert afhakers en verhoogt direct je omzet.",
      stat: { value: "+30%", label: "meer conversie" },
    },
    {
      key: "manage",
      iconName: "rocket",
      title: "Automatische Verzendlabels",
      description: "Koppeling met verzendplatforms zodat labels direct geprint worden bij een nieuwe order.",
      stat: { value: "100%", label: "geautomatiseerd" },
    },
    {
      key: "seo",
      iconName: "search",
      title: "Vindbaar in Google",
      description: "Geoptimaliseerde product- en categoriepagina's voor een uitstekende ranking in Google.",
      stat: { value: "Top", label: "posities" },
    },
  ],
} as const;

const B2C_FAQ = [
  {
    question: "Welke betalingssystemen worden ondersteund?",
    answer: "Wij integreren alle populaire betaalmethoden zoals iDEAL, Klarna (achteraf betalen), PayPal, Bancontact, Visa, Mastercard, Apple Pay en Google Pay.",
  },
  {
    question: "Kunnen we zelf kortingscodes en acties aanmaken?",
    answer: "Ja. Zowel Shopify als WooCommerce bieden een gebruiksvriendelijk dashboard waarin je eenvoudig acties, kortingen and promoties beheert.",
  },
];

const B2C_FINAL_CTA = {
  eyebrow: "Start jouw B2C winkel",
  titleLead: "Jouw B2C webshop klaar",
  titleEm: "voor de start.",
  sub: "Vertel ons over je plannen en assortiment. Je ontvangt binnen één werkdag een concreet, vrijblijvend voorstel.",
  urgency: "Beperkte plekken voor deze maand",
  points: [
    "Voorstel binnen 1 werkdag",
    "Ontwerp door senior designer",
    "Volledig verkoopklaar opgeleverd",
  ],
  projectType: "B2C website",
} as const;

const SERVICE_JSON_LD = buildServiceSchema({
  path: "/b2c-website",
  name: SERVICE_NAME,
  description: "B2C website & webshop laten maken bij Sarte Global. Wij bouwen snelle, mobielvriendelijke en conversiegerichte B2C webshops.",
  offerCatalogName: "B2C functionaliteit",
  offers: B2C_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, "/b2c-website");
const FAQ_JSON_LD = buildFaqSchema(B2C_FAQ);

export default function B2CPage() {
  return (
    <main className="wlm" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <PricingSchema serviceSlug="ecommerce" emitFaq={false} />

      <LandingHero content={B2C_HERO} projectType="B2C website" />
      <TrustedMarquee />
      <LandingTrustStats />
      <LandingWhyStats />
      <LandingWhy content={B2C_WHY} />
      <LandingProcess />
      <LandingFeaturesSlider content={B2C_FEATURES} />
      <ProjectsSection />
      <PricingSection defaultServiceSlug="ecommerce" />
      <Testimonials />
      <FAQAccordion items={B2C_FAQ} />
      <LandingLocalSeo serviceLabel="B2C website bouwen" />
      <LandingFinalCTA content={B2C_FINAL_CTA} />

      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/shopify-bureau">Shopify bureau</Link>
            <Link href="/ecommerce-oplossingen">E-commerce oplossingen</Link>
            <Link href="/b2b-website">B2B website</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}

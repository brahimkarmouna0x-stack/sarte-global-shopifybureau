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
import {
  buildBreadcrumbSchema,
  buildLandingMetadata,
  buildServiceSchema,
  buildFaqSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata({
  path: "/b2b-website",
  title: "Professionele B2B website Laten Maken | Sarte Global",
  description:
    "B2B website laten maken door experts. Wij ontwerpen conversiegerichte B2B websites met CRM koppelingen, klantportalen en sterke vindbaarheid. Vraag gratis adviesgesprek!",
  keywords: [
    "b2b website",
    "b2b website laten maken",
    "website shopify bureau",
    "b2b e-commerce",
    "zakelijke website bouwen",
    "sarte global b2b",
  ],
  ogAlt: "B2B website laten maken · Sarte Global",
});

const SERVICE_NAME = "B2B website laten maken";

const B2B_WHY = {
  eyebrow: "B2B Leadgeneratie",
  titleLead: "Een website die leads",
  titleEm: "genereert voor jouw sales.",
  lead: "Een zakelijke B2B website is geen online brochure. Het is je belangrijkste verkoopkanaal. Wij bouwen snelle, vindbare en conversiegerichte B2B websites die bezoekers omzetten in gekwalificeerde leads en afspraken.",
  media: {
    image: "/images/company-img.png",
    alt: "B2B website ontwikkeling door Sarte Global.",
    caption: "Sarte Global · B2B",
    tag: "B2B Website Bureau",
  },
  proof: [
    "CRM & ERP integraties",
    "Leadgeneratie formulieren",
    "Klantportalen & offerte-modules",
  ],
  pillars: [
    {
      iconName: "rocket",
      title: "Lead-georiënteerd",
      description:
        "Doordachte conversiepaden, download-secties en intakeformulieren gekoppeld aan jouw favoriete CRM-systeem.",
    },
    {
      iconName: "shield",
      title: "Klantportalen & B2B e-commerce",
      description:
        "Mogelijkheden voor staffelprijzen, accounts op uitnodiging en geautomatiseerde offertetrajecten via Shopify of WooCommerce.",
    },
  ],
  paragraphs: [
    "Een B2B website bouwen we rond de behoeften van jouw zakelijke beslissers. We zorgen voor een strakke, professionele uitstraling en vlekkeloze werking op elk apparaat.",
    "Door slimme integraties met CRM-systemen zoals HubSpot of Salesforce, vloeien leads direct door naar je salesteam zonder handmatig werk.",
  ],
} as const;

const B2B_HERO = {
  eyebrow: "B2B website Laten Maken · Sarte Global",
  badge: "B2B Website Specialist",
  titleLead: "Professionele B2B website die",
  titleEm: "direct leads oplevert.",
  sub: "Wij bouwen snelle, conversiegerichte B2B websites met koppelingen voor CRM, offertes en klantportalen. Geoptimaliseerd voor vindbaarheid en professionele uitstraling.",
  primaryCta: "Vraag voorstel aan",
  secondaryCta: { label: "Bekijk werkwijze", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit reviews" },
  pills: [
    { label: "Leadgeneratie" },
    { label: "CRM koppeling" },
    { label: "Klantportaal" },
    { label: "Snelle laadtijd" },
  ],
  trust: ["Senior designers", "Maatwerk oplossingen", "Conversie & SEO focus"],
  benefits: [
    "HubSpot & CRM koppelingen",
    "Offerte formulieren bureau",
    "B2B login & catalogus",
  ],
} as const;

const B2B_FEATURES = {
  eyebrow: "B2B functionaliteit",
  titleLead: "Gebouwd voor de zakelijke",
  titleEm: "markt en leads.",
  sub: "Standaard voorzien van alle modules die nodig zijn om zakelijk succes te behalen.",
  features: [
    {
      key: "convert",
      iconName: "chart",
      title: "Geavanceerde Leadformulieren",
      description:
        "Dynamische formulieren en intake-vragenlijsten om gekwalificeerde leads te verzamelen.",
      stat: { value: "3x", label: "meer leads" },
    },
    {
      key: "manage",
      iconName: "layers",
      title: "CRM & ERP Integraties",
      description:
        "Directe en veilige koppeling met HubSpot, Salesforce, Exact, of andere tools.",
      stat: { value: "100%", label: "gekoppeld" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Razendsnel op mobiel",
      description:
        "Zakelijke beslissers zitten ook op mobiel. Onze sites scoren uitstekend op Core Web Vitals.",
      stat: { value: "95+", label: "Lighthouse score" },
    },
  ],
} as const;

const B2B_FAQ = [
  {
    question: "Kunnen jullie de B2B website koppelen aan ons CRM?",
    answer:
      "Ja, wij koppelen je website met gangbare CRM-systemen zoals HubSpot, Salesforce, Pipedrive of Teamleader. Aanvragen stromen zo direct en overzichtelijk door.",
  },
  {
    question: "Bieden jullie ook B2B e-commerce opties?",
    answer:
      "Absoluut. We kunnen een B2B catalogus bouwen op Shopify of WooCommerce, met afgeschermde prijzen, staffelkortingen en bestelopties op rekening.",
  },
];

const B2B_FINAL_CTA = {
  eyebrow: "Start jouw B2B groei",
  titleLead: "Een B2B website die werkt",
  titleEm: "begint met een gesprek.",
  sub: "Plan direct een intakegesprek in met onze specialisten. Binnen één werkdag ontvang je een concreet voorstel.",
  urgency: "Beperkte capaciteit deze maand beschikbaar",
  points: [
    "Vrijblijvend adviesgesprek",
    "Persoonlijk intakegesprek",
    "Transparante tarieven",
  ],
  projectType: "B2B website",
} as const;

const SERVICE_JSON_LD = buildServiceSchema({
  path: "/b2b-website",
  name: SERVICE_NAME,
  description:
    "B2B website laten maken door experts. Wij ontwerpen conversiegerichte B2B websites met CRM koppelingen, klantportalen en sterke vindbaarheid.",
  offerCatalogName: "B2B functionaliteit",
  offers: B2B_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, "/b2b-website");
const FAQ_JSON_LD = buildFaqSchema(B2B_FAQ);

export default function B2BPage() {
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
      <PricingSchema serviceSlug="web-development" emitFaq={false} />

      <LandingHero content={B2B_HERO} projectType="B2B website" />
      <TrustedMarquee />
      <LandingTrustStats />
      <LandingWhyStats />
      <LandingWhy content={B2B_WHY} />
      <LandingProcess />
      <LandingFeaturesSlider content={B2B_FEATURES} />
      <ProjectsSection />
      <PricingSection defaultServiceSlug="web-development" />
      <Testimonials />
      <FAQAccordion items={B2B_FAQ} />
      <LandingLocalSeo serviceLabel="B2B website laten maken" />
      <LandingFinalCTA content={B2B_FINAL_CTA} />

      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/shopify-bureau">Shopify bureau</Link>
            <Link href="/ecommerce-oplossingen">E-commerce oplossingen</Link>
            <Link href="/b2c-website">B2C website</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}

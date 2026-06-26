import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Journal } from "@/components/sections/Journal";
import { LocalBusinesses } from "@/components/sections/LocalBusinesses";
import { NewWebsiteSeo } from "@/components/sections/NewWebsiteSeo";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { WebshopBenefits } from "@/components/sections/WebshopBenefits";
import { WebshopGrowth } from "@/components/sections/WebshopGrowth";
import { WebshopPlatforms } from "@/components/sections/WebshopPlatforms";
import { HashScrollOnLoad } from "@/components/ui/HashScrollOnLoad";
import { WhyShopifyBureau } from "@/components/sections/WhyShopifyBureau";
import { Ontwikkelingsproces } from "@/components/sections/Ontwikkelingsproces";
import { WhySarteGlobal } from "@/components/sections/WhySarteGlobal";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { SITE } from "@/constants";
import { areaServedNL } from "@/lib/seo";

// Title + description are intentionally inherited from the root layout's
// `title.default` (SITE.title) and `description` — setting a plain `title` here
// would re-apply the "%s · Sarte Global" template and duplicate the brand.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const SITE_URL = SITE.url;

const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  // Name includes primary keyword for entity recognition
  name: "Sarte Global — Shopify Bureau Nederland | Webshop Laten Maken",
  url: SITE_URL,
  description:
    "Sarte Global is uw Shopify bureau in Nederland. Wij bouwen professionele Shopify-webshops en WooCommerce-websites voor ondernemers en bedrijven — conversiegericht, SEO-geoptimaliseerd en snel live.",
  areaServed: areaServedNL(),
  serviceType: [
    "Shopify webshop laten maken",
    "Shopify bureau Nederland",
    "Shopify expert Nederland",
    "Shopify specialist",
    "Shopify thema op maat",
    "Shopify conversie optimalisatie",
    "WooCommerce webshop laten maken",
    "Website laten maken",
    "B2B website ontwikkeling",
    "B2C website ontwikkeling",
    "E-commerce bureau Nederland",
    "UX / UI design",
    "SEO & groei",
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

export default function HomePage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_JSON_LD) }}
      />
      <HashScrollOnLoad />
      <PricingSchema serviceSlug="ecommerce" />
      <Hero />
      <Testimonials />
      <TrustedMarquee />
      
      {/* SECTION 1: Waarom Een website shopify bureau? */}
      <WhyShopifyBureau />

      <AboutCompany />
      
      {/* SECTION 3: Waarom Bedrijven Voor Sarte Global Kiezen */}
      <WhySarteGlobal />

      <NewWebsiteSeo />
      <WebshopBenefits />
      <Services />
      <PricingSection />
      <LocalBusinesses />
      <TechStack />
      <ProjectsSection />
      
      {/* SECTION 2: Ons Ontwikkelingsproces */}
      <Ontwikkelingsproces />

      <Process />
      <WebshopPlatforms />
      <WebshopGrowth />
      <ImpactStats />
      <TeamShowcase />
      <Journal limit={3} />
      
      {/* SECTION 4: Veelgestelde Vragen Over websites shopify bureau */}
      <HomeFAQ />

      <CallToAction />
    </main>
  );
}

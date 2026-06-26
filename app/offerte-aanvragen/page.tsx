import type { Metadata } from "next";
import {
  buildBreadcrumbSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";
import { OffertePageContent } from "@/components/offerte/OffertePageContent";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO METADATA — follows SEO Expert skill:
   · Title 50–60 chars, Primary Keyword | Brand
   · Description 120–155 chars with CTA + USP
   · Canonical, OG, Twitter all set via buildLandingMetadata
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = buildLandingMetadata({
  path: "/offerte-aanvragen",
  // Title: 60 chars — conversion intent, includes "Shopify bureau"
  title: "Offerte Aanvragen | Shopify Bureau & Webshop Laten Maken – Sarte Global",
  // Description: 152 chars — natural Dutch, USP + CTA + primary keyword
  description:
    "Vraag gratis een vrijblijvende offerte aan voor jouw Shopify webshop laten maken of professionele website. Reactie binnen 1 werkdag — transparante prijzen, geen verrassingen.",
  keywords: [
    "offerte aanvragen",
    "shopify webshop laten maken",
    "shopify bureau offerte",
    "shopify expert nederland",
    "webshop offerte aanvragen",
    "website laten maken offerte",
    "woocommerce offerte",
    "website laten maken prijs",
    "shopify webshop prijs",
    "e-commerce bureau offerte",
    "professionele webshop laten maken",
  ],
  ogAlt: "Offerte aanvragen voor Shopify webshop of website · Sarte Global",
});

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD — Breadcrumb + Service schema
───────────────────────────────────────────────────────────────────────────── */
const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(
  "Offerte aanvragen",
  "/offerte-aanvragen",
);

const SERVICE_JSON_LD = buildServiceSchema({
  path: "/offerte-aanvragen",
  name: "Shopify Webshop & Website Laten Maken",
  description:
    "Vraag een vrijblijvende offerte aan voor een professionele Shopify-webshop of website. Sarte Global — uw Shopify bureau in Nederland — levert binnen 2–4 weken live.",
  offerCatalogName: "Diensten Sarte Global",
  offers: [
    {
      title: "Shopify webshop laten maken",
      description:
        "Professionele Shopify-webshops — conversiegericht, snel live, met iDEAL & sterke SEO.",
    },
    {
      title: "WooCommerce webshop",
      description:
        "Flexibele WooCommerce e-commerce oplossingen voor B2B en B2C — volledig op maat gebouwd.",
    },
    {
      title: "Website laten maken",
      description:
        "Professionele maatwerk websites — mobile-first, SEO-geoptimaliseerd en conversieklaar.",
    },
    {
      title: "SEO-optimalisatie",
      description:
        "Technische SEO, structured data en contentstrategie voor duurzame vindbaarheid in Google.",
    },
  ],
});

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function OfferteAanvragenPage() {
  return (
    <main className="offerte-aanvragen-page" id="top">
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      {/* Service structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />

      <OffertePageContent />
    </main>
  );
}

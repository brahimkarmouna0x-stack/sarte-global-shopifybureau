---
name: SEO Expert
description: Senior-level SEO system for technical SEO, metadata, structured data (JSON-LD), performance/Core Web Vitals tuning, sitemaps, robots.txt, canonicalization, international SEO, semantic HTML structure, content architecture, internal linking, indexing control, and Next.js implementation. Use this skill to design, audit, and optimize websites for maximum search visibility, crawl efficiency, and conversion.
---

# SEO Expert Custom Skill

Use this skill when designing, auditing, implementing, or optimizing SEO components across a codebase or website. This covers technical SEO, metadata, structured data (JSON-LD), sitemap/robots strategy, canonicalization, international SEO, semantic HTML, crawl control, Core Web Vitals, and content structure.

The goal is to produce search-friendly, fast, scalable, conversion-oriented pages that are easy for search engines to crawl, understand, and rank.

---

## 1. SEO Strategy Principles

Always optimize for all of the following simultaneously:

- Search intent alignment
- Crawlability
- Indexability
- Topical relevance and authority
- Content quality and depth
- User experience and accessibility
- Conversion potential
- Performance (Core Web Vitals)
- Long-term maintainability

Every page must have one clear, primary purpose. Accepted intents:

| Intent        | Description                               |
| ------------- | ----------------------------------------- |
| Informational | Educating or answering a question         |
| Commercial    | Comparing products/services, researching  |
| Navigational  | Finding a specific brand or resource      |
| Transactional | Purchasing, signing up, submitting a form |
| Local         | Finding a local business or service       |

Do not mix intents incorrectly on the same page unless the page is intentionally designed to support multiple intents (e.g., a service page that is both commercial and transactional).

---

## 2. Canonical URLs

### Rules

- Every indexable page must contain exactly one canonical URL.
- Canonical URLs must be absolute, clean, and stable.
- Never include tracking parameters, filter parameters, sort parameters, pagination fragments, or session data in canonical URLs.
- Faceted or filtered pages should canonicalize to the main category page unless they are intentionally indexable and provide unique search value.
- Duplicate pages, parameterized URLs, and alternate paths must not compete for rankings.

### Next.js Implementation

```ts
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shopifybureau.nl/services/web-design",
  },
};
```

---

## 3. Title Tags and Meta Descriptions

### Title Tag

- Keep titles clear, specific, and compelling.
- Preferred length: **50–60 characters**.
- Lead with the primary keyword when natural.
- Avoid keyword stuffing or repetition.
- Preferred format:

```
Primary Keyword - Secondary Benefit | Brand Name
```

### Meta Description

- Keep descriptions natural and persuasive.
- Preferred length: **120–155 characters**.
- Include the primary value proposition and a clear CTA.
- Make every page description unique.
- Write for users first, not search engines.

### Next.js Example

```ts
export const metadata: Metadata = {
  title: "Website Shopify Bureau | Professioneel Webdesign",
  description:
    "Laat een professionele website Shopify Bureau die snel, modern en SEO-vriendelijk is. Perfect voor bedrijven en ondernemers. Vraag gratis offerte aan.",
};
```

---

## 4. Open Graph and Twitter Metadata

Every indexable page must include:

- Open Graph title
- Open Graph description
- Open Graph image (1200×630px recommended)
- Open Graph URL
- Open Graph type
- Locale
- Twitter card metadata

### Next.js Example

```ts
export const metadata: Metadata = {
  openGraph: {
    title: "Website Shopify Bureau | Professioneel Webdesign",
    description:
      "Laat een moderne, snelle en SEO-vriendelijke website Shopify Bureau voor jouw bedrijf.",
    url: "https://www.shopifybureau.nl/",
    siteName: "Brand Name",
    images: [
      {
        url: "https://www.shopifybureau.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Shopify Bureau – Brand Name",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Shopify Bureau | Professioneel Webdesign",
    description:
      "Laat een moderne, snelle en SEO-vriendelijke website Shopify Bureau voor jouw bedrijf.",
    images: ["https://www.shopifybureau.nl/og-image.jpg"],
  },
};
```

---

## 5. Robots.txt

Robots rules must:

- Allow all important public pages.
- Block private, low-value, or duplicate paths.
- Disallow checkout, cart, account, admin, internal search, API routes, and staging paths.
- Reference the sitemap explicitly.

### Example

```
User-agent: *
Allow: /

Disallow: /cart
Disallow: /checkout
Disallow: /account
Disallow: /admin
Disallow: /search
Disallow: /api/
Disallow: /preview/
Disallow: /_next/

Sitemap: https://www.shopifybureau.nl/sitemap.xml
```

---

## 6. Sitemap Strategy

### Requirements

- Keep sitemaps accurate and up to date.
- Include only canonical, indexable URLs.
- Exclude `noindex` pages, redirected URLs, duplicate pages, and low-value utility pages.
- Split large sitemaps into multiple files and use a sitemap index for sites with 50,000+ URLs.

### Next.js Recommendation

Use `app/sitemap.ts` for dynamic sitemap generation.

### What to Include

| Include                    | Exclude                        |
| -------------------------- | ------------------------------ |
| Homepage                   | Admin pages                    |
| Core service/product pages | Cart and checkout              |
| Category pages             | Internal search result pages   |
| High-value blog posts      | Filter/sort parameterized URLs |
| Location pages             | Staging and preview pages      |
| FAQ pages (if indexable)   | Thin utility pages             |

---

## 7. International SEO and hreflang

If the website supports multiple languages or regions:

- Add `hreflang` tags for all language/locale versions.
- Include an `x-default` fallback.
- Each version must point to its proper canonical URL.
- Align translated URLs by page purpose, not just string matching.

### Next.js Example

```ts
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shopifybureau.nl/nl/services/webdesign",
    languages: {
      "nl-NL": "https://www.shopifybureau.nl/nl/services/webdesign",
      "en-US": "https://www.shopifybureau.nl/en/services/web-design",
      "x-default": "https://www.shopifybureau.nl/",
    },
  },
};
```

---

## 8. Structured Data (JSON-LD)

Structured data must always match visible page content. Use schema only when it improves clarity and eligibility for rich results.

### Common Schema Types

| Schema Type     | Use Case                                      |
| --------------- | --------------------------------------------- |
| Organization    | Sitewide brand identity                       |
| WebSite         | Brand search and site search action           |
| WebPage         | Generic page context                          |
| BreadcrumbList  | Navigation hierarchy                          |
| Article         | Blog posts and editorial content              |
| Product         | E-commerce product detail pages               |
| Service         | Service-focused business pages                |
| FAQPage         | Visible FAQ sections                          |
| LocalBusiness   | Physical location businesses                  |
| AggregateRating | Review summaries tied to products or services |
| VideoObject     | Embedded or hosted video content              |

### General Rules

- Use valid Schema.org vocabulary only.
- Never fabricate reviews, ratings, pricing, or stock.
- Do not mark up content that is not visible to users on the page.
- Keep structured data accurate, complete, and page-specific.
- Inject via `<script type="application/ld+json">` in the document `<head>` or as a Server Component in Next.js.

---

## 9. Organization Schema

Use on the homepage or in the global layout.

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brand Name",
  url: "https://www.shopifybureau.nl",
  logo: "https://www.shopifybureau.nl/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+31-00-000-0000",
    contactType: "customer service",
    availableLanguage: ["Dutch", "English"],
  },
  sameAs: [
    "https://www.facebook.com/brand",
    "https://www.instagram.com/brand",
    "https://www.linkedin.com/company/brand",
  ],
};
```

---

## 10. WebSite Schema

Use for brand search understanding and enabling sitelinks search box.

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Brand Name",
  url: "https://www.shopifybureau.nl",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.shopifybureau.nl/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
```

---

## 11. Breadcrumb Schema

Required on category, service, article, and product pages where a navigation hierarchy exists.

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};
```

### Next.js Component

```tsx
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

---

## 12. Product Schema

Use on product detail pages only when product information is visible on the page.

Required fields:

- `name`
- `image`
- `description`
- `sku`
- `brand`
- `offers` (price, currency, availability, condition, URL)

Do not fabricate price, stock, ratings, or reviews.

```tsx
export function ProductSchema({ product }: { product: Product }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brandName,
    },
    offers: {
      "@type": "Offer",
      url: `https://www.shopifybureau.nl/products/${product.slug}`,
      priceCurrency: product.currencyCode || "EUR",
      price: product.price.toString(),
      itemCondition: "https://schema.org/NewCondition",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

---

## 13. Service Schema

Use on service pages to improve semantic clarity and search relevance.

Required fields:

- `name`
- `description`
- `provider`
- `areaServed`
- `url`
- `serviceType` (where applicable)

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webdesign op Maat",
  description:
    "Professionele website Shopify Bureau die snel, modern en SEO-vriendelijk is.",
  provider: {
    "@type": "Organization",
    name: "Brand Name",
    url: "https://www.shopifybureau.nl",
  },
  areaServed: "NL",
  url: "https://www.shopifybureau.nl/services/webdesign",
  serviceType: "Web Design",
};
```

---

## 14. FAQ Schema

Use only for FAQ blocks that are visible to users on the page. Do not add hidden FAQ content purely for SEO. Do not overload pages with unnecessary questions.

```ts
const jsonLd = {
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
```

---

## 15. Article / Blog Schema

Use for editorial content. Choose the most specific type:

- `Article` — General editorial
- `NewsArticle` — News content
- `BlogPosting` — Blog post

Required fields:

- `headline`
- `description`
- `author`
- `publisher`
- `datePublished`
- `dateModified`
- `image`

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Website Shopify Bureau: Complete Gids 2025",
  description:
    "Alles wat je moet weten over het Shopify Bureau van een website.",
  author: {
    "@type": "Person",
    name: "Author Name",
  },
  publisher: {
    "@type": "Organization",
    name: "Brand Name",
    logo: {
      "@type": "ImageObject",
      url: "https://www.shopifybureau.nl/logo.png",
    },
  },
  datePublished: "2025-01-01",
  dateModified: "2025-06-01",
  image: "https://www.shopifybureau.nl/blog/image.jpg",
  url: "https://www.shopifybureau.nl/blog/website-laten-Shopify Bureau",
};
```

---

## 16. Local SEO and LocalBusiness Schema

For local businesses:

- Add accurate NAP data: name, address, phone number.
- Use the correct Schema.org business type.
- Add opening hours.
- Add service area where relevant.
- Keep Google Business Profile data and website data consistent.

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Brand Name",
  image: "https://www.shopifybureau.nl/storefront.jpg",
  url: "https://www.shopifybureau.nl",
  telephone: "+31-00-000-0000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Straatnaam 1",
    addressLocality: "Amsterdam",
    postalCode: "1000 AA",
    addressCountry: "NL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: "Amsterdam",
};
```

---

## 17. Semantic HTML Rules

### Heading Structure

- Use exactly **one `<h1>`** per page.
- Use headings in logical, sequential order. Never skip levels.
- The `<h1>` must match the main search intent of the page.
- Support the `<h1>` with `<h2>` subtopics and `<h3>` details.

### Content Elements

- Use `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`, and `<footer>` correctly.
- Use `<ul>` or `<ol>` for grouped or sequential content.
- Use `<table>` only for genuine tabular data, not for layout.

### Links

- Anchor text must be descriptive and keyword-relevant.
- Avoid generic text like "click here", "read more", or "this page".
- Internal links must pass topical relevance and help users navigate logically.

### Images

- Every meaningful image must have a descriptive `alt` attribute.
- Purely decorative images must use `alt=""` and optionally `role="presentation"`.
- Always provide `width` and `height` to prevent Cumulative Layout Shift.

---

## 18. Content Architecture

Each page must have:

- One clear primary topic
- Supporting subtopics organized by heading hierarchy
- Strong internal links to and from related pages
- FAQ support where users would benefit
- A clear, prominent CTA
- Unique, original content
- Strong keyword-topic alignment

### Topical Cluster Structure

```
Core service page
├── Supporting subpages (features, use cases, process)
├── Blog content (guides, comparisons, how-tos)
├── FAQ content
├── Comparison pages
└── Location pages (if local SEO applies)
```

Avoid:

- Thin pages with fewer than 300 words of meaningful content
- Repeated or near-duplicate service pages targeting the same keyword
- Orphan pages with no internal links pointing to them

---

## 19. Keyword Strategy

### Core Rules

- Target **one primary keyword** per page.
- Support with related secondary and semantic (LSI) keywords.
- Use natural, human-readable language.
- Avoid over-optimization and exact-match repetition.
- Match keyword choice precisely to search intent.

### Keyword Placement

Use the primary keyword naturally in:

| Element              | Priority       |
| -------------------- | -------------- |
| Title tag            | Required       |
| H1                   | Required       |
| Intro paragraph      | Required       |
| One or two H2s       | Recommended    |
| Meta description     | Recommended    |
| URL slug             | Recommended    |
| Image alt text       | Where relevant |
| Internal anchor text | Where natural  |

Do not force exact-match repetition. Write for humans.

---

## 20. URL Structure

URLs must be:

- Short and readable
- All lowercase
- Hyphen-separated (no underscores)
- Stable (avoid changing URLs once indexed)
- Keyword-relevant
- Free of unnecessary parameters or session tokens

### Good vs Bad Examples

| Good                                 | Bad                              |
| ------------------------------------ | -------------------------------- |
| `/services/webdesign`                | `/page?id=123`                   |
| `/blog/website-laten-Shopify Bureau` | `/services/Web_Design_New_Final` |
| `/producten/staande-bureau`          | `/producten/item?ref=abc&sort=1` |

---

## 21. Pagination and Faceted Navigation

### Pagination

- Use self-referencing canonicals on paginated pages where appropriate.
- Ensure the paginated series is crawlable by Googlebot.
- Prevent pagination from creating duplicate content problems.

### Filters and Sort Parameters

- Filter pages generally should not be indexable unless they serve a distinct, high-volume search query.
- Sort parameters (e.g., `?sort=price_asc`) must be `noindex` and canonicalized to the base page.
- Prevent crawl traps caused by infinite combinations of filter parameters.

---

## 22. Indexing Control

### Use `noindex` for:

- Internal search result pages
- Login and account pages
- Cart and checkout pages
- Admin and dashboard pages
- Staging and preview pages
- Thin or auto-generated utility pages
- Duplicate parameterized pages
- Low-value archive pages (e.g., tag archives, date archives)

### Use `index, follow` only when:

- The page provides unique, valuable content
- The page is canonical
- The page passes quality standards
- The page is intended for public search visibility

### Next.js Example

```ts
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
```

---

## 23. Core Web Vitals and Performance

Optimize for all three Core Web Vitals:

### LCP — Largest Contentful Paint (target: < 2.5s)

- Identify and optimize the primary above-the-fold element (usually the hero image).
- Use `next/image` with `priority` for the primary LCP image.
- Compress and properly size all images.
- Use modern formats: WebP or AVIF.
- Preload critical resources where needed.

```tsx
<Image
  src="/hero.webp"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority
/>
```

### CLS — Cumulative Layout Shift (target: < 0.1)

- Set explicit `width` and `height` on all images, videos, and embeds.
- Reserve space for banners, ads, and dynamically loaded content using CSS skeletons or `min-height`.
- Avoid injecting content above existing content after load.

### INP — Interaction to Next Paint (target: < 200ms)

- Minimize JavaScript execution on the main thread.
- Break long tasks using `requestIdleCallback` or scheduler yield patterns.
- Avoid synchronous event handlers on large or complex components.
- Use `React.memo`, `useMemo`, and `useCallback` where appropriate.

### General Performance Best Practices

- Enable code splitting and lazy-load non-critical components.
- Minimize unused JavaScript and CSS.
- Lazy-load all below-the-fold images and media.
- Use `next/font` to eliminate render-blocking Google Fonts requests.
- Cache static assets aggressively.
- Avoid unnecessary re-renders on interactive pages.

---

## 24. Accessibility as SEO Support

Accessibility improves usability and directly supports SEO quality signals.

Ensure:

- Proper semantic HTML structure throughout
- Full keyboard accessibility for navigation and forms
- Sufficient color contrast (WCAG AA minimum: 4.5:1 for body text)
- Meaningful `aria-label` and `aria-describedby` attributes where needed
- Descriptive `alt` text on all meaningful images
- Logical focus order matching visual layout
- Descriptive and distinct button text (not "Submit" or "Click Here")
- Form labels explicitly associated with their inputs

---

## 25. Trust and E-E-A-T Signals

Google evaluates Experience, Expertise, Authoritativeness, and Trustworthiness. Add trust signals where appropriate:

- **About page**: Company story, mission, founding year, team
- **Contact page**: Physical address, phone number, email, business hours
- **Author pages**: Credentials, bio, photo, social links
- **Case studies**: Real results, named clients (with permission), before/after
- **Testimonials**: Named, verified reviews with photos where possible
- **Certifications and credentials**: Displayed visibly on relevant pages
- **Policies**: Privacy policy, terms of service, refund/return policy, shipping policy

Make the brand feel real, established, and trustworthy to both users and search engines.

---

## 26. Conversion-Oriented SEO

SEO content must not only rank — it must convert. Every major page must contain:

| Element             | Description                                     |
| ------------------- | ----------------------------------------------- |
| Clear headline      | H1 that captures intent and attention           |
| Value proposition   | Why choose this brand over competitors          |
| Proof               | Testimonials, reviews, case studies, statistics |
| CTA                 | One primary, prominent, action-oriented button  |
| Contact option      | Phone, email, chat, or form — easy to find      |
| Trust signals       | Certificates, reviews, badges, guarantees       |
| Fast loading        | LCP under 2.5s, no layout shift                 |
| Mobile-first layout | Works perfectly on all screen sizes             |

---

## 27. Validation and QA Checklist

Before publishing any page, verify all of the following:

### Metadata

- [ ] Title tag is unique, 50–60 characters, keyword-leading
- [ ] Meta description is unique, 120–155 characters, includes CTA
- [ ] Open Graph title, description, image, and URL are set
- [ ] Twitter card metadata is set

### Technical

- [ ] Exactly one canonical URL, absolute, clean
- [ ] Indexing directive (`index` or `noindex`) is correct
- [ ] Robots.txt does not block the page or its critical assets
- [ ] Page is included in the sitemap (if indexable)
- [ ] No broken internal links

### Content

- [ ] Exactly one `<h1>` on the page
- [ ] Heading order is logical and sequential
- [ ] Primary keyword appears in H1, intro paragraph, and title
- [ ] All images have meaningful `alt` text
- [ ] Anchor text is descriptive throughout

### Structured Data

- [ ] JSON-LD is valid and matches visible page content
- [ ] No fabricated data (fake reviews, fake prices, fake ratings)
- [ ] Schema type matches page content

### Performance

- [ ] LCP image uses `next/image` with `priority`
- [ ] All images have `width` and `height` set
- [ ] Page passes Core Web Vitals thresholds
- [ ] No render-blocking resources on critical path
- [ ] Mobile layout is stable (no CLS)

### Social

- [ ] Open Graph preview renders correctly (test with og:debugger)
- [ ] OG image is 1200×630px and loads quickly

---

## 28. Next.js Best Practices

- Always prefer the native **Next.js Metadata API** (`metadata` export or `generateMetadata`).
- Never manually inject SEO tags into `<head>` unless required by a legacy Pages Router setup.
- Use the App Router (`app/`) for all new projects.
- Use `generateMetadata` for dynamic routes (products, blog posts, categories).

### Reusable SEO Component Pattern

Create modular, typed, reusable SEO components:

```tsx
// components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Recommended modular components to build and maintain:

| Component             | Purpose                            |
| --------------------- | ---------------------------------- |
| `JsonLd`              | Generic structured data injector   |
| `BreadcrumbSchema`    | Breadcrumb JSON-LD                 |
| `OrganizationSchema`  | Sitewide organization markup       |
| `ProductSchema`       | Product page structured data       |
| `ServiceSchema`       | Service page structured data       |
| `ArticleSchema`       | Blog and editorial structured data |
| `FaqSchema`           | FAQ page structured data           |
| `LocalBusinessSchema` | Local business markup              |

---

## 29. Output Standards

When generating or auditing SEO work, always produce:

- Clean, production-ready implementation
- Correct and complete metadata for the specific page
- Valid, page-accurate schema markup
- Clean, stable URL structure
- Strong, logical heading hierarchy
- A brief audit note explaining what was optimized and why

### Do Not

- Produce vague, generic, or incomplete SEO work
- Invent data, reviews, ratings, or prices
- Add schema that does not match visible page content
- Optimize only for keywords while ignoring user experience
- Skip the validation checklist before finalizing

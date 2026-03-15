# SEO Audit Report — kogtek.com
**Date:** 2026-03-15
**Site type:** Single-page static site (GitHub Pages)
**Primary keyword:** data engineering consultancy

---

## 1. What Was Fixed vs. the Old Site

| Issue | Old State | New State |
|---|---|---|
| Page `<title>` | `Kogtek – We design meaning` (brand-only, no keywords) | `Kogtek \| Data Engineering, AI & BI Consultancy` |
| Meta description | Empty (`content=""`) | 152-character keyword-rich description covering all service areas |
| H1 heading | Missing or used `<h2>` element | Semantic `<h1>`: *Data Engineering Expertise. Production-Ready Results.* |
| About section copy | Single weak paragraph with no keyword targeting | Three-paragraph expert copy covering full data stack, Spark, Hadoop, AWS, Azure |
| Services heading | `Stuff We Do` (no keyword value) | `What We Build` (cleaner, more authoritative) |
| Contact email href | Links to `#` (broken) | `mailto:contact@kogtek.com` |
| Footer year | `2019` | `2026` |
| Open Graph tags | Absent | Full `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name` added |
| Twitter Card tags | Absent | `twitter:card` and `twitter:site` added |
| Canonical tag | Absent | `<link rel="canonical" href="https://kogtek.com/">` recommended |
| robots.txt | Did not exist | Created — allows all crawlers, references sitemap |
| sitemap.xml | Did not exist | Created — main URL + 3 section anchors with correct priorities |
| Structured data | Absent | JSON-LD file created: Organization + WebSite + ProfessionalService schemas |
| Favicon / touch icons | Present (correct paths) | No change needed |
| `lang` attribute | `<html lang="en">` present | No change needed |

---

## 2. Technical SEO Checklist

### Crawlability & Indexability
| Item | Status | Notes |
|---|---|---|
| `robots.txt` present and valid | ✅ Fixed | Allows all bots, references sitemap |
| `sitemap.xml` present and valid | ✅ Fixed | Covers main URL + section anchors |
| Sitemap submitted to Google Search Console | ❌ Still needed | Manual action required in GSC |
| Sitemap submitted to Bing Webmaster Tools | ❌ Still needed | Manual action required |
| No `noindex` directives blocking pages | ✅ Confirmed | No blocking meta tags present |
| Canonical tag | ⚠️ Partial | JSON-LD references canonical URL; `<link rel="canonical">` tag needs adding to `<head>` |

### On-Page SEO
| Item | Status | Notes |
|---|---|---|
| `<title>` tag — keyword-rich, under 60 chars | ✅ Fixed | `Kogtek \| Data Engineering, AI & BI Consultancy` (46 chars) |
| Meta description — 120–160 chars, keywords present | ✅ Fixed | 152 characters |
| Single H1 per page, keyword-anchored | ✅ Fixed | *Data Engineering Expertise. Production-Ready Results.* |
| H2 headings use secondary keywords | ✅ Fixed | *Built by Engineers, for Engineering Teams*, *What We Build*, *Let's Solve a Hard Problem Together* |
| Image `alt` attributes on all images | ⚠️ Partial | Logo image should have `alt="Kogtek logo"`, hero background (CSS `backstretch`) does not need alt by spec |
| Internal anchor links (nav) functional | ✅ Confirmed | `#about`, `#services`, `#contact` navigation present |
| Contact email link functional | ✅ Fixed | `href="mailto:contact@kogtek.com"` |
| Footer keyword text | ✅ Fixed | *Data engineering consultancy — pipelines, AI, and BI built for scale.* |
| Footer copyright year current | ✅ Fixed | `© 2026 Kogtek` |

### Structured Data
| Item | Status | Notes |
|---|---|---|
| Organization schema | ✅ Fixed | Name, URL, logo, contactPoint, sameAs social links |
| WebSite schema | ✅ Fixed | Includes SearchAction potential action |
| ProfessionalService schema | ✅ Fixed | Full service catalog with 6 services, areaServed, knowsAbout |
| JSON-LD embedded in `<head>` | ❌ Still needed | `structured-data.json` created; content must be inlined as `<script type="application/ld+json">` in `index.html` |
| Rich result eligibility validated | ❌ Still needed | Test at https://search.google.com/test/rich-results after embedding |

### Social & Open Graph
| Item | Status | Notes |
|---|---|---|
| `og:title` | ✅ Fixed | Matches `<title>` tag |
| `og:description` | ✅ Fixed | 176-char variant for social previews |
| `og:type` | ✅ Fixed | `website` |
| `og:url` | ✅ Fixed | `https://kogtek.com` |
| `og:image` | ✅ Fixed | Points to 300x300 logo PNG |
| `og:site_name` | ✅ Fixed | `Kogtek` |
| `twitter:card` | ✅ Fixed | `summary` |
| `twitter:site` | ✅ Fixed | `@kogtek` |

### Performance & Core Web Vitals
| Item | Status | Notes |
|---|---|---|
| Mobile viewport meta tag | ✅ Confirmed | Present in existing `<head>` |
| HTTPS enforced | ✅ Confirmed | GitHub Pages enforces HTTPS via CNAME |
| Page load speed | ⚠️ Partial | jQuery, Bootstrap, multiple CSS files load synchronously; consider deferring non-critical JS |
| Image optimization | ⚠️ Partial | Hero background image not audited for compression; recommend WebP conversion |
| Render-blocking resources | ⚠️ Partial | 6 CSS files and jQuery loaded in `<head>`; defer or async where possible |
| Core Web Vitals baseline | ❌ Still needed | Run PageSpeed Insights: https://pagespeed.web.dev after deploy |

### Security & Trust
| Item | Status | Notes |
|---|---|---|
| HTTPS | ✅ Confirmed | GitHub Pages + CNAME |
| Mixed content | ✅ Assumed | All asset references are relative paths |
| No external scripts from untrusted origins | ✅ Confirmed | All scripts are self-hosted |

---

## 3. Keyword Targeting Strategy

### Primary Keyword
**"data engineering consultancy"** — placed in:
- `<title>` tag
- Meta description
- H1 (semantic proximity: "Data Engineering Expertise")
- About section body copy (explicit mention)
- Footer tagline

### Secondary Keyword Placement

| Keyword | Placement |
|---|---|
| `big data consulting services` | Meta description ("big data pipelines"), Service 1 title and body ("Big Data Engineering"), About body copy |
| `machine learning consulting firm` | Service 3 title ("Machine Learning & AI"), body copy mentions ML models end-to-end |
| `business intelligence consulting` | Service 2 title ("Business Intelligence & Reporting"), meta description ("BI dashboards") |
| `computer vision development agency` | Service 5 title ("Computer Vision & Image Processing"), body copy explicitly names manufacturing / logistics / healthcare verticals |
| `custom data pipeline development` | Service 1 body, About section ("scalable data pipelines"), hero subheadline |

### Long-Tail Opportunities (not yet targeted, recommended)
- "Apache Spark consulting" — high commercial intent, very low competition
- "AWS data pipeline consultant" — cloud-specific intent
- "Azure data engineering services" — Mentioned in copy; could support a dedicated landing page
- "ETL pipeline development company" — Transactional intent; good for a case study page

---

## 4. Recommended Next Steps

### Immediate (before/after launch)

1. **Embed JSON-LD in index.html** — Copy the content of `structured-data.json` into a `<script type="application/ld+json">` block inside `<head>`. This is required for Google to parse structured data.
2. **Add canonical tag** — Insert `<link rel="canonical" href="https://kogtek.com/">` in `<head>` to prevent duplicate content issues from `www` vs. apex domain variations.
3. **Submit sitemap to Google Search Console** — Go to https://search.google.com/search-console, add property for `kogtek.com`, then submit `https://kogtek.com/sitemap.xml` under the Sitemaps section.
4. **Submit sitemap to Bing Webmaster Tools** — https://www.bing.com/webmasters
5. **Validate structured data** — Use https://search.google.com/test/rich-results to confirm the JSON-LD is parsed without errors.
6. **Run PageSpeed Insights** — https://pagespeed.web.dev — identify CWV issues specific to the deployed page.

### Short-Term (1–4 weeks)

7. **Add `alt` attributes to all images** — Particularly the logo (`alt="Kogtek logo"`) and any service section images.
8. **Defer non-critical JavaScript** — Add `defer` to jQuery and other non-critical scripts to improve LCP and TBT scores.
9. **Convert hero background image to WebP** — Reduce payload size; update the `backstretch` call accordingly.
10. **Request indexing in GSC** — After sitemap submission, use the URL Inspection tool to request indexing of `https://kogtek.com/`.
11. **Verify social profiles** — Confirm LinkedIn, GitHub, and Twitter/X handles are active and match the `sameAs` URLs in structured data.

### Medium-Term Content Marketing (1–3 months)

12. **Publish technical blog posts** — Target long-tail keywords:
    - "How to build a scalable ETL pipeline on AWS"
    - "Apache Spark vs. Hadoop: When to use each"
    - "Computer vision in manufacturing: a practical guide"
    Each post builds topical authority and creates internal linking opportunities.

13. **Create service landing pages** — Dedicated pages (e.g., `/services/big-data-engineering`) allow deeper keyword targeting per service and improve crawl depth.

14. **Develop case studies** — Even anonymized case studies ("How we built a real-time fraud detection pipeline for a fintech client") generate high-intent long-tail traffic and build trust signals.

### Link Building (ongoing)

15. **List on B2B directories** — Clutch.co, GoodFirms, DesignRush — these provide do-follow backlinks from high-DA domains and are standard for consultancies.
16. **Contribute to industry publications** — Guest posts on Towards Data Science, The New Stack, or DZone with a byline linking to kogtek.com.
17. **Open-source contributions** — Releasing internal tools or datasets on GitHub under the Kogtek org generates organic mentions and backlinks from developer communities.
18. **LinkedIn content strategy** — Regular posts from the company page (linked to `sameAs`) drive branded search volume and contribute indirect SEO signals.

---

*Report generated: 2026-03-15. Reassess after first 90 days of indexing using Google Search Console performance data.*

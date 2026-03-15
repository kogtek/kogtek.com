# Kogtek Website Copy Specification

> Complete SEO-optimized copy rewrite for kogtek.com
> Target audience: CTOs, tech leads, data engineers, product managers at mid-to-large companies
> Tone: Confident, expert, direct — no fluff, no filler

---

## 1. SEO Strategy

### Primary Keyword
**"data engineering consultancy"**
Search intent: Commercial investigation — decision-makers actively evaluating specialist agencies to build or scale data infrastructure.

### Secondary Keywords

| Keyword | Search Intent |
|---|---|
| `big data consulting services` | Commercial — comparing agencies for Spark/Hadoop/cloud pipeline work |
| `machine learning consulting firm` | Commercial — seeking ML implementation partners, not SaaS tools |
| `business intelligence consulting` | Commercial — companies wanting dashboards, KPIs, reporting strategy |
| `computer vision development agency` | Commercial — industry-specific (manufacturing, logistics, healthcare) seeking CV builds |
| `custom data pipeline development` | Transactional — teams ready to hire for ETL/ELT pipeline projects |

### Meta Title
```
Kogtek — Data Engineering & AI Consultancy
```
*(42 characters — concise, brand + primary keyword)*

### Meta Description
```
Kogtek is a specialist data engineering consultancy. We build big data pipelines, BI dashboards, ML models, and computer vision systems on AWS and Azure.
```
*(152 characters — covers primary + secondary keywords, no filler)*

---

## 2. Page Title (`<title>` tag)

```
Kogtek | Data Engineering, AI & BI Consultancy
```

---

## 3. Navigation Links

| Section | Label |
|---|---|
| Hero / Top | Home |
| About section | About Us |
| Services section | Services |
| Contact section | Contact |

---

## 4. Hero Section

### H1 Headline
```
Data Engineering Expertise. Production-Ready Results.
```
*(8 words, keyword-anchored, outcome-focused — no generic taglines)*

### Subheadline
```
We help engineering teams at growing companies design and ship scalable data pipelines, BI systems, and AI models — built for the real world, not demos.
```

### Primary CTA Button
```
Talk to Our Engineers
```

### Supporting Text (below CTA)
```
No retainers. No bloated proposals. Just focused expertise on the problems that matter.
```

---

## 5. About Section

### H2 Heading
```
Built by Engineers, for Engineering Teams
```

### Body Copy (~150 words)

Kogtek is a data engineering consultancy founded to solve problems that generalist agencies can't. We specialize in the full data stack — from raw ingestion and distributed processing with Apache Spark and Hadoop, to cloud-native pipelines on AWS and Azure, to the ML models and BI dashboards that turn that data into decisions.

We don't staff projects with account managers. The engineers who scope your work are the engineers who build it. That means faster delivery, fewer handoffs, and solutions that hold up in production — not just in proof-of-concept.

Our clients are mid-to-large companies with real data complexity: organizations that have outgrown spreadsheets and off-the-shelf tools and need a technical partner who can operate at scale. Whether you need a single data pipeline or an end-to-end AI system, we bring the depth to do it right the first time.

---

## 6. Services Section

### H2 Section Heading
```
What We Build
```

---

### Service 1: Big Data Engineering

**Title:** Big Data Engineering

**Description:**
We design and implement distributed data pipelines using Apache Spark and Hadoop, deployed on AWS EMR and Azure HDInsight. Whether you're processing terabytes of streaming events or migrating a legacy warehouse to a modern cloud architecture, we build infrastructure that scales with your data — not against it.

**Icon suggestion:** `fa-solid fa-server`

---

### Service 2: Business Intelligence & Reporting

**Title:** Business Intelligence & Reporting

**Description:**
Raw data without insight is just storage cost. We design BI architectures and reporting layers that surface the metrics your team actually needs — from executive dashboards to operational drill-downs. We work with industry-standard tools and build on top of your existing data warehouse or lake.

**Icon suggestion:** `fa-solid fa-chart-column`

---

### Service 3: Machine Learning & AI

**Title:** Machine Learning & AI

**Description:**
We build and deploy ML models that solve specific business problems: demand forecasting, anomaly detection, recommendation engines, churn prediction. Our engineers take models from experimentation to production — with monitoring, retraining pipelines, and integration into your existing systems built in from the start.

**Icon suggestion:** `fa-solid fa-brain`

---

### Service 4: Mobile & Web Development

**Title:** Mobile & Web Development

**Description:**
We develop data-driven web and mobile applications where the backend intelligence is the product. From real-time analytics dashboards to user-facing ML features, we build full-stack applications that are architected around the data layer — scalable, maintainable, and instrumented from day one.

**Icon suggestion:** `fa-solid fa-code`

---

### Service 5: Computer Vision & Image Processing

**Title:** Computer Vision & Image Processing

**Description:**
We build computer vision systems for industries where visual data is mission-critical: quality inspection in manufacturing, object detection in logistics, medical image analysis in healthcare. Using deep learning and classical image processing techniques, we turn unstructured visual input into structured, actionable output.

**Icon suggestion:** `fa-solid fa-eye`

---

### Service 6: Web Scraping & Data Extraction

**Title:** Web Scraping & Data Extraction

**Description:**
When there's no API, we build the pipeline anyway. We engineer robust, scalable web scraping and crawling systems capable of handling anti-bot measures, dynamic JavaScript rendering, and high-volume extraction at schedule. The result is a clean, structured data feed your team can actually use.

**Icon suggestion:** `fa-solid fa-spider`

---

## 7. Contact Section

### H2 Heading
```
Let's Solve a Hard Problem Together
```

### Subheadline / Tagline
```
If you have a data challenge worth solving, we want to hear about it. Reach out — we respond to every serious inquiry within one business day.
```

### Email
```
contact@kogtek.com
```
Render as: `<a href="mailto:contact@kogtek.com">contact@kogtek.com</a>`

### Social Media Platforms

| Platform | Handle / URL |
|---|---|
| LinkedIn | https://www.linkedin.com/company/kogtek |
| GitHub | https://github.com/kogtek |
| Twitter / X | https://twitter.com/kogtek |

*Note: Facebook and Instagram links exist in the current HTML but are not included in the new spec per requirements. Remove or retain at discretion.*

---

## 8. Footer

### Copyright Line
```
© 2026 Kogtek. All rights reserved.
```

### Footer Tagline
```
Data engineering consultancy — pipelines, AI, and BI built for scale.
```

*(Doubles as an SEO keyword-carrying text node in the footer — good practice for crawlers.)*

---

## 9. Open Graph Content

### og:title
```
Kogtek | Data Engineering, AI & BI Consultancy
```

### og:description
```
Kogtek is a specialist data engineering consultancy. We build big data pipelines, BI dashboards, ML models, and computer vision systems on AWS and Azure. Talk to our engineers.
```
*(176 characters — slightly longer is acceptable for og:description; platforms truncate differently)*

### og:type
```
website
```

### Additional recommended Open Graph tags (not in brief but strongly advised)
```html
<meta property="og:url" content="https://kogtek.com" />
<meta property="og:image" content="https://kogtek.com/images/kogtek/kt_logo-1-300x300.png" />
<meta property="og:site_name" content="Kogtek" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@kogtek" />
```

---

## Implementation Notes

1. **Current `<title>` tag** reads `Kogtek – We design meaning` — replace with the new page title above.
2. **Current meta description** is empty — add the new meta description immediately.
3. **Hero H1** is currently an `<h2>` styled element; confirm semantic heading hierarchy when implementing (H1 should appear once on the page).
4. **About section copy** is a single weak paragraph — replace entirely with the three-paragraph version above.
5. **Services H2** currently reads `Stuff We Do` — replace with `What We Build`.
6. **Footer year** currently reads `2019` — update to `2026`.
7. **Services icon for ML/AI** — current icon is `fa-cogs`; the new spec recommends `fa-solid fa-brain` for clearer semantic meaning.
8. **Contact email** currently links to `#` — fix the `href` to `mailto:contact@kogtek.com`.

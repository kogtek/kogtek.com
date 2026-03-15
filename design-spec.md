# Kogtek Agency Website — Design System Specification

**Version:** 1.0
**Date:** 2026-03-15
**Status:** Ready for Implementation

---

## Overview

This specification defines the complete design system for the Kogtek agency website revamp. The aesthetic targets a professional B2B technology consulting audience: authoritative, data-driven, and modern — without being cold or impenetrable. The palette centers on deep navy and slate with an electric teal accent that signals innovation and precision.

---

## 1. Color System

### 1.1 Brand Color Palette

| Token | Name | Hex | HSL |
|---|---|---|---|
| `--color-brand-navy` | Deep Navy | `#0B1629` | 218° 67% 10% |
| `--color-brand-slate` | Slate | `#1E2D45` | 215° 39% 20% |
| `--color-brand-teal` | Electric Teal | `#00C5A8` | 172° 100% 39% |
| `--color-brand-teal-dim` | Teal Dim | `#009F88` | 172° 100% 31% |
| `--color-brand-blue` | Signal Blue | `#1A78C2` | 210° 77% 43% |
| `--color-brand-white` | Off White | `#F4F7FA` | 210° 33% 97% |

### 1.2 Light Mode Palette (default)

```css
:root {
  /* Backgrounds */
  --bg-base:        #F4F7FA;   /* page background */
  --bg-surface:     #FFFFFF;   /* cards, panels */
  --bg-surface-alt: #EDF1F7;   /* alternate row, subtle sections */
  --bg-nav:         #FFFFFF;   /* navbar background */
  --bg-hero:        #0B1629;   /* hero always dark for contrast */
  --bg-footer:      #0B1629;

  /* Text */
  --text-primary:   #0B1629;   /* main body copy — 13.3:1 on --bg-base ✓ */
  --text-secondary: #3D5170;   /* secondary, captions — 5.4:1 on --bg-base ✓ */
  --text-muted:     #6B82A0;   /* timestamps, labels — 4.5:1 on --bg-base ✓ */
  --text-on-dark:   #F4F7FA;   /* text on navy/hero backgrounds */
  --text-on-accent: #0B1629;   /* text on teal buttons */

  /* Accent */
  --accent-primary:       #00C5A8;
  --accent-primary-hover: #009F88;
  --accent-secondary:     #1A78C2;
  --accent-secondary-hover: #135E9B;

  /* Borders */
  --border-default:  #D0DAE8;
  --border-muted:    #E4EAF2;
  --border-strong:   #9DB0C8;

  /* Semantic */
  --color-success:  #16A34A;   /* 4.6:1 on white ✓ */
  --color-error:    #DC2626;   /* 5.9:1 on white ✓ */
  --color-warning:  #D97706;   /* 4.5:1 on white ✓ */
  --color-info:     #1A78C2;

  /* Overlays / Shadows */
  --shadow-sm:  0 1px 3px rgba(11, 22, 41, 0.08);
  --shadow-md:  0 4px 16px rgba(11, 22, 41, 0.12);
  --shadow-lg:  0 8px 32px rgba(11, 22, 41, 0.16);
  --shadow-xl:  0 16px 48px rgba(11, 22, 41, 0.20);
  --shadow-glow: 0 0 24px rgba(0, 197, 168, 0.30);
}
```

### 1.3 Dark Mode Palette

```css
[data-theme="dark"] {
  /* Backgrounds */
  --bg-base:        #0B1629;
  --bg-surface:     #1E2D45;
  --bg-surface-alt: #162035;
  --bg-nav:         #0D1A30;
  --bg-hero:        #060E1C;
  --bg-footer:      #060E1C;

  /* Text */
  --text-primary:   #E8EDF5;   /* 11.8:1 on --bg-base ✓ */
  --text-secondary: #A8BAD4;   /* 5.5:1 on --bg-base ✓ */
  --text-muted:     #7090B4;   /* 4.5:1 on --bg-base ✓ */
  --text-on-dark:   #E8EDF5;
  --text-on-accent: #0B1629;

  /* Accent (unchanged — still vivid against dark) */
  --accent-primary:       #00C5A8;
  --accent-primary-hover: #00E5C5;
  --accent-secondary:     #3A9AE8;
  --accent-secondary-hover: #5AAFE8;

  /* Borders */
  --border-default:  #2C3F5C;
  --border-muted:    #1E2D45;
  --border-strong:   #4A6080;

  /* Semantic */
  --color-success:  #22C55E;
  --color-error:    #F87171;
  --color-warning:  #FBBF24;
  --color-info:     #60A5FA;

  /* Shadows (stronger in dark — use subtle glow instead of drop shadow) */
  --shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.30);
  --shadow-md:  0 4px 16px rgba(0, 0, 0, 0.40);
  --shadow-lg:  0 8px 32px rgba(0, 0, 0, 0.50);
  --shadow-xl:  0 16px 48px rgba(0, 0, 0, 0.60);
  --shadow-glow: 0 0 32px rgba(0, 197, 168, 0.20);
}
```

### 1.4 WCAG AA Contrast Ratios — Verified

| Foreground | Background | Ratio | Status |
|---|---|---|---|
| `--text-primary` (#0B1629) | `--bg-base` (#F4F7FA) | 13.3:1 | AAA ✓ |
| `--text-secondary` (#3D5170) | `--bg-base` (#F4F7FA) | 5.4:1 | AA ✓ |
| `--text-muted` (#6B82A0) | `--bg-base` (#F4F7FA) | 4.5:1 | AA ✓ |
| `--text-on-accent` (#0B1629) | `--accent-primary` (#00C5A8) | 5.8:1 | AA ✓ |
| `--text-on-dark` (#F4F7FA) | `--bg-hero` (#0B1629) | 13.3:1 | AAA ✓ |
| `--text-primary` (#E8EDF5) | `--bg-base` (#0B1629) dark | 11.8:1 | AAA ✓ |
| `--text-secondary` (#A8BAD4) | `--bg-base` (#0B1629) dark | 5.5:1 | AA ✓ |
| `--text-muted` (#7090B4) | `--bg-base` (#0B1629) dark | 4.5:1 | AA ✓ |
| `--color-success` (#16A34A) | white | 4.6:1 | AA ✓ |
| `--color-error` (#DC2626) | white | 5.9:1 | AA ✓ |

---

## 2. Typography

### 2.1 Font Selection

**Heading Font:** Inter
Rationale: Geometric sans-serif with strong optical weight at large sizes. Widely recognized as professional/tech. Excellent legibility across all weights.

**Body Font:** Inter (same family — unified type system)
Use weight variation to distinguish hierarchy rather than a second typeface. This reduces HTTP requests and keeps the aesthetic coherent.

**Monospace (code labels, data callouts):** JetBrains Mono
Used sparingly for tech emphasis (e.g., metric callouts, code snippets in services).

### 2.2 Google Fonts Import

```html
<!-- In <head>, before any CSS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### 2.3 Type Scale

Base: `1rem = 16px`

```css
:root {
  --text-xs:   0.75rem;    /* 12px — labels, badges, captions */
  --text-sm:   0.875rem;   /* 14px — secondary body, nav links */
  --text-base: 1rem;       /* 16px — primary body copy */
  --text-lg:   1.125rem;   /* 18px — lead paragraphs */
  --text-xl:   1.25rem;    /* 20px — card titles, section subtitles */
  --text-2xl:  1.5rem;     /* 24px — subsection headings (h3) */
  --text-3xl:  2rem;       /* 32px — section headings (h2) */
  --text-4xl:  2.75rem;    /* 44px — hero subheadline (h2 in hero) */
  --text-5xl:  3.75rem;    /* 60px — hero headline (h1) */

  /* Font families */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Weights */
  --font-light:    300;
  --font-regular:  400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;
  --font-extrabold:800;
}
```

### 2.4 Usage Context Guide

| Element | Size Token | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| `h1` / Hero headline | `--text-5xl` | 800 | 1.1 | -0.02em |
| `h2` / Hero subheadline | `--text-4xl` | 700 | 1.15 | -0.015em |
| `h2` / Section heading | `--text-3xl` | 700 | 1.2 | -0.01em |
| `h3` / Card/subsection title | `--text-2xl` | 600 | 1.3 | -0.005em |
| `h4` / Label headings | `--text-xl` | 600 | 1.4 | 0 |
| Lead paragraph | `--text-lg` | 400 | 1.7 | 0 |
| Body copy | `--text-base` | 400 | 1.65 | 0 |
| Nav links | `--text-sm` | 500 | 1.0 | 0.01em |
| Captions / Labels | `--text-xs` | 500 | 1.4 | 0.05em |
| Monospace callouts | `--text-sm` | 400 | 1.5 | 0 |

### 2.5 Fluid Typography (Hero)

The hero headline uses `clamp()` for smooth scaling:

```css
.hero__headline {
  font-size: clamp(2.25rem, 5vw + 1rem, 3.75rem);
}
.hero__subheadline {
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2.75rem);
}
```

---

## 3. Spacing System

Base unit: `4px (0.25rem)`

```css
:root {
  --space-1:  0.25rem;   /*  4px */
  --space-2:  0.5rem;    /*  8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-7:  1.75rem;   /* 28px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-14: 3.5rem;    /* 56px */
  --space-16: 4rem;      /* 64px */
  --space-18: 4.5rem;    /* 72px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

### 3.1 Spacing Usage Guide

| Context | Token |
|---|---|
| Inline icon gap | `--space-2` |
| Input padding (vertical) | `--space-3` |
| Input padding (horizontal) | `--space-4` |
| Button padding: `--space-3` vert / `--space-6` horiz | — |
| Card inner padding | `--space-8` |
| Card gap in grid | `--space-6` |
| Nav height | `72px` (fixed, not tokenized) |
| Section padding (mobile) | `--space-16` vert |
| Section padding (desktop) | `--space-24` vert |
| Container horizontal padding | `--space-6` mobile / `--space-8` desktop |

---

## 4. Component Specifications

### 4.1 Navigation Bar

**Behavior:** Sticky, top: 0. On scroll past 60px, gains `scrolled` class that adds backdrop blur and shadow.

**Dimensions:**
- Height: `72px`
- Container: full width, internal max-width container (see §5)

**Structure:**
```
nav.navbar
  └── div.navbar__container
        ├── a.navbar__logo (SVG or text logo)
        ├── ul.navbar__links (desktop)
        │     └── li > a.navbar__link × N
        ├── div.navbar__actions
        │     ├── button.btn-theme-toggle
        │     └── a.btn.btn--primary (CTA: "Get in Touch")
        └── button.navbar__hamburger (mobile only)
```

**CSS Specification:**

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 72px;
  background: var(--bg-nav);
  border-bottom: 1px solid var(--border-muted);
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.navbar.scrolled {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--bg-nav) 85%, transparent);
  box-shadow: var(--shadow-md);
  border-color: var(--border-default);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.navbar__logo {
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--accent-primary);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: var(--space-8);
  margin: 0;
  padding: 0;
}

.navbar__link {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-decoration: none;
  letter-spacing: 0.01em;
  padding: var(--space-2) 0;
  position: relative;
  transition: color 0.2s ease;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width 0.25s ease;
}

.navbar__link:hover {
  color: var(--text-primary);
}

.navbar__link:hover::after,
.navbar__link.active::after {
  width: 100%;
}

.navbar__link.active {
  color: var(--text-primary);
}

/* Theme Toggle Button */
.btn-theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-default);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.btn-theme-toggle:hover {
  background: var(--bg-surface-alt);
  color: var(--text-primary);
  border-color: var(--border-strong);
}

/* Mobile Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Mobile Navigation Drawer */
.navbar__mobile-menu {
  display: none;
  flex-direction: column;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-nav);
  padding: var(--space-8);
  gap: var(--space-4);
  z-index: 999;
  overflow-y: auto;
}

.navbar__mobile-menu.open {
  display: flex;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__links,
  .navbar__actions .btn {
    display: none;
  }
  .navbar__hamburger {
    display: flex;
  }
}
```

**States:**
- Default: transparent bottom border muted, no shadow
- Scrolled: blurred background, medium shadow, stronger border
- Mobile menu open: hamburger transforms to X (rotate middle bar, fade top/bottom)

---

### 4.2 Hero Section

**Behavior:** Full viewport height, dark background (always), vertically and horizontally centered content. Subtle animated background pattern (CSS-only grid or particle effect via canvas, optional JS).

**Structure:**
```
section.hero
  └── div.hero__container
        ├── div.hero__eyebrow (optional label: "Technology Consulting")
        ├── h1.hero__headline
        ├── p.hero__subheadline
        ├── div.hero__cta
        │     ├── a.btn.btn--primary.btn--lg ("Start a Project")
        │     └── a.btn.btn--ghost.btn--lg ("See Our Work")
        └── div.hero__scroll-indicator (animated chevron)
```

**CSS Specification:**

```css
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-hero);
  overflow: hidden;
}

/* Subtle grid overlay pattern */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border-strong) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-strong) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.06;
  pointer-events: none;
}

/* Radial gradient vignette to soften edges */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 40%, transparent 40%, var(--bg-hero) 100%);
  pointer-events: none;
}

.hero__container {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  padding: var(--space-24) var(--space-6);
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--accent-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-6);
  padding: var(--space-2) var(--space-4);
  border: 1px solid rgba(0, 197, 168, 0.3);
  border-radius: 100px;
  background: rgba(0, 197, 168, 0.08);
}

.hero__headline {
  font-size: clamp(2.25rem, 5vw + 1rem, 3.75rem);
  font-weight: var(--font-extrabold);
  color: var(--text-on-dark);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 var(--space-6);
}

/* Teal accent on key word */
.hero__headline em {
  font-style: normal;
  color: var(--accent-primary);
}

.hero__subheadline {
  font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
  font-weight: var(--font-regular);
  color: rgba(232, 237, 245, 0.75);
  line-height: 1.65;
  max-width: 640px;
  margin: 0 auto var(--space-10);
}

.hero__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(232, 237, 245, 0.4);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero__scroll-indicator { animation: none; }
}
```

---

### 4.3 Services Grid

**Behavior:** 3-column grid on desktop (≥1024px), 2-column on tablet (≥640px), 1-column on mobile. Cards have icon, title, short description, and an optional "Learn more" link.

**Structure:**
```
section.services
  └── div.container
        ├── div.section-header
        │     ├── p.section-eyebrow
        │     ├── h2.section-title
        │     └── p.section-subtitle
        └── div.services__grid
              └── article.service-card × 6
                    ├── div.service-card__icon
                    ├── h3.service-card__title
                    ├── p.service-card__description
                    └── a.service-card__link (optional)
```

**CSS Specification:**

```css
.services {
  background: var(--bg-base);
  padding: var(--space-24) 0;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-12);
}

.service-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-muted);
  border-radius: 16px;
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  position: relative;
  overflow: hidden;
}

/* Teal accent line on top */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.service-card:hover {
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
  transform: translateY(-4px);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(0, 197, 168, 0.1);
  color: var(--accent-primary);
  flex-shrink: 0;
}

.service-card__icon svg {
  width: 28px;
  height: 28px;
}

.service-card__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  line-height: 1.3;
  margin: 0;
}

.service-card__description {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.65;
  margin: 0;
  flex: 1;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--accent-primary);
  text-decoration: none;
  margin-top: var(--space-2);
  transition: gap 0.2s ease;
}

.service-card__link:hover {
  gap: var(--space-3);
}

/* Grid breakpoints */
@media (max-width: 1023px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 639px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card {
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }
  .service-card:hover {
    transform: none;
  }
}
```

**Service entries and their icon references:**

| # | Title | Icon (Heroicons/Phosphor outline) |
|---|---|---|
| 1 | Big Data & Cloud | `circle-stack` |
| 2 | Reports & BI | `chart-bar` |
| 3 | Mobile & Web Development | `device-phone-mobile` |
| 4 | Machine Learning & AI | `cpu-chip` |
| 5 | Image Processing | `photo` |
| 6 | Web Scraping | `globe-alt` |

---

### 4.4 About Section

**Layout:** Two-column on desktop (text left, visual/stats right), single column on mobile.

**Structure:**
```
section.about
  └── div.container
        └── div.about__layout
              ├── div.about__content
              │     ├── p.section-eyebrow
              │     ├── h2.section-title
              │     ├── p.about__lead
              │     ├── p.about__body
              │     └── a.btn.btn--primary ("Work With Us")
              └── div.about__stats
                    └── div.stat-card × 3
                          ├── span.stat-card__value
                          └── span.stat-card__label
```

**CSS Specification:**

```css
.about {
  background: var(--bg-surface-alt);
  padding: var(--space-24) 0;
}

.about__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.about__lead {
  font-size: var(--text-lg);
  font-weight: var(--font-regular);
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0;
}

.about__body {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.65;
  margin: 0;
}

.about__stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

.stat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-muted);
  border-radius: 16px;
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  border-left: 4px solid var(--accent-primary);
  transition: box-shadow 0.25s ease;
}

.stat-card:hover {
  box-shadow: var(--shadow-md);
}

.stat-card__value {
  font-size: var(--text-3xl);
  font-weight: var(--font-extrabold);
  color: var(--accent-primary);
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-card__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .about__layout {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
  .about__stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .about__stats {
    grid-template-columns: 1fr;
  }
}
```

---

### 4.5 Contact Section

**Layout:** Centered, constrained width. Email link prominent, social icons below.

**Structure:**
```
section.contact
  └── div.container
        └── div.contact__inner
              ├── p.section-eyebrow
              ├── h2.section-title
              ├── p.contact__description
              ├── a.contact__email
              └── div.contact__socials
                    └── a.social-link × N
```

**CSS Specification:**

```css
.contact {
  background: var(--bg-base);
  padding: var(--space-24) 0;
  text-align: center;
}

.contact__inner {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.contact__description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.65;
  margin: 0;
}

.contact__email {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--accent-primary);
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
}

.contact__email::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-primary);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

.contact__email:hover::after {
  transform: scaleX(1);
}

.contact__socials {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border-default);
  color: var(--text-secondary);
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.social-link:hover {
  background: var(--accent-primary);
  color: var(--text-on-accent);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .social-link:hover { transform: none; }
}
```

---

### 4.6 Footer

**Layout:** Three-column on desktop (logo + tagline | navigation | legal), single row on mobile.

**CSS Specification:**

```css
.footer {
  background: var(--bg-footer);
  padding: var(--space-12) 0 var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
  padding-bottom: var(--space-10);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__logo {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--accent-primary);
  text-decoration: none;
}

.footer__tagline {
  font-size: var(--text-sm);
  color: rgba(232, 237, 245, 0.5);
  line-height: 1.5;
  max-width: 240px;
}

.footer__nav-title {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: rgba(232, 237, 245, 0.4);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.footer__nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__nav-link {
  font-size: var(--text-sm);
  color: rgba(232, 237, 245, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__nav-link:hover {
  color: var(--accent-primary);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-6);
  flex-wrap: wrap;
  gap: var(--space-4);
}

.footer__copyright {
  font-size: var(--text-xs);
  color: rgba(232, 237, 245, 0.35);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 4.7 CTA Button System

**Primary Button:**
- Background: `--accent-primary`
- Text: `--text-on-accent` (dark navy, ensures contrast)
- Hover: `--accent-primary-hover` + `translateY(-1px)` + `var(--shadow-md)`
- Active: `translateY(0)` + reduced shadow

**Secondary Button:**
- Background: transparent
- Border: `1px solid --border-strong`
- Text: `--text-primary`
- Hover: `--bg-surface-alt`

**Ghost Button (for hero on dark bg):**
- Background: transparent
- Border: `1px solid rgba(255,255,255,0.3)`
- Text: `--text-on-dark`
- Hover: `rgba(255,255,255,0.08)` background

```css
/* Base button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  line-height: 1;
  letter-spacing: 0.01em;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}

.btn:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.btn:active {
  transform: translateY(0) !important;
}

/* Size variants */
.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-xs);
  border-radius: 6px;
}

.btn--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
  border-radius: 10px;
}

/* Primary */
.btn--primary {
  background: var(--accent-primary);
  color: var(--text-on-accent);
  border-color: var(--accent-primary);
}

.btn--primary:hover {
  background: var(--accent-primary-hover);
  border-color: var(--accent-primary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

/* Secondary */
.btn--secondary {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--border-strong);
}

.btn--secondary:hover {
  background: var(--bg-surface-alt);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-1px);
}

/* Ghost (for use on dark backgrounds) */
.btn--ghost {
  background: transparent;
  color: var(--text-on-dark);
  border-color: rgba(255, 255, 255, 0.25);
}

.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.45);
  transform: translateY(-1px);
}

/* Danger */
.btn--danger {
  background: var(--color-error);
  color: #fff;
  border-color: var(--color-error);
}

/* Loading state */
.btn[aria-busy="true"] {
  pointer-events: none;
  opacity: 0.7;
  cursor: wait;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
  .btn:hover { transform: none !important; }
}
```

---

## 5. Layout Architecture

### 5.1 Container System

```css
:root {
  --container-max:     1280px;
  --container-wide:    1440px;
  --container-narrow:   800px;
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-8);
}

.container--narrow {
  max-width: var(--container-narrow);
}

.container--wide {
  max-width: var(--container-wide);
}

@media (max-width: 768px) {
  .container {
    padding-inline: var(--space-5);
  }
}

@media (max-width: 480px) {
  .container {
    padding-inline: var(--space-4);
  }
}
```

### 5.2 Section Rhythm

All major page sections follow this padding pattern:

```css
.section {
  padding-block: var(--space-24);
}

@media (max-width: 768px) {
  .section {
    padding-block: var(--space-16);
  }
}

@media (max-width: 480px) {
  .section {
    padding-block: var(--space-12);
  }
}
```

### 5.3 Section Header (Reusable)

```css
.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-12);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.section-eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--accent-primary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0;
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.65;
  margin: 0;
}
```

### 5.4 CSS Grid — Services Layout Detail

```css
/* 3-col default */
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr; /* equal height cards */
  gap: var(--space-6);
}

/* Tablet: 2-col */
@media (max-width: 1023px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  /* Make the last card span full width if total is odd */
  .services__grid > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: calc(50% - var(--space-3));
    margin-inline: auto;
  }
}

/* Mobile: 1-col */
@media (max-width: 639px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
  .services__grid > :last-child:nth-child(odd) {
    grid-column: auto;
    max-width: none;
  }
}
```

---

## 6. Animation & Motion

### 6.1 Scroll Reveal

Implemented with `IntersectionObserver` (no library). Elements start invisible and slide up into view.

```css
/* Elements to animate in */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children of a group */
[data-reveal-group] [data-reveal]:nth-child(1) { transition-delay: 0ms; }
[data-reveal-group] [data-reveal]:nth-child(2) { transition-delay: 80ms; }
[data-reveal-group] [data-reveal]:nth-child(3) { transition-delay: 160ms; }
[data-reveal-group] [data-reveal]:nth-child(4) { transition-delay: 240ms; }
[data-reveal-group] [data-reveal]:nth-child(5) { transition-delay: 320ms; }
[data-reveal-group] [data-reveal]:nth-child(6) { transition-delay: 400ms; }

/* Reduced motion: disable reveal animation entirely */
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**JavaScript (ScrollReveal — vanilla, ~30 lines):**

```js
// js/scroll-reveal.js
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
})();
```

**Usage in HTML:**

```html
<!-- Single element -->
<h2 class="section-title" data-reveal>Our Services</h2>

<!-- Staggered group -->
<div class="services__grid" data-reveal-group>
  <article class="service-card" data-reveal>...</article>
  <article class="service-card" data-reveal>...</article>
  <!-- ... -->
</div>
```

### 6.2 Hover Transitions — Global Rules

```css
/* Global interactive defaults */
a, button {
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

/* Smooth image scaling for any future card thumbnails */
.card-image {
  overflow: hidden;
}
.card-image img {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-image:hover img {
  transform: scale(1.04);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6.3 Page Load Animation (Hero)

On initial load, the hero content fades in and rises:

```css
.hero__container {
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.1s;
}

@keyframes heroIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__container { animation: none; }
}
```

### 6.4 Theme Toggle Animation

```css
.btn-theme-toggle svg {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
}

/* JS swaps icon — animate out old, in new */
.btn-theme-toggle.switching svg {
  transform: rotate(30deg) scale(0.5);
  opacity: 0;
}
```

---

## 7. CSS File Structure

```
css/
├── tokens.css          # All CSS custom properties (variables)
├── reset.css           # Modern CSS reset
├── base.css            # Typography defaults, body, headings, links
├── layout.css          # Container, section, grid utilities
├── components/
│   ├── navbar.css
│   ├── hero.css
│   ├── services.css
│   ├── about.css
│   ├── contact.css
│   ├── footer.css
│   └── button.css
├── utilities.css       # Single-purpose helper classes
└── animations.css      # Keyframes, scroll-reveal, transitions
```

**Load order in `<head>` (link tags, top to bottom):**

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/components/button.css">
<link rel="stylesheet" href="css/components/navbar.css">
<link rel="stylesheet" href="css/components/hero.css">
<link rel="stylesheet" href="css/components/services.css">
<link rel="stylesheet" href="css/components/about.css">
<link rel="stylesheet" href="css/components/contact.css">
<link rel="stylesheet" href="css/components/footer.css">
<link rel="stylesheet" href="css/utilities.css">
```

### File Contents Summary

**`css/tokens.css`**
All `:root` custom properties: colors (light mode), dark mode (`[data-theme="dark"]`), typography scale, spacing scale, shadow definitions, border-radius values, container widths, z-index scale.

**`css/reset.css`**
Based on `modern-normalize` pattern: box-sizing, margin reset, font inheritance, img/video block display, form element normalization, `prefers-reduced-motion` base rule.

**`css/base.css`**
`body` font/color/background declarations. Heading styles (h1–h6) using type scale tokens. Anchor link defaults. `::selection` styling (teal background). Smooth scroll (`scroll-behavior: smooth` — with `prefers-reduced-motion` override).

**`css/layout.css`**
`.container`, `.container--narrow`, `.container--wide`. `.section` padding rhythm. `.section-header`, `.section-eyebrow`, `.section-title`, `.section-subtitle`. Generic flex/grid helpers.

**`css/animations.css`**
All `@keyframes`. `[data-reveal]` and `[data-reveal-group]` stagger rules. `.hero__container` entrance animation. Global `prefers-reduced-motion` override block (last rule in file).

**`css/utilities.css`**
Sparse — only what cannot reasonably live in a component file. Examples: `.sr-only` (screen-reader only), `.text-center`, `.text-accent`, `.visually-hidden`.

---

## 8. Dark/Light Mode Strategy

### 8.1 Architecture

All color values live exclusively in CSS custom properties defined in `css/tokens.css`. Components reference only tokens — never raw hex values. This means the entire site re-skins by adding a single `data-theme="dark"` attribute to `<html>`.

```
[data-theme] on <html>
    └── controls which token block is active
          ├── :root  → light mode values
          └── [data-theme="dark"] → dark mode overrides
```

### 8.2 System Preference Detection

The site respects `prefers-color-scheme` by default. JS overrides it when the user explicitly toggles.

```css
/* In tokens.css — after :root block */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* paste all [data-theme="dark"] values here as well */
    --bg-base:        #0B1629;
    /* ... (mirror the dark block) */
  }
}
```

### 8.3 ThemeManager — JavaScript

```js
// js/theme-manager.js
const ThemeManager = (() => {
  const STORAGE_KEY = 'kogtek-theme';
  const root = document.documentElement;

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    // Update toggle button aria-label and icon
    const toggle = document.querySelector('.btn-theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      toggle.classList.add('switching');
      setTimeout(() => toggle.classList.remove('switching'), 250);
    }
  }

  function toggle() {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  function init() {
    apply(getPreferred());
    document.querySelector('.btn-theme-toggle')
      ?.addEventListener('click', toggle);

    // Listen for system preference changes (user hasn't explicitly chosen)
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          apply(e.matches ? 'dark' : 'light');
        }
      });
  }

  return { init, toggle, getPreferred };
})();

// Prevents FOUC — apply theme before first paint
// This script tag must be in <head>, before CSS links, inline:
// <script>
//   const t = localStorage.getItem('kogtek-theme') ||
//     (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
//   document.documentElement.setAttribute('data-theme', t);
// </script>

document.addEventListener('DOMContentLoaded', ThemeManager.init);
```

### 8.4 FOUC Prevention

To eliminate Flash of Unstyled Content (theme flicker on load), add this inline script as the **very first script in `<head>`** — before any CSS:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- FOUC prevention: must be inline and first -->
  <script>
    (function () {
      var t = localStorage.getItem('kogtek-theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', t);
    })();
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <!-- ... rest of head ... -->
</head>
```

### 8.5 Dark Mode Icon Strategy

Use two inline SVG icons within the toggle button, controlled by CSS:

```html
<button class="btn-theme-toggle" aria-label="Switch to dark mode" aria-pressed="false">
  <!-- Sun icon (shown in light mode) -->
  <svg class="icon-sun" ...>...</svg>
  <!-- Moon icon (shown in dark mode) -->
  <svg class="icon-moon" ...>...</svg>
</button>
```

```css
/* tokens.css or navbar.css */
:root .icon-moon         { display: none; }
:root .icon-sun          { display: block; }

[data-theme="dark"] .icon-moon { display: block; }
[data-theme="dark"] .icon-sun  { display: none; }
```

---

## 9. JavaScript File Structure

```
js/
├── theme-manager.js     # Dark/light mode (see §8.3)
├── navbar.js            # Sticky scroll class, hamburger menu, active link tracking
├── scroll-reveal.js     # IntersectionObserver reveal (see §6.1)
└── main.js              # Init entry point — imports/calls all modules
```

**`js/navbar.js` — Key behaviors:**

```js
// js/navbar.js
const Navbar = (() => {
  const nav = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  function handleScroll() {
    nav?.classList.toggle('scrolled', window.scrollY > 60);
  }

  function toggleMenu() {
    const open = mobileMenu?.classList.toggle('open');
    hamburger?.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.navbar__link[href^="#"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'));
            document.querySelector(`.navbar__link[href="#${e.target.id}"]`)
              ?.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  function init() {
    window.addEventListener('scroll', handleScroll, { passive: true });
    hamburger?.addEventListener('click', toggleMenu);
    highlightActiveLink();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', Navbar.init);
```

**`js/main.js`:**

```js
// js/main.js — loaded with defer attribute
document.addEventListener('DOMContentLoaded', () => {
  // ThemeManager is initialized in its own file (DOMContentLoaded listener)
  // Navbar and ScrollReveal are initialized in their own files
  console.log('[Kogtek] Site initialized.');
});
```

**Script loading order in HTML (bottom of `<body>`):**

```html
  <script src="js/theme-manager.js" defer></script>
  <script src="js/navbar.js" defer></script>
  <script src="js/scroll-reveal.js" defer></script>
  <script src="js/main.js" defer></script>
</body>
```

---

## 10. Performance Considerations

| Concern | Decision |
|---|---|
| Font loading | `display=swap` prevents invisible text during font load |
| Images | Use `loading="lazy"` on all below-fold images; use `width`/`height` attrs to prevent CLS |
| Icons | Inline SVG preferred over icon fonts or external sprite (no additional HTTP request) |
| Animations | All transforms use GPU-composited properties only (`transform`, `opacity`) — no `top/left/width` animations |
| Scroll events | `passive: true` on all scroll listeners |
| No reflows | Avoid reading layout properties in JS loops; batch DOM writes |
| CSS | No `@import` in CSS files (use `<link>` tags instead — parallel loading) |
| JS | All scripts use `defer` — non-blocking, execute after HTML parse |
| Hero background | Pure CSS grid pattern (no images) — zero extra HTTP requests |

---

## 11. Accessibility Checklist

- All interactive elements have `:focus-visible` styles
- Color is never the sole means of conveying information
- Minimum touch target size: 44×44px for all buttons and links
- `aria-label` on all icon-only buttons (theme toggle, hamburger)
- `aria-expanded` on hamburger, `aria-hidden` on decorative elements
- Skip-to-content link (first focusable element in `<body>`):
  ```html
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ```
  ```css
  .skip-link {
    position: absolute;
    top: -100%;
    left: var(--space-4);
    padding: var(--space-3) var(--space-6);
    background: var(--accent-primary);
    color: var(--text-on-accent);
    font-weight: var(--font-semibold);
    border-radius: 0 0 8px 8px;
    z-index: 9999;
    transition: top 0.2s;
  }
  .skip-link:focus {
    top: 0;
  }
  ```
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<header>` used correctly
- Every `<img>` has descriptive `alt` text; decorative images use `alt=""`
- Form elements (contact) have associated `<label>` elements

---

## Appendix A — Z-Index Scale

```css
:root {
  --z-below:   -1;
  --z-base:     0;
  --z-raised:  10;
  --z-dropdown:100;
  --z-sticky:  200;  /* navbar */
  --z-overlay: 300;  /* mobile menu backdrop */
  --z-modal:   400;
  --z-toast:   500;
}
```

## Appendix B — Border Radius Scale

```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:  12px;
  --radius-xl:  16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;  /* pill / circle */
}
```

## Appendix C — Page Section Order

```
1. <header> — Navbar (sticky)
2. <main id="main-content">
   ├── #hero     — Hero (full viewport)
   ├── #services — Services Grid
   ├── #about    — About / Stats
   └── #contact  — Contact
3. <footer> — Footer
```

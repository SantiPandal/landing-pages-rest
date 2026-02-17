# Landing Pages Monorepo — Project Summary

## What This Is

A monorepo containing 4 marketing landing pages for 4 energy companies in Mexico, all under the Vive Energia umbrella. Each company has its own domain, brand identity, and copy — but all 4 pages share the exact same component structure.

| Company | Domain | What They Sell |
|---------|--------|----------------|
| Vive Energia Solar | viveenergiasolar.com | Commercial/industrial solar installations |
| Eleia | eleiaenergia.mx | Wholesale electricity supply for large consumers (>=1 MW) |
| Pandener | pandener.com.mx | On-site cogeneration with natural gas engines (Guascor) |
| Trackio | trackio.viveenergia.com | IoT energy monitoring platform |

## Architecture

### Why Monorepo
- All 4 pages use identical section components — fix once, fix everywhere
- Each site deploys independently to Vercel with its own domain
- A single PR can update shared UI + site-specific content atomically

### Why NOT a Single App
- Separate domains, separate Vercel projects
- Different stakeholders per company
- Independent deploys — editing Pandener shouldn't redeploy Eleia

## Tech Stack

- **Astro** — static site generator (zero JS shipped by default, perfect Lighthouse scores)
- **pnpm workspaces** — dependency management
- **Turborepo** — build orchestration and caching (`pnpm build` builds all 4 in ~3s)
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin
- **TypeScript** — strict mode
- **Vercel** — one project per site, same GitHub repo

## Repo Structure

```
landing-pages-rest/
├── packages/
│   └── ui/                              # Shared component library
│       ├── src/
│       │   ├── types.ts                 # SiteConfig interface (the contract)
│       │   └── components/
│       │       ├── Navbar.astro          # Sticky nav + mobile hamburger (vanilla JS)
│       │       ├── Hero.astro            # Full-width bg image + gradient overlay + CTA
│       │       ├── SocialProof.astro     # Grayscale client logos row
│       │       ├── HowItWorks.astro      # 3-step numbered grid with connector lines
│       │       ├── Solutions.astro       # Cards with images + optional stat badges
│       │       ├── Testimonials.astro    # Quote cards + metric callouts
│       │       ├── FinalCTA.astro        # Dark CTA section with dot pattern
│       │       └── Footer.astro          # Contact info + links
│       └── package.json
│
├── sites/
│   ├── vive-solar/                      # Each site follows identical structure:
│   │   ├── src/
│   │   │   ├── config.ts               # ALL content + brand tokens (single source of truth)
│   │   │   ├── styles/global.css        # CSS custom properties + Tailwind + @source directive
│   │   │   ├── layouts/Layout.astro     # HTML shell + Google Fonts
│   │   │   └── pages/index.astro        # Assembles shared components with config props
│   │   ├── public/images/               # Brand-specific images (hero, logos, solutions)
│   │   ├── astro.config.mjs
│   │   └── package.json
│   ├── eleia/                           # Same structure
│   ├── pandener/                        # Same structure
│   └── trackio/                         # Same structure
│
├── vive-website-images-data/            # Asset library (NOT deployed, reference only)
│   ├── documents/                       # Brand guidelines PDFs, contracts, case studies
│   ├── hero-images/                     # Hero background photos per site
│   ├── logos/                           # Client logos (John Deere, Mars, Airbus, etc.)
│   ├── ai-generated/                    # AI-generated illustrations for solutions
│   ├── photos/                          # Professional photography (wind farms, solar, etc.)
│   ├── team/                            # Team member photos
│   └── video/                           # Intro videos
│
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
└── package.json
```

## Key Design Pattern: Config-Driven Pages

Each site's entire content lives in a single `config.ts` file. Shared components are "dumb renderers" — they receive props and render. They don't know which brand they're displaying.

The `SiteConfig` type (in `packages/ui/src/types.ts`) is the contract:
- `brand` — name, logo, colors, CTA URL/label
- `hero` — headline, subheadline, background image
- `socialProof` — client logos array
- `howItWorks` — 3 numbered steps
- `solutions` — cards with optional images and stat badges
- `testimonials` — quote cards with metrics
- `finalCta` — closing CTA section
- `navbar` — navigation links
- `footer` — contact info and links

### Theming via CSS Custom Properties

Brand colors are set in each site's `global.css` as CSS custom properties:
```css
:root {
  --color-primary: #0F4C81;
  --color-accent: #00AFD7;
}
```

Components reference these with Tailwind arbitrary values: `bg-[var(--color-primary)]`, `text-[var(--color-accent)]`, etc.

## Critical Implementation Detail: Tailwind v4 + Monorepo

Tailwind CSS v4 auto-detects content from the Vite module graph, but it does NOT scan files outside the site's directory in a monorepo. Each site's `global.css` must include a `@source` directive:

```css
@import 'tailwindcss';
@source "../../../../packages/ui/src/**/*.astro";
```

Without this, Tailwind only generates utilities used in the site's own files — none of the shared component classes get included (CSS output goes from ~25KB to ~5KB of just resets).

## Brand Data Applied

### Vive Solar
- **Source**: `Brand Guideline_Vive Energía_RGB_compressed.pdf`
- **Colors**: Blue `#1E6DA1`, Green `#58AC25`
- **Fonts**: Montserrat (primary) + Titillium Web (secondary)
- **Contact**: CDMX +52(55) 2167 3120, Merida +52(99) 9944 2873, contacto@viveenergia.com
- **Key stats**: 160 MW in operation, 50+ years collective experience, founded 2012

### Eleia
- **Colors**: Blue `#1E6DA1`, Teal `#009999`
- **Fonts**: Montserrat + Titillium Web
- **Contact**: Same Vive Energia contact (subsidiary)
- **Key value prop**: 15-30% CFE bill reduction, zero investment, no infrastructure changes

### Pandener
- **Source**: `PANDENER_brandbook.1.pdf`
- **Colors**: Dark blue `#0F4C81`, Cyan `#00AFD7`, Secondary gray `#3C3F42`
- **Fonts**: Gotham (primary, using Montserrat as web substitute) + Roboto (secondary)
- **Contact**: Alejandro Dumas 103, Polanco, CDMX, +52(55) 9219-2235
- **Key context**: Grupo Guascor, 30+ countries, 85 years experience

### Trackio
- **Colors**: Near-black `#0F172A`, Cyan `#00B0F0`
- **Fonts**: Montserrat + Roboto (awaiting brand book)
- **Contact**: Same Vive Energia contact
- **Key value prop**: IoT monitoring, 15% avg savings, <5min anomaly detection

## Commands

```bash
pnpm install                          # Install all dependencies
pnpm dev --filter=vive-solar          # Dev server for one site
pnpm dev --filter=pandener            # Dev server for another
pnpm build                            # Build all 4 sites (~3s)
npx turbo build --filter=pandener     # Build one site only
```

## Adding a 5th Site

1. Copy any `sites/` folder (e.g. `cp -r sites/pandener sites/new-company`)
2. Update `package.json` name field
3. Edit `src/config.ts` with new content
4. Edit `src/styles/global.css` with new brand colors
5. Edit `src/layouts/Layout.astro` with correct Google Fonts
6. Drop images into `public/images/`
7. `pnpm install && pnpm dev --filter=new-company`

## What's NOT Built (By Design)

- No CMS — content lives in `config.ts` files
- No routing — each site is a single page
- No backend or API — CTAs link to external calculator apps
- No animation libraries — CSS transitions only
- No database, auth, or state management
- No i18n — all content is in Spanish

## Deployment (Vercel)

Each site gets its own Vercel project:
- **Root Directory**: `sites/vive-solar` (etc.)
- **Build Command**: `cd ../.. && pnpm turbo build --filter=vive-solar`
- **Output Directory**: `dist`
- **Custom Domain**: set per project

## Current Status

- All 4 sites scaffold, build, and render correctly
- Real images from `vive-website-images-data/` are copied into each site's `public/`
- Brand colors, fonts, and contact info applied from brand guidelines
- Pandener has full brandbook treatment; others use Vive Energia parent brand
- Placeholder testimonials (need real case studies)
- CTA URLs point to external calculator/demo apps (to be configured)

# Resources Needed to Replace Sample Data

All items below are currently using placeholder data or placeholder image paths. Collect these to populate the real landing pages.

---

## 1. TEAM PHOTOS (All Sites)

Each site needs headshots (square crop, min 400x400px, professional setting).

### Eleia
- [ ] CEO / Director General — name, photo, short bio, LinkedIn URL
- [ ] Director Comercial — name, photo, short bio, LinkedIn URL
- [ ] Director de Operaciones / Mesa de Operacion — name, photo, short bio, LinkedIn URL

### Pandener
- [ ] CEO / Director General — name, photo, short bio, LinkedIn URL
- [ ] Director de Ingenieria — name, photo, short bio, LinkedIn URL
- [ ] Director de O&M — name, photo, short bio, LinkedIn URL

### Trackio
- [ ] CTO / Director de Tecnologia — name, photo, short bio, LinkedIn URL
- [ ] Lider de Data Science — name, photo, short bio, LinkedIn URL
- [ ] Lider de Implementacion — name, photo, short bio, LinkedIn URL

### Vive Solar
- [x] ~~Director de Proyectos~~ — **Benigno** (photo: team-benigno.jpg) — needs full name, bio, LinkedIn
- [x] ~~Director Comercial~~ — **Gerardo** (photo: team-gerardo.jpeg) — needs full name, bio, LinkedIn
- [ ] Third team member (optional) — name, photo, short bio, LinkedIn URL

**Path format:** `/images/team/[name].jpg` per site

---

## 2. TRUST BADGES / CERTIFICATION LOGOS

Logo files (PNG/SVG, transparent background, min 120x120px).

### Eleia
- [x] ~~CRE (Comision Reguladora de Energia) logo/badge~~ — `logo-cre.png`
- [x] ~~CENACE logo/badge~~ — `logo-cenace.png`
- [x] ~~ISO 9001 certification badge~~ — `badge-iso-9001.png`
- [x] ~~Trackio logo (as technology badge)~~ — `logo-trackio.png`

### Pandener
- [x] ~~GUASCOR Energy partner logo~~ — `logo-guascor-energy.webp`
- [x] ~~CRE logo/badge~~ — `logo-cre.png`
- [x] ~~ISO 9001 badge~~ — `badge-iso-9001.png`
- [x] ~~ISO 14001 badge~~ — `badge-iso-14001.png`

### Trackio
- [x] ~~SSL/encryption icon or badge~~ — `badge-ssl-certificate.png`
- [x] ~~AWS cloud badge~~ — `logo-aws.png`
- [ ] Data protection / LFPDPPP compliance badge — no file yet
- [ ] Uptime SLA badge (or create simple graphic) — no file yet

### Vive Solar
- [x] ~~FIDE badge~~ — `logo-fide.png`
- [x] ~~CRE logo/badge~~ — `logo-cre.png`
- [ ] Tier 1 panel certification (Bloomberg BNEF) — no file yet
- [x] ~~25-year warranty badge~~ — `badge-25-years-warranty-gold.png`

**Path format:** `/images/trust/[badge-name].png` per site

---

## 3. REAL TESTIMONIALS

Each site has 2 testimonials. Currently using sample quotes. Need real ones.

### Per Testimonial:
- [ ] Full name of person
- [ ] Job title
- [ ] Company name
- [ ] Quote (2-3 sentences about experience + results)
- [ ] Specific metric/result (e.g., "28% ahorro", "$4.2M anual")
- [ ] Photo of person (optional but highly recommended, 200x200px)

### Eleia — need 2 real testimonials
### Pandener — need 2 real testimonials
### Trackio — need 2 real testimonials (verify if current ones are real)
### Vive Solar — need 2 real testimonials (verify ALYEX data)

---

## 4. CASE STUDY DATA

Each site has 1 case study. Need real project data.

### Per Case Study:
- [ ] Client company name (or anonymized industry name if NDA)
- [ ] Client logo (if permission given)
- [ ] Industry category
- [ ] Challenge description (2-3 sentences)
- [ ] Solution description (2-3 sentences)
- [ ] 3-4 result metrics with real numbers
- [ ] Client quote (optional)
- [ ] Quote author name + title

### Eleia — need 1 real MEM migration case study
### Pandener — ~~need 1 real cogeneration installation case study~~ **DONE** (MABE - PPA Cogeneracion, Saltillo, 1,400 kW)
### Trackio — need 1 real IoT deployment case study
### Vive Solar — need 1 real solar installation case study (ALYEX data seems real — verify)

---

## 5. AGGREGATE METRICS (Verify)

These numbers are currently estimates. Need confirmed figures.

### Eleia
- [ ] Total active clients (currently "150+")
- [ ] Average savings % (currently "30%")
- [ ] Years in market (currently "10+")

### Pandener
- [x] ~~Years of experience (currently "22+")~~ — Updated to "24+" (since 2002)
- [ ] MW installed in Mexico (currently "85 MW") — not confirmed in presentation
- [ ] Total projects (currently "44") — not confirmed in presentation
- [x] ~~Countries with operations (currently "7")~~ — Updated to "9" (9 paises de Latinoamerica confirmed)

### Trackio
- [ ] Sites monitored (currently "100+")
- [ ] Average savings detected (currently "15%")
- [ ] Anomaly detection time (currently "<5min")

### Vive Solar
- [ ] MW installed (currently "2,000+")
- [ ] Panel lifespan guarantee (currently "25 anos")
- [ ] Average bill reduction (currently "85%")
- [ ] ROI timeline (currently "3 anos")

---

## 6. FAQ ANSWERS (Review)

FAQ copy updated from Framer prototype (appreciative-goal-731667.framer.app). Real conversational tone applied.

- [x] ~~**Eleia**: 5 questions~~ — Suministro Calificado FAQs from Framer site (que es, obra, ahorro, tiempo, costo)
- [x] ~~**Pandener**: 6 questions~~ — Cogeneracion FAQs from Framer site (motogenerador, CFE, demanda, combustible, espacio, mantenimiento)
- [x] ~~**Vive Solar**: 3 questions~~ — Paneles Solares FAQs from Framer site (costo, mantenimiento, permisos)
- [ ] **Trackio**: Still using generated FAQs (6 questions). Need real FAQs from Framer or SME review

---

## 7. INLINE FORM BACKEND

Forms are currently not connected to any backend. Need:

- [ ] Form submission endpoint (e.g., HubSpot, Mailchimp, custom API, n8n webhook)
- [ ] Email notification setup for new leads
- [ ] CRM integration (if applicable)
- [ ] Update `ctaUrl` in InlineForm component once endpoint is ready

---

## 8. NAVBAR LINK UPDATES

Navbar links now point to: Soluciones, Como Funciona, Casos de Exito, FAQ.
- [ ] Verify anchor IDs match section IDs in the page
- [ ] Add "Equipo" link if team section should be directly navigable

---

## 9. CLIENT LOGOS (Social Proof)

### Eleia
- [x] ~~Client logos~~ — using: Airbus, Cargill, Celestica, Mabe, Mars
- [ ] Need original client logos if different (Nutrisa, CIBANCO, Cinemex, PEMEX, PwC were originally listed)

### Pandener
- [x] ~~Client logos~~ — all 6 match files on disk

### Trackio
- [x] ~~Client logos~~ — all 5 match files on disk

### Vive Solar
- [x] ~~Client logos~~ — updated to: John Deere, Airbus, Cargill, Mars, Minera Pangea, Qualtia

---

## Priority Order

1. ~~**Trust badges + certification logos**~~ — **DONE** (14 of 16 badges placed, 2 still needed for Trackio)
2. **Aggregate metrics verification** (just confirming existing numbers)
3. **FAQ review by SME** (Trackio still needs review)
4. **Real testimonials** (biggest conversion impact)
5. **Team photos** (Vive Solar partially done, 3 other sites need photos)
6. **Case study data** (deepest proof of value)
7. **Form backend** (enables actual lead capture)
8. **Eleia original client logos** (Nutrisa, CIBANCO, Cinemex, PEMEX, PwC if available)

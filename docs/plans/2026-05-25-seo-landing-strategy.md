# XMA SEO & Lead-Gen Landing Strategy

**Date:** 2026-05-25
**Status:** Approved — Phase 1 ready to build
**Author:** Alex Xhoja + Claude (collaborative brainstorm)

---

## Why this exists

Three months of Google Search Console data (Feb–May 2026) show:

- **89 organic clicks total** (~1/day)
- **98% of clicks are branded** — people Googling "xhoja music agency" who already know XMA
- **657 impressions** at **13.5% CTR** (CTR is strong; volume isn't)
- **Average position 10.1** (right at the edge of page 1)
- **Zero impressions** for wedding queries (wedding pianist, wedding music Boston, etc.)
- **Six impressions each** for "classical trio for hire" and "classical duo for hire" — getting shown, but zero clicks because position is too low

**Diagnosis:** XMA's site doesn't currently exist to Google for the wedding/event/hospitality queries that real buyers search. This is a *content* gap, not a ranking gap — Google can't rank pages that don't exist or don't strongly signal what they're about.

**Goal:** Build a sustainable organic-search pipeline that captures non-branded queries from Greater Boston event buyers (couples, planners, hotels, senior communities, churches), driving qualified leads to the existing `/events` consultation funnel.

---

## Audiences & priority

Tiered by current business priority and search-traffic potential:

### Tier 1 — Ship in Phase 1 (today)

| Audience | Page | Why now |
|---|---|---|
| Couples planning weddings | `/wedding-music-boston` | Highest search volume in live-music space |
| Wedding planners (B2B) | `/for-wedding-planners` | Active partnership push per business priorities; each planner = many bookings/year |
| Hotels / hospitality | `/hotel-music-boston` | Aligns with Pennyweight Hotel relationship (Sharad Chand) |
| Senior living communities | `/senior-living-music` | Recurring revenue model; aligns with Center Communities of Brookline (Ana) |

### Tier 2 — Phase 2 (follow-up sessions)

| Audience | Proposed page |
|---|---|
| Churches / houses of worship | `/church-music-boston` |
| Private parties & milestone events | `/private-event-music-boston` |
| B'nai mitzvah | `/bnai-mitzvah-music-boston` |
| Funeral & memorial services | `/funeral-music-services` |

### Tier 3 — Backlog (not committed)

- Corporate event music
- Restaurant residencies
- School / educational programs
- Dedicated DJ landing page

### Tier 4 — Geographic expansion: all of New England

**Eventual goal**: XMA should rank for every major New England wedding/event market, not just Greater Boston.

**Strategy**: build *location × service* landing pages — one URL per (city/state, audience) combination that gets meaningful search volume. Google rewards location-specific content because most service-business searches include a location.

**Proposed expansion order** (by population + wedding-market value):

1. **Providence, RI** — `/wedding-music-providence`, `/hotel-music-providence`
2. **Worcester, MA** — `/wedding-music-worcester`
3. **New Hampshire (Portsmouth, Manchester, Nashua)** — `/wedding-music-new-hampshire`, `/wedding-music-portsmouth-nh`
4. **Connecticut (Hartford, New Haven, Stamford)** — `/wedding-music-connecticut`, `/wedding-music-hartford`
5. **Cape Cod / South Shore** — `/wedding-music-cape-cod`, `/wedding-music-south-shore`
6. **Maine (Portland)** — `/wedding-music-portland-maine`, `/wedding-music-maine`
7. **Vermont (Burlington)** — `/wedding-music-vermont`

**Page structure**: each location page is a near-clone of the corresponding Boston page (same template, same components) with city-specific content swapped in:
- Hero references the city/region by name
- "Why XMA in [city]" section mentions travel commitments, local familiarity, venue partnerships
- Footer + schema add geographic targeting (`LocalBusiness.areaServed`)

**Schema markup**: each location page declares its `areaServed` and uses `LocalBusiness` with city-specific NAP data so Google understands the geographic targeting.

**Critical caveat for execution**: do NOT spin up location pages until each one has *real, distinct content*. Thin "city pages" that just swap "Boston" for "Providence" get hit by Google's helpful-content updates. Each location page should have at least:
- Genuine local context (venues we've played, regions we know)
- Distinct testimonial or review specifically from that area (if available)
- Different photography or hero imagery where possible

**Sequencing**: ship Phase 1 (Boston audiences) → wait 30-60 days to see indexing + traffic data → use that data to decide which location to expand to first based on which audience proves most valuable.

---

## Architecture

### URL structure (flat, keyword-rich)

```
xhojamusicagency.com/
├── /                            (Home - existing)
├── /ensembles                   (existing - service catalog)
├── /events                      (existing - consultation form)
├── /lessons                     (existing)
├── /team                        (existing)
├── /contact                     (existing)
├── /wedding-music-boston        ← Phase 1
├── /for-wedding-planners        ← Phase 1
├── /hotel-music-boston          ← Phase 1
└── /senior-living-music         ← Phase 1
```

### Sitemap.xml — tiered priority

| URL | Priority | Changefreq | Tier |
|---|---|---|---|
| `/` | 1.0 | weekly | Tier 1 |
| `/ensembles` | 1.0 | weekly | Tier 1 |
| `/wedding-music-boston` | 1.0 | monthly | Tier 1 |
| `/events` | 1.0 | monthly | Tier 1 |
| `/hotel-music-boston` | 0.9 | monthly | Tier 2 |
| `/senior-living-music` | 0.9 | monthly | Tier 2 |
| `/for-wedding-planners` | 0.9 | monthly | Tier 2 |
| `/lessons` | 0.7 | monthly | Tier 3 |
| `/team` | 0.7 | monthly | Tier 3 |
| `/contact` | 0.5 | yearly | Tier 4 |

### New React components

```
src/components/
├── InlineLeadForm.tsx       Reusable mid-page lead-capture form
├── PageHero.tsx             Shared hero pattern (eyebrow + headline + subhead)
└── SchemaMarkup.tsx         JSON-LD injection helper

src/utils/
└── schema.ts                Schema builders (Organization, MusicGroup, FAQPage, etc.)
```

---

## Lead-capture mechanism (Approach B — multi-modal)

Every Phase 1 landing page has a **three-tier conversion stack**:

1. **Top-of-page**: Tap-to-call phone number `(857) 498-8487` next to hero
2. **Mid-page inline form**: 3 fields (name, email, "tell me about your event") with hidden `source` field tagging the page (e.g., `source=wedding-music-boston`) so inbox shows lead origin
3. **Bottom-of-page**: "Schedule a Consultation" CTA → `/events` (full intake)

Form submissions reuse the existing `/api/contact` backend with the new `source` field for attribution.

---

## XMA brand handling (site-wide)

The "Xhoja" spelling is a barrier — people search "XMA," "Joya," "Hoya," etc. Solution is to teach Google that XMA = Xhoja Music Agency in multiple places:

1. **Title tag pattern**: `[Topic] | XMA — Xhoja Music Agency` on every new page
2. **JSON-LD schema** in `<head>` of every page:
   ```json
   {
     "@type": "MusicGroup",
     "name": "Xhoja Music Agency",
     "alternateName": "XMA",
     "url": "https://www.xhojamusicagency.com",
     "areaServed": "Greater Boston, MA",
     "telephone": "+1-857-498-8487"
   }
   ```
3. **Footer line**: "XMA = Xhoja Music Agency. Live music for events across Greater Boston." (Added once, visible on every page.)

---

## Copy strategy

Match existing voice: refined, serif-heavy, restrained. Pattern lines like *"every group is tailored to the room, the program, and your guests."*

Every Phase 1 page follows the same structural rhythm:

1. **Hero** — One short evocative line ("Live music for Boston weddings, every moment of your day.")
2. **Trust paragraph** — 2–3 sentences positioning XMA as the team making this easy
3. **Service grid** — Visual cards (e.g., Ceremony / Cocktail Hour / Reception)
4. **Inline lead form** — Conversion moment
5. **Why XMA** — 3–4 audience-specific reasons (e.g., for hotels: vetted musicians, insurance, residencies)
6. **Closing CTA** — Gold button → `/events`

---

## Schema markup (per page)

| Schema type | Where | Why |
|---|---|---|
| `Organization` + `MusicGroup` | `index.html` (site-wide) | Establishes XMA identity, `alternateName: "XMA"` |
| `LocalBusiness` | `index.html` | Boston geographic targeting, NAP (name/address/phone) |
| `FAQPage` | Each landing page (3–5 Q&As) | Eligible for rich-result snippets in Google search; raises CTR |
| `Service` | Each landing page | Declares "wedding music," "hotel music," etc. as specific services with audience |

---

## Deployment

- **Branch**: `seo-landing-pages-phase-1`
- **Preview**: Vercel auto-deploys to `xhoja-music-agency-seo-landing-pages-phase-1.vercel.app`
- **Review**: Alex reviews live preview, iterates
- **Production**: Merge to `main` triggers Vercel production deploy

---

## Open items (deferred)

These came up during planning but are NOT in Phase 1:

1. **Fix 307 → 301 redirect** for `xhojamusicagency.com` → `www.xhojamusicagency.com` (small SEO bug found 5/25)
2. **Verify apex domain property** in Google Search Console (needs DNS TXT record in Vercel)
3. **Google Business Profile setup** — separate workflow, but the single highest-leverage action for local SEO
4. **Phase 2 audience pages** (Church, Private Events, B'nai Mitzvah, Funeral)
5. **Home page updates** — eventually link to Phase 1 landing pages from Home hero or service section

---

## Success metrics (90-day check-in)

If this works, by 8/25/2026 (90 days) we should see in Google Search Console:

- **Impressions on non-branded queries** — currently ~10/3 months for service queries. Target: 200+/month
- **At least one Phase 1 page in top 10 results** for its primary keyword
- **Inbound leads tagged with `source=...`** showing which page produces leads
- **Total organic clicks** growing from ~1/day to ~3–5/day

If we DON'T see this in 90 days, the diagnosis is probably "ranking is climbing but content needs more authority" → answer is more pages (Phase 2) + earning backlinks.

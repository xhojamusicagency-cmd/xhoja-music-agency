# SEO Landing Pages (Phase 1) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build 4 SEO-targeted landing pages (wedding-music-boston, for-wedding-planners, hotel-music-boston, senior-living-music) with multi-modal lead capture, tiered sitemap, and XMA brand handling.

**Architecture:** Adds 4 new pages following the existing Ensembles.tsx design pattern. Introduces 3 shared components (PageHero, InlineLeadForm, plus a Faq utility). Updates Footer with XMA explainer. Adds `alternateName: "XMA"` to existing index.html schema. Restructures sitemap.xml with tiered priority.

**Tech Stack:** React 18 + TypeScript + Vite + React Router v6 + Tailwind CSS + @emailjs/browser + Vercel hosting.

**Design doc:** See `docs/plans/2026-05-25-seo-landing-strategy.md` for strategic context, audience analysis, and rationale.

**Verification (in lieu of unit tests):** Run `npm run build` after each component or page is created — this runs `tsc -b && vite build` and catches TypeScript errors plus Vite build failures. Visual verification happens via Vercel preview deployment at end.

---

## Task 1: Add XMA alternateName to existing schema

**Files:**
- Modify: `index.html` (the JSON-LD block starting line 28)

**Step 1: Add alternateName to LocalBusiness schema**

In `index.html`, in the `<script type="application/ld+json">` block, add `"alternateName": "XMA",` immediately after the existing `"name": "Xhoja Music Agency",` line.

Result should look like:
```json
"name": "Xhoja Music Agency",
"alternateName": "XMA",
"url": "https://www.xhojamusicagency.com",
```

**Step 2: Verify build still passes**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build completes with no errors. Output shows dist/ folder.

**Step 3: Commit**

```bash
cd ~/Documents/xma-website
git add index.html
git commit -m "feat(seo): add XMA alternateName to LocalBusiness schema

Tells Google that 'XMA' is an alternate name for Xhoja Music Agency,
helping the site surface for 'XMA Boston' and 'XMA music' queries."
```

---

## Task 2: Add XMA explainer to Footer

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Update the brand column description**

In `src/components/Footer.tsx`, replace line 15:
```tsx
<p className="text-gray-400 text-sm leading-relaxed mb-6">Nurturing musical talent and delivering exceptional live experiences since day one.</p>
```

With:
```tsx
<p className="text-gray-400 text-sm leading-relaxed mb-6">
  <span className="text-gold font-medium">XMA = Xhoja Music Agency.</span> Live music for events across Greater Boston — weddings, hotels, senior communities, and private gatherings.
</p>
```

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build passes.

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(seo): add XMA explainer to footer

Reinforces XMA = Xhoja Music Agency on every page footer.
Helps users who only remember 'XMA' connect it to the full brand."
```

---

## Task 3: Create InlineLeadForm component

**Files:**
- Create: `src/components/InlineLeadForm.tsx`

**Step 1: Write the component**

Create `src/components/InlineLeadForm.tsx`:

```tsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';

interface InlineLeadFormProps {
  /** Tag where this lead originated for source attribution in inbox */
  source: string;
  /** Heading shown above the form */
  heading?: string;
  /** Helper text shown under heading */
  subheading?: string;
  /** Placeholder for the message textarea, customized per audience */
  messagePlaceholder?: string;
}

/**
 * Compact 3-field lead capture form for landing pages.
 * Reuses Contact.tsx's EmailJS template; tags submissions with `source`
 * so the inbox shows which landing page produced the lead.
 */
export default function InlineLeadForm({
  source,
  heading = 'Tell us about your event',
  subheading = 'A quick note is enough — we will reply within one business day.',
  messagePlaceholder = 'Date, venue, guest count, anything you want us to know…',
}: InlineLeadFormProps) {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [formMountedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam protection: silently succeed if honeypot filled or submitted too fast
    if (honeypot.trim() !== '' || Date.now() - formMountedAt < 2000) {
      setSubmitStatus('success');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: 'Not provided',
          subject: `Inline lead from ${source}`,
          message: formData.message,
          to_email: formData.email,
          client_first_name: formData.fullName.split(' ')[0],
          source, // for attribution
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="bg-cream py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
            Message Received
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-light leading-[1.2] mb-4 text-dark">
            Thank you — we will be in touch shortly.
          </h2>
          <p className="font-serif italic text-gray-500 text-base leading-[1.7]">
            We reply to every inquiry personally, usually within one business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
            Quick Inquiry
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-light leading-[1.2] mb-3 text-dark">
            {heading}
          </h2>
          <p className="font-serif italic text-gray-500 text-base leading-[1.7]">
            {subheading}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot — invisible to humans, bots fill it */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] opacity-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-5 py-4 bg-white border border-border focus:border-gold outline-none text-dark placeholder-gray-400 transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-5 py-4 bg-white border border-border focus:border-gold outline-none text-dark placeholder-gray-400 transition-colors"
            />
          </div>

          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder={messagePlaceholder}
            className="w-full px-5 py-4 bg-white border border-border focus:border-gold outline-none text-dark placeholder-gray-400 resize-none transition-colors"
          />

          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please try calling us at (857) 498-8487 or emailing directly.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto sm:mx-auto sm:block px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending…' : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build passes. No TypeScript errors.

**Step 3: Commit**

```bash
git add src/components/InlineLeadForm.tsx
git commit -m "feat(seo): add InlineLeadForm reusable component

Compact 3-field lead form for landing pages. Reuses existing EmailJS
CONTACT_TEMPLATE with a 'source' field for attribution. Same spam
protection (honeypot + timing) as Contact.tsx form."
```

---

## Task 4: Create PageHero component

**Files:**
- Create: `src/components/PageHero.tsx`

**Step 1: Write the component**

Create `src/components/PageHero.tsx`:

```tsx
interface PageHeroProps {
  /** Small uppercase text above the headline (eyebrow) */
  eyebrow: string;
  /** Main page headline */
  headline: string;
  /** Optional italic subhead beneath the headline */
  subhead?: string;
  /** Show tap-to-call phone line below subhead */
  showPhone?: boolean;
}

/**
 * Shared hero pattern matching the Ensembles page design:
 * eyebrow → divider → headline → subhead → (optional phone)
 */
export default function PageHero({
  eyebrow,
  headline,
  subhead,
  showPhone = true,
}: PageHeroProps) {
  return (
    <section className="bg-cream-light pt-10 pb-8 md:pt-14 md:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
          {eyebrow}
        </p>
        <div className="w-12 h-px bg-gold mx-auto mb-4"></div>
        <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[52px] font-light leading-[1.08] tracking-[0.5px] mb-5 text-dark">
          {headline}
        </h1>
        {subhead && (
          <p className="font-serif italic text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-[1.7] mb-6">
            {subhead}
          </p>
        )}
        {showPhone && (
          <p className="text-dark text-sm tracking-[2px] mt-2">
            Or call directly:{' '}
            <a href="tel:+18574988487" className="text-gold font-medium hover:underline">
              (857) 498-8487
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build passes.

**Step 3: Commit**

```bash
git add src/components/PageHero.tsx
git commit -m "feat(seo): add PageHero reusable component

Shared hero pattern (eyebrow + divider + headline + subhead + phone)
matching existing Ensembles page design. Used by all 4 Phase 1
landing pages."
```

---

## Task 5: Build /wedding-music-boston page

**Files:**
- Create: `src/pages/WeddingMusicBoston.tsx`

**Step 1: Write the page**

Create `src/pages/WeddingMusicBoston.tsx`:

```tsx
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';

const PHASES = [
  {
    label: 'Ceremony',
    text: 'String quartet, solo piano, or harp for processional, ceremony, and recessional. Music tailored to your venue and program.',
  },
  {
    label: 'Cocktail Hour',
    text: 'Jazz trio, solo piano, or a cocktail duo — refined sound that fills the room without overpowering conversation.',
  },
  {
    label: 'Reception',
    text: 'Live band or curated DJ — energy that builds through dinner, toasts, and the dance floor late into the night.',
  },
];

const REASONS = [
  'One curated team for ceremony, cocktail hour, and reception — designed to feel seamless across the day.',
  'Vetted, professional musicians from the Greater Boston region. Insured, punctual, and dressed for the room.',
  'Tailored repertoire — every song matched to your venue, program, and guests. We listen first.',
  'Direct contact with Alex throughout planning. No call centers, no junior staff.',
];

export default function WeddingMusicBoston() {
  usePageTitle(
    'Wedding Music Boston | XMA — Xhoja Music Agency',
    'Live music for Boston weddings — solo piano, string quartets, jazz trios, DJ. Curated ceremony, cocktail hour, and reception music tailored to your day.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Wedding Music In Boston"
        headline="Live music for every moment of your day."
        subhead="From the first note of the processional to the last song of the night — one curated team, one seamless experience."
      />

      {/* Three phases */}
      <section className="bg-cream-light pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className="text-center">
                <div className="text-gold font-serif italic text-3xl mb-3">0{i + 1}</div>
                <div className="w-10 h-px bg-gold mx-auto mb-5"></div>
                <h3 className="font-serif text-[22px] mb-4 tracking-[0.3px] text-dark">{phase.label}</h3>
                <p className="font-serif italic text-[15px] text-gray-500 leading-[1.7]">{phase.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/ensembles"
              className="inline-flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 font-medium hover:text-gold transition-colors"
            >
              See All Ensembles
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <InlineLeadForm
        source="wedding-music-boston"
        heading="Tell us about your wedding"
        subheading="A quick note is enough — we will reply within one business day."
        messagePlaceholder="Wedding date, venue, guest count, ceremony style, and anything else you want us to know…"
      />

      {/* Why XMA */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Why XMA For Weddings</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              The thinking behind every booking.
            </h2>
          </div>
          <ul className="space-y-6">
            {REASONS.map((reason, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span className="text-gold font-serif italic text-2xl shrink-0">0{i + 1}</span>
                <p className="font-serif italic text-[15px] md:text-[16px] text-gray-600 leading-[1.7] pt-1">{reason}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Ready To Talk?</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Schedule a wedding consultation.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share your date and we will walk you through ensemble options, pricing, and the planning timeline.
          </p>
          <Link
            to="/events?ensemble=The%20Grand%20Wedding%20Experience"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Start The Conversation
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
```

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build passes. No TypeScript errors.

**Step 3: Commit**

```bash
git add src/pages/WeddingMusicBoston.tsx
git commit -m "feat(seo): add /wedding-music-boston landing page

Targets queries: 'wedding pianist boston', 'wedding ceremony music',
'wedding cocktail hour music massachusetts'. Three-phase structure
(ceremony/cocktail/reception), inline lead form tagged source=
wedding-music-boston, closing CTA to /events consultation."
```

---

## Task 6: Build /for-wedding-planners page

**Files:**
- Create: `src/pages/ForWeddingPlanners.tsx`

**Step 1: Write the page**

Same pattern as Task 5 but for the planner (B2B) audience. Use:

- **Page title**: `For Wedding Planners | XMA — Xhoja Music Agency`
- **Meta description**: `Trusted music partner for Greater Boston wedding planners. One vetted roster, one point of contact, dependable musicians for every booking.`
- **PageHero eyebrow**: `For Wedding Planners`
- **PageHero headline**: `A music partner you can rely on.`
- **PageHero subhead**: `One vetted roster, one point of contact, and a planner-first workflow built around how you already work.`

**Three benefit cards** (replace PHASES):
- **One Roster** — "Access to 200+ vetted musicians across every style. No more juggling individual contractors."
- **One Contact** — "Direct line to Alex for every booking. No call centers, no junior reps, no relay games."
- **Predictable Quality** — "Every musician in the network has been auditioned and references-checked. Insured and contracted."

**Inline form**:
- `source="for-wedding-planners"`
- heading: `Let's talk about a partnership`
- messagePlaceholder: `Your business name, how many weddings you book per year, and the ensemble types you typically need…`

**REASONS** (planner-specific):
- "Same-day responses during business hours. We know your timelines are tight."
- "Standardized pricing structure — no surprise quotes mid-season."
- "Backup musician coverage built into every booking, in case of last-minute cancellations."
- "Direct invoicing and payment terms designed for planner workflows."

**Closing CTA**:
- Eyebrow: `Build A Long-Term Partnership`
- Headline: `Become a preferred partner.`
- CTA button: `Schedule An Intro Call` → `/contact`

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build passes.

**Step 3: Commit**

```bash
git add src/pages/ForWeddingPlanners.tsx
git commit -m "feat(seo): add /for-wedding-planners B2B landing page

Targets planners (referral partners) rather than end-couples.
Emphasizes: one roster, one contact, predictable quality, planner-
first workflow. Inline form tagged source=for-wedding-planners."
```

---

## Task 7: Build /hotel-music-boston page

**Files:**
- Create: `src/pages/HotelMusicBoston.tsx`

**Step 1: Write the page**

Same pattern as Task 5. Use:

- **Page title**: `Hotel & Restaurant Live Music Boston | XMA — Xhoja Music Agency`
- **Meta description**: `Refined live music for Boston hotel lobbies, fine dining rooms, and hospitality events. Recurring residencies or one-off bookings — vetted professional musicians.`
- **Eyebrow**: `Hotel & Hospitality Music`
- **Headline**: `Music for lobbies, dining rooms, and hospitality moments.`
- **Subhead**: `Refined, unobtrusive live music designed to elevate the room — for one-night events or recurring residencies.`

**Three use-case cards**:
- **Lobby Residencies** — "Weekly or seasonal pianist programs that give your lobby a signature sound. Set list curated to brand."
- **Dinner & Lounge** — "Solo piano, jazz duo, or trio that fills the room without overpowering conversation."
- **Private Hotel Events** — "Weddings, galas, corporate dinners hosted at your property — full event production available."

**Inline form**:
- `source="hotel-music-boston"`
- heading: `Tell us about your venue`
- messagePlaceholder: `Venue name, day-parts (lunch/dinner/lobby), and whether you're exploring residencies or one-off bookings…`

**REASONS** (hospitality-specific):
- "All musicians fully insured. We carry our own liability coverage."
- "Professionally dressed and briefed on your venue's atmosphere."
- "Recurring residencies billed monthly, no per-event paperwork."
- "Backup coverage included — if a musician cancels, we replace them same-day."

**Closing CTA**:
- Eyebrow: `Inquire About Residencies`
- Headline: `Schedule a venue conversation.`
- CTA button: `Discuss Your Venue` → `/events?ensemble=Hotel%20Music%20Inquiry`

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`

**Step 3: Commit**

```bash
git add src/pages/HotelMusicBoston.tsx
git commit -m "feat(seo): add /hotel-music-boston landing page

Targets hotel concierges and F&B directors. Use cases: lobby
residencies, dining, private hotel events. Inline form tagged
source=hotel-music-boston."
```

---

## Task 8: Build /senior-living-music page

**Files:**
- Create: `src/pages/SeniorLivingMusic.tsx`

**Step 1: Write the page**

Same pattern. Use:

- **Page title**: `Senior Living Music Programs Massachusetts | XMA — Xhoja Music Agency`
- **Meta description**: `Live music programming for senior communities across Greater Boston — regular concert series, holiday events, memory-care-friendly programs, intergenerational concerts.`
- **Eyebrow**: `Senior Living Music`
- **Headline**: `Music programming, designed with care.`
- **Subhead**: `Recurring concerts, holiday programming, and memory-care-friendly performances for senior communities across Greater Boston.`

**Three program-type cards**:
- **Regular Concert Series** — "Weekly, biweekly, or monthly programs. Consistent musicians your residents come to know."
- **Holiday & Seasonal** — "Christmas, Hanukkah, Mother's Day, Veterans Day — celebrations curated to the calendar."
- **Memory-Care Friendly** — "Familiar repertoire that resonates across generations. Specifically programmed for cognitive wellness."

**Inline form**:
- `source="senior-living-music"`
- heading: `Tell us about your community`
- messagePlaceholder: `Community name, frequency you're considering, and any program preferences (genre, holiday focus, etc.)…`

**REASONS** (senior-living specific):
- "Recurring programs scheduled in advance, billed monthly."
- "Repertoire matched to your residents' generation and preferences."
- "Memory-care programming designed in consultation with activity directors."
- "We work with you on annual programming calendars, not just one-off bookings."

**Closing CTA**:
- Eyebrow: `Plan Your Calendar`
- Headline: `Build a year of music together.`
- CTA button: `Schedule A Planning Call` → `/events?ensemble=Senior%20Living%20Program`

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`

**Step 3: Commit**

```bash
git add src/pages/SeniorLivingMusic.tsx
git commit -m "feat(seo): add /senior-living-music landing page

Targets activity directors at retirement / assisted living / memory
care communities. Program types: regular series, holidays, memory
care. Inline form tagged source=senior-living-music."
```

---

## Task 9: Wire routes in App.tsx

**Files:**
- Modify: `src/App.tsx`

**Step 1: Add imports**

In `src/App.tsx`, after the existing imports (around line 12), add:

```tsx
import WeddingMusicBoston from './pages/WeddingMusicBoston';
import ForWeddingPlanners from './pages/ForWeddingPlanners';
import HotelMusicBoston from './pages/HotelMusicBoston';
import SeniorLivingMusic from './pages/SeniorLivingMusic';
```

**Step 2: Add routes**

In `src/App.tsx`, immediately after the existing `<Route path="/payment-failed" element={<PaymentFailed />} />` line (line 57), and BEFORE the existing "Old Wix URL redirects" comment block, add:

```tsx
{/* SEO landing pages — Phase 1 */}
<Route path="/wedding-music-boston" element={<WeddingMusicBoston />} />
<Route path="/for-wedding-planners" element={<ForWeddingPlanners />} />
<Route path="/hotel-music-boston" element={<HotelMusicBoston />} />
<Route path="/senior-living-music" element={<SeniorLivingMusic />} />
```

**Step 3: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build passes. All 4 route paths recognized.

**Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat(seo): wire 4 landing page routes

Adds /wedding-music-boston, /for-wedding-planners, /hotel-music-boston,
/senior-living-music to router. Placed before legacy redirects so they
take precedence."
```

---

## Task 10: Update sitemap.xml with tiered priority

**Files:**
- Modify: `public/sitemap.xml`

**Step 1: Replace the entire file**

Overwrite `public/sitemap.xml` with:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Tier 1: primary conversion targets -->
  <url>
    <loc>https://www.xhojamusicagency.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.xhojamusicagency.com/ensembles</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.xhojamusicagency.com/wedding-music-boston</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.xhojamusicagency.com/events</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Tier 2: audience landing pages -->
  <url>
    <loc>https://www.xhojamusicagency.com/hotel-music-boston</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.xhojamusicagency.com/senior-living-music</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.xhojamusicagency.com/for-wedding-planners</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Tier 3: secondary pages -->
  <url>
    <loc>https://www.xhojamusicagency.com/lessons</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.xhojamusicagency.com/team</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Tier 4: utility -->
  <url>
    <loc>https://www.xhojamusicagency.com/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

**Step 2: Verify build**

Run: `cd ~/Documents/xma-website && npm run build`
Expected: Build passes. dist/sitemap.xml matches the updated file.

**Step 3: Commit**

```bash
git add public/sitemap.xml
git commit -m "feat(seo): restructure sitemap with tiered priority

Adds 4 new landing pages and assigns priority/changefreq per page
based on conversion-target tier. Wedding-music-boston gets priority
1.0 alongside the existing flagship pages."
```

---

## Task 11: Push branch + verify Vercel preview

**Files:** none (deployment task)

**Step 1: Push the branch**

```bash
cd ~/Documents/xma-website
git push -u origin seo-landing-pages-phase-1
```

Expected: Push succeeds. Vercel webhook fires.

**Step 2: Wait for Vercel preview deployment**

Vercel auto-deploys preview branches. Typical wait: 60–90 seconds.

Check Vercel dashboard at https://vercel.com/dashboard or wait for the GitHub status check on the branch.

Expected preview URL pattern: `https://xhoja-music-agency-git-seo-landing-pages-phase-1-[username].vercel.app/`

**Step 3: Verify all 4 pages load**

Open in browser and visually check:
- `/wedding-music-boston` — hero + 3 phases + form + reasons + CTA
- `/for-wedding-planners` — hero + 3 benefit cards + form + reasons + CTA
- `/hotel-music-boston` — hero + 3 use-case cards + form + reasons + CTA
- `/senior-living-music` — hero + 3 program-type cards + form + reasons + CTA

Also verify:
- Footer shows new "XMA = Xhoja Music Agency" line
- View page source on any new page — should see `"alternateName": "XMA"` in the JSON-LD
- `/sitemap.xml` — new sitemap is served

**Step 4: Final review with Alex**

Show Alex the preview URLs. Iterate on copy/design as needed. When approved → merge `seo-landing-pages-phase-1` into `main` to ship to production.

```bash
# When ready to merge (only after Alex approves preview)
git checkout main
git merge seo-landing-pages-phase-1
git push origin main
```

Vercel will auto-deploy main to production.

---

## Post-deployment (do these after the merge to main)

These belong in a follow-up session, NOT this implementation:

1. **Submit new URLs to Google Search Console** via URL Inspection → Request Indexing (one click per URL, takes 2 minutes total). This accelerates Google's discovery of the new pages.
2. **Update sitemap.xml in Search Console** (it's already auto-discovered via robots.txt, but ping it manually to refresh).
3. **Watch attribution** — check email inbox over 2-4 weeks for inquiries with `source=` tags to see which page is producing leads.
4. **Address the 307 → 301 redirect** for apex domain (separate task tracked in design doc).
5. **Plan Phase 2** — church, private events, b'nai mitzvah, funeral pages per the design doc.

/**
 * Single source of truth for FAQ content + FAQPage schema markup.
 *
 * Used by:
 *   - src/pages/Faq.tsx → renders the visible Q&A list
 *   - src/prerender.tsx → injects FAQPage JSON-LD into the <head> of /faq
 *
 * Mirrors the GBP Q&A seed (docs in marketing/gbp-qa-seed.md) so users see
 * consistent answers across Google search results and the website.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'How far in advance should I book live music for my wedding?',
    answer:
      'For peak season (May–October), we recommend reaching out 6–9 months ahead. Premium ensembles like our String Quartet and Grand Wedding Experience often book Saturdays 9–12 months out. Off-season weddings and smaller private events can usually be confirmed with 2–3 months notice. We will let you know exactly what is available for your date.',
  },
  {
    question: 'Do you book musicians for events outside Boston?',
    answer:
      'Yes — we serve the entire Greater Boston area and South Shore, including Cambridge, Brookline, Quincy, Newton, the North Shore, the South Shore, and Cape Cod. Travel beyond about 30 miles is factored into the final quote. We occasionally travel for destination events as well.',
  },
  {
    question: 'What is the typical cost to hire live music for a wedding?',
    answer:
      'Our most-booked ensembles range from $550 for a solo pianist or guitarist to $4,500 for our Grand Wedding Experience (ceremony, cocktail hour, and reception, fully curated). String quartets start at $2,400, cocktail duos at $950, and jazz or classical trios at $1,400. Every event is custom-quoted based on date, duration, and venue.',
  },
  {
    question: 'What types of ensembles do you offer?',
    answer:
      "Solo musicians (piano, guitar), duos (piano + vocals, piano + saxophone, and more), jazz and classical trios, string quartets, Latin jazz ensembles, Jewish ensembles for b'nai mitzvah and weddings, and DJ sets. We also build custom ensembles around any specific vision.",
  },
  {
    question: 'Do you have classical musicians, jazz musicians, and DJs?',
    answer:
      'All three. Our roster includes classical violinists, cellists, and pianists for ceremonies and refined dinners; jazz pianists, bassists, drummers, and vocalists for cocktail hours and receptions; and DJs for late-night programs. Many of our musicians are Berklee or conservatory-trained.',
  },
  {
    question: 'Can you put together a custom ensemble?',
    answer:
      'Yes. If you have a specific vision — a violin and flute duo for a garden ceremony, a piano-and-saxophone-and-percussion trio for a gala, anything in between — we design and rehearse the right group for it. Custom configurations are quoted individually.',
  },
  {
    question: 'How does the booking process work?',
    answer:
      'Three steps. (1) Inquire via the contact form, email, or phone — share your date, venue, and the kind of music you are imagining. (2) We propose the right ensemble and confirm by signed performance agreement. (3) Your musicians arrive prepared on the day. A deposit secures your date.',
  },
  {
    question: 'Can your musicians perform outdoors?',
    answer:
      'Yes — we play outdoor ceremonies and receptions regularly. We do ask for a covered or shaded performance area for the musicians (especially in heat or rain) and a level surface for instruments. Our team confirms setup needs with your venue ahead of time.',
  },
  {
    question: "What happens if a musician can't make it on the day?",
    answer:
      'Our network of 200+ contractors means we always have a vetted substitute ready in the same instrument family. We coordinate any replacement directly so you never have to scramble. Every confirmed XMA booking to date has been fulfilled.',
  },
  {
    question: 'Do you provide music for religious or cultural ceremonies?',
    answer:
      "Yes — we book for Catholic, Protestant, and Christian Orthodox ceremonies, Jewish weddings and b'nai mitzvah (we have a dedicated Jewish Ensemble), interfaith services, and cultural celebrations including Latin and other traditions. Tell us about the ceremony and we will match the right musicians.",
  },
];

/**
 * FAQPage structured data — Google reads this from the page <head> and may
 * show rich-result FAQ snippets in search results, significantly increasing
 * the visual footprint of an XMA listing in organic search.
 *
 * Spec: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 *
 * Pre-serialized as a JSON string so vite-prerender-plugin can drop it into a
 * <script type="application/ld+json"> tag via head.elements children prop.
 */
export const FAQ_PAGE_SCHEMA_JSON = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * Per-route SEO metadata used by the prerender script to inject proper
 * <title>, <meta description>, <link rel="canonical">, OG, and Twitter tags
 * into each prerendered HTML page.
 *
 * Mirrors the usePageTitle(title, description) call inside each page component.
 * Keep in sync when adding/changing page metadata client-side.
 */

const BASE_TITLE = 'Xhoja Music Agency';

export interface RouteMeta {
  /** Page title segment — joined as `${title} | ${BASE_TITLE}`. Omit for home. */
  title?: string;
  /** Meta description (also mirrored to OG + Twitter). */
  description: string;
}

const DEFAULT_DESCRIPTION =
  "Curated live music for events in Boston and Los Angeles. Founded by Alexander Xhoja, Berklee College of Music full-scholarship pianist.";

export const ROUTE_METADATA: Record<string, RouteMeta> = {
  '/': {
    title: 'Live Music for Events in Boston & Los Angeles',
    description:
      "XMA (Xhoja Music Agency) — curated live music for events in Boston and Los Angeles. Solo piano, jazz trios, string quartets, DJs, and full bands for weddings, corporate events, and private celebrations. Founded by Berklee pianist Alexander Xhoja.",
  },
  '/ensembles': {
    title: 'Book Live Musicians in Boston — Weddings, Galas, Events',
    description:
      "Boston live music for every event: wedding ceremonies, cocktail hours, corporate galas, donor dinners, b'nai mitzvah, and more. Solo piano, jazz trio, string quartet, DJ — fully curated by Xhoja Music Agency.",
  },
  '/events': {
    title: 'Event Bookings — Live Musicians for Hire in Boston',
    description:
      'Book live musicians for your wedding, corporate event, donor dinner, or private party in Boston. Request a personalized quote from Xhoja Music Agency — every ensemble tailored to your room, program, and guests.',
  },
  '/lessons': {
    title: 'Music Lessons in Boston — Piano, Guitar, Drums & More',
    description:
      'Private music lessons in Boston with Berklee-trained instructors. Piano, guitar, bass, drums, vocals, saxophone, and more — all skill levels. Book a trial lesson or full package online.',
  },
  '/team': {
    title: 'Meet The Team — Our Musicians',
    description:
      'Meet the Xhoja Music Agency roster — pianists, string players, jazz musicians, vocalists, and DJs performing at weddings, corporate events, and private celebrations across Boston and Los Angeles.',
  },
  '/contact': {
    title: 'Contact Us — Get in Touch',
    description:
      'Get in touch with Xhoja Music Agency. Email, phone, and a quick contact form for event bookings, partnerships, and general inquiries across Boston and Los Angeles.',
  },
  '/wedding-music-boston': {
    title: 'Live Wedding Music in Boston — Ceremony to Reception',
    description:
      'Live wedding music across Greater Boston — solo piano, string quartets, jazz trios, and DJs for ceremony, cocktail hour, and reception. Get a tailored quote.',
  },
  '/for-wedding-planners': {
    title: 'Wedding Planner Music Partner — Greater Boston',
    description:
      'A dependable music partner for Greater Boston wedding planners — one vetted roster, one point of contact, and reliable musicians for every wedding you book.',
  },
  '/hotel-music-boston': {
    title: 'Hotel & Restaurant Music Boston',
    description:
      'Refined live music for Boston hotel lobbies, fine dining rooms, and hospitality events. Recurring residencies or one-off bookings — vetted professional musicians.',
  },
  '/senior-living-music': {
    title: 'Senior Living Music Programs MA',
    description:
      'Live music programming for senior communities across Greater Boston — regular concert series, holiday events, memory-care-friendly programs, intergenerational concerts.',
  },
  '/church-music-boston': {
    title: 'Church Music Boston',
    description:
      'Live church music for Greater Boston congregations — Sunday service accompaniment, special services, weddings, and funerals. Substitute pianists and organists available on short notice.',
  },
  '/private-event-music-boston': {
    title: 'Private Event Music Boston',
    description:
      'Live music for private celebrations across Greater Boston — anniversaries, milestone birthdays, dinner parties, holiday gatherings. Solo piano, jazz trios, and chamber ensembles.',
  },
  '/bnai-mitzvah-music-boston': {
    title: "B'nai Mitzvah Music Boston",
    description:
      "Live music for b'nai mitzvah celebrations in Greater Boston — ceremony, cocktail hour, and reception. Traditional klezmer, Israeli music, contemporary repertoire, and a dedicated Jewish Ensemble.",
  },
  '/funeral-music-services': {
    title: 'Funeral & Memorial Music Services',
    description:
      'Live music for funeral and memorial services across Greater Boston — chapel, graveside, and celebrations of life. Musicians experienced in honoring meaningful moments.',
  },
  '/faq': {
    title: 'Frequently Asked Questions',
    description:
      'Common questions about hiring live musicians for weddings, corporate events, and private parties in Boston — pricing, lead times, ensemble options, custom configurations, and more.',
  },
  '/los-angeles': {
    title: 'Live Music in Los Angeles — By Appointment',
    description:
      'XMA — curated live music for Los Angeles events, by appointment. Founded and led by Berklee pianist Alexander Xhoja. A vetted West Coast roster, personal oversight on every booking, the same standard our East Coast clients trust.',
  },
  '/wedding-music-los-angeles': {
    title: 'Wedding Music Los Angeles',
    description:
      'Curated live music for Los Angeles weddings — solo piano, string quartets, jazz ensembles. By appointment with founder Alexander Xhoja, Berklee-trained pianist. Bookings accepted for select Los Angeles wedding dates.',
  },
};

/** Resolve metadata for a URL, falling back to defaults. */
export function getRouteMeta(url: string): { fullTitle: string; description: string } {
  const meta = ROUTE_METADATA[url];
  const fullTitle = meta?.title
    ? `${meta.title} | ${BASE_TITLE}`
    : `${BASE_TITLE} | Live Music for Events in Boston & Los Angeles`;
  return {
    fullTitle,
    description: meta?.description ?? DEFAULT_DESCRIPTION,
  };
}

/** List of canonical URLs to prerender (must match the sitemap.xml). */
export const PRERENDER_ROUTES = Object.keys(ROUTE_METADATA);

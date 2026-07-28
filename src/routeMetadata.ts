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
      'Curated live music for Boston & Los Angeles events — solo piano, jazz trios, string quartets, DJs, and bands for weddings, galas, and private parties.',
  },
  '/ensembles': {
    title: 'Book Live Musicians in Boston — Weddings, Galas, Events',
    description:
      'Boston live music for every event — solo piano, jazz trio, string quartet, and DJ for weddings, cocktail hours, corporate galas, and private celebrations.',
  },
  '/events': {
    title: 'Event Bookings — Live Musicians for Hire in Boston',
    description:
      'Book live musicians for your Boston wedding, corporate event, or private party. Get a personalized quote — every ensemble tailored to your event.',
  },
  '/team': {
    title: 'Meet The Team — Our Musicians',
    description:
      'Meet the Xhoja Music Agency roster — pianists, string players, jazz musicians, vocalists, and DJs for events across Boston and Los Angeles.',
  },
  '/contact': {
    title: 'Contact Us — Get in Touch',
    description:
      'Get in touch with Xhoja Music Agency — quick contact form, email, and phone for event bookings and partnerships in Boston and Los Angeles.',
  },
  '/wedding-music-boston': {
    title: 'Live Wedding Music in Boston — Ceremony to Reception',
    description:
      'Live wedding music in Greater Boston — solo piano, string quartets, jazz trios, and DJs for ceremony, cocktail hour, and reception. Get a tailored quote.',
  },
  '/for-wedding-planners': {
    title: 'Wedding Planner Music Partner — Greater Boston',
    description:
      'A dependable music partner for Greater Boston wedding planners — one vetted roster, one point of contact, and reliable musicians for every wedding.',
  },
  '/hotel-music-boston': {
    title: 'Hotel & Restaurant Music Boston',
    description:
      'Refined live music for Boston hotel lobbies, restaurants, and hospitality events — recurring residencies or one-off bookings by vetted musicians.',
  },
  '/senior-living-music': {
    title: 'Senior Living Music Programs MA',
    description:
      'Live music programming for Greater Boston senior communities — concert series, holiday events, and memory-care-friendly, intergenerational programs.',
  },
  '/church-music-boston': {
    title: 'Church Music Boston',
    description:
      'Live church music for Greater Boston congregations — Sunday services, special services, weddings, and funerals. Substitute pianists & organists available.',
  },
  '/private-event-music-boston': {
    title: 'Private Event Music Boston',
    description:
      'Live music for private celebrations across Greater Boston — anniversaries, birthdays, and dinner parties. Solo piano, jazz trios, and chamber ensembles.',
  },
  '/bnai-mitzvah-music-boston': {
    title: "B'nai Mitzvah Music Boston",
    description:
      "Live music for b'nai mitzvah celebrations in Greater Boston — ceremony, cocktail hour, and reception, with klezmer, Israeli, and contemporary repertoire.",
  },
  '/funeral-music-services': {
    title: 'Funeral & Memorial Music Services',
    description:
      'Live music for funeral and memorial services across Greater Boston — chapel, graveside, and celebrations of life, performed with care and experience.',
  },
  '/faq': {
    title: 'Frequently Asked Questions',
    description:
      'Common questions about hiring live musicians in Boston — pricing, lead times, ensemble options, custom configurations, and how booking works.',
  },
  '/los-angeles': {
    title: 'Live Music in Los Angeles — By Appointment',
    description:
      'Curated live music for Los Angeles events, by appointment — led by Berklee pianist Alexander Xhoja, with a vetted roster and personal oversight.',
  },
  '/wedding-music-los-angeles': {
    title: 'Wedding Music Los Angeles',
    description:
      'Curated live music for Los Angeles weddings — solo piano, string quartets, and jazz ensembles, by appointment with Berklee pianist Alexander Xhoja.',
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

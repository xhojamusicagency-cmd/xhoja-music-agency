/**
 * Server-side prerender entry — invoked by vite-prerender-plugin at build time.
 *
 * For each route in PRERENDER_ROUTES, this renders the React tree using
 * StaticRouter + renderToString and returns:
 *   - html: the rendered body for #root
 *   - head: per-page title, meta description, canonical URL, and OG/Twitter tags
 *
 * The result is injected into a copy of index.html and written as a static .html
 * file at the route's path (e.g. /ensembles -> dist/ensembles/index.html).
 *
 * Google's first crawl pass now sees fully-formed HTML instead of an empty SPA shell.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Layout from './components/Layout';
import AppRoutes from './AppRoutes';
import { getRouteMeta, PRERENDER_ROUTES, ROUTE_METADATA } from './routeMetadata';
import { FAQ_PAGE_SCHEMA_JSON } from './data/faqContent';

/**
 * Service-schema metadata for the service/landing pages. Injected as schema.org
 * `Service` JSON-LD so Google understands each page's offering + service area.
 */
const SERVICE_META: Record<string, { name: string; serviceType: string; area: string }> = {
  '/wedding-music-boston': { name: 'Live Wedding Music', serviceType: 'Wedding music', area: 'Boston' },
  '/hotel-music-boston': { name: 'Hotel & Restaurant Music', serviceType: 'Hospitality music', area: 'Boston' },
  '/senior-living-music': { name: 'Senior Living Music Programs', serviceType: 'Senior community music programming', area: 'Greater Boston' },
  '/church-music-boston': { name: 'Church Music', serviceType: 'Church & liturgical music', area: 'Boston' },
  '/private-event-music-boston': { name: 'Private Event Music', serviceType: 'Private event music', area: 'Boston' },
  '/bnai-mitzvah-music-boston': { name: "B'nai Mitzvah Music", serviceType: "B'nai mitzvah music", area: 'Boston' },
  '/funeral-music-services': { name: 'Funeral & Memorial Music', serviceType: 'Funeral & memorial music', area: 'Greater Boston' },
  '/wedding-music-los-angeles': { name: 'Live Wedding Music', serviceType: 'Wedding music', area: 'Los Angeles' },
};

interface PrerenderData {
  url: string;
}

interface PrerenderResult {
  html: string;
  links?: Set<string>;
  head: {
    lang: string;
    title: string;
    elements: Set<{ type: string; props: Record<string, string> }>;
  };
}

export async function prerender(data: PrerenderData): Promise<PrerenderResult> {
  const html = renderToString(
    <StaticRouter location={data.url}>
      <Layout>
        <AppRoutes />
      </Layout>
    </StaticRouter>
  );

  const { fullTitle, description } = getRouteMeta(data.url);
  const canonical = `https://www.xhojamusicagency.com${data.url === '/' ? '' : data.url}`;

  // Per-page <head> tags. The plugin merges these into the document head,
  // overriding any same-key tags already in index.html.
  const headElements = new Set<{ type: string; props: Record<string, string> }>([
    { type: 'meta', props: { name: 'description', content: description } },
    { type: 'meta', props: { property: 'og:title', content: fullTitle } },
    { type: 'meta', props: { property: 'og:description', content: description } },
    { type: 'meta', props: { property: 'og:url', content: canonical } },
    { type: 'meta', props: { name: 'twitter:title', content: fullTitle } },
    { type: 'meta', props: { name: 'twitter:description', content: description } },
    { type: 'link', props: { rel: 'canonical', href: canonical } },
  ]);

  // FAQPage structured data is route-specific: only inject on /faq so Google
  // associates the schema with the dedicated FAQ page. The plugin renders this
  // as <script type="application/ld+json">...</script> in the prerendered <head>.
  if (data.url === '/faq') {
    headElements.add({
      type: 'script',
      props: {
        type: 'application/ld+json',
        children: FAQ_PAGE_SCHEMA_JSON,
      },
    });
  }

  // BreadcrumbList on every non-home page (Home > Page) — richer SERP display + crawl context.
  if (data.url !== '/') {
    const pageName = ROUTE_METADATA[data.url]?.title ?? fullTitle;
    headElements.add({
      type: 'script',
      props: {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.xhojamusicagency.com' },
            { '@type': 'ListItem', position: 2, name: pageName, item: canonical },
          ],
        }),
      },
    });
  }

  // Service schema on the service/landing pages — tells Google the offering + service area.
  const svc = SERVICE_META[data.url];
  if (svc) {
    headElements.add({
      type: 'script',
      props: {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `${svc.name} in ${svc.area}`,
          serviceType: svc.serviceType,
          provider: { '@type': 'LocalBusiness', name: 'Xhoja Music Agency', '@id': 'https://www.xhojamusicagency.com' },
          areaServed: { '@type': 'Place', name: svc.area },
          url: canonical,
        }),
      },
    });
  }

  return {
    html,
    // Seed the crawl with the full canonical list so every page gets prerendered
    // even if it isn't linked from the home page navigation.
    links: new Set(PRERENDER_ROUTES),
    head: {
      lang: 'en',
      title: fullTitle,
      elements: headElements,
    },
  };
}

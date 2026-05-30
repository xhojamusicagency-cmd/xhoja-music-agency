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
import { getRouteMeta, PRERENDER_ROUTES } from './routeMetadata';
import { FAQ_PAGE_SCHEMA_JSON } from './data/faqContent';

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

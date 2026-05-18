import { useEffect } from 'react';

const BASE_TITLE = 'Xhoja Music Agency';
const DEFAULT_DESCRIPTION =
  'Customized music lessons and professional event bookings in Boston, MA. Founded by Alexander Xhoja, Berklee College of Music full-scholarship pianist.';

/**
 * Sets the document title and meta description for a page.
 * - `pageTitle` becomes `{pageTitle} | Xhoja Music Agency`
 * - `description` overrides the default meta description for SEO
 * Also updates Open Graph + Twitter description tags so the page renders well when shared.
 */
export default function usePageTitle(pageTitle?: string, description?: string) {
  useEffect(() => {
    // Title
    document.title = pageTitle
      ? `${pageTitle} | ${BASE_TITLE}`
      : `${BASE_TITLE} | Music Lessons & Event Bookings in Boston`;

    // Meta description (and OG/Twitter mirrors)
    const desc = description || DEFAULT_DESCRIPTION;
    const tags: Array<[string, string]> = [
      ['name', 'description'],
      ['property', 'og:description'],
      ['name', 'twitter:description'],
    ];
    tags.forEach(([attr, key]) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', desc);
    });

    // Mirror the page title to Open Graph + Twitter title too
    const fullTitle = pageTitle
      ? `${pageTitle} | ${BASE_TITLE}`
      : `${BASE_TITLE} | Music Lessons & Event Bookings in Boston`;
    ['og:title', 'twitter:title'].forEach((key) => {
      const attr = key.startsWith('og:') ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', fullTitle);
    });

    // Canonical URL — helps Google de-dupe
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.xhojamusicagency.com${window.location.pathname}`);
  }, [pageTitle, description]);
}

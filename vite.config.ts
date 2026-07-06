import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

// Routes to prerender at build time. Must match sitemap.xml content URLs.
// Each becomes a static dist/<path>/index.html with fully-rendered HTML so
// Google's first crawl pass sees real content instead of an empty SPA shell.
const PRERENDER_ROUTES = [
  '/',
  '/ensembles',
  '/events',
  '/team',
  '/contact',
  '/wedding-music-boston',
  '/for-wedding-planners',
  '/hotel-music-boston',
  '/senior-living-music',
  '/church-music-boston',
  '/private-event-music-boston',
  '/bnai-mitzvah-music-boston',
  '/funeral-music-services',
  '/faq',
  '/los-angeles',
  '/wedding-music-los-angeles',
]

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      additionalPrerenderRoutes: PRERENDER_ROUTES,
    }),
  ],
})

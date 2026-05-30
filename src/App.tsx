import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import AppRoutes from './AppRoutes';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Internal-visitor flag is set by the inline script in index.html; re-read it here
// so the React side (Vercel Analytics + route-change gtag pings) also respects it.
const IS_INTERNAL_VISITOR =
  typeof window !== 'undefined' &&
  (() => {
    try {
      return localStorage.getItem('xma_internal_visitor') === 'true';
    } catch {
      return false;
    }
  })();

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Allow hash-based navigation to scroll to the target element
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
    // Track page view in Google Analytics on every route change (skip if internal visitor)
    if (window.gtag && !IS_INTERNAL_VISITOR) {
      window.gtag('config', 'G-QHEDYQZCQD', { page_path: pathname });
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
      {!IS_INTERNAL_VISITOR && <Analytics />}
    </Router>
  );
}

export default App;

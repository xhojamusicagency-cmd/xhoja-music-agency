import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ensembles from './pages/Ensembles';
import Events from './pages/Events';
import Lessons from './pages/Lessons';
import Team from './pages/Team';
import Contact from './pages/Contact';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';
import WeddingMusicBoston from './pages/WeddingMusicBoston';
import ForWeddingPlanners from './pages/ForWeddingPlanners';
import HotelMusicBoston from './pages/HotelMusicBoston';
import SeniorLivingMusic from './pages/SeniorLivingMusic';
import ChurchMusicBoston from './pages/ChurchMusicBoston';
import PrivateEventMusicBoston from './pages/PrivateEventMusicBoston';
import BnaiMitzvahMusicBoston from './pages/BnaiMitzvahMusicBoston';
import FuneralMusicServices from './pages/FuneralMusicServices';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

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
    // Track page view in Google Analytics on every route change
    if (window.gtag) {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ensembles" element={<Ensembles />} />
          <Route path="/book" element={<Navigate to="/ensembles" replace />} />
          <Route path="/events" element={<Events />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/team" element={<Team />} />
          <Route path="/meet-the-team" element={<Navigate to="/team" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          {/* SEO landing pages — Phase 1 */}
          <Route path="/wedding-music-boston" element={<WeddingMusicBoston />} />
          <Route path="/for-wedding-planners" element={<ForWeddingPlanners />} />
          <Route path="/hotel-music-boston" element={<HotelMusicBoston />} />
          <Route path="/senior-living-music" element={<SeniorLivingMusic />} />
          {/* SEO landing pages — Phase 2 */}
          <Route path="/church-music-boston" element={<ChurchMusicBoston />} />
          <Route path="/private-event-music-boston" element={<PrivateEventMusicBoston />} />
          <Route path="/bnai-mitzvah-music-boston" element={<BnaiMitzvahMusicBoston />} />
          <Route path="/funeral-music-services" element={<FuneralMusicServices />} />
          {/* Old Wix URL redirects — every URL Google has indexed from the old site */}
          <Route path="/copy-of-instructors" element={<Navigate to="/lessons" replace />} />
          <Route path="/pricing-plans/*" element={<Navigate to="/lessons" replace />} />
          <Route path="/biography/*" element={<Navigate to="/team" replace />} />
          <Route path="/copy-of-base-lessons-1" element={<Navigate to="/lessons" replace />} />
          <Route path="/copy-of-drum-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/contact-8" element={<Navigate to="/contact" replace />} />
          <Route path="/instructors" element={<Navigate to="/lessons" replace />} />
          {/* SEO-friendly redirects */}
          <Route path="/trumpet-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/piano-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/guitar-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/drum-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/vocal-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/music-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/clarinet-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/alexanders-bio" element={<Navigate to="/team" replace />} />
          <Route path="/alexander-xhoja" element={<Navigate to="/team" replace />} />
          <Route path="/bio" element={<Navigate to="/team" replace />} />
          <Route path="/event-bookings" element={<Navigate to="/events" replace />} />
          <Route path="/book-event" element={<Navigate to="/events" replace />} />
          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      {/* Vercel Analytics — zero-config, no cookies, GDPR-safe page-view + speed metrics */}
      <Analytics />
    </Router>
  );
}

export default App;



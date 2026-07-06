import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Ensembles from './pages/Ensembles';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import WeddingMusicBoston from './pages/WeddingMusicBoston';
import ForWeddingPlanners from './pages/ForWeddingPlanners';
import HotelMusicBoston from './pages/HotelMusicBoston';
import SeniorLivingMusic from './pages/SeniorLivingMusic';
import ChurchMusicBoston from './pages/ChurchMusicBoston';
import PrivateEventMusicBoston from './pages/PrivateEventMusicBoston';
import BnaiMitzvahMusicBoston from './pages/BnaiMitzvahMusicBoston';
import FuneralMusicServices from './pages/FuneralMusicServices';
import Faq from './pages/Faq';
import LosAngeles from './pages/LosAngeles';
import WeddingMusicLosAngeles from './pages/WeddingMusicLosAngeles';

/**
 * Shared route definitions used by BOTH the client App and the prerender script.
 * Wrap this in BrowserRouter (client) or StaticRouter (prerender) at the call site.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ensembles" element={<Ensembles />} />
      <Route path="/book" element={<Navigate to="/ensembles" replace />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/meet-the-team" element={<Navigate to="/team" replace />} />
      <Route path="/contact" element={<Contact />} />
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
      {/* FAQ page — paired with FAQPage JSON-LD schema injected via prerender for rich results */}
      <Route path="/faq" element={<Faq />} />
      {/* Los Angeles expansion — new West Coast presence, by appointment as roster grows */}
      <Route path="/los-angeles" element={<LosAngeles />} />
      <Route path="/wedding-music-los-angeles" element={<WeddingMusicLosAngeles />} />
      <Route path="/la" element={<Navigate to="/los-angeles" replace />} />
      {/* Old Wix URL redirects — every URL Google has indexed from the old site */}
      <Route path="/copy-of-instructors" element={<Navigate to="/" replace />} />
      <Route path="/pricing-plans/*" element={<Navigate to="/" replace />} />
      <Route path="/biography/*" element={<Navigate to="/team" replace />} />
      <Route path="/copy-of-base-lessons-1" element={<Navigate to="/" replace />} />
      <Route path="/copy-of-drum-lessons" element={<Navigate to="/" replace />} />
      <Route path="/contact-8" element={<Navigate to="/contact" replace />} />
      <Route path="/instructors" element={<Navigate to="/" replace />} />
      {/* SEO-friendly redirects */}
      <Route path="/trumpet-lessons" element={<Navigate to="/" replace />} />
      <Route path="/piano-lessons" element={<Navigate to="/" replace />} />
      <Route path="/guitar-lessons" element={<Navigate to="/" replace />} />
      <Route path="/drum-lessons" element={<Navigate to="/" replace />} />
      <Route path="/vocal-lessons" element={<Navigate to="/" replace />} />
      <Route path="/music-lessons" element={<Navigate to="/" replace />} />
      <Route path="/clarinet-lessons" element={<Navigate to="/" replace />} />
      <Route path="/alexanders-bio" element={<Navigate to="/team" replace />} />
      <Route path="/alexander-xhoja" element={<Navigate to="/team" replace />} />
      <Route path="/bio" element={<Navigate to="/team" replace />} />
      <Route path="/event-bookings" element={<Navigate to="/events" replace />} />
      <Route path="/book-event" element={<Navigate to="/events" replace />} />
      {/* Catch-all redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Lessons from './pages/Lessons';
import Team from './pages/Team';
import Contact from './pages/Contact';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';

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
          <Route path="/events" element={<Events />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/team" element={<Team />} />
          <Route path="/meet-the-team" element={<Navigate to="/team" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          {/* SEO-friendly redirects for Google sitelinks */}
          <Route path="/trumpet-lessons" element={<Navigate to="/lessons#instructors" replace />} />
          <Route path="/piano-lessons" element={<Navigate to="/lessons#instructors" replace />} />
          <Route path="/guitar-lessons" element={<Navigate to="/lessons#instructors" replace />} />
          <Route path="/drum-lessons" element={<Navigate to="/lessons#instructors" replace />} />
          <Route path="/vocal-lessons" element={<Navigate to="/lessons#instructors" replace />} />
          <Route path="/music-lessons" element={<Navigate to="/lessons" replace />} />
          <Route path="/alexanders-bio" element={<Navigate to="/team#bio-1" replace />} />
          <Route path="/alexander-xhoja" element={<Navigate to="/team#bio-1" replace />} />
          <Route path="/bio" element={<Navigate to="/team" replace />} />
          <Route path="/event-bookings" element={<Navigate to="/events" replace />} />
          <Route path="/book-event" element={<Navigate to="/events" replace />} />
          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;



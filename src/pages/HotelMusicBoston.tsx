import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'How do lobby residencies typically work?',
    answer: 'Residencies are recurring weekly or monthly programs — same musician, same day, same time. Most of our hotel partners start with a six-week trial and convert to ongoing programs. We handle scheduling, substitutions, and seasonal repertoire updates without you having to manage anything.',
  },
  {
    question: 'Can we customize the music to match our venue brand?',
    answer: 'Yes — set lists are designed in consultation with your team. We have programmed for boutique hotels, fine-dining rooms, and corporate-style lobbies, and the musical direction adjusts to each. We will send a sample repertoire for your sign-off before the first performance.',
  },
  {
    question: 'How do you handle venue insurance and COI requirements?',
    answer: 'Insurance requirements vary by venue. Many hotel and fine-dining venues are covered under their own property-level event insurance, which extends to contracted performers. For venues requiring additional musician-level documentation, we coordinate case-by-case to meet your specific requirements before the booking is confirmed.',
  },
  {
    question: 'What is your cancellation and substitution policy?',
    answer: 'If a musician cannot perform, we replace them same-day from our vetted understudy bench. Your guests never notice. If your venue needs to cancel a performance, we ask for 48 hours notice when possible — cancellations within that window are billed at 50 percent.',
  },
  {
    question: 'How is pricing structured?',
    answer: 'Residencies are priced per-hour with multi-event discounts based on the ensemble, frequency, and duration. We quote your specific situation transparently — no surprise fees, no markup on travel within Greater Boston.',
  },
];

const USE_CASES = [
  {
    label: 'Lobby Residencies',
    text: 'Weekly or seasonal pianist programs that give your lobby a signature sound. Set list curated to your brand and clientele.',
  },
  {
    label: 'Dinner & Lounge',
    text: 'Solo piano, jazz duo, or trio that fills the room without overpowering conversation. Designed for fine dining and bar service.',
  },
  {
    label: 'Private Hotel Events',
    text: 'Weddings, galas, corporate dinners hosted at your property — full event production available, coordinated with your team.',
  },
];

const REASONS = [
  'Vetted professional musicians with significant hotel, fine-dining, and corporate venue experience.',
  'Professionally dressed and briefed on your venue\'s atmosphere and dress code.',
  'Transparent per-event invoicing through Clover — deposit + balance. Multi-event residency packages available.',
  'Backup coverage included — if a musician cancels, we replace them same-day.',
];

export default function HotelMusicBoston() {
  usePageTitle(
    'Hotel & Restaurant Music Boston',
    'Refined live music for Boston hotel lobbies, fine dining rooms, and hospitality events. Recurring residencies or one-off bookings — vetted professional musicians.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Hotel & Hospitality Music"
        headline="Music for lobbies, dining rooms, and hospitality moments."
        subhead="Refined, unobtrusive live music designed to elevate the room — for one-night events or recurring residencies."
        backgroundImage="/duo-performance.jpg"
      />

      {/* Three use cases */}
      <section className="bg-cream-light pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {USE_CASES.map((u, i) => (
              <div key={u.label} className="text-center">
                <div className="text-gold font-serif italic text-3xl mb-3">0{i + 1}</div>
                <div className="w-10 h-px bg-gold mx-auto mb-5"></div>
                <h3 className="font-serif text-[22px] mb-4 tracking-[0.3px] text-dark">{u.label}</h3>
                <p className="font-serif italic text-[15px] text-gray-500 leading-[1.7]">{u.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/ensembles"
              className="inline-flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 font-medium hover:text-gold transition-colors"
            >
              See All Ensembles
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <InlineLeadForm
        source="hotel-music-boston"
        heading="Tell us about your venue"
        subheading="A quick note is enough — we will reply within one business day."
        messagePlaceholder="Venue name, day-parts (lunch / dinner / lobby), and whether you're exploring residencies or one-off bookings…"
      />

      {/* Why XMA for hospitality */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Built For Hospitality Operators</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              Reliable, professional, low-friction.
            </h2>
          </div>
          <ul className="space-y-6">
            {REASONS.map((reason, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span className="text-gold font-serif italic text-2xl shrink-0">0{i + 1}</span>
                <p className="font-serif italic text-[15px] md:text-[16px] text-gray-600 leading-[1.7] pt-1">{reason}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        eyebrow="Operator Questions"
        headline="What hospitality teams ask us."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Inquire About Residencies</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Schedule a venue conversation.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Tell us about your property and we will recommend the right ensemble and program for the room.
          </p>
          <Link
            to="/events?ensemble=Hotel%20Music%20Inquiry"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Discuss Your Venue
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

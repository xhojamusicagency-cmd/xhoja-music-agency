import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'How far in advance should we book wedding music?',
    answer: 'Most couples book us 6 to 12 months ahead, especially for weddings in May through October. We do accommodate shorter timelines when our roster has availability — reach out and we will tell you within one business day what is possible for your date.',
  },
  {
    question: 'Can we choose specific songs and request custom arrangements?',
    answer: 'Yes — we build a personalized music plan with every couple. That includes ceremony processional, recessional, first dance, parent dances, and any meaningful songs you want featured. Our musicians can also arrange custom versions of songs that are not in the standard repertoire.',
  },
  {
    question: 'Do you handle the ceremony, cocktail hour, and reception with one booking?',
    answer: 'Yes. The Grand Wedding Experience is designed exactly for that — one curated team across all three phases, with smooth transitions between ensembles. You get one contract, one point of contact, and a music plan that flows from processional to last dance.',
  },
  {
    question: 'What happens if a musician cancels last minute?',
    answer: 'Backup coverage is built into every booking. Every musician on the XMA roster has a vetted understudy who can step in same-day. You will never be left without music on your wedding day.',
  },
  {
    question: 'Do you travel outside Boston?',
    answer: 'Yes. We serve weddings across Greater Boston, the South Shore, Cape Cod, the North Shore, and much of New England. Travel fees apply for venues more than 45 minutes from Boston — we will quote them transparently up front.',
  },
];

const PHASES = [
  {
    label: 'Ceremony',
    text: 'String quartet, solo piano, or harp for processional, ceremony, and recessional. Music tailored to your venue and program.',
  },
  {
    label: 'Cocktail Hour',
    text: 'Jazz trio, solo piano, or a cocktail duo — refined sound that fills the room without overpowering conversation.',
  },
  {
    label: 'Reception',
    text: 'Live band or curated DJ — energy that builds through dinner, toasts, and the dance floor late into the night.',
  },
];

const REASONS = [
  'One curated team for ceremony, cocktail hour, and reception — designed to feel seamless across the day.',
  'Vetted, professional musicians from the Greater Boston region. Insured, punctual, and dressed for the room.',
  'Tailored repertoire — every song matched to your venue, program, and guests. We listen first.',
  'Direct contact with Alex throughout planning. No call centers, no junior staff.',
];

export default function WeddingMusicBoston() {
  usePageTitle(
    'Live Wedding Music in Boston — Ceremony to Reception',
    'Live wedding music across Greater Boston — solo piano, string quartets, jazz trios, and DJs for ceremony, cocktail hour, and reception. Get a tailored quote.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Wedding Music In Boston"
        headline="Live music for every moment of your day."
        subhead="From the first note of the processional to the last song of the night — one curated team, one seamless experience."
        backgroundImage="/wedding-reception.jpg"
        imagePosition="center top"
      />

      {/* Three phases */}
      <section className="bg-cream-light pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className="text-center">
                <div className="text-gold font-serif italic text-3xl mb-3">0{i + 1}</div>
                <div className="w-10 h-px bg-gold mx-auto mb-5"></div>
                <h3 className="font-serif text-[22px] mb-4 tracking-[0.3px] text-dark">{phase.label}</h3>
                <p className="font-serif italic text-[15px] text-gray-500 leading-[1.7]">{phase.text}</p>
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
        source="wedding-music-boston"
        heading="Tell us about your wedding"
        subheading="A quick note is enough — we will reply within one business day."
        messagePlaceholder="Wedding date, venue, guest count, ceremony style, and anything else you want us to know…"
      />

      {/* Why XMA */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Why XMA For Weddings</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              The thinking behind every booking.
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
        eyebrow="Common Questions"
        headline="What couples ask us most."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Ready To Talk?</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Schedule a wedding consultation.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share your date and we will walk you through ensemble options, pricing, and the planning timeline.
          </p>
          <Link
            to="/events?ensemble=The%20Grand%20Wedding%20Experience"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Start The Conversation
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Wedding planner cross-link */}
      <section className="bg-cream-light py-10 border-t border-gold/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif italic text-[15px] text-gray-500 leading-[1.7]">
            Planning weddings professionally?{' '}
            <Link
              to="/for-wedding-planners"
              className="not-italic text-dark border-b border-gold pb-0.5 hover:text-gold transition-colors"
            >
              See how XMA partners with wedding planners →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

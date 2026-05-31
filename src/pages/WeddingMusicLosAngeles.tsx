import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'How do I book XMA for a Los Angeles wedding?',
    answer:
      'Send us a note through the form on this page or email Alex directly at xhojamusicagency@gmail.com. Every Los Angeles wedding inquiry is reviewed personally by founder Alexander Xhoja — you will hear back within one business day with ensemble options and a transparent quote.',
  },
  {
    question: 'How far in advance should we book wedding music in LA?',
    answer:
      'Sixty to ninety days minimum for most LA weddings; longer for high season (May–October). Shorter timelines are accepted based on roster availability — reach out and we will tell you within one business day what is possible for your date.',
  },
  {
    question: 'What ensemble configurations work best for LA weddings?',
    answer:
      'For ceremonies — solo piano, string trio or quartet, harp. For cocktail hour — jazz duo or trio, solo piano, classical guitar. For receptions, we curate based on venue and program. Every booking is built to the room and the moment, not to a fixed package.',
  },
  {
    question: 'Can we request specific songs and custom arrangements?',
    answer:
      'Yes — we build a personalized music plan with every couple. Processional, recessional, first dance, parent dances, meaningful songs throughout the night. Our musicians can prepare custom arrangements of songs that aren\'t in the standard repertoire.',
  },
  {
    question: 'What if we want a specific musician profile?',
    answer:
      'Tell us what matters — instrument, repertoire focus, vibe, any specifics about the room or guests. Because every LA booking is reviewed personally by Alex, we can match a musician with intention rather than picking from a generic catalog.',
  },
];

const PHASES = [
  {
    label: 'Ceremony',
    text: 'Solo piano, harp, or string ensemble for processional and recessional. Music chosen to match your venue and your moment — outdoor or indoor, intimate or grand.',
  },
  {
    label: 'Cocktail Hour',
    text: 'Jazz duo, solo piano, or a curated trio — refined sound that fills the room without overpowering conversation. The hour your guests will remember as effortlessly elegant.',
  },
  {
    label: 'Reception',
    text: 'Live ensemble or a curated DJ — energy that builds through dinner, toasts, and the dance floor. Tailored to your guests, your program, and the venue\'s acoustics.',
  },
];

const REASONS = [
  'Personal oversight from founder Alexander Xhoja on every Los Angeles wedding booking.',
  'A curated West Coast roster — vetted musicians, hand-selected for craft and professionalism.',
  'Tailored repertoire and custom arrangements built around your story — not a generic wedding playlist.',
  'Boston-founded music agency with five years of refined event experience now serving Los Angeles couples.',
];

export default function WeddingMusicLosAngeles() {
  usePageTitle(
    'Wedding Music Los Angeles | XMA',
    'Curated live music for Los Angeles weddings — solo piano, string quartets, jazz ensembles. By appointment with founder Alexander Xhoja, Berklee-trained pianist. Bookings accepted for select Los Angeles wedding dates.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Wedding Music In Los Angeles"
        headline="Live music, by appointment, for select Los Angeles weddings."
        subhead="From the first note of the processional to the last song of the night — one curated team, personally overseen by Berklee-trained founder Alexander Xhoja."
      />

      {/* Three phases */}
      <section className="bg-cream-light pt-4 pb-16 md:pb-20">
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
              to="/los-angeles"
              className="inline-flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 font-medium hover:text-gold transition-colors"
            >
              More About Our Los Angeles Service
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <InlineLeadForm
        source="wedding-music-los-angeles"
        heading="Tell us about your Los Angeles wedding"
        subheading="A quick note is enough — Alex personally reviews every LA wedding inquiry and replies within one business day."
        messagePlaceholder="Wedding date, venue, guest count, ceremony style, and anything else you want us to know…"
      />

      {/* Why XMA */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Why XMA For LA Weddings</p>
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
        headline="What LA couples ask us most."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Los Angeles · By Appointment</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Schedule a wedding consultation.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share your date and we will walk you through ensemble options, pricing, and the planning timeline.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Start The Conversation
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

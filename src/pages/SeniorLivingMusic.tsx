import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'How do you tailor programs for memory care residents?',
    answer: 'Memory care programs draw from a repertoire that resonates across generations — standards from the 1940s through 1960s, well-known classical pieces, holiday favorites, and sing-along folk songs. Tempos are gentler, transitions are slower, and musicians are trained to engage warmly without overwhelming. We work with your activity director to refine the program over time.',
  },
  {
    question: 'Can we set up a recurring monthly program?',
    answer: 'Yes — recurring programs are the heart of what we do for senior communities. Most partners book weekly, biweekly, or monthly programs scheduled a year in advance. You get the same musician your residents come to recognize, with consistent programming that builds engagement over time.',
  },
  {
    question: 'What does pricing look like for senior community programs?',
    answer: 'Recurring programs are priced per visit with multi-month discounts based on ensemble size, program style, and visit frequency. We quote pricing transparently up front and invoice per visit through Clover — no surprise charges, fully itemized.',
  },
  {
    question: 'Do you handle holiday and special-occasion programming?',
    answer: 'Yes — Christmas and Hanukkah, Veterans Day, Mother and Father Day, Valentine sing-alongs, Independence Day. We help you plan an annual calendar so the right repertoire is ready for each occasion, including any traditions specific to your community.',
  },
  {
    question: 'Can family members or staff request specific songs?',
    answer: 'Always — and we encourage it. The most meaningful moments often come from a granddaughter requesting her grandmother\'s favorite song. Send requests ahead of time and our musicians will prepare them.',
  },
];

const PROGRAM_TYPES = [
  {
    label: 'Regular Concert Series',
    text: 'Weekly, biweekly, or monthly programs. Consistent musicians your residents come to recognize and look forward to.',
  },
  {
    label: 'Holiday & Seasonal',
    text: 'Christmas, Hanukkah, Mother\'s Day, Veterans Day — celebrations curated to your calendar and traditions.',
  },
  {
    label: 'Memory-Care Friendly',
    text: 'Familiar repertoire that resonates across generations. Programs designed specifically for cognitive wellness and engagement.',
  },
];

const REASONS = [
  'Recurring programs scheduled a year in advance — per-visit invoicing through Clover with transparent pricing.',
  'Repertoire matched to your residents\' generation and musical preferences.',
  'Memory-care programming designed in consultation with activity directors.',
  'We work with you on annual programming calendars, not just one-off bookings.',
];

export default function SeniorLivingMusic() {
  usePageTitle(
    'Senior Living Music Programs MA',
    'Live music programming for senior communities across Greater Boston — regular concert series, holiday events, memory-care-friendly programs, intergenerational concerts.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Senior Living Music"
        headline="Music programming, designed with care."
        subhead="Recurring concerts, holiday programming, and memory-care-friendly performances for senior communities across Greater Boston."
        backgroundImage="/string-trio-placeholder.jpg"
      />

      {/* Three program types */}
      <section className="bg-cream-light pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {PROGRAM_TYPES.map((p, i) => (
              <div key={p.label} className="text-center">
                <div className="text-gold font-serif italic text-3xl mb-3">0{i + 1}</div>
                <div className="w-10 h-px bg-gold mx-auto mb-5"></div>
                <h3 className="font-serif text-[22px] mb-4 tracking-[0.3px] text-dark">{p.label}</h3>
                <p className="font-serif italic text-[15px] text-gray-500 leading-[1.7]">{p.text}</p>
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
        source="senior-living-music"
        heading="Tell us about your community"
        subheading="A quick note is enough — we will reply within one business day."
        messagePlaceholder="Community name, frequency you're considering, and any program preferences (genre, holiday focus, memory care, etc.)…"
      />

      {/* Why XMA for senior living */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Built For Activity Directors</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              Programming that builds over time.
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
        eyebrow="Director Questions"
        headline="What activity directors ask us."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Plan Your Calendar</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Build a year of music together.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share your community and goals, and we will design a programming calendar tailored to your residents.
          </p>
          <Link
            to="/events?ensemble=Senior%20Living%20Program"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Schedule A Planning Call
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

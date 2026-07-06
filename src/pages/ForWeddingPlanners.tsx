import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'What does a preferred-partner relationship include?',
    answer: 'Preferred planners get priority date holds, a direct line to Alex for every inquiry, standardized pricing across the calendar year, and first access to new ensembles we add to the roster. No formal contract — the relationship is built on consistent good work for both sides.',
  },
  {
    question: 'How quickly can you confirm availability during planning season?',
    answer: 'Within one business day. We know your timelines are tight and your clients are waiting. If we cannot confirm an ensemble immediately, we will tell you within 24 hours what is possible.',
  },
  {
    question: 'Can we request specific musicians from your roster?',
    answer: 'Absolutely. Many of our planner partners have favorite musicians they book repeatedly. We honor those preferences whenever schedules align, and we will introduce you to new roster members as we add them.',
  },
  {
    question: 'How does invoicing work for repeat bookings?',
    answer: 'We invoice per event through Clover: a deposit at booking to lock the date, balance due before the event. Invoices are itemized and built for easy passthrough to your clients. No surprise fees, no last-minute change orders.',
  },
  {
    question: 'What if a musician cancels right before an event?',
    answer: 'Backup coverage is built into every booking. Every musician on our roster has a vetted understudy who can step in same-day. Your client never finds out there was an issue.',
  },
];

const BENEFITS = [
  {
    label: 'One Roster',
    text: 'Access to 200+ vetted musicians across every style and ensemble size. No more juggling individual contractors for each event.',
  },
  {
    label: 'One Contact',
    text: 'Direct line to Alex for every booking. No call centers, no junior reps, no relay games. Same-day responses during business hours.',
  },
  {
    label: 'Predictable Quality',
    text: 'Every musician in the network is auditioned and reference-checked. Insured, contracted, and briefed for each event.',
  },
];

const REASONS = [
  'Responses within one business day. We know your timelines are tight and we prioritize planner inquiries.',
  'Standardized pricing structure — no surprise quotes mid-season.',
  'Backup musician coverage built into every booking, in case of last-minute cancellations.',
  'Per-event invoicing through Clover, built for easy passthrough to your clients.',
];

export default function ForWeddingPlanners() {
  usePageTitle(
    'Wedding Planner Music Partner — Greater Boston',
    'A dependable music partner for Greater Boston wedding planners — one vetted roster, one point of contact, and reliable musicians for every wedding you book.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="For Wedding Planners"
        headline="A music partner you can rely on."
        subhead="One vetted roster, one point of contact, and a planner-first workflow built around how you already work."
        backgroundImage="/trio-performance.jpg"
      />

      {/* Three benefits */}
      <section className="bg-cream-light pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {BENEFITS.map((b, i) => (
              <div key={b.label} className="text-center">
                <div className="text-gold font-serif italic text-3xl mb-3">0{i + 1}</div>
                <div className="w-10 h-px bg-gold mx-auto mb-5"></div>
                <h3 className="font-serif text-[22px] mb-4 tracking-[0.3px] text-dark">{b.label}</h3>
                <p className="font-serif italic text-[15px] text-gray-500 leading-[1.7]">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/ensembles"
              className="inline-flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 font-medium hover:text-gold transition-colors"
            >
              See Our Ensemble Catalog
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <InlineLeadForm
        source="for-wedding-planners"
        heading="Let's talk about a partnership"
        subheading="Tell us how you work and we will reply with a partnership proposal."
        messagePlaceholder="Your business name, how many weddings you book per year, and the ensemble types you typically need…"
      />

      {/* Why XMA for planners */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Built For Planner Workflows</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              How a partnership actually works.
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
        eyebrow="Partner Questions"
        headline="What planners ask us first."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Build A Long-Term Partnership</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Become a preferred partner.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Let us walk you through how preferred-planner relationships work — pricing, response times, and what we handle for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Schedule An Intro Call
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

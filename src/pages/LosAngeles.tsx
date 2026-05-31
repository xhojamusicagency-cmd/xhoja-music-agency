import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'How do I book XMA for a Los Angeles event?',
    answer:
      'Send a note through the inquiry form on this page or email Alex directly at xhojamusicagency@gmail.com. Every Los Angeles inquiry is reviewed personally by the founder — you will hear back within one business day with available ensemble options and a transparent quote.',
  },
  {
    question: 'What kinds of events do you take in Los Angeles?',
    answer:
      'Weddings, private celebrations, milestone birthdays, anniversary dinners, donor events, hospitality bookings, and select corporate galas. We curate to the room — solo piano, jazz duos, string ensembles, and small chamber groups are the most common configurations.',
  },
  {
    question: 'Do you have musicians based in Los Angeles?',
    answer:
      'Yes — a curated West Coast roster, hand-selected by founder Alexander Xhoja. We grow the roster carefully and accept bookings on a by-appointment basis. For dates outside our LA roster\'s availability, we will tell you up front and refer you to a trusted alternative.',
  },
  {
    question: 'What musical styles do you cover?',
    answer:
      'Classical, jazz, contemporary, Great American Songbook, and tasteful crossover. Every booking includes a music plan tailored to your venue, program, and guests. If you have specific songs or arrangements in mind, share them — our musicians can prepare custom interpretations.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'Sixty to ninety days is ideal for weddings and large private events. Shorter timelines are accepted depending on roster availability — reach out and we will tell you within one business day what is possible for your date.',
  },
  {
    question: 'How is XMA different from a local LA agency?',
    answer:
      'Five years of refined event-music curation built in Boston — Berklee-trained leadership, a vetted East Coast roster, and a reputation among the region\'s leading planners. The same standard now applied to a curated Los Angeles roster, with founder Alexander Xhoja personally overseeing every LA booking as we grow.',
  },
];

const PRINCIPLES = [
  {
    label: 'Curated Roster',
    text: 'A hand-selected West Coast roster, vetted personally by the founder. Quality over quantity — every musician is chosen for craft, professionalism, and how they hold a room.',
  },
  {
    label: 'Personal Oversight',
    text: 'Every Los Angeles booking is reviewed personally by Alex. Direct contact through planning, no call centers, no junior staff — the way our most discerning Boston clients have worked with us for years.',
  },
  {
    label: 'East Coast Pedigree',
    text: 'Five years of refined event-music curation across Greater Boston — trusted by the region\'s leading planners, hotels, and venues. The same standard, now brought to Los Angeles.',
  },
];

const REASONS = [
  'A curated West Coast roster, vetted by Berklee-trained founder Alexander Xhoja. No anonymous subcontracting.',
  'Personal contact with Alex from the first inquiry through the last note of your event. One point of contact, every time.',
  'Five years of refined event-music experience built in Boston — now applied to a small, careful Los Angeles roster.',
  'Tailored repertoire — every song matched to your venue, program, and guests. We listen first, then we play.',
  'Discreet, professional, dressed for the room. The standard your venue and your guests expect.',
];

export default function LosAngeles() {
  usePageTitle(
    'Live Music in Los Angeles — By Appointment',
    'XMA is now booking select Los Angeles events. Boston-founded music agency led by Berklee pianist Alexander Xhoja — curated roster, personal oversight, the same standard our East Coast clients trust.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="By Appointment In Los Angeles"
        headline="A curated music agency, now performing in Los Angeles."
        subhead="Boston-founded. Berklee-trained. Founder Alexander Xhoja brings the same curatorial standard to Los Angeles events — by appointment, with personal oversight on every booking."
      />

      {/* What We Bring section — three principles */}
      <section className="bg-cream-light pt-4 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">What We Bring</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-light leading-[1.15] text-dark">
              The thinking behind every LA booking.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {PRINCIPLES.map((principle, i) => (
              <div key={principle.label} className="text-center">
                <div className="text-gold font-serif italic text-3xl mb-3">0{i + 1}</div>
                <div className="w-10 h-px bg-gold mx-auto mb-5"></div>
                <h3 className="font-serif text-[22px] mb-4 tracking-[0.3px] text-dark">{principle.label}</h3>
                <p className="font-serif italic text-[15px] text-gray-500 leading-[1.7]">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineLeadForm
        source="los-angeles"
        heading="Inquire about your Los Angeles event"
        subheading="Every LA inquiry is reviewed personally by Alex. We will reply within one business day."
        messagePlaceholder="Event date, venue, guest count, type of event, and anything else you want us to know…"
      />

      {/* Why XMA in LA */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Why XMA In Los Angeles</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              What clients can expect from our LA bookings.
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
        headline="What Los Angeles clients ask us most."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Boston · Los Angeles</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Tell us about your Los Angeles event.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share your date, venue, and a brief note about what you have in mind. Alex personally reviews every Los Angeles inquiry.
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

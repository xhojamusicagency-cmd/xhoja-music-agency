import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'How small is too small for live music?',
    answer: 'A dinner party of ten can be perfect for solo piano or a duo. Anything more intimate than that is usually better served by a curated playlist — though we are happy to talk through your specific room. Live music shines when there is space for it to fill, but small does not disqualify you.',
  },
  {
    question: 'Can you perform at a private residence?',
    answer: 'Yes — many of our most beautiful bookings are at private homes. We bring everything needed: instrument (or use yours), discreet amplification when appropriate, and musicians who know how to read a room and adjust dynamics for the space.',
  },
  {
    question: 'What is the price range for a private event?',
    answer: 'Solo musicians start at $550 for a typical engagement; duos from $950; trios from $1,500; full ensembles scale from there. We quote your specific event transparently — no surprise fees, no markup on travel within Greater Boston.',
  },
  {
    question: 'How far in advance should we book?',
    answer: 'Six to eight weeks is comfortable, especially for Saturday evenings between May and October. We have booked events with less notice — sometimes weeks or even days — but the earlier you reach out, the more options we can offer for ensemble and musician selection.',
  },
  {
    question: 'Do you provide a sound system?',
    answer: 'Yes, when the room calls for it. Solo piano or a string quartet in a quiet living room often needs no amplification; a jazz trio on a patio with thirty guests usually does. We assess this with you during planning and bring exactly what fits the space.',
  },
];

const USE_CASES = [
  {
    label: 'Milestone Celebrations',
    text: 'Anniversaries, milestone birthdays, retirement parties, vow renewals — moments that deserve a soundtrack made for them, not a playlist.',
  },
  {
    label: 'Dinner Parties & Holidays',
    text: 'Intimate evenings at home, holiday gatherings, family reunions — chamber ensembles that feel personal, not performative.',
  },
  {
    label: 'Garden & Cocktail Hours',
    text: 'Backyard celebrations, country club gatherings, summer receptions — refined live sound that elevates the room without commanding it.',
  },
];

const REASONS = [
  'Direct conversation with Alex from inquiry to performance — no agency layers, no junior reps.',
  'Ensemble sized to the room — solo piano for a dinner party, jazz trio for a garden cocktail hour.',
  'Repertoire shaped to your guests — we ask about their generation, the mood you want, and any meaningful songs.',
  'Insured and contracted to meet venue requirements at country clubs, hotels, and private clubs.',
];

export default function PrivateEventMusicBoston() {
  usePageTitle(
    'Private Event Music Boston',
    'Live music for private celebrations across Greater Boston — anniversaries, milestone birthdays, dinner parties, holiday gatherings. Solo piano, jazz trios, and chamber ensembles.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Private Event Music"
        headline="A soundtrack made for your celebration."
        subhead="Live music for the gatherings that matter — anniversaries, milestone birthdays, dinner parties, and the moments in between."
        backgroundImage="/string-trio-placeholder.jpg"
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
        source="private-event-music-boston"
        heading="Tell us about your event"
        subheading="A short note is enough — we will reply within one business day."
        messagePlaceholder="Event date, venue or address, approximate guest count, and the kind of atmosphere you want…"
      />

      {/* Why XMA for private events */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Built For Hosts</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              How a private booking actually works.
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
        eyebrow="Host Questions"
        headline="What hosts ask us first."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Begin Planning</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Bring live music to your celebration.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share your date and the kind of evening you have in mind — we will recommend the ensemble that fits.
          </p>
          <Link
            to="/events?ensemble=Private%20Event%20Inquiry"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Plan Your Event
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

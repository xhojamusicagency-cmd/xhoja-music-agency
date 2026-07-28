import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'Can you provide music for both the ceremony and the reception, or do we need two vendors?',
    answer: "One inquiry covers your entire day. We routinely staff the ceremony, the cocktail hour, and the evening reception as a single coordinated booking — different ensembles for different moments, but one point of contact handling all of it. Many families also bring in a DJ for the dance portion; we coordinate seamlessly with whoever you already use.",
  },
  {
    question: 'Do your musicians know traditional Jewish repertoire — klezmer, Israeli, the hora?',
    answer: "Yes. Our Jewish Ensemble option is built specifically for this — musicians who know the klezmer and Israeli traditions, are comfortable accompanying the hora, and prepare the cultural moments (Hava Nagila, Siman Tov u'Mazal Tov, Hinei Ma Tov) with care. We discuss your specific repertoire wishes in advance.",
  },
  {
    question: 'Can you coordinate with our DJ or MC for the reception?',
    answer: 'Always. We work alongside DJs and MCs all the time and consider it part of doing the job well. We share set lists in advance, agree on handoffs, and stay flexible during the event itself so the night flows the way you want.',
  },
  {
    question: 'We are having an interfaith or blended-tradition service — can you accommodate that?',
    answer: 'Absolutely. We have played for families blending Jewish and Christian traditions, secular celebrations, and ceremonies that draw on multiple cultural sources. We follow your lead and your clergy on what feels right for your family.',
  },
  {
    question: 'What does pricing look like for a full b\'nai mitzvah day?',
    answer: 'Pricing depends on which ensembles you book and for how long. A typical full-day booking might combine a chamber ensemble for the morning service and a Jewish Ensemble or DJ for the evening. We quote your specific day transparently, with no markup on travel within Greater Boston.',
  },
];

const USE_CASES = [
  {
    label: 'Ceremony',
    text: "Reverent accompaniment for the service — Hebrew melodies, processional music, and the moments that anchor your child's reading.",
  },
  {
    label: 'Cocktail Hour',
    text: 'Jazz trio, solo piano, or a refined chamber ensemble as guests transition from the ceremony into the celebration.',
  },
  {
    label: 'Reception & Hora',
    text: 'A Jewish Ensemble built for the party — klezmer, Israeli classics, the hora, and contemporary music for the dance floor.',
  },
];

const REASONS = [
  'A dedicated Jewish Ensemble option with klezmer and Israeli repertoire — purpose-built, not retrofitted.',
  'Coordination with your rabbi, cantor, and DJ so every moment of the day flows together.',
  'Familiarity with the structure of a b\'nai mitzvah day from prelude through the last dance.',
  'Flexible ensemble configurations — a string trio for the ceremony, a full band for the simcha.',
];

export default function BnaiMitzvahMusicBoston() {
  usePageTitle(
    "B'nai Mitzvah Music Boston",
    "Live music for b'nai mitzvah celebrations in Greater Boston — ceremony, cocktail hour, and reception. Traditional klezmer, Israeli music, contemporary repertoire, and a dedicated Jewish Ensemble.",
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="B'nai Mitzvah Music"
        headline="Music for the whole celebration."
        subhead="From the ceremony's first note to the last hora of the night — one curated team, one coordinated day."
        backgroundImage="/jewish-ensemble-placeholder.webp"
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
        source="bnai-mitzvah-music-boston"
        heading="Tell us about your celebration"
        subheading="A short note is enough — we will reply within one business day."
        messagePlaceholder="Date of the simcha, venue, which parts of the day you need music for, and any repertoire wishes (traditional, contemporary, or a blend)…"
      />

      {/* Why XMA for b'nai mitzvah */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">Built For The Day</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              How a b'nai mitzvah booking works.
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
        eyebrow="Family Questions"
        headline="What families ask us first."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Begin Planning</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Music for your child's celebration.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share the date and the parts of the day you want music for — we will walk you through ensemble options and pricing.
          </p>
          <Link
            to="/events?ensemble=B%27nai%20Mitzvah%20Inquiry"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
          >
            Plan The Day
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

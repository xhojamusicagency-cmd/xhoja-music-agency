import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'Are your musicians comfortable with traditional hymnals and accompanying a choir?',
    answer: 'Yes. Many of our pianists and organists have grown up in church music settings and read traditional hymnals fluently. We match the musician to your worship tradition — high-church liturgical, contemporary praise, or a blend — and confirm familiarity with your hymnal before the first service.',
  },
  {
    question: 'How quickly can you provide substitute coverage if our regular musician is sick?',
    answer: 'Often within 48 hours, sometimes same-week. Send us your service order and hymn selections and we will confirm a musician who can prepare in time. Long-standing recurring partnerships get priority routing on urgent requests.',
  },
  {
    question: 'Do you have musicians who play organ in addition to piano?',
    answer: 'Yes — we maintain a small bench of musicians who play both pipe organ and piano comfortably. When you inquire, mention whether you need organ specifically; we will only assign musicians who have played your instrument type before.',
  },
  {
    question: 'Can the same musician cover our weekly services month after month?',
    answer: 'That is the goal of a recurring engagement. We pair you with one musician who becomes a familiar presence to your congregation, with a vetted substitute on standby for the weeks they cannot attend. The continuity matters to us as much as to you.',
  },
  {
    question: 'How does payment work for recurring engagements?',
    answer: 'Recurring services are invoiced monthly through Clover with a single line item for the month, simplifying your bookkeeping. One-off events (weddings, funerals, holiday services) are billed per event with a deposit at booking and balance before the service.',
  },
];

const USE_CASES = [
  {
    label: 'Sunday Services',
    text: 'Reliable weekly accompaniment — pianists and organists familiar with traditional hymnals, contemporary worship, and the rhythms of a Sunday service.',
  },
  {
    label: 'Special Services',
    text: 'Christmas Eve, Easter, ordinations, anniversaries, and holiday concerts — prepared in advance with your music director, performed with reverence.',
  },
  {
    label: 'Weddings & Funerals',
    text: 'Life-cycle services hosted at your church — coordinated directly with families and your team, with discretion and proper liturgical awareness.',
  },
];

const REASONS = [
  'Musicians vetted not only for skill but for sensitivity to the worship setting — punctual, appropriately dressed, and prepared.',
  'Substitute coverage available on short notice for weeks when your regular musician cannot attend.',
  'Single point of contact for your music director — no juggling individual contractors during a busy liturgical season.',
  'Long-standing relationships with congregations across the Greater Boston region; we understand the work.',
];

export default function ChurchMusicBoston() {
  usePageTitle(
    'Church Music Boston | XMA',
    'Live church music for Greater Boston congregations — Sunday service accompaniment, special services, weddings, and funerals. Substitute pianists and organists available on short notice.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Church & Worship Music"
        headline="A musician partnership for your ministry."
        subhead="Sunday service accompaniment, special services, weddings, and funerals — supported by a trusted bench of pianists and organists."
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
              See Our Ensemble Catalog
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <InlineLeadForm
        source="church-music-boston"
        heading="Tell us about your church"
        subheading="A short note is enough — we will reply within one business day."
        messagePlaceholder="Church name, service date(s), whether you need a one-off substitute or recurring coverage, and any repertoire preferences…"
      />

      {/* Why XMA for churches */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">For Music Directors</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              How a church partnership works.
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
        eyebrow="Music Director Questions"
        headline="What churches ask us first."
        faqs={FAQS}
      />

      {/* Closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">Ministry Support</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Let's discuss your church's music needs.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share the service date or the recurring schedule you are considering, and we will recommend the right musician for your tradition.
          </p>
          <Link
            to="/events?ensemble=Church%20Music%20Inquiry"
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

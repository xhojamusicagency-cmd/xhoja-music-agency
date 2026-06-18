import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import InlineLeadForm from '../components/InlineLeadForm';
import FAQSection, { type FAQ } from '../components/FAQSection';

const FAQS: FAQ[] = [
  {
    question: 'How quickly can you provide music on short notice?',
    answer: 'We understand that funeral arrangements often come together in just a few days. Reach out and we will do everything we can to confirm a musician within hours. For very short timelines, we maintain a small bench of musicians who specifically take on memorial service work.',
  },
  {
    question: 'Can the family request specific songs that were meaningful to our loved one?',
    answer: 'Yes — and we encourage it. The most meaningful services often include music a person loved in life: a favorite hymn, a song from a wedding, a piece they played themselves. Send us your wishes and we will prepare them with care, regardless of genre.',
  },
  {
    question: 'Do you work directly with funeral homes, or only with families?',
    answer: 'Both. Many of our bookings come through funeral directors who coordinate the music alongside the rest of the service. Families are equally welcome to contact us directly — we will handle the logistics with your funeral home if helpful.',
  },
  {
    question: 'What instruments are available for graveside services?',
    answer: 'Solo strings (violin, cello), bagpipe, trumpet, and acoustic guitar are most common for outdoor services. We will help you choose based on the setting and the music you want — and we bring weather-appropriate setups when needed.',
  },
  {
    question: 'How does payment work?',
    answer: 'We keep this simple. Payment is handled after the service through Clover — directly with the family, or invoiced to the funeral home if they are coordinating. We do not ask for deposits or any administrative paperwork at a difficult time.',
  },
];

const USE_CASES = [
  {
    label: 'At The Service',
    text: 'Accompaniment at funeral homes, chapels, and churches — solo piano, organ, strings, or vocalists chosen to fit the setting and the tone you want.',
  },
  {
    label: 'Graveside',
    text: 'Bagpipe, solo trumpet, or strings for outdoor services — a single instrument can carry the moment with great dignity.',
  },
  {
    label: 'Celebrations of Life',
    text: 'Memorial gatherings hosted at homes, restaurants, or community spaces — music tailored to who your loved one was, not to a template.',
  },
];

const REASONS = [
  'Musicians experienced in memorial settings — quiet professionalism above all.',
  'Familiar with traditional sacred repertoire as well as meaningful contemporary songs.',
  'Quick response on short timelines — we understand arrangements often happen on just a few days notice.',
  'Direct coordination with your funeral director, clergy, or family — we handle the details so you do not have to.',
];

export default function FuneralMusicServices() {
  usePageTitle(
    'Funeral & Memorial Music Services',
    'Live music for funeral and memorial services across Greater Boston — chapel, graveside, and celebrations of life. Musicians experienced in honoring meaningful moments.',
  );

  return (
    <div className="bg-cream-light">
      <PageHero
        eyebrow="Funeral & Memorial Music"
        headline="Live music to honor a life well lived."
        subhead="Solo piano, strings, bagpipe, vocalists — musicians who understand the moment and bring quiet, prepared presence to it."
        showPhone={false}
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
        </div>
      </section>

      <InlineLeadForm
        source="funeral-music-services"
        heading="Reach out — we will respond quickly"
        subheading="A short note is enough. We will reply within a few hours during business hours."
        messagePlaceholder="Service date, location, the kind of music you have in mind, and any specific pieces or instruments you would like to discuss…"
      />

      {/* Why XMA for memorial services */}
      <section className="bg-cream-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">How We Help</p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-light leading-[1.15] text-dark">
              What families and funeral directors can expect.
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
        headline="What families and directors ask us."
        faqs={FAQS}
      />

      {/* Closing CTA — soft tone, no urgency */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.12) 0%, transparent 60%)' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">When You Are Ready</p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            We are here to help honor your loved one.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Reach out by phone or message. We will listen first, then help you choose the right musician and music for the service.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 justify-center items-center">
            <a
              href="tel:+18574988487"
              className="inline-flex items-center gap-3 px-10 py-5 border border-gold text-gold text-[11px] font-medium tracking-[4px] uppercase hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Call (857) 498-8487
            </a>
            <Link
              to="/events?ensemble=Funeral%20Music%20Inquiry"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300"
            >
              Send A Message
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

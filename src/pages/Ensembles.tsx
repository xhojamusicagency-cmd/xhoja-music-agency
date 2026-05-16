import { Link } from 'react-router-dom';

interface Ensemble {
  tag: string;
  name: string;
  description: string;
  featured?: boolean;
  custom?: boolean;
  asset?: string;
  gradient?: string;
}

const ENSEMBLES: Ensemble[] = [
  {
    tag: 'Solo',
    name: 'Solo Piano or Guitar',
    description: 'For dinners, hotel lobbies, and intimate ceremonies — refined and unobtrusive.',
    gradient: 'linear-gradient(160deg, #2a2520 0%, #0d0d0d 70%, #1a1612 100%)',
  },
  {
    tag: 'Duo',
    name: 'Cocktail Duo',
    description:
      'Choose your pairing — piano and vocals, piano and saxophone, guitar and vocals, or another combination tailored to your event.',
    asset: 'Mia & Alex — Million Years Ago',
    gradient: 'linear-gradient(155deg, #1d1a17 0%, #0d0d0d 65%, #2a2520 100%)',
  },
  {
    tag: 'Trio',
    name: 'Ceremony String Trio',
    description: 'Violin, viola, and cello — timeless music for weddings and ceremonies.',
    featured: true,
    gradient: 'linear-gradient(150deg, #221d18 0%, #0d0d0d 60%, #1a1612 100%)',
  },
  {
    tag: 'Trio',
    name: 'Dinner Jazz Trio',
    description: 'Piano, bass, and drums — the warm backbone of any gala or fine-dining moment.',
    gradient: 'linear-gradient(170deg, #1a1612 0%, #0d0d0d 70%, #2a2520 100%)',
  },
  {
    tag: 'DJ',
    name: 'DJ Set',
    description:
      'Curated sets for weddings, receptions, parties, and late-night programs — open or vinyl format.',
    gradient: 'linear-gradient(165deg, #221d18 0%, #0a0a08 60%, #1a1612 100%)',
  },
  {
    tag: 'Ensemble',
    name: 'Jewish Ensemble',
    description:
      "Musicians for b'nai mitzvah, weddings, donor dinners, and cultural events — traditional and contemporary repertoire.",
    gradient: 'linear-gradient(150deg, #1f1a16 0%, #0a0a08 70%, #1a1612 100%)',
  },
  {
    tag: 'Ensemble',
    name: 'Latin Jazz',
    description:
      'Piano, bass, drums, percussion, and vocals — for evenings that want warmth, rhythm, and energy.',
    gradient: 'linear-gradient(165deg, #261d15 0%, #0d0a08 70%, #2a1f15 100%)',
  },
  {
    tag: 'Custom',
    name: 'Custom Ensemble',
    description: "Have a vision that isn't on this page? Tell us and we will design the right group around it.",
    custom: true,
  },
];

export default function Ensembles() {
  const consultUrl = (ensembleName: string) =>
    `/events?ensemble=${encodeURIComponent(ensembleName)}`;

  return (
    <div className="bg-cream-light">
      {/* Page header */}
      <section className="bg-cream-light pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">
            Book a Live Event
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h1 className="font-serif text-[44px] sm:text-[56px] md:text-[68px] font-light leading-[1.08] tracking-[0.5px] mb-7 text-dark">
            A musician for every moment.
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-[1.8]">
            Select the ensemble that fits your event. Every group is tailored to the room, the program, and your guests — and every event is quoted personally.
          </p>
        </div>
      </section>

      {/* Ensembles grid */}
      <section className="bg-cream-light pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {ENSEMBLES.map((e) => (
              <Link
                key={e.name}
                to={consultUrl(e.name)}
                className="group relative flex flex-col bg-white transition-all duration-500 ease-out hover:-translate-y-1.5"
                style={{
                  boxShadow: '0 1px 0 rgba(204, 148, 51, 0)',
                  transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
                }}
                onMouseEnter={(ev) =>
                  (ev.currentTarget.style.boxShadow = '0 18px 40px -16px rgba(20, 20, 20, 0.18)')
                }
                onMouseLeave={(ev) =>
                  (ev.currentTarget.style.boxShadow = '0 1px 0 rgba(204, 148, 51, 0)')
                }
              >
                {e.featured && (
                  <span className="absolute top-4 right-4 z-20 bg-dark text-white text-[9px] tracking-[2.5px] px-2.5 py-1.5 font-medium">
                    MOST BOOKED
                  </span>
                )}

                {/* Image area */}
                <div
                  className={`aspect-[4/5] relative overflow-hidden ${
                    e.custom
                      ? 'bg-white border border-dashed border-gold flex items-center justify-center'
                      : ''
                  }`}
                  style={e.custom ? undefined : { background: e.gradient }}
                >
                  {/* Subtle radial glow */}
                  {!e.custom && (
                    <div
                      className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100 opacity-70"
                      style={{
                        background:
                          'radial-gradient(circle at 40% 50%, rgba(204, 148, 51, 0.22) 0%, transparent 60%)',
                      }}
                    ></div>
                  )}

                  {/* Asset indicator (video placeholder) */}
                  {e.asset && (
                    <>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-gold/70 rounded-full z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-gold">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#CC9433" className="ml-0.5">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="absolute bottom-5 left-5 right-5 font-serif italic text-[12px] text-gold/85 z-10 tracking-[0.3px]">
                        {e.asset}
                      </p>
                    </>
                  )}

                  {/* Empty placeholder label */}
                  {!e.asset && !e.custom && (
                    <p className="absolute bottom-5 left-5 text-[9px] tracking-[3px] uppercase text-cream/40 font-medium">
                      Image
                    </p>
                  )}

                  {/* Custom card star */}
                  {e.custom && (
                    <span className="text-gold text-4xl font-serif transition-transform duration-500 group-hover:scale-110">
                      ✶
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="px-7 pt-7 pb-9 text-center flex flex-col flex-1">
                  {/* Tiny gold accent above tag */}
                  <div className="w-6 h-px bg-gold mx-auto mb-4 transition-all duration-500 group-hover:w-12"></div>
                  <p className="text-gold text-[10px] tracking-[3.5px] uppercase mb-3 font-medium">
                    {e.tag}
                  </p>
                  <h3 className="font-serif text-[22px] leading-[1.25] mb-4 tracking-[0.3px]">
                    {e.name}
                  </h3>
                  <p className="font-serif italic text-[14px] text-gray-500 leading-[1.7] mb-7 flex-1">
                    {e.description}
                  </p>
                  <span className="text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 self-center font-medium transition-all duration-300 group-hover:text-gold group-hover:tracking-[4px] inline-flex items-center gap-2">
                    Schedule a Consultation
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic closing CTA */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        {/* Subtle radial glow background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.15) 0%, transparent 60%)',
          }}
        ></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5 font-medium">
            Not Sure Yet?
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-7"></div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-white font-light leading-[1.15] tracking-[0.5px] mb-6">
            Let us help you choose.
          </h2>
          <p className="font-serif italic text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-12 leading-[1.8]">
            Share a few details about your event and we will recommend the right ensemble personally, with care and discretion.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300 group"
          >
            Schedule a Consultation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

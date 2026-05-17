import { Link } from 'react-router-dom';

interface Ensemble {
  tag: string;
  name: string;
  description: string;
  featured?: boolean;
  flagship?: boolean;
  includes?: string[];
  custom?: boolean;
  image?: string;
  video?: string;
}

const ENSEMBLES: Ensemble[] = [
  {
    tag: 'Signature Package',
    name: 'The Complete Wedding',
    description:
      'One curated team for your entire day — string ensemble for the ceremony, jazz trio for cocktail hour, and a DJ to carry the reception into the night. Designed, rehearsed, and produced as a single seamless experience.',
    flagship: true,
    includes: ['Ceremony', 'Cocktail Hour', 'Reception'],
    image: '/wedding-reception.jpg',
  },
  {
    tag: 'Solo',
    name: 'Solo Piano or Guitar',
    description: 'For dinners, hotel lobbies, and intimate ceremonies — refined and unobtrusive.',
    video: '/hero-piano.mp4',
  },
  {
    tag: 'Duo',
    name: 'Cocktail Duo',
    description:
      'Choose your pairing — piano and vocals, piano and saxophone, guitar and vocals, or another combination tailored to your event.',
    image: '/mia-alex-million-years.jpg',
  },
  {
    tag: 'Trio',
    name: 'Dinner Jazz/Classical Trio',
    description: 'Piano, bass, and drums — or strings — the warm backbone of any gala or fine-dining moment.',
    featured: true,
    image: '/jazz-trio-placeholder.jpg',
  },
  {
    tag: 'Quartet',
    name: 'String Quartet',
    description: 'Two violins, viola, and cello — with optional double bass — for weddings, ceremonies, and refined receptions.',
    image: '/string-trio-placeholder.jpg',
  },
  {
    tag: 'DJ',
    name: 'DJ Set',
    description:
      'Curated sets for weddings, receptions, parties, and late-night programs — open or vinyl format.',
    image: '/dj-performance.jpg',
  },
  {
    tag: 'Ensemble',
    name: 'Jewish Ensemble',
    description:
      "Musicians for b'nai mitzvah, weddings, donor dinners, and cultural events — traditional and contemporary repertoire.",
    image: '/jewish-ensemble-placeholder.jpg',
  },
  {
    tag: 'Ensemble',
    name: 'Latin Jazz',
    description:
      'Piano, bass, drums, percussion, and vocals — for evenings that want warmth, rhythm, and energy.',
    image: '/latin-jazz-placeholder.jpg',
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

      {/* Flagship: The Complete Wedding */}
      {(() => {
        const flagship = ENSEMBLES.find((e) => e.flagship);
        if (!flagship) return null;
        return (
          <section className="bg-cream-light pb-16 md:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to={consultUrl(flagship.name)}
                className="group relative block overflow-hidden bg-dark shadow-[0_20px_50px_-20px_rgba(20,20,20,0.35)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_-22px_rgba(20,20,20,0.5)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image side */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden">
                    {flagship.image && (
                      <img
                        src={flagship.image}
                        alt={flagship.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 60%, rgba(20,20,20,0.65) 100%)',
                      }}
                    ></div>
                    {/* Signature badge */}
                    <span className="absolute top-5 left-5 z-20 bg-gold text-dark text-[10px] tracking-[3px] px-3 py-2 font-medium uppercase">
                      Signature Package
                    </span>
                  </div>

                  {/* Content side */}
                  <div className="relative flex flex-col justify-center px-7 sm:px-12 lg:px-14 py-12 lg:py-16">
                    {/* Subtle gold glow */}
                    <div
                      className="absolute inset-0 opacity-30 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(ellipse at top right, rgba(204, 148, 51, 0.18) 0%, transparent 65%)',
                      }}
                    ></div>

                    <div className="relative">
                      <p className="text-gold text-[10px] tracking-[3.5px] uppercase mb-4 font-medium">
                        The Flagship Experience
                      </p>
                      <div className="w-10 h-px bg-gold mb-6"></div>
                      <h2 className="font-serif text-white text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.1] tracking-[0.3px] font-light mb-6">
                        {flagship.name}
                      </h2>
                      <p className="font-serif italic text-cream/80 text-[15px] sm:text-[16px] leading-[1.8] mb-8 max-w-lg">
                        {flagship.description}
                      </p>

                      {/* Three-phase breakdown */}
                      {flagship.includes && (
                        <div className="grid grid-cols-3 gap-4 mb-10 max-w-md">
                          {flagship.includes.map((phase, i) => (
                            <div key={phase} className="text-center">
                              <div className="text-gold font-serif italic text-2xl mb-2">0{i + 1}</div>
                              <div className="w-6 h-px bg-gold/60 mx-auto mb-2"></div>
                              <p className="text-cream/90 text-[10px] tracking-[2px] uppercase font-medium">
                                {phase}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <span className="inline-flex items-center gap-3 px-9 py-4 bg-gold text-dark text-[10px] font-medium tracking-[3.5px] uppercase group-hover:bg-cream-light transition-all duration-300">
                        Schedule a Wedding Consultation
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        );
      })()}

      {/* Section divider for the rest of the ensembles */}
      <section className="bg-cream-light pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-4 font-medium">
            Or Build Your Own Event
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-3"></div>
          <p className="font-serif italic text-gray-500 text-[15px] max-w-lg mx-auto leading-[1.7]">
            Single moments, single ensembles — choose the group that fits the room.
          </p>
        </div>
      </section>

      {/* Ensembles grid */}
      <section className="bg-cream-light pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {ENSEMBLES.filter((e) => !e.flagship).map((e) => (
              <Link
                key={e.name}
                to={consultUrl(e.name)}
                className="group relative flex flex-col bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(20,20,20,0.18)]"
              >
                {e.featured && (
                  <span className="absolute top-4 right-4 z-20 bg-dark text-white text-[9px] tracking-[2.5px] px-2.5 py-1.5 font-medium">
                    MOST BOOKED
                  </span>
                )}

                <div
                  className={`aspect-[4/5] relative overflow-hidden ${
                    e.custom
                      ? 'bg-white border border-dashed border-gold flex items-center justify-center'
                      : 'bg-dark'
                  }`}
                >
                  {e.video && (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={e.video} type="video/mp4" />
                    </video>
                  )}

                  {e.image && (
                    <img
                      src={e.image}
                      alt={e.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {(e.image || e.video) && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.55) 100%)',
                      }}
                    ></div>
                  )}

                  {!e.image && !e.video && !e.custom && (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(160deg, #2a2520 0%, #0d0d0d 70%, #1a1612 100%)',
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif italic text-gold/30 text-7xl tracking-wide select-none">
                          {e.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                        </span>
                      </div>
                    </>
                  )}

                  {e.custom && (
                    <span className="text-gold text-4xl font-serif transition-transform duration-500 group-hover:scale-110">
                      ✶
                    </span>
                  )}
                </div>

                <div className="px-7 pt-7 pb-9 text-center flex flex-col flex-1">
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
                  <span className="text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 self-center font-medium transition-all duration-300 group-hover:text-gold inline-flex items-center gap-2">
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

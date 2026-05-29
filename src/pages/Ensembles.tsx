import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

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
  startingFrom?: number; // USD — undefined renders "Custom Quote"
}

const ENSEMBLES: Ensemble[] = [
  {
    tag: 'Signature Package',
    name: 'The Grand Wedding Experience',
    description:
      'One curated team for your entire day — string ensemble for the ceremony, jazz trio for cocktail hour, and a DJ to carry the reception into the night. Designed, rehearsed, and produced as a single seamless experience.',
    flagship: true,
    includes: ['Ceremony', 'Cocktail Hour', 'Reception'],
    image: '/wedding-reception.jpg?v=6',
    startingFrom: 4500,
  },
  {
    tag: 'Solo',
    name: 'Solo Piano or Guitar',
    description: 'For dinners, hotel lobbies, and intimate ceremonies — refined and unobtrusive.',
    video: '/hero-piano.mp4',
    startingFrom: 550,
  },
  {
    tag: 'Duo',
    name: 'Cocktail Duo',
    description:
      'Choose your pairing — piano and vocals, piano and saxophone, guitar and vocals, or another combination tailored to your event.',
    image: '/duo-performance.jpg',
    startingFrom: 950,
  },
  {
    tag: 'Trio',
    name: 'Dinner Jazz/Classical Trio',
    description: 'Piano, bass, and drums — or strings — the warm backbone of any gala or fine-dining moment.',
    featured: true,
    image: '/trio-performance.jpg',
    startingFrom: 1400,
  },
  {
    tag: 'Quartet',
    name: 'String Quartet',
    description: 'Two violins, viola, and cello — with optional double bass — for weddings, ceremonies, and refined receptions.',
    image: '/string-trio-placeholder.jpg',
    startingFrom: 2400,
  },
  {
    tag: 'DJ',
    name: 'DJ Set',
    description:
      'Curated sets for weddings, receptions, parties, and late-night programs — open or vinyl format.',
    image: '/dj-performance.jpg',
    startingFrom: 1200,
  },
  {
    tag: 'Ensemble',
    name: 'Jewish Ensemble',
    description:
      "Musicians for b'nai mitzvah, weddings, donor dinners, and cultural events — traditional and contemporary repertoire.",
    image: '/jewish-ensemble-placeholder.jpg',
    startingFrom: 2800,
  },
  {
    tag: 'Ensemble',
    name: 'Latin Jazz',
    description:
      'Piano, bass, drums, percussion, and vocals — for evenings that want warmth, rhythm, and energy.',
    image: '/latin-jazz-placeholder.jpg',
    startingFrom: 2800,
  },
  {
    tag: 'Custom',
    name: 'Custom Ensemble',
    description: "Have a vision that isn't on this page? Tell us and we will design the right group around it.",
    custom: true,
    image: '/gregory-ayriyan-evening.jpg',
  },
];

export default function Ensembles() {
  usePageTitle(
    'Book Live Musicians in Boston — Weddings, Galas, Events',
    'Boston live music for every event: wedding ceremonies, cocktail hours, corporate galas, donor dinners, b\'nai mitzvah, and more. Solo piano, jazz trio, string quartet, DJ — fully curated by Xhoja Music Agency.'
  );
  const consultUrl = (ensembleName: string) =>
    `/events?ensemble=${encodeURIComponent(ensembleName)}`;
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="bg-cream-light">
      {/* Page header — elegant but compact so flagship sits above the fold */}
      <section className="bg-cream-light pt-8 pb-6 md:pt-10 md:pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
            Book Musicians For Your Event
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-4"></div>
          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[48px] font-light leading-[1.08] tracking-[0.5px] mb-3 text-dark">
            A musician for every moment.
          </h1>
          <p className="font-serif italic text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-[1.6]">
            Select the ensemble that fits your event &mdash; every group is tailored to the room, the program, and your guests.
          </p>
        </div>
      </section>

      {/* Flagship: The Grand Wedding Experience */}
      {(() => {
        const flagship = ENSEMBLES.find((e) => e.flagship);
        if (!flagship) return null;
        return (
          <section className="bg-cream-light pb-10 md:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to={consultUrl(flagship.name)}
                className="group relative block overflow-hidden bg-dark shadow-[0_20px_50px_-20px_rgba(20,20,20,0.35)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_-22px_rgba(20,20,20,0.5)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                  {/* Image side — balanced 50/50 split, fixed min-height for consistency */}
                  <div className="relative h-[320px] lg:h-auto lg:min-h-[460px] overflow-hidden bg-dark">
                    {flagship.image && (
                      <img
                        src={flagship.image}
                        alt={flagship.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                        style={{ objectPosition: 'center top' }}
                      />
                    )}
                  </div>

                  {/* Content side */}
                  <div className="relative flex flex-col justify-center px-7 sm:px-10 lg:px-12 py-10 lg:py-12">
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
                      <h2 className="font-serif text-white text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] tracking-[0.3px] font-light mb-5 sm:mb-6">
                        {flagship.name}
                      </h2>
                      <p className="font-serif italic text-cream/80 text-[14px] sm:text-[16px] leading-[1.7] sm:leading-[1.8] mb-6 sm:mb-8 max-w-lg">
                        {flagship.description}
                      </p>

                      {/* Three-phase breakdown — tighter labels on mobile */}
                      {flagship.includes && (
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-md">
                          {flagship.includes.map((phase, i) => (
                            <div key={phase} className="text-center">
                              <div className="text-gold font-serif italic text-xl sm:text-2xl mb-1.5 sm:mb-2">0{i + 1}</div>
                              <div className="w-6 h-px bg-gold/60 mx-auto mb-1.5 sm:mb-2"></div>
                              <p className="text-cream/90 text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] uppercase font-medium leading-tight">
                                {phase}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Starting-from price — gold accent, mirrors the flagship eyebrow.
                          Mobile gets larger (13px) with tighter tracking for readability;
                          sm+ reverts to the original 10px/3.5px luxury aesthetic. */}
                      {flagship.startingFrom !== undefined && (
                        <p className="text-gold text-[13px] tracking-[2px] sm:text-[10px] sm:tracking-[3.5px] uppercase font-medium mb-6">
                          Starting at ${flagship.startingFrom.toLocaleString()}
                        </p>
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

      {/* Section divider — elegant reassurance that we book every kind of event */}
      <section className="bg-cream-light pt-4 pb-10 md:pt-6 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[14px] sm:text-[16px] md:text-[17px] mb-4 font-medium leading-[1.2]">
            Music For Every Kind Of Event
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[36px] font-light tracking-[0.3px] text-dark mb-5 leading-[1.15]">
            Not every event needs vows.
          </h2>
          <p className="font-serif italic text-gold text-[15px] sm:text-[16px] md:text-[17px] max-w-2xl mx-auto leading-[1.7]">
            From corporate galas and donor dinners to private parties, brunches,
            milestone celebrations, b&rsquo;nai mitzvah, holiday gatherings, and
            ceremonies of every kind &mdash; choose the ensemble that fits the room.
          </p>
        </div>
      </section>

      {/* Performance gallery — proof before they pick a package */}
      <section className="bg-cream-light pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">SEE US IN ACTION</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.1] tracking-wide text-center mb-6">A Taste <span style={{ marginRight: '-0.01em', display: 'inline-block' }}>Of</span> What We Bring To Your Event</h2>
          </div>
          {(() => {
            const FEATURED_VIDEOS = [
              { id: 'X3erxpEimGI', label: 'Mia McIntosh & Alexander Xhoja' },
              { id: 'rW3igUSTYfU', label: 'Live private gig — Gregory Ayriyan' },
              { id: 'P3rkiosJ9ac', label: 'Live wedding gig — Gregory Ayriyan' },
            ];
            return (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
                {FEATURED_VIDEOS.map(v => {
                  const isActive = v.id === activeVideoId;
                  return (
                    <div
                      key={v.id}
                      className="relative aspect-video overflow-hidden bg-dark shadow-md transition-all duration-500 hover:shadow-xl"
                    >
                      {isActive ? (
                        <iframe
                          key={v.id}
                          src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                          title={v.label}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        ></iframe>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActiveVideoId(v.id)}
                          aria-label={`Watch ${v.label}`}
                          className="group block absolute inset-0 w-full h-full cursor-pointer"
                        >
                          <img
                            src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                            alt={v.label}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/95 group-hover:bg-gold rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
                            <p className="text-white text-xs sm:text-sm font-serif italic leading-tight">{v.label}</p>
                          </div>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}
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

                <div className="aspect-[4/3] relative overflow-hidden bg-dark">
                  {e.video && (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/hero-piano-poster.jpg"
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
                          'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.25) 100%)',
                      }}
                    ></div>
                  )}

                  {!e.image && !e.video && !e.custom && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(160deg, #2a2520 0%, #0d0d0d 70%, #1a1612 100%)',
                      }}
                    ></div>
                  )}

                </div>

                <div className="px-7 pt-7 pb-9 text-center flex flex-col flex-1">
                  <h3 className="font-serif text-[22px] leading-[1.25] mb-4 tracking-[0.3px]">
                    {e.name}
                  </h3>
                  <p className="font-serif italic text-[14px] text-gray-500 leading-[1.7] mb-7 flex-1">
                    {e.description}
                  </p>
                  {/* Starting-from price — elegant gold accent, mirrors the card's design language.
                      Mobile gets larger (13px) with tighter tracking so prices are actually
                      legible on phones; sm+ reverts to the 10px/3.5px luxury aesthetic. */}
                  <p className="text-gold text-[13px] tracking-[2px] sm:text-[10px] sm:tracking-[3.5px] uppercase font-medium mb-7">
                    {e.startingFrom !== undefined
                      ? `Starting at $${e.startingFrom.toLocaleString()}`
                      : 'Custom Quote'}
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

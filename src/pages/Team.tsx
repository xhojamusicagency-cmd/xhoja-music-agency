import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import { bostonMembers, laMembers, type TeamMember } from '../data/teamMembers';

// Inline SVG fallback so we never depend on a 3rd-party placeholder service
// or 404 on a musician who has no photo yet (e.g. shows initials instead).
const initialsFallback = (name: string) => {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2);
  return `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><rect width='300' height='300' fill='#141414'/><text x='150' y='170' font-family='Georgia, serif' font-size='100' fill='#CC9433' text-anchor='middle' font-style='italic'>${initials}</text></svg>`)}`;
};

export default function Team() {
  usePageTitle(
    'Meet The Team — Our Musicians',
    'Meet the Xhoja Music Agency roster — pianists, string players, jazz musicians, vocalists, and DJs performing at weddings, corporate events, and private celebrations across Boston and Los Angeles.'
  );
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  // Source of truth is src/data/teamMembers.ts. Boston + LA render as
  // separate labeled sections; the combined list backs the bio modal lookup.
  const teamMembers: TeamMember[] = [...bostonMembers, ...laMembers];

  // Use hash-based navigation for maximum browser compatibility
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#bio-(\d+)$/);
      if (match) {
        setSelectedMember(parseInt(match[1], 10));
      } else {
        setSelectedMember(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const closeBio = () => {
    setSelectedMember(null);
    history.pushState(null, '', window.location.pathname);
  };

  // Close the bio modal on Escape.
  useEffect(() => {
    if (selectedMember === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
        history.pushState(null, '', window.location.pathname);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedMember]);

  const activeMember = teamMembers.find(m => m.id === selectedMember);

  const renderCard = (member: TeamMember) => (
    <a
      key={member.id}
      href={`#bio-${member.id}`}
      id={`member-${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
      aria-label={`Read bio for ${member.name}`}
      className="flex flex-col items-center text-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-white transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="relative w-full aspect-square mb-5 overflow-hidden">
        <img
          src={member.image || initialsFallback(member.name)}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = initialsFallback(member.name);
          }}
        />
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/15 transition-colors duration-500" />
      </div>
      <div className="w-8 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-16" />
      <h3 className="font-serif text-base sm:text-xl font-medium mb-1 leading-snug text-dark transition-colors duration-300 group-hover:text-gold">{member.name}</h3>
      <p className="text-gold text-xs sm:text-sm font-medium uppercase tracking-[1.8px] mb-2">{member.role}</p>
      <span
        className="text-xs sm:text-sm uppercase tracking-[1.8px] text-gray-400 group-hover:text-gold transition-colors duration-300"
      >
        {member.id === 1 ? "Alexander's Bio →" : 'Read Bio →'}
      </span>
    </a>
  );

  return (
    <div>
      {/* Hero Section */}
      <section id="meet-the-team" className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">THE FACES BEHIND THE MUSIC</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[1.5px] mb-4">Meet The Team</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Our musicians and team are committed to delivering an exceptional experience for every event we play.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section id="team-members" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Boston roster */}
          <div className="text-center mb-10">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">GREATER BOSTON</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light leading-[1.1] tracking-[1.2px]">Boston</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {bostonMembers.map(renderCard)}
          </div>

          {/* Los Angeles roster */}
          {laMembers.length > 0 && (
            <>
              <div className="text-center mt-20 mb-10">
                <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">GREATER LOS ANGELES</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-light leading-[1.1] tracking-[1.2px]">Los Angeles</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {laMembers.map(renderCard)}
              </div>
            </>
          )}

          {/* Crawlable bios — visually hidden (the modal surfaces them on click).
              Keeps the keyword-rich bio text in the prerendered HTML for search engines. */}
          <div className="sr-only">
            {teamMembers.map((m) => (
              <div key={`seo-bio-${m.id}`}>
                <h3>{m.name} — {m.role}</h3>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeBio}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="bio-modal-title"
            className="relative bg-white max-w-lg w-full p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeBio}
              aria-label="Close bio"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center border border-gold/25 mb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                  <img
                    src={activeMember.image || initialsFallback(activeMember.name)}
                    alt={activeMember.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = initialsFallback(activeMember.name);
                    }}
                  />
                </div>
              </div>
              <h3 id="bio-modal-title" className="font-serif text-2xl sm:text-3xl font-medium mb-1">{activeMember.name}</h3>
              <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mb-4">{activeMember.role}</p>
              <div className="w-12 h-px bg-gold/30 mb-4" />
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{activeMember.bio}</p>
              {('videoUrl' in activeMember && activeMember.videoUrl) || ('website' in activeMember && activeMember.website) ? (
                <div className="flex flex-col items-center gap-3 mt-6 pt-6 border-t border-gold/15 w-full">
                  {'videoUrl' in activeMember && activeMember.videoUrl ? (
                    <a
                      href={activeMember.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold/70 text-xs uppercase tracking-[1.8px] font-medium transition-colors"
                    >
                      Watch Performance →
                    </a>
                  ) : null}
                  {'website' in activeMember && activeMember.website ? (
                    <a
                      href={activeMember.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold/70 text-xs uppercase tracking-[1.8px] font-medium transition-colors"
                    >
                      Visit Artist Website →
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Join Our Team Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you a talented musician looking for performance opportunities? We're always looking for exceptional artists to join the Xhoja Music Agency family.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gold text-dark font-normal hover:bg-gold/90 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}

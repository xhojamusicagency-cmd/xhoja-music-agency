import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function Team() {
  usePageTitle(
    'Meet The Team — Musicians & Instructors',
    'Meet the Xhoja Music Agency team: Berklee-trained pianists, guitarists, bassists, drummers, vocalists, and DJs serving Boston-area weddings, corporate events, and private lessons.'
  );
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Alexander Xhoja',
      role: 'Artistic Director & CEO',
      bio: 'Alexander Xhoja is a Boston-based, twenty-one-year-old pianist who is a recent recipient of a full-ride scholarship to the prestigious Berklee College of Music. With immense dedication and drive, he enriches the lives and hearts of his listeners by implementing emotional depth into his sound.',
      image: '/alexander-xhoja.jpg'
    },
    {
      id: 2,
      name: 'Caelan Quadra',
      role: 'Executive Director',
      bio: "Caelan Quadra manages the Xhoja Music Agency's website, communication, and artist relations, ensuring seamless operations and a professional online presence that connects audiences with the agency's creative vision.",
      image: '/jamiliee-team.jpg'
    },
    {
      id: 3,
      name: 'Elton Xhoja',
      role: 'Chairman of Education & Piano Instructor',
      bio: 'Elton Xhoja, a Berklee-trained educator and performer, leads educational direction at Xhoja Music Agency, crafting clear lesson objectives and inspiring students through creativity, improvisation, and a lifelong love of music.',
      image: '/elton-c.jpg'
    },
    {
      id: 4,
      name: 'Jude Seiner',
      role: 'Bass & Guitar Instructor',
      bio: 'Jude Seiner is a scholarship recipient at Berklee College of Music, where he is currently studying performance and developing his voice as a modern jazz and contemporary musician. Recognized with a full scholarship for his artistic excellence and musical potential, Jude is an active performer known for his strong groove, musical sensitivity, and collaborative approach on stage.',
      image: '/jude-base.jpg'
    },
    {
      id: 5,
      name: 'Kai Kitch',
      role: 'Drum Instructor',
      bio: 'Kai Kitch is a dynamic Boston-based drummer and versatile musician with a strong foundation in jazz and fluency across R&B, pop, and funk. His well-rounded and adaptable approach makes him an excellent fit for a wide range of performances and ensemble settings.',
      image: '/kai-drum.jpg'
    },
    {
      id: 6,
      name: 'Jakob Kobal',
      role: 'Accordion & Piano Instructor',
      bio: "Jakob Kobal is a Slovenian accordionist and pianist based in Boston. Classically and jazz-trained, he moves fluidly between tango, Balkan folk, jazz, and contemporary music — bringing a refined yet creative approach to every performance.",
      image: '/jakob-jamiliee.png'
    },
    {
      id: 7,
      name: 'Ellis Cordaro',
      role: 'Drum Instructor',
      bio: 'Ellis Cordaro is a versatile drummer and performing artist with a deep passion for jazz and global music traditions. Specializing in jazz, pop, R&B, rock, and Latin music, he brings a dynamic and culturally informed approach to every performance. He began his formal jazz training at the New England Conservatory Preparatory School before continuing his studies at the University of Massachusetts Amherst.',
      image: '/ellis-cordaro.jpg'
    },
    {
      id: 8,
      name: 'Calele (Carolina Perez)',
      role: 'Vocals & Trumpet Instructor',
      bio: "Calele (Carolina Perez) is a Panamanian-Chilean Jazz and Latin vocalist and trumpeter currently studying Performance and Contemporary Writing and Production at Berklee College of Music. She has experience teaching children’s music classes and summer workshops (ages 6–15) at Fundación Danilo Pérez, as well as working as a freelance private instructor (in person and online).",
      image: '/calele-perez.jpg'
    },
    {
      id: 9,
      name: 'Gabriel Lopez',
      role: 'Bass & Guitar Instructor',
      bio: 'Gabriel Lopez is a Puerto Rican electric bassist based in Boston. Deeply rooted in Latin music and jazz, his playing is driven by strong groove, time, and musical sensitivity. While bass is his primary instrument, Gabriel also brings a solid background in congas, which strongly informs his rhythmic approach and feel.',
      image: '/gabriel-lopez.jpg'
    },
    {
      id: 10,
      name: 'Meshach Modebe',
      role: 'DJ',
      bio: "Meshach is a Boston-based DJ known for his polished style, sharp musical instincts, and ability to read any room. With experience performing at private events, weddings, and corporate functions, he brings professionalism and energy to every set — curating seamless mixes that keep the dance floor alive from start to finish.",
      image: '/meshach-dj.jpg'
    },
    {
      id: 11,
      name: 'Ella Xhoja',
      role: 'Saxophone Instructor & Performer',
      bio: 'Ella Xhoja is a saxophonist and performer deeply rooted in the jazz scene, with experience from Jazz at Lincoln Center to the Mingus Festival. Featured on WICN\'s Jazz for New England with JazzHers and a member of the Post Underground Jazz Collective, she brings real stage experience into every lesson, helping students develop strong technique, confidence, and a personal artistic voice.',
      image: '/ella-xhoja.jpg'
    },
    {
      id: 12,
      name: 'Jamiliee Haddad Zamorano',
      role: 'Vocal & Songwriting Instructor',
      bio: 'Jamiliee Haddad Zamorano is a trilingual songwriting and vocal coach of Mexican and Syrian descent, professionally shaped by her studies at Berklee College of Music. A classically trained bel canto vocalist, she bridges jazz and contemporary styles, guiding artists through a technique-driven yet emotionally grounded approach.',
      image: '/jamiliee-haddad.jpg'
    },
    {
      id: 13,
      name: 'Dani Calderon',
      role: 'Vocal Instructor',
      bio: 'Dani is a passionate, hardworking and knowledgeable teacher, manager and vocalist! She creates an exciting learning environment that helps young singers build healthy vocal technique, musical literacy, and personal style. She strives to make every student feel like singing can be expressive and freeing, not something to be ashamed about!',
      image: '/dani-calderon.jpg'
    },
    {
      id: 14,
      name: 'Gregory Ayriyan',
      role: 'Violinist & Composer',
      bio: "Gregory Ayriyan is a violinist, soloist, and award-winning composer based in Rhode Island. A graduate of the Baku Conservatory and current concertmaster of the Worcester Symphony Orchestra, Gregory brings classical depth and international training to performances ranging from solo recitals to ensemble work. His repertoire spans Bach, Bartók, Stravinsky, and Ravel, alongside his own award-winning compositions. An Armenian-American whose journey took him from Baku to America as a refugee, he brings cultural depth and emotional resonance to every performance.",
      image: '/gregory-ayriyan.jpg'
    }
  ];

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

  const activeMember = teamMembers.find(m => m.id === selectedMember);

  return (
    <div>
      {/* Hero Section */}
      <section id="meet-the-team" className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">THE FACES BEHIND THE MUSIC</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[1.5px] mb-4">Meet The Team</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Our talented musicians and dedicated staff are committed to delivering exceptional experiences, whether you're learning an instrument or booking live entertainment.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section id="team-members" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {teamMembers.map((member) => (
              <a
                key={member.id}
                href={`#bio-${member.id}`}
                id={`member-${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                aria-label={`Read bio for ${member.name}`}
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-white transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-square mb-5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Use an inline SVG fallback so we never depend on a 3rd-party placeholder service
                      const initials = member.name.split(' ').map((w) => w[0]).join('').slice(0, 2);
                      (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><rect width='300' height='300' fill='%23141414'/><text x='150' y='170' font-family='Georgia, serif' font-size='100' fill='%23CC9433' text-anchor='middle' font-style='italic'>${initials}</text></svg>`)}`;
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
            className="relative bg-white max-w-lg w-full p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeBio}
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
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-1">{activeMember.name}</h3>
              <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mb-4">{activeMember.role}</p>
              <div className="w-12 h-px bg-gold/30 mb-4" />
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{activeMember.bio}</p>
            </div>
          </div>
        </div>
      )}

      {/* Join Our Team Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you a talented musician looking for performance opportunities or teaching positions? We're always looking for exceptional artists to join the Xhoja Music Agency family.
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

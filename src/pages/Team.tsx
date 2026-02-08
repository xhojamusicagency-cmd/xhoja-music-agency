import { Link } from 'react-router-dom';

export default function Team() {
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
      image: 'https://static.wixstatic.com/media/686f3e_67ab00f9588c45b2aa7769c497b4f72b~mv2.jpeg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5053.jpeg'
    },
    {
      id: 3,
      name: 'Elton Xhoja',
      role: 'Chairman of Education & Piano Instructor',
      bio: 'Elton Xhoja, a Berklee-trained educator and performer, leads educational direction at Xhoja Music Agency, crafting clear lesson objectives and inspiring students through creativity, improvisation, and a lifelong love of music.',
      image: 'https://static.wixstatic.com/media/686f3e_83402c5b6c484a70aba733d6deb1ca7a~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Elton%20C%20photo.jpg'
    },
    {
      id: 4,
      name: 'Jude Seiner',
      role: 'Bass & Guitar Instructor',
      bio: 'Jude Seiner is a scholarship recipient at Berklee College of Music, where he is currently studying performance and developing his voice as a modern jazz and contemporary musician. Recognized with a full scholarship for his artistic excellence and musical potential, Jude is an active performer known for his strong groove, musical sensitivity, and collaborative approach on stage.',
      image: 'https://static.wixstatic.com/media/686f3e_c700beeefe3c4f01a3b7f68ab4e6a7d1~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jude%20Base%20photo.jpg'
    },
    {
      id: 5,
      name: 'Kai Kitch',
      role: 'Drum Instructor',
      bio: 'Kai Kitch is a dynamic Boston-based drummer and versatile musician with a strong foundation in jazz and fluency across R&B, pop, and funk. His well-rounded and adaptable approach makes him an excellent fit for a wide range of performances and ensemble settings.',
      image: 'https://static.wixstatic.com/media/686f3e_d74c52f6b3f34f11880e48dc3b202deb~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kai%20Drum%20Photo.jpg'
    },
    {
      id: 6,
      name: 'Jakob Kobal',
      role: 'Accordion & Piano Instructor',
      bio: "Jakob Kobal is a Slovenian accordionist and pianist based in Boston. Classically and jazz-trained, he moves fluidly between tango, Balkan folk, jazz, and contemporary music \u2014 bringing a refined yet creative approach to every performance.",
      image: 'https://static.wixstatic.com/media/686f3e_86febc3fa5274c9e9848ef7c775db0f1~mv2.png/v1/fill/w_456,h_456,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8894.png'
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
      bio: "Calele (Carolina Perez) is a Panamanian-Chilean Jazz and Latin vocalist and trumpeter currently studying Performance and Contemporary Writing and Production at Berklee College of Music. She has experience teaching children\u2019s music classes and summer workshops (ages 6\u201315) at Fundaci\u00f3n Danilo P\u00e9rez, as well as working as a freelance private instructor (in person and online).",
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
      name: 'Meshach',
      role: 'DJ',
      bio: "Meshach is a Boston-based DJ known for his polished style, sharp musical instincts, and ability to read any room. With experience performing at private events, weddings, and corporate functions, he brings professionalism and energy to every set \u2014 curating seamless mixes that keep the dance floor alive from start to finish.",
      image: '/meshach-dj.jpg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">THE FACES BEHIND THE MUSIC</p>
          <h1 className="font-serif text-6xl font-light leading-[60px] tracking-[1.5px] mb-4">Meet The Team</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Our talented musicians and dedicated staff are committed to delivering exceptional experiences, whether you're learning an instrument or booking live entertainment.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-border p-5 text-center group hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="eager"
                    className="w-48 h-48 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/192?text=' + member.name.replace(' ', '+');
                    }}
                  />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-1">{member.name}</h3>
                <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                <button className="text-gold hover:text-gold/80 font-normal text-sm transition-colors">
                  Read Full Bio
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you a talented musician looking for performance opportunities or teaching positions? We're always looking for exceptional artists to join the Xhoja Music Agency family.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gold text-white font-normal hover:bg-gold/90 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}

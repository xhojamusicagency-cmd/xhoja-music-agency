import { Link } from 'react-router-dom';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alexander Xhoja',
      role: 'Artistic Director & CEO',
      bio: 'Berklee College of Music full-scholarship pianist and accomplished performer dedicated to nurturing musical talent.',
      image: 'https://static.wixstatic.com/media/686f3e_d027c9f2f4f4413b9b5d49933e1f3013~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/xhoja-15.jpg'
    },
    {
      id: 2,
      name: 'Elton Xhoja',
      role: 'Chairman of Education',
      bio: 'Experienced piano and clarinet instructor leading our educational initiatives with 10+ years of expertise.',
      image: 'https://static.wixstatic.com/media/686f3e_83402c5b6c484a70aba733d6deb1ca7a~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Elton%20C%20photo.jpg'
    },
    {
      id: 3,
      name: 'Caelan Quadra',
      role: 'Executive Director',
      bio: 'Driving strategic vision and operational excellence to deliver exceptional experiences for our clients.',
      image: 'https://via.placeholder.com/400?text=Caelan+Quadra'
    },
    {
      id: 4,
      name: 'Jude Seiner',
      role: 'Bass & Guitar Instructor',
      bio: 'Talented bassist and guitarist bringing 6+ years of performance and teaching experience.',
      image: 'https://static.wixstatic.com/media/686f3e_c700beeefe3c4f01a3b7f68ab4e6a7d1~mv2.jpg/v1/crop/x_0,y_199,w_480,h_480/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jude%20Base%20photo.jpg'
    },
    {
      id: 5,
      name: 'Kai Kitch',
      role: 'Drum Instructor',
      bio: 'Energetic percussionist and drummer with expertise in multiple styles and genres.',
      image: 'https://static.wixstatic.com/media/686f3e_d74c52f6b3f34f11880e48dc3b202deb~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kai%20Drum%20Photo.jpg'
    },
    {
      id: 6,
      name: 'Jakob Kobal',
      role: 'Accordion & Piano Instructor',
      bio: 'Master of the accordion and piano with 10+ years of experience in classical and folk traditions.',
      image: 'https://static.wixstatic.com/media/686f3e_86febc3fa5274c9e9848ef7c775db0f1~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8894.png'
    },
    {
      id: 7,
      name: 'Ellis Cordaro',
      role: 'Drum Instructor',
      bio: 'Versatile percussionist bringing 8+ years of drumming expertise to our student community.',
      image: 'https://via.placeholder.com/400?text=Ellis+Cordaro'
    },
    {
      id: 8,
      name: 'Calele (Carolina Perez)',
      role: 'Vocals & Trumpet Instructor',
      bio: 'Dynamic vocalist and trumpet player specializing in jazz and contemporary styles.',
      image: 'https://via.placeholder.com/400?text=Carolina+Perez'
    },
    {
      id: 9,
      name: 'Gabriel Lopez',
      role: 'Bass & Guitar Instructor',
      bio: 'Accomplished bassist and guitarist skilled in electric bass, guitar, and congas.',
      image: 'https://via.placeholder.com/400?text=Gabriel+Lopez'
    },
    {
      id: 10,
      name: 'Meshach',
      role: 'DJ & Electronic Music Specialist',
      bio: 'Professional DJ and electronic music specialist creating unforgettable entertainment experiences.',
      image: 'https://via.placeholder.com/400?text=Meshach+DJ'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">THE FACES BEHIND THE MUSIC</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Meet The Team</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our talented musicians and dedicated staff are committed to delivering exceptional experiences, whether you're learning an instrument or booking live entertainment.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-cream rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=' + member.name.replace(' ', '+');
                  }}
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gold text-sm font-medium uppercase mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <button className="text-gold hover:text-gold/80 font-medium text-sm transition-colors">
                    Read Full Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you a talented musician looking for performance opportunities or teaching positions? We're always looking for exceptional artists to join the Xhoja Music Agency family.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gold text-dark font-medium hover:bg-gold/90 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}

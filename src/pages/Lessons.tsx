import { Link } from 'react-router-dom';

export default function Lessons() {
  const instructors = [
    {
      id: 1,
      name: 'Alexander Xhoja',
      role: 'Artistic Director & CEO',
      instruments: 'Piano',
      experience: '15+ years',
      image: '/alexander-xhoja.jpg'
    },
    {
      id: 2,
      name: 'Elton Xhoja',
      role: 'Chairman of Education & Piano Instructor',
      instruments: 'Piano & Clarinet',
      experience: '10+ years',
      image: 'https://static.wixstatic.com/media/686f3e_83402c5b6c484a70aba733d6deb1ca7a~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Elton%20C%20photo.jpg'
    },
    {
      id: 3,
      name: 'Jude Seiner',
      role: 'Bass & Guitar Instructor',
      instruments: 'Bass & Guitar',
      experience: '6+ years',
      image: 'https://static.wixstatic.com/media/686f3e_c700beeefe3c4f01a3b7f68ab4e6a7d1~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jude%20Base%20photo.jpg'
    },
    {
      id: 4,
      name: 'Kai Kitch',
      role: 'Drum Instructor',
      instruments: 'Drums',
      experience: '6+ years',
      image: 'https://static.wixstatic.com/media/686f3e_d74c52f6b3f34f11880e48dc3b202deb~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kai%20Drum%20Photo.jpg'
    },
    {
      id: 5,
      name: 'Jakob Kobal',
      role: 'Accordion & Piano Instructor',
      instruments: 'Accordion & Piano',
      experience: '10+ years',
      image: 'https://static.wixstatic.com/media/686f3e_86febc3fa5274c9e9848ef7c775db0f1~mv2.png/v1/fill/w_456,h_456,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8894.png'
    },
    {
      id: 6,
      name: 'Ellis Cordaro',
      role: 'Drum Instructor',
      instruments: 'Drums',
      experience: '8+ years',
      image: 'https://id-preview--d56639a5-8bff-40ca-8743-29c8a0fd4270.lovable.app/assets/ellis-cordaro-DatsQH2W.jpg'
    },
    {
      id: 7,
      name: 'Calele (Carolina Perez)',
      role: 'Vocals & Trumpet Instructor',
      instruments: 'Vocals & Trumpet',
      experience: '5+ years',
      image: 'https://id-preview--d56639a5-8bff-40ca-8743-29c8a0fd4270.lovable.app/assets/calele-perez-C-wBlKEL.jpg'
    },
    {
      id: 8,
      name: 'Gabriel Lopez',
      role: 'Bass & Guitar Instructor',
      instruments: 'Electric Bass, Guitar & Congas',
      experience: '6+ years',
      image: 'https://id-preview--d56639a5-8bff-40ca-8743-29c8a0fd4270.lovable.app/assets/gabriel-lopez-BrA0_Y2R.jpg'
    }
  ];

  const packages = [
    {
      name: 'Trial Lesson',
      duration: '30 minutes',
      lessons: 1,
      price: 50,
      pricePerLesson: 50,
      description: 'A single introductory lesson — perfect for first-time students to experience our teaching style.',
      features: [
        'One 30-minute session',
        'Meet your instructor',
        'Personalized assessment',
        'No commitment required'
      ],
      highlighted: false
    },
    {
      name: 'Half-Hour Package',
      duration: '30 minutes',
      lessons: 4,
      price: 200,
      pricePerLesson: 50,
      description: 'Four half-hour sessions ideal for younger students or focused skill-building.',
      features: [
        'Four 30-minute sessions',
        'Progress tracking',
        'Practice materials included',
        'Email support'
      ],
      highlighted: true
    },
    {
      name: 'Full-Hour Package',
      duration: '60 minutes',
      lessons: 4,
      price: 360,
      pricePerLesson: 90,
      description: 'Four full-length sessions for serious students seeking consistent progress.',
      features: [
        'Four 60-minute sessions',
        'Detailed progress reports',
        'Practice materials included',
        'Priority scheduling',
        'Free recital access'
      ],
      highlighted: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">PERSONALIZED INSTRUCTION</p>
          <h1 className="font-serif text-6xl font-light leading-[60px] tracking-[1.5px] mb-4">Music Lessons</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Learn from world-class musicians with personalized lessons tailored to your goals, skill level, and musical interests.
          </p>
        </div>
      </section>

      {/* Meet Your Instructors Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">OUR EDUCATORS</p>
            <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px]">Meet Your Instructors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white border border-border p-8 text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-44 h-44 rounded-full border-2 border-gold/20 p-1">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/172?text=' + instructor.name.replace(' ', '+');
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-medium mb-1">{instructor.name}</h3>
                <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mb-2">{instructor.role}</p>
                <p className="text-gray-500 text-sm mb-1">{instructor.instruments}</p>
                <p className="text-gray-500 text-sm mb-4">{instructor.experience} experience</p>
                <button className="text-gold hover:text-gold/80 font-normal text-sm transition-colors">
                  VIEW FULL BIO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Packages Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-4">Lesson Packages</h2>
            <p className="text-gray-500 text-base mb-4">Choose a package that fits your schedule and goals.</p>
            <p className="text-gray-400 text-sm italic">
              Please note: Lesson scheduling is coordinated after purchase. You'll receive an email within 24 hours to arrange your lesson times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-8 ${
                  pkg.highlighted
                    ? 'bg-white border-2 border-gold shadow-lg relative'
                    : 'bg-white border border-border'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-2 font-normal text-sm">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-serif text-2xl font-medium mb-2">{pkg.name}</h3>
                <p className="text-gray-500 mb-2">{pkg.lessons} lessons &middot; {pkg.duration}</p>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="font-serif text-4xl font-medium text-gold">${pkg.price}</span>
                  <p className="text-gray-500 text-sm">${pkg.pricePerLesson} per lesson</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="text-gold font-medium mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-normal transition-colors ${
                    pkg.highlighted
                      ? 'bg-gold text-white hover:bg-gold/90'
                      : 'border border-dark text-dark hover:bg-dark hover:text-white'
                  }`}
                >
                  SELECT PACKAGE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We'll help you find the right instructor and lesson plan for your musical journey.
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

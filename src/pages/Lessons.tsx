import { Link } from 'react-router-dom';

export default function Lessons() {
  const instructors = [
    {
      id: 1,
      name: 'Alexander Xhoja',
      role: 'Artistic Director & CEO',
      instruments: 'Piano',
      experience: '15+ years',
      image: 'https://static.wixstatic.com/media/686f3e_d027c9f2f4f4413b9b5d49933e1f3013~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/xhoja-15.jpg'
    },
    {
      id: 2,
      name: 'Elton Xhoja',
      role: 'Chairman of Education & Piano Instructor',
      instruments: 'Piano & Clarinet',
      experience: '10+ years',
      image: 'https://static.wixstatic.com/media/686f3e_83402c5b6c484a70aba733d6deb1ca7a~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Elton%20C%20photo.jpg'
    },
    {
      id: 3,
      name: 'Jude Seiner',
      role: 'Bass & Guitar Instructor',
      instruments: 'Bass & Guitar',
      experience: '6+ years',
      image: 'https://static.wixstatic.com/media/686f3e_c700beeefe3c4f01a3b7f68ab4e6a7d1~mv2.jpg/v1/crop/x_0,y_199,w_480,h_480/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jude%20Base%20photo.jpg'
    },
    {
      id: 4,
      name: 'Kai Kitch',
      role: 'Drum Instructor',
      instruments: 'Drums',
      experience: '6+ years',
      image: 'https://static.wixstatic.com/media/686f3e_d74c52f6b3f34f11880e48dc3b202deb~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kai%20Drum%20Photo.jpg'
    },
    {
      id: 5,
      name: 'Jakob Kobal',
      role: 'Accordion & Piano Instructor',
      instruments: 'Accordion & Piano',
      experience: '10+ years',
      image: 'https://static.wixstatic.com/media/686f3e_86febc3fa5274c9e9848ef7c775db0f1~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8894.png'
    },
    {
      id: 6,
      name: 'Ellis Cordaro',
      role: 'Drum Instructor',
      instruments: 'Drums',
      experience: '8+ years',
      image: 'https://via.placeholder.com/400?text=Ellis+Cordaro'
    },
    {
      id: 7,
      name: 'Calele (Carolina Perez)',
      role: 'Vocals & Trumpet Instructor',
      instruments: 'Vocals & Trumpet',
      experience: '5+ years',
      image: 'https://via.placeholder.com/400?text=Carolina+Perez'
    },
    {
      id: 8,
      name: 'Gabriel Lopez',
      role: 'Bass & Guitar Instructor',
      instruments: 'Electric Bass, Guitar & Congas',
      experience: '6+ years',
      image: 'https://via.placeholder.com/400?text=Gabriel+Lopez'
    }
  ];

  const packages = [
    {
      name: 'Trial Lesson',
      duration: '30 minutes',
      lessons: 1,
      price: 50,
      pricePerLesson: 50,
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
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">PERSONALIZED INSTRUCTION</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Music Lessons</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from world-class instructors at Xhoja Music Agency. Whether you're a beginner or advancing your skills, we have the perfect lesson package for you.
          </p>
        </div>
      </section>

      {/* Meet Your Instructors Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">OUR EDUCATORS</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Meet Your Instructors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="text-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-gold"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160?text=' + instructor.name.replace(' ', '+');
                    }}
                  />
                </div>
                <h3 className="font-serif text-xl font-bold mb-1">{instructor.name}</h3>
                <p className="text-gold text-sm font-medium uppercase mb-2">{instructor.role}</p>
                <p className="text-gray-600 text-sm mb-1"><strong>Instruments:</strong> {instructor.instruments}</p>
                <p className="text-gray-600 text-sm mb-4"><strong>Experience:</strong> {instructor.experience}</p>
                <button className="text-gold hover:text-gold/80 font-medium text-sm transition-colors">
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Lesson Packages</h2>
            <p className="text-gray-600 text-lg mb-4">Choose a package that fits your schedule and goals.</p>
            <p className="text-gray-600 text-sm italic">
              Please note: Lesson scheduling is coordinated after purchase to ensure the best fit for your availability and instructor schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  pkg.highlighted
                    ? 'bg-white border-4 border-gold shadow-lg relative'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-dark px-4 py-2 rounded-full font-medium text-sm">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.lessons} lessons • {pkg.duration}</p>
                <div className="mb-6">
                  <span className="font-serif text-4xl font-bold text-gold">${pkg.price}</span>
                  <p className="text-gray-600 text-sm">${pkg.pricePerLesson} per lesson</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-gold font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-medium transition-colors ${
                    pkg.highlighted
                      ? 'bg-gold text-dark hover:bg-gold/90'
                      : 'border-2 border-dark text-dark hover:bg-dark hover:text-white'
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Select a lesson package above or contact us to discuss your musical goals and find the perfect instructor for you.
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

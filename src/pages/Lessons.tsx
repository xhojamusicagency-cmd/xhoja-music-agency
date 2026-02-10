import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const INSTRUMENTS = [
  'Piano',
  'Guitar',
  'Bass',
  'Drums',
  'Clarinet',
  'Accordion',
  'Vocals',
  'Trumpet',
  'Congas',
  'Saxophone',
];

interface PackageData {
  id: string;
  name: string;
  duration: string;
  lessons: number;
  price: number;
  pricePerLesson: number;
  description: string;
  features: string[];
  highlighted: boolean;
}

export default function Lessons() {
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [instrument, setInstrument] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null);

  const instructors = [
    {
      id: 1,
      name: 'Alexander Xhoja',
      role: 'Artistic Director & CEO',
      instruments: 'Piano',
      experience: '15+ years',
      bio: 'Alexander Xhoja is a Boston-based, twenty-one-year-old pianist who is a recent recipient of a full-ride scholarship to the prestigious Berklee College of Music. With immense dedication and drive, he enriches the lives and hearts of his listeners by implementing emotional depth into his sound.',
      image: '/alexander-xhoja.jpg'
    },
    {
      id: 2,
      name: 'Elton Xhoja',
      role: 'Chairman of Education & Piano Instructor',
      instruments: 'Piano & Clarinet',
      experience: '10+ years',
      bio: 'Elton Xhoja, a Berklee-trained educator and performer, leads educational direction at Xhoja Music Agency, crafting clear lesson objectives and inspiring students through creativity, improvisation, and a lifelong love of music.',
      image: 'https://static.wixstatic.com/media/686f3e_83402c5b6c484a70aba733d6deb1ca7a~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Elton%20C%20photo.jpg'
    },
    {
      id: 3,
      name: 'Jude Seiner',
      role: 'Bass & Guitar Instructor',
      instruments: 'Bass & Guitar',
      experience: '6+ years',
      bio: 'Jude Seiner is a scholarship recipient at Berklee College of Music, where he is currently studying performance and developing his voice as a modern jazz and contemporary musician. Recognized with a full scholarship for his artistic excellence and musical potential, Jude is an active performer known for his strong groove, musical sensitivity, and collaborative approach on stage.',
      image: 'https://static.wixstatic.com/media/686f3e_c700beeefe3c4f01a3b7f68ab4e6a7d1~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jude%20Base%20photo.jpg'
    },
    {
      id: 4,
      name: 'Kai Kitch',
      role: 'Drum Instructor',
      instruments: 'Drums',
      experience: '6+ years',
      bio: 'Kai Kitch is a dynamic Boston-based drummer and versatile musician with a strong foundation in jazz and fluency across R&B, pop, and funk. His well-rounded and adaptable approach makes him an excellent fit for a wide range of performances and ensemble settings.',
      image: 'https://static.wixstatic.com/media/686f3e_d74c52f6b3f34f11880e48dc3b202deb~mv2.jpg/v1/fill/w_456,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kai%20Drum%20Photo.jpg'
    },
    {
      id: 5,
      name: 'Jakob Kobal',
      role: 'Accordion & Piano Instructor',
      instruments: 'Accordion & Piano',
      experience: '10+ years',
      bio: 'Jakob Kobal is a Slovenian accordionist and pianist based in Boston. Classically and jazz-trained, he moves fluidly between tango, Balkan folk, jazz, and contemporary music — bringing a refined yet creative approach to every performance.',
      image: 'https://static.wixstatic.com/media/686f3e_86febc3fa5274c9e9848ef7c775db0f1~mv2.png/v1/fill/w_456,h_456,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8894.png'
    },
    {
      id: 6,
      name: 'Ellis Cordaro',
      role: 'Drum Instructor',
      instruments: 'Drums',
      experience: '8+ years',
      bio: 'Ellis Cordaro is a versatile drummer and performing artist with a deep passion for jazz and global music traditions. Specializing in jazz, pop, R&B, rock, and Latin music, he brings a dynamic and culturally informed approach to every performance. He began his formal jazz training at the New England Conservatory Preparatory School before continuing his studies at the University of Massachusetts Amherst.',
      image: '/ellis-cordaro.jpg'
    },
    {
      id: 7,
      name: 'Calele (Carolina Perez)',
      role: 'Vocals & Trumpet Instructor',
      instruments: 'Vocals & Trumpet',
      experience: '5+ years',
      bio: "Calele (Carolina Perez) is a Panamanian-Chilean Jazz and Latin vocalist and trumpeter currently studying Performance and Contemporary Writing and Production at Berklee College of Music. She has experience teaching children’s music classes and summer workshops (ages 6–15) at Fundación Danilo Pérez, as well as working as a freelance private instructor (in person and online).",
      image: '/calele-perez.jpg'
    },
    {
      id: 8,
      name: 'Gabriel Lopez',
      role: 'Bass & Guitar Instructor',
      instruments: 'Electric Bass, Guitar & Congas',
      experience: '6+ years',
      bio: 'Gabriel Lopez is a Puerto Rican electric bassist based in Boston. Deeply rooted in Latin music and jazz, his playing is driven by strong groove, time, and musical sensitivity. While bass is his primary instrument, Gabriel also brings a solid background in congas, which strongly informs his rhythmic approach and feel.',
      image: '/gabriel-lopez.jpg'
    },
    {
      id: 9,
      name: 'Ella Xhoja',
      role: 'Saxophone Instructor & Performer',
      instruments: 'Saxophone',
      experience: '5+ years',
      bio: 'Ella Xhoja is a saxophonist and performer deeply rooted in the jazz scene, with experience from Jazz at Lincoln Center to the Mingus Festival. Featured on WICN\'s Jazz for New England with JazzHers and a member of the Post Underground Jazz Collective, she brings real stage experience into every lesson, helping students develop strong technique, confidence, and a personal artistic voice.',
      image: '/ella-xhoja.jpg'
    }
  ];

  // Hash-based navigation for instructor bios
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#instructor-(\d+)$/);
      if (match) {
        setSelectedInstructor(parseInt(match[1], 10));
      } else {
        setSelectedInstructor(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const closeInstructorBio = () => {
    setSelectedInstructor(null);
    history.pushState(null, '', window.location.pathname);
  };

  const activeInstructor = instructors.find(i => i.id === selectedInstructor);

  const packages: PackageData[] = [
    {
      id: 'trial',
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
      id: 'half-hour',
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
      id: 'full-hour',
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

  const openModal = (pkg: PackageData) => {
    setSelectedPackage(pkg);
    setInstrument('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setError('');
    setLoading(false);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setError('');
    setLoading(false);
  };

  const handlePurchase = async () => {
    if (!instrument) {
      setError('Please select an instrument.');
      return;
    }
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: selectedPackage!.id,
          instrument,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Save purchase details for payment notification email
        localStorage.setItem('pendingPurchase', JSON.stringify({
          packageName: selectedPackage!.name,
          price: selectedPackage!.price,
          instrument,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim() || '',
        }));
        window.location.href = data.checkoutUrl;
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">PERSONALIZED INSTRUCTION</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[1.5px] mb-4">Music Lessons</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Learn from world-class musicians with personalized lessons tailored to your goals, skill level, and musical interests.
          </p>
        </div>
      </section>

      {/* Meet Your Instructors Section */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">OUR EDUCATORS</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px]">Meet Your Instructors</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white border border-border p-4 sm:p-8 text-center group">
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full flex items-center justify-center border border-gold/25">
                    <div className="w-28 h-28 sm:w-44 sm:h-44 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        loading="eager"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/172?text=' + instructor.name.replace(' ', '+');
                        }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-lg sm:text-2xl font-medium mb-1">{instructor.name}</h3>
                <p className="text-gold text-[10px] sm:text-xs font-medium uppercase tracking-[1.5px] sm:tracking-[2.4px] mb-2">{instructor.role}</p>
                <p className="text-gray-500 text-xs sm:text-sm mb-1 hidden sm:block">{instructor.instruments}</p>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{instructor.experience} experience</p>
                <a
                  href={`#instructor-${instructor.id}`}
                  className="text-gold hover:text-gold/80 font-normal text-xs sm:text-sm transition-colors cursor-pointer inline-block"
                >
                  VIEW FULL BIO
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Bio Modal */}
      {activeInstructor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeInstructorBio}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-white max-w-lg w-full p-6 sm:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={closeInstructorBio}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center border border-gold/25 mb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                  <img src={activeInstructor.image} alt={activeInstructor.name} className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-1">{activeInstructor.name}</h3>
              <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mb-4">{activeInstructor.role}</p>
              <div className="w-12 h-px bg-gold/30 mb-4" />
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{activeInstructor.bio}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lesson Packages Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-4">Lesson Packages</h2>
            <p className="text-gray-500 text-base mb-4">Choose a package that fits your schedule and goals.</p>
            <div className="inline-block bg-white border border-gold/30 rounded px-6 py-5 mt-2 max-w-xl">
              <p className="text-dark text-base font-semibold leading-relaxed">
                Please note: Lesson scheduling is coordinated after purchase. You'll receive a personal email within 24 hours to arrange your preferred lesson times with your instructor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
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
                      <span className="text-gold font-medium mt-1">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(pkg)}
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
          <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-4">Not Sure Where To Start?</h2>
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

      {/* Purchase Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="bg-dark px-5 sm:px-8 py-5 sm:py-6 text-center">
              <h2 className="font-serif text-xl sm:text-2xl text-white tracking-wide">{selectedPackage.name}</h2>
              <p className="text-gold text-sm mt-1">
                {selectedPackage.lessons} {selectedPackage.lessons === 1 ? 'lesson' : 'lessons'} &middot; {selectedPackage.duration}
              </p>
            </div>
            <div className="h-[3px] bg-gold" />
            <div className="px-5 py-6 sm:px-8 sm:py-8">
              <div className="text-center mb-6 sm:mb-8">
                <span className="font-serif text-4xl sm:text-5xl font-medium text-gold">${selectedPackage.price}</span>
                <p className="text-gray-400 text-sm mt-1">${selectedPackage.pricePerLesson} per lesson</p>
              </div>

              <div className="mb-6">
                <label className="block text-dark font-medium text-sm mb-2 uppercase tracking-wider">
                  What would you like to study? <span className="text-gold">*</span>
                </label>
                <select
                  value={instrument}
                  onChange={(e) => setInstrument(e.target.value)}
                  className="w-full px-4 py-3 border border-border bg-white text-dark font-serif focus:outline-none focus:border-gold transition-colors appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23CC9433' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="">Select an instrument...</option>
                  {INSTRUMENTS.map((inst) => (
                    <option key={inst} value={inst}>{inst}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-dark font-medium text-sm mb-2 uppercase tracking-wider">
                    First Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-border bg-white text-dark font-serif focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-dark font-medium text-sm mb-2 uppercase tracking-wider">
                    Last Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-border bg-white text-dark font-serif focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-dark font-medium text-sm mb-2 uppercase tracking-wider">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-border bg-white text-dark font-serif focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="mb-8">
                <label className="block text-dark font-medium text-sm mb-2 uppercase tracking-wider">
                  Phone <span className="text-gray-400 text-xs normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-border bg-white text-dark font-serif focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {error && (
                <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handlePurchase}
                disabled={loading}
                className="w-full py-4 bg-gold text-white font-medium tracking-wider hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PREPARING CHECKOUT...
                  </span>
                ) : (
                  `PROCEED TO PAYMENT — $${selectedPackage.price}`
                )}
              </button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Secure payment powered by Clover
              </p>
            </div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

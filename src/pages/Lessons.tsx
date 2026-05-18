import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

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
  'Songwriting',
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
  usePageTitle('Music Lessons in Boston — Piano, Guitar, Drums & More');
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [instrument, setInstrument] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Note: instructor profiles live on /team — the Meet The Team page.

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
      <section id="music-lessons" className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">PERSONALIZED INSTRUCTION</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[1.5px] mb-4">Music Lessons</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Learn from world-class musicians with personalized lessons tailored to your goals, skill level, and musical interests.
          </p>
        </div>
      </section>

      {/* Meet Your Instructors — compact teaser linking to the full team page */}
      <section id="instructors" className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-3 font-medium">OUR EDUCATORS</p>
          <div className="w-10 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light leading-[1.15] tracking-[0.5px] mb-5">
            Learn from world-class musicians.
          </h2>
          <p className="font-serif italic text-gray-500 text-base md:text-lg leading-[1.7] mb-8">
            Our roster of Berklee-trained instructors and performing artists teach across piano, guitar, bass, drums, vocals, saxophone, accordion, songwriting, and more.
          </p>
          <Link
            to="/team"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-dark text-[11px] font-medium tracking-[3.5px] uppercase hover:bg-dark hover:text-white transition-all duration-300"
          >
            Meet Our Full Roster
            <span className="transition-transform duration-300 hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Lesson Packages Section */}
      <section id="lesson-packages" className="bg-cream py-16 md:py-24">
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
                <p className="text-gray-500 mb-2">{pkg.lessons} {pkg.lessons === 1 ? 'lesson' : 'lessons'} &middot; {pkg.duration}</p>
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
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23CC9433' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'bo-repeat', backgroundPosition: 'right 16px center' }}
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

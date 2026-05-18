import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';
import usePageTitle from '../hooks/usePageTitle';

// Map ensemble names from /ensembles page to combo + genre defaults + curated instrument & genre options
const ENSEMBLE_MAP: Record<string, {
  combo: string;
  genre?: string;
  instrumentOptions?: string[];
  genreOptions?: { value: string; label: string }[];
}> = {
  'Solo Piano or Guitar': {
    combo: 'Solo Musician',
    // Name says "Solo Piano or Guitar" — keep options consistent with the package name
    instrumentOptions: ['Piano', 'Guitar'],
    genreOptions: [
      { value: 'classical', label: 'Classical' },
      { value: 'jazz', label: 'Jazz' },
      { value: 'pop', label: 'Pop' },
      { value: 'folk', label: 'Folk' },
    ],
  },
  'Cocktail Duo': {
    combo: 'Duo',
    genre: 'jazz',
    instrumentOptions: ['Piano', 'Guitar', 'Vocals', 'Saxophone', 'Bass', 'Violin', 'Cello'],
    genreOptions: [
      { value: 'jazz', label: 'Jazz' },
      { value: 'classical', label: 'Classical' },
      { value: 'pop', label: 'Pop' },
    ],
  },
  'String Quartet': {
    combo: 'Small Ensemble (4-5)',
    genre: 'classical',
    // Strings only — Flute removed (woodwind, not consistent with "String Quartet")
    instrumentOptions: ['Violin', 'Viola', 'Cello', 'Double Bass', 'Harp'],
    genreOptions: [
      { value: 'classical', label: 'Classical' },
      { value: 'pop', label: 'Pop / Strings Covers' },
    ],
  },
  'Dinner Jazz/Classical Trio': {
    combo: 'Trio',
    genre: 'jazz',
    instrumentOptions: ['Piano', 'Bass', 'Drums', 'Saxophone', 'Guitar', 'Vocals', 'Violin', 'Cello'],
    genreOptions: [
      { value: 'jazz', label: 'Jazz' },
      { value: 'classical', label: 'Classical' },
    ],
  },
  'DJ Set': { combo: '', genre: 'dj' },
  'Jewish Ensemble': {
    combo: 'Small Ensemble (4-5)',
    genre: 'jewish',
    instrumentOptions: ['Piano', 'Violin', 'Clarinet', 'Vocals', 'Drums', 'Bass', 'Guitar', 'Accordion'],
    genreOptions: [
      { value: 'jewish', label: 'Jewish / Klezmer' },
    ],
  },
  'Latin Jazz': {
    combo: 'Small Ensemble (4-5)',
    genre: 'latin',
    instrumentOptions: ['Piano', 'Bass', 'Drums', 'Percussion', 'Vocals', 'Saxophone', 'Trumpet', 'Guitar'],
    genreOptions: [
      { value: 'latin', label: 'Latin' },
      { value: 'jazz', label: 'Jazz' },
    ],
  },
  'Custom Ensemble': { combo: '' },
  'The Grand Wedding Experience': { combo: 'Full Wedding Package', genre: 'mixed' },
};

const ALL_INSTRUMENTS = ['Piano', 'Guitar', 'Violin', 'Viola', 'Cello', 'Double Bass', 'Drums', 'Percussion', 'Bass', 'Trumpet', 'Saxophone', 'Clarinet', 'Flute', 'Harp', 'Vocals', 'Accordion'];

const ALL_GENRES = [
  { value: 'classical', label: 'Classical' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'blues', label: 'Blues' },
  { value: 'pop', label: 'Pop' },
  { value: 'rock', label: 'Rock' },
  { value: 'folk', label: 'Folk' },
  { value: 'latin', label: 'Latin' },
  { value: 'jewish', label: 'Jewish / Klezmer' },
  { value: 'world', label: 'World Music' },
  { value: 'dj', label: 'DJ / Electronic' },
];

export default function Events() {
  usePageTitle('Event Bookings — Live Musicians for Hire in Boston');
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [videoLoaded, setVideoLoaded] = useState(false);
  // Honeypot: invisible to humans, irresistible to bots. If filled, we silently drop the submission.
  const [honeypot, setHoneypot] = useState('');
  // Render timestamp — if form is submitted in <2s, almost certainly a bot.
  const [formMountedAt] = useState(() => Date.now());
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    genre: '',
    combo: '',
    instruments: [] as string[],
    djVibe: '',
    weddingVenue: '',
    weddingVision: '',
  });

  const isDJ = formData.genre === 'dj';
  const selectedEnsemble = searchParams.get('ensemble') || '';
  const isWeddingPackage = selectedEnsemble === 'The Grand Wedding Experience';
  const hasPreFilledCombo = !!ENSEMBLE_MAP[selectedEnsemble]?.combo && !isWeddingPackage;
  // Skip the Music Genre step when there's only one genre option available
  // (DJ Set, Jewish Ensemble, etc. — no point asking "pick one" of one)
  const singleGenreEnsemble = (ENSEMBLE_MAP[selectedEnsemble]?.genreOptions?.length || 0) === 1;
  const skipGenreStep = (isDJ && selectedEnsemble === 'DJ Set') || singleGenreEnsemble;

  const steps = isWeddingPackage
    ? ['Your Information', 'Wedding Details', 'Your Vision']
    : isDJ
      ? skipGenreStep
        ? ['Your Information', 'Event Details', 'DJ Vibe']
        : ['Your Information', 'Event Details', 'Music Genre', 'DJ Vibe']
      : hasPreFilledCombo
        ? skipGenreStep
          ? ['Your Information', 'Event Details', 'Instruments']
          : ['Your Information', 'Event Details', 'Music Genre', 'Instruments']
        : ['Your Information', 'Event Details', 'Music Genre', 'Music Combo', 'Instruments'];

  // Min date for the event date picker = today; max = 5 years from today (sanity cap)
  const todayISO = new Date().toISOString().split('T')[0];
  const maxDateISO = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 5);
    return d.toISOString().split('T')[0];
  })();

  const availableInstruments =
    ENSEMBLE_MAP[selectedEnsemble]?.instrumentOptions || ALL_INSTRUMENTS;

  const availableGenres =
    ENSEMBLE_MAP[selectedEnsemble]?.genreOptions || ALL_GENRES;

  // Pre-fill from ?ensemble=X (when arriving from /ensembles page).
  // Smart-default the event type so users aren't staring at an empty required field.
  useEffect(() => {
    const ensembleParam = searchParams.get('ensemble');
    if (ensembleParam && ENSEMBLE_MAP[ensembleParam]) {
      const defaults = ENSEMBLE_MAP[ensembleParam];
      const defaultEventType: Record<string, string> = {
        'The Grand Wedding Experience': 'wedding',
        'DJ Set': 'other',
        'Jewish Ensemble': 'other',
        'Latin Jazz': 'other',
        'String Quartet': 'wedding',
        'Cocktail Duo': 'corporate',
        'Solo Piano or Guitar': 'corporate',
        'Dinner Jazz/Classical Trio': 'corporate',
      };
      setFormData((prev) => ({
        ...prev,
        combo: defaults.combo || prev.combo,
        genre: defaults.genre || prev.genre,
        eventType: defaultEventType[ensembleParam] || prev.eventType,
      }));
    }
  }, [searchParams]);

  const getMaxInstruments = () => {
    switch (formData.combo) {
      case 'Solo Musician': return 1;
      case 'Duo': return 2;
      case 'Trio': return 3;
      case 'Small Ensemble (4-5)': return 5;
      case 'Large Ensemble (6+)': return 10;
      default: return 10;
    }
  };

  const getMinInstruments = () => {
    switch (formData.combo) {
      case 'Solo Musician': return 1;
      case 'Duo': return 2;
      case 'Trio': return 3;
      case 'Small Ensemble (4-5)': return 4;
      case 'Large Ensemble (6+)': return 6;
      default: return 1;
    }
  };

  const maxInstruments = getMaxInstruments();
  const minInstruments = getMinInstruments();
  const instrumentCountLabel =
    minInstruments === maxInstruments
      ? `exactly ${maxInstruments}`
      : `between ${minInstruments} and ${maxInstruments}`;

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
          errors.email = 'Email address is required';
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email.trim())) {
          errors.email = 'Please enter a valid email address (e.g. name@domain.com)';
        }
        if (!formData.phone.trim()) {
          errors.phone = 'Phone number is required';
        } else {
          const digits = formData.phone.replace(/\D/g, '');
          if (digits.length < 10 || digits.length > 11) {
            errors.phone = 'Please enter a valid 10-digit phone number';
          }
        }
        break;
      case 2:
        if (!formData.eventDate) {
          errors.eventDate = isWeddingPackage ? 'Wedding date is required' : 'Event date is required';
        } else if (formData.eventDate < todayISO) {
          errors.eventDate = isWeddingPackage ? 'Wedding date must be today or later.' : 'Event date must be today or later.';
        } else if (formData.eventDate > maxDateISO) {
          errors.eventDate = 'Please choose a date within the next 5 years.';
        }
        if (!isWeddingPackage && !formData.eventType) errors.eventType = 'Please select an event type';
        if (!formData.guestCount) errors.guestCount = 'Guest count is required';
        if (isWeddingPackage && !formData.weddingVenue.trim()) {
          errors.weddingVenue = 'Please share your venue or location';
        }
        break;
      case 3:
        if (isWeddingPackage) {
          // Wedding vision is optional — no validation needed
        } else if (isDJ && skipGenreStep) {
          // DJ Set arrival — step 3 is DJ Vibe
          if (!formData.djVibe) errors.djVibe = 'Please select a DJ vibe';
        } else if (skipGenreStep && hasPreFilledCombo) {
          // Jewish Ensemble or other single-genre ensemble — step 3 is Instruments
          if (formData.instruments.length < minInstruments) {
            errors.instruments = `Please select ${instrumentCountLabel} instrument${maxInstruments > 1 ? 's' : ''} for your ${formData.combo?.toLowerCase() || 'ensemble'}.`;
          }
        } else {
          if (!formData.genre) errors.genre = 'Please select a music genre';
        }
        break;
      case 4:
        if (isDJ) {
          if (!formData.djVibe) errors.djVibe = 'Please select a DJ vibe';
        } else if (hasPreFilledCombo) {
          if (formData.instruments.length < minInstruments) {
            errors.instruments = `Please select ${instrumentCountLabel} instrument${maxInstruments > 1 ? 's' : ''} for your ${formData.combo?.toLowerCase() || 'ensemble'}.`;
          }
        } else {
          if (!formData.combo) errors.combo = 'Please select an ensemble size';
        }
        break;
      case 5:
        if (!isDJ && formData.instruments.length < minInstruments) {
          errors.instruments = `Please select ${instrumentCountLabel} instrument${maxInstruments > 1 ? 's' : ''} for your ${formData.combo?.toLowerCase() || 'ensemble'}.`;
        }
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      // When genre changes, clear downstream fields so the new path starts fresh
      if (name === 'genre') {
        updated.combo = '';
        updated.instruments = [];
        updated.djVibe = '';
      }
      return updated;
    });

    // Immediate validation for the event date — block past dates the moment they're typed
    if (name === 'eventDate' && value) {
      if (value < todayISO) {
        setValidationErrors(prev => ({
          ...prev,
          eventDate: isWeddingPackage
            ? 'Wedding date must be today or later.'
            : 'Event date must be today or later.',
        }));
        return;
      }
      if (value > maxDateISO) {
        setValidationErrors(prev => ({
          ...prev,
          eventDate: 'Please choose a date within the next 5 years.',
        }));
        return;
      }
    }

    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    if (digits.length === 11 && digits[0] === '1') {
      return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    }
    return phone;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${month}/${day}/${year.slice(2)}`;
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    // Spam protection: silently drop if honeypot filled OR form submitted unrealistically fast.
    // Bots fill every text field; humans never see the honeypot. Fake "success" so they don't retry.
    if (honeypot.trim() !== '' || Date.now() - formMountedAt < 2000) {
      setSubmitStatus('success');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formatPhone(formData.phone),
      event_date: formatDate(formData.eventDate),
      event_type: isWeddingPackage ? 'Wedding — Complete Package' : formData.eventType,
      guest_count: formData.guestCount,
      genre: isWeddingPackage
        ? 'Ceremony + Cocktail + Reception'
        : isDJ
          ? 'DJ/Electronic'
          : formData.genre,
      combo: isWeddingPackage
        ? 'The Grand Wedding Experience (Strings + Jazz Trio + DJ)'
        : isDJ
          ? 'DJ'
          : (formData.combo || 'Not specified'),
      instruments: isWeddingPackage
        ? 'String ensemble (ceremony) · Jazz trio (cocktail hour) · DJ (reception)'
        : isDJ
          ? 'N/A'
          : (formData.instruments.join(', ') || 'Not specified'),
      dj_vibe: isDJ && !isWeddingPackage ? formData.djVibe : 'N/A',
      wedding_venue: isWeddingPackage ? (formData.weddingVenue || 'Not specified') : 'N/A',
      wedding_vision: isWeddingPackage ? (formData.weddingVision || 'No additional notes') : 'N/A',
      to_email: formData.email,
      client_first_name: formData.firstName,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.EVENT_BOOKING_TEMPLATE,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setSubmitStatus('success');
      setCurrentStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guestCount: '',
        genre: '',
        combo: '',
        instruments: [] as string[],
        djVibe: '',
        weddingVenue: '',
        weddingVision: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">LIVE MUSIC FOR EVERY OCCASION</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[1.5px] mb-4">Event Bookings</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Hire talented musicians for your wedding, corporate event, private party, or any special occasion. Complete the form below and we'll provide you with a personalized quote.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">SEE US IN ACTION</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.1] tracking-wide text-center mb-6">A Taste <span style={{ marginRight: '-0.01em', display: 'inline-block' }}>Of</span> What We Bring To Your Event</h2>
          </div>
          <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden shadow-lg bg-dark cursor-pointer" onClick={() => !videoLoaded && setVideoLoaded(true)}>
            {videoLoaded ? (
              <iframe
                src="https://www.youtube.com/embed/X3erxpEimGI?autoplay=1"
                title="Mia McIntosh & Alexander Xhoja performing Million Years Ago by Adele"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            ) : (
              <>
                <img
                  src="https://i.ytimg.com/vi/X3erxpEimGI/hqdefault.jpg"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center max-w-3xl mx-auto">Mia McIntosh & Alexander Xhoja performing &ldquo;Million Years Ago&rdquo; by Adele &mdash; a live piano & vocals duo at Berk Recital Hall.</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-normal text-center mb-8 sm:mb-12">Book Your Event</h2>

          {/* Step Indicators — centered horizontally */}
          <div className="flex items-start justify-center mb-8 sm:mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex flex-col items-center w-20 sm:w-28 flex-shrink-0">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                      index + 1 <= currentStep
                        ? 'bg-gold text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-[10px] sm:text-xs mt-2 text-gray-500 text-center leading-tight hidden sm:block">{step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-px mt-4 sm:mt-5 ${
                      index + 1 < currentStep ? 'bg-gold' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-medium text-center">{steps[currentStep - 1]}</h3>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="bg-white border border-border p-5 sm:p-8">
            {/* Honeypot — invisible to humans, irresistible to bots. Don't touch. */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
              <label htmlFor="website-url">Your website (leave this blank)</label>
              <input
                type="text"
                id="website-url"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            {/* Step 1: Your Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-4 -mt-1">
                  <h4 className="font-serif text-2xl font-medium mb-1">Tell Us About Yourself</h4>
                  <p className="text-gray-600 text-sm">We'll use this information to reach out with your personalized quote.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${validationErrors.firstName ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                      required
                    />
                    {validationErrors.firstName && <p className="text-red-500 text-xs mt-1">{validationErrors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${validationErrors.lastName ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                      required
                    />
                    {validationErrors.lastName && <p className="text-red-500 text-xs mt-1">{validationErrors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${validationErrors.email ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                    required
                  />
                  {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${validationErrors.phone ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                    required
                  />
                  {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Event Details — wedding mode shows venue field instead of event type */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {isWeddingPackage && (
                  <div className="text-center mb-4 -mt-1">
                    <p className="text-gold uppercase tracking-[3px] text-[10px] mb-2 font-medium">
                      The Grand Wedding Experience
                    </p>
                    <h4 className="font-serif text-2xl font-medium mb-1">Your Wedding Day</h4>
                    <p className="text-gray-600 text-sm">
                      Tell us where and when. We will design the music around the rest.
                    </p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isWeddingPackage ? 'Wedding Date *' : 'Event Date *'}
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    min={todayISO}
                    max={maxDateISO}
                    className={`w-full px-4 py-3 border ${validationErrors.eventDate ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                    required
                  />
                  {validationErrors.eventDate && <p className="text-red-500 text-xs mt-1">{validationErrors.eventDate}</p>}
                </div>

                {isWeddingPackage ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Venue or Location *</label>
                    <input
                      type="text"
                      name="weddingVenue"
                      value={formData.weddingVenue}
                      onChange={handleInputChange}
                      placeholder="e.g. The State Room, Boston · or a private estate"
                      className={`w-full px-4 py-3 border ${validationErrors.weddingVenue ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                    />
                    {validationErrors.weddingVenue && <p className="text-red-500 text-xs mt-1">{validationErrors.weddingVenue}</p>}
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${validationErrors.eventType ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                      required
                    >
                      <option value="">Select an event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="graduation">Graduation</option>
                      <option value="other">Other</option>
                    </select>
                    {validationErrors.eventType && <p className="text-red-500 text-xs mt-1">{validationErrors.eventType}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guest Count *</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${validationErrors.guestCount ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                    required
                  />
                  {validationErrors.guestCount && <p className="text-red-500 text-xs mt-1">{validationErrors.guestCount}</p>}
                </div>
              </div>
            )}

            {/* Step 3 (Wedding mode): Your Vision — optional notes textarea */}
            {currentStep === 3 && isWeddingPackage && (
              <div className="space-y-6">
                <div className="text-center mb-2 -mt-1">
                  <p className="text-gold uppercase tracking-[3px] text-[10px] mb-2 font-medium">
                    Optional
                  </p>
                  <h4 className="font-serif text-2xl font-medium mb-1">Tell Us Your Vision</h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Share anything that matters — first dance song, processional ideas, the cultural moments you want honored, the energy you want for the reception.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Wedding Vision <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="weddingVision"
                    value={formData.weddingVision}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, weddingVision: e.target.value }));
                    }}
                    rows={7}
                    placeholder="e.g. We want a string quartet for the ceremony with Pachelbel's Canon as the processional. Jazz trio during cocktails on the terrace. DJ for the reception — heavy on Latin, classic Motown, and 2010s pop hits..."
                    className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent font-serif text-[15px] leading-[1.7]"
                  />
                </div>
                <div className="bg-cream-light border-l-2 border-gold px-5 py-4">
                  <p className="font-serif italic text-sm text-gray-600 leading-[1.7]">
                    Your consultation is complimentary. After you submit, the Xhoja Music Agency team will reach out within 24–48 hours to schedule a personal call and walk through every detail of your day.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Music Genre — hidden when DJ Set arrival or in wedding mode */}
            {currentStep === 3 && !skipGenreStep && !isWeddingPackage && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Genre *</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${validationErrors.genre ? 'border-red-400' : 'border-border'} bg-white focus:ring-2 focus:ring-gold focus:border-transparent`}
                    required
                  >
                    <option value="">Select a genre</option>
                    {availableGenres.map((g) => (
                      <option key={g.value} value={g.value}>{g.label}</option>
                    ))}
                  </select>
                  {validationErrors.genre && <p className="text-red-500 text-xs mt-1">{validationErrors.genre}</p>}
                </div>
              </div>
            )}

            {/* DJ Vibe — shown on step 3 when Music Genre was skipped (DJ Set arrival), otherwise on step 4 */}
            {((currentStep === 3 && skipGenreStep) || (currentStep === 4 && isDJ && !skipGenreStep)) && (
              <div className="space-y-6">
                <p className="text-gray-600">What vibe are you looking for?</p>
                <div className="space-y-3">
                  {['Top 40 / Pop Hits', 'House / EDM', 'Latin / Reggaeton', 'Old School / Throwbacks', 'R&B / Hip-Hop', 'Mix of Everything'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="djVibe"
                        value={option}
                        checked={formData.djVibe === option}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, djVibe: e.target.value }));
                          setValidationErrors(prev => { const next = { ...prev }; delete next.djVibe; return next; });
                        }}
                        className="mr-3 accent-gold"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {validationErrors.djVibe && <p className="text-red-500 text-xs mt-1">{validationErrors.djVibe}</p>}
              </div>
            )}
            {/* Step 4: Music Combo — only shown when not pre-filled from /ensembles */}
            {currentStep === 4 && !isDJ && !hasPreFilledCombo && (
              <div className="space-y-6">
                <p className="text-gray-600">Tell us about your preferred ensemble size</p>
                <div className="space-y-3">
                  {['Solo Musician', 'Duo', 'Trio', 'Small Ensemble (4-5)', 'Large Ensemble (6+)'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="combo"
                        value={option}
                        checked={formData.combo === option}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, combo: e.target.value, instruments: [] }));
                          setValidationErrors(prev => { const next = { ...prev }; delete next.combo; return next; });
                        }}
                        className="mr-3 accent-gold"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {validationErrors.combo && <p className="text-red-500 text-xs mt-1">{validationErrors.combo}</p>}
              </div>
            )}

            {/* Instruments step — curated by ensemble. Shows on step 3 if genre is skipped + combo pre-filled,
                step 4 if combo pre-filled + genre shown, or step 5 in the full flow */}
            {((currentStep === 5 && !hasPreFilledCombo) ||
              (currentStep === 4 && hasPreFilledCombo && !isDJ && !skipGenreStep) ||
              (currentStep === 3 && hasPreFilledCombo && !isDJ && skipGenreStep)) && (
              <div className="space-y-6">
                {selectedEnsemble && (
                  <p className="text-gold text-xs tracking-[3px] uppercase mb-2">{selectedEnsemble}</p>
                )}
                <p className="text-gray-600">
                  Choose {instrumentCountLabel} instrument{maxInstruments > 1 ? 's' : ''} for your {formData.combo?.toLowerCase() || 'ensemble'}.
                </p>
                <p className="text-sm text-gold font-medium">
                  {formData.instruments.length} / {maxInstruments} selected
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {availableInstruments.map((instrument) => {
                    const isChecked = formData.instruments.includes(instrument);
                    const isAtMax = formData.instruments.length >= maxInstruments && !isChecked;
                    return (
                      <label key={instrument} className={`flex items-center ${isAtMax ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={isAtMax}
                          onChange={(e) => {
                            setFormData(prev => {
                              if (e.target.checked && prev.instruments.length >= maxInstruments) {
                                return prev;
                              }
                              return {
                                ...prev,
                                instruments: e.target.checked
                                  ? [...prev.instruments, instrument]
                                  : prev.instruments.filter(i => i !== instrument)
                              };
                            });
                            setValidationErrors(prev => { const next = { ...prev }; delete next.instruments; return next; });
                          }}
                          className="mr-3 accent-gold"
                        />
                        <span>{instrument}</span>
                      </label>
                    );
                  })}
                </div>
                {validationErrors.instruments && <p className="text-red-500 text-xs mt-1">{validationErrors.instruments}</p>}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex-1 px-6 py-3 border-2 border-dark text-dark font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark hover:text-white transition-colors"
              >
                Previous
              </button>
              {currentStep === steps.length ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gold text-dark font-medium hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? 'Sending...'
                    : isWeddingPackage
                      ? 'Request My Wedding Consultation'
                      : 'Submit Booking'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 px-6 py-3 bg-gold text-dark font-medium hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight size={20} />
                </button>
              )}
            </div>
          </form>

          {submitStatus === 'success' && (
            <div className="mt-6 p-6 bg-green-50 border border-green-200 text-center">
              <h4 className="font-serif text-xl font-medium text-green-800 mb-2">Booking Request Received!</h4>
              <p className="text-green-700 text-sm">Thank you for your inquiry. A confirmation email has been sent to your inbox. Our team will review your request and get back to you within 24-48 hours with a personalized quote.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-6 bg-red-50 border border-red-200 text-center">
              <h4 className="font-serif text-xl font-medium text-red-800 mb-2">Something Went Wrong</h4>
              <p className="text-red-700 text-sm">We couldn't process your request. Please try again or contact us directly at xhojamusicagency@gmail.com or (857) 498-8487.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}







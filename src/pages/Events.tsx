import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';

export default function Events() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
  });

  const steps = ['Your Information', 'Event Details', 'Music Genre', 'Music Combo', 'Instruments'];

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

  const maxInstruments = getMaxInstruments();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
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
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formatPhone(formData.phone),
      event_date: formatDate(formData.eventDate),
      event_type: formData.eventType,
      guest_count: formData.guestCount,
      genre: formData.genre,
      combo: formData.combo || 'Not specified',
      instruments: formData.instruments.join(', ') || 'Not specified',
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
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">SEE US IN ACTION</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.1] tracking-normal text-center mb-6">A Taste Of What We Bring To Your Event</h2>
          </div>
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg bg-dark" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/X3erxpEimGI/hqdefault.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <iframe
              src="https://www.youtube.com/embed/X3erxpEimGI"
              title="Mia McIntosh & Alexander Xhoja performing Million Years Ago by Adele"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="eager"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center max-w-3xl mx-auto">Mia McIntosh & Alexander Xhoja performing &ldquo;Million Years Ago&rdquo; by Adele &mdash; a live piano & vocals duo at Berk Recital Hall.</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-normal text-center mb-8 sm:mb-12">Book Your Event</h2>

          {/* Step Indicators */}
          <div className="flex items-start justify-between mb-8 sm:mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start flex-1">
                <div className="flex flex-col items-center w-16 sm:w-24 flex-shrink-0">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                      index + 1 <= currentStep
                        ? 'bg-gold text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-[10px] sm:text-xs mt-1 text-gray-500 hidden sm:block">{step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 mt-4 sm:mt-5 ${
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
          <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-lg p-5 sm:p-8 shadow-md">
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
                      className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guest Count *</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Music Genre */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Genre *</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  >
                    <option value="">Select a genre</option>
                    <option value="classical">Classical</option>
                    <option value="jazz">Jazz</option>
                    <option value="blues">Blues</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                    <option value="latin">Latin</option>
                    <option value="world">World Music</option>
                    <option value="dj">DJ/Electronic</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Music Combo */}
            {currentStep === 4 && (
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
                        onChange={(e) => setFormData(prev => ({ ...prev, combo: e.target.value, instruments: [] }))}
                        className="mr-3 accent-gold"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Instruments */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <p className="text-gray-600">
                  Select up to {maxInstruments} instrument{maxInstruments > 1 ? 's' : ''} for your {formData.combo || 'ensemble'}.
                </p>
                <p className="text-sm text-gold font-medium">
                  {formData.instruments.length} / {maxInstruments} selected
                </p>
                <div className="space-y-3">
                  {['Piano', 'Guitar', 'Violin', 'Cello', 'Drums', 'Bass', 'Trumpet', 'Saxophone', 'Vocals', 'Accordion'].map((instrument) => {
                    const isChecked = formData.instruments.includes(instrument);
                    const isAtMax = formData.instruments.length >= maxInstruments && !isChecked;
                    return (
                      <label key={instrument} className={`flex items-center ${isAtMax ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={isAtMax}
                          onChange={(e) => {
                            setFormData(prev => ({
                              ...prev,
                              instruments: e.target.checked
                                ? [...prev.instruments, instrument]
                                : prev.instruments.filter(i => i !== instrument)
                            }));
                          }}
                          className="mr-3 accent-gold"
                        />
                        <span>{instrument}</span>
                      </label>
                    );
                  })}
                </div>
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
                  {isSubmitting ? 'Sending...' : 'Submit Booking'}
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
            <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
              <h4 className="font-serif text-xl font-medium text-green-800 mb-2">Booking Request Received!</h4>
              <p className="text-green-700 text-sm">Thank you for your inquiry. A confirmation email has been sent to your inbox. Our team will review your request and get back to you within 24-48 hours with a personalized quote.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
              <h4 className="font-serif text-xl font-medium text-red-800 mb-2">Something Went Wrong</h4>
              <p className="text-red-700 text-sm">We couldn't process your request. Please try again or contact us directly at xhojamusicagency@gmail.com or (857) 498-8487.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}







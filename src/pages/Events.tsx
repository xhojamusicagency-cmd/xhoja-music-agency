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
    instruments: [],
  });

  const steps = ['Your Information', 'Event Details', 'Music Genre', 'Music Combo', 'Instruments'];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      event_date: formData.eventDate,
      event_type: formData.eventType,
      guest_count: formData.guestCount,
      genre: formData.genre,
      instruments: (formData.instruments as string[]).join(', ') || 'Not specified',
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
        instruments: [],
      });
    } catch {
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
          <h1 className="font-serif text-6xl font-light leading-[60px] tracking-[1.5px] mb-4">Event Bookings</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Hire talented musicians for your wedding, corporate event, private party, or any special occasion. Complete the form below and we'll provide you with a personalized quote.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">SEE US IN ACTION</p>
            <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-6">A Taste of What We Bring to Your Event</h2>
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
          <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] text-center mb-12">Book Your Event</h2>

          {/* Step Indicators */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      index + 1 <= currentStep
                        ? 'bg-gold text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-xs mt-1 text-gray-500 hidden md:block">{step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      index + 1 < currentStep ? 'bg-gold' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-medium">{steps[currentStep - 1]}</h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
            {/* Step 1: Your Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-2">
                  <h4 className="font-serif text-xl font-medium mb-1">Tell Us About Yourself</h4>
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
                    <label key={option} className="flex items-center">
                      <input type="radio" name="combo" value={option} className="mr-3" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Instruments */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <p className="text-gray-600">Which instruments interest you?</p>
                <div className="space-y-3">
                  {['Piano', 'Guitar', 'Violin', 'Cello', 'Drums', 'Bass', 'Trumpet', 'Saxophone', 'Vocals', 'Accordion'].map((instrument) => (
                    <label key={instrument} className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>{instrument}</span>
                    </label>
                  ))}
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
                  type="submit"
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
              <h4 className="font-serif text-xl font-medium text-red-800 mb-2">Something went wrong</h4>
              <p className="text-red-700 text-sm">We couldn't process your request. Please try again or contact us directly at xhojamusicagency@gmail.com or (857) 498-8487.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

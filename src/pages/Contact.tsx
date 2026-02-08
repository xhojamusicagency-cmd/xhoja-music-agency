import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'lessons',
    message: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: 'lessons',
      message: ''
    });
    setAgreedToTerms(false);
  };

  const faqs = [
    {
      question: 'How do I book musicians for my event?',
      answer: 'Visit our Event Bookings page to select your preferred music genre, ensemble size, and provide event details. After submitting your request and signing the booking agreement, we\'ll contact you within 24 hours to confirm availability and discuss next steps.'
    },
    {
      question: 'What instruments do you offer lessons for?',
      answer: 'We currently offer lessons in piano, voice, guitar, violin, and drums. Our instructors are highly trained professionals with extensive performance and teaching experience.'
    },
    {
      question: 'Do you travel for events outside Boston?',
      answer: 'Yes! While we\'re based in Boston, we regularly travel throughout New England and beyond for weddings, corporate events, and special occasions. Additional travel fees may apply depending on the distance.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Cancellations made more than 30 days before the event will receive a full refund minus the deposit. Cancellations within 30 days are non-refundable. Please refer to our booking agreement for complete terms.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">GET IN TOUCH</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about lessons, event bookings, or anything else? We'd love to hear from you. Reach out and let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:xhojamusicagency@gmail.com" className="text-gold hover:text-gold/80 transition-colors">
                    xhojamusicagency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:+18574988487" className="text-gold hover:text-gold/80 transition-colors">
                    (857) 498-8487
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-700">Boston, Massachusetts</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Office Hours</h3>
                  <p className="text-gray-700 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-cream rounded-lg p-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    >
                      <option value="lessons">Music Lessons Inquiry</option>
                      <option value="events">Event Booking Inquiry</option>
                      <option value="collaboration">Collaboration / Join Team</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1"
                      required
                    />
                    <label className="text-sm text-gray-600">
                      By submitting this form, I acknowledge that I have read and agreed to Xhoja Music Agency's terms of service and privacy policy. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gold text-dark font-medium hover:bg-gold/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">COMMON QUESTIONS</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Frequently Asked</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="font-serif text-xl font-bold cursor-pointer hover:text-gold transition-colors">
                  {faq.question}
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

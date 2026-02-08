import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

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
      subject: 'general',
      message: ''
    });
  };

  const faqs = [
    {
      question: 'How do I book musicians for my event?',
      answer: 'Visit our Event Bookings page to start the booking process. Fill out our multi-step form with your event details, and our team will get back to you within 24 hours to finalize arrangements and discuss pricing.'
    },
    {
      question: 'What instruments do you offer lessons for?',
      answer: 'We offer lessons for piano, voice, guitar, violin, drums, bass, trumpet, saxophone, accordion, cello, and more. Check our Meet Your Instructors page to see our full roster of instructors and their specialties.'
    },
    {
      question: 'Do you travel for events outside Boston?',
      answer: 'Yes! We travel throughout New England for events. Contact us to discuss your specific location and event requirements. We work with talented musicians who are willing to travel for the right engagement.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'For event bookings: cancellations made 30+ days before the event receive a full refund minus a small deposit. Cancellations within 30 days are non-refundable. For lessons, please refer to your instructor for specific cancellation details.'
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
            Have questions? Want to book musicians or schedule lessons? We'd love to hear from you. Reach out anytime!
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
                      <option value="general">General Inquiry</option>
                      <option value="lessons">Music Lessons</option>
                      <option value="events">Event Booking</option>
                      <option value="collaboration">Collaboration</option>
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

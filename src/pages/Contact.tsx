import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone ? formatPhone(formData.phone) : 'Not provided',
      subject: formData.subject,
      message: formData.message,
      to_email: formData.email,
      client_first_name: formData.fullName.split(' ')[0],
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setAgreedToTerms(false);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">GET IN TOUCH</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[1.5px] mb-4">Contact Us</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
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
              <h3 className="font-serif text-2xl font-medium">Contact Information</h3>
              <div className="flex gap-4">
                <Mail size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg font-medium mb-2">Email</h4>
                  <a href="mailto:xhojamusicagency@gmail.com" className="text-gold hover:text-gold/80 transition-colors">
                    xhojamusicagency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg font-medium mb-2">Phone</h4>
                  <a href="tel:+18574988487" className="text-gold hover:text-gold/80 transition-colors">
                    (857) 498-8487
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg font-medium mb-2">Location</h4>
                  <p className="text-gray-500">Boston, Massachusetts</p>
                  <p className="text-gold text-sm font-medium mt-1">Serving the Greater Boston Area</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={32} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg font-medium mb-2">Office Hours</h4>
                  <p className="text-gray-500 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-cream p-5 sm:p-8 border border-border">
                <h3 className="font-serif text-2xl font-medium mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[2.4px] text-gray-500 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[2.4px] text-gray-500 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[2.4px] text-gray-500 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[2.4px] text-gray-500 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
                        required
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="lessons">Music Lessons Inquiry</option>
                        <option value="events">Event Booking Inquiry</option>
                        <option value="collaboration">Collaboration / Join Team</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[2.4px] text-gray-500 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-border bg-white focus:ring-2 focus:ring-gold focus:border-transparent"
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
                    <label className="text-sm text-gray-500">
                      By submitting this form, I acknowledge that I have read and agreed to Xhoja Music Agency's terms of service and privacy policy. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gold text-white font-normal hover:bg-gold/90 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-6 bg-green-50 border border-green-200 text-center">
                      <h4 className="font-serif text-xl font-medium text-green-800 mb-2">Message Sent!</h4>
                      <p className="text-green-700 text-sm">Thank you for reaching out. A confirmation has been sent to your email. We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-6 bg-red-50 border border-red-200 text-center">
                      <h4 className="font-serif text-xl font-medium text-red-800 mb-2">Something went wrong</h4>
                      <p className="text-red-700 text-sm">We couldn't send your message. Please try again or contact us directly at xhojamusicagency@gmail.com or (857) 498-8487.</p>
                    </div>
                  )}
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
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">COMMON QUESTIONS</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px]">Frequently Asked</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-border p-4 sm:p-6">
                <summary className="font-serif text-lg sm:text-xl font-medium cursor-pointer hover:text-gold transition-colors">
                  {faq.question}
                </summary>
                <p className="text-gray-500 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';

interface InlineLeadFormProps {
  /** Tag where this lead originated for source attribution in inbox */
  source: string;
  /** Heading shown above the form */
  heading?: string;
  /** Helper text shown under heading */
  subheading?: string;
  /** Placeholder for the message textarea, customized per audience */
  messagePlaceholder?: string;
}

/**
 * Compact 3-field lead capture form for landing pages.
 * Reuses Contact.tsx's EmailJS template; tags submissions with `source`
 * so the inbox shows which landing page produced the lead.
 */
export default function InlineLeadForm({
  source,
  heading = 'Tell us about your event',
  subheading = 'A quick note is enough — we will reply within one business day.',
  messagePlaceholder = 'Date, venue, guest count, anything you want us to know…',
}: InlineLeadFormProps) {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [formMountedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam protection: silently succeed if honeypot filled or submitted too fast
    if (honeypot.trim() !== '' || Date.now() - formMountedAt < 2000) {
      setSubmitStatus('success');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: 'Not provided',
          subject: `Inline lead from ${source}`,
          message: formData.message,
          to_email: formData.email,
          client_first_name: formData.fullName.split(' ')[0],
          source, // for attribution
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="bg-cream py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
            Message Received
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-light leading-[1.2] mb-4 text-dark">
            Thank you — we will be in touch shortly.
          </h2>
          <p className="font-serif italic text-gray-500 text-base leading-[1.7]">
            We reply to every inquiry personally, usually within one business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
            Quick Inquiry
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-light leading-[1.2] mb-3 text-dark">
            {heading}
          </h2>
          <p className="font-serif italic text-gray-500 text-base leading-[1.7]">
            {subheading}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot — invisible to humans, bots fill it */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] opacity-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-5 py-4 bg-white border border-border focus:border-gold outline-none text-dark placeholder-gray-400 transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-5 py-4 bg-white border border-border focus:border-gold outline-none text-dark placeholder-gray-400 transition-colors"
            />
          </div>

          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder={messagePlaceholder}
            className="w-full px-5 py-4 bg-white border border-border focus:border-gold outline-none text-dark placeholder-gray-400 resize-none transition-colors"
          />

          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please try calling us at (857) 498-8487 or emailing directly.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto sm:mx-auto sm:block px-12 py-5 bg-gold text-dark text-[11px] font-medium tracking-[4px] uppercase hover:bg-cream-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending…' : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}

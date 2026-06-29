import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';
import usePageTitle from '../hooks/usePageTitle';

export default function PaymentSuccess() {
  usePageTitle('Payment Successful');
  useEffect(() => {
    const raw = localStorage.getItem('pendingPurchase');
    if (!raw) return;

    let purchase;
    try {
      purchase = JSON.parse(raw);
    } catch (err) {
      // Corrupt entry can't be retried — clear it so it doesn't linger.
      console.error('Could not parse pending purchase; clearing corrupt entry:', err);
      localStorage.removeItem('pendingPurchase');
      return;
    }

    // Claim the purchase immediately so a StrictMode re-mount or a quick refresh
    // can't fire a duplicate notification; it's restored below if the send fails.
    localStorage.removeItem('pendingPurchase');

    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE,
        {
          to_email: 'xhojamusicagency@gmail.com',
          from_name: `${purchase.firstName} ${purchase.lastName}`,
          reply_to: purchase.email,
          message: [
            '--- NEW LESSON PURCHASE ---',
            '',
            `Package: ${purchase.packageName}`,
            `Price: ${purchase.price}`,
            `Instrument: ${purchase.instrument}`,
            `Student: ${purchase.firstName} ${purchase.lastName}`,
            `Email: ${purchase.email}`,
            purchase.phone ? `Phone: ${purchase.phone}` : '',
            '',
            'Payment was completed via Clover checkout.',
          ].filter(Boolean).join('\n'),
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .catch((err) => {
        // Restore so a failed notification retries on the next visit instead of vanishing.
        console.error('Failed to send payment notification (restored for retry):', err);
        localStorage.setItem('pendingPurchase', raw);
      });
  }, []);

  return (
    <div>
      {/* Hero header matching site style */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">CONFIRMATION</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-[52px] tracking-[1.5px]">
            Payment Successful
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream-mid py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-border p-10 md:p-14">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(204, 148, 51, 0.12)' }}>
              <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="font-serif text-3xl font-light mb-4">Thank You!</h2>

            <p className="text-gray-500 text-lg mb-4">
              Your lesson package with Xhoja Music Agency LLC has been confirmed.
            </p>

            <p className="text-gray-400 text-base mb-10">
              You'll receive a confirmation email shortly. Our team will reach out within <strong className="text-dark">24 hours</strong> to schedule your lessons.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-gold text-dark font-normal tracking-[0.7px] text-sm hover:bg-gold/90 transition-colors"
              >
                BACK TO HOME
              </Link>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 border border-dark text-dark font-normal tracking-[0.7px] text-sm hover:bg-dark hover:text-white transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 

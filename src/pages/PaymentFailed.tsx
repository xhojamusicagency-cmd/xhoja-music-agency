import { Link } from 'react-router-dom';

export default function PaymentFailed() {
  return (
    <div>
      {/* Hero header matching site style */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">PAYMENT STATUS</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-[52px] tracking-[1.5px]">
            Payment Unsuccessful
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream-mid py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-border p-10 md:p-14">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(20, 20, 20, 0.08)' }}>
              <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-light mb-4">Something Went Wrong</h2>
            <p className="text-gray-500 text-lg mb-4">
              Your payment could not be processed. You have not been charged.
            </p>
            <p className="text-gray-400 text-base mb-10">
              Please try again or contact us if the issue persists. We're happy to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lessons"
                className="inline-block px-8 py-3 bg-gold text-white font-normal tracking-[0.7px] text-sm hover:bg-gold/90 transition-colors"
              >
                TRY AGAIN
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

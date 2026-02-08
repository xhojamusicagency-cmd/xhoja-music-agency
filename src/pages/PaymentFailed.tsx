import { Link } from 'react-router-dom';

export default function PaymentFailed() {
  return (
    <div>
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="font-serif text-5xl font-light leading-[52px] tracking-[1.5px] mb-4">Payment Unsuccessful</h1>
          <p className="text-gray-500 text-lg mb-4">
            Something went wrong with your payment. You have not been charged.
          </p>
          <p className="text-gray-400 text-base mb-8">
            Please try again or contact us if the issue persists. We're happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lessons"
              className="inline-block px-8 py-3 bg-gold text-white font-normal hover:bg-gold/90 transition-colors"
            >
              TRY AGAIN
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-dark text-dark font-normal hover:bg-dark hover:text-white transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function PaymentSuccess() {
  return (
    <div>
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-5xl font-light leading-[52px] tracking-[1.5px] mb-4">Payment Successful!</h1>
          <p className="text-gray-500 text-lg mb-4">
            Thank you for purchasing a lesson package with Xhoja Music Agency LLC.
          </p>
          <p className="text-gray-400 text-base mb-8">
            You'll receive a confirmation email shortly. Our team will reach out within <strong className="text-dark">24 hours</strong> to schedule your lessons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-gold text-white font-normal hover:bg-gold/90 transition-colors"
            >
              BACK TO HOME
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

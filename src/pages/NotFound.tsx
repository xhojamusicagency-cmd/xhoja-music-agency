import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle(
    'Page Not Found',
    "The page you're looking for doesn't exist. Return home or get in touch with Xhoja Music Agency."
  );

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">404</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[1.5px] mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-10">
          The page you're looking for may have moved or no longer exists. Let's get you back to the music.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-gold text-dark font-medium hover:bg-gold/90 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-dark text-dark font-medium hover:bg-dark hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  quote: string;
  name: string;
  role: string;
  event?: string;
}

// Real client testimonials. Add more here as they come in.
const REVIEWS: Review[] = [
  {
    quote:
      "Thank you so much for helping me secure an accompanist for the Spring Cabaret at Thayer Middle School. Everything was beautifully handled, and the music brought the entire production to life.",
    name: 'Nicolette Putka',
    role: 'Director of Theater',
    event: 'Thayer Academy — Spring Cabaret 2026',
  },
  {
    quote:
      "Alexander and his trio brought such elegance to our donor dinner. Half our guests asked who we'd hired before the night was over.",
    name: 'Events Director',
    role: 'Boston Nonprofit',
    event: 'Annual Donor Dinner',
  },
  {
    quote:
      "Professional, refined, and on time — exactly what we needed for the service. The pianist set the perfect tone for the entire ceremony.",
    name: 'Lewann Mina',
    role: 'First Baptist Church',
    event: 'Wollaston, MA',
  },
];

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goPrev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const goNext = () => setIndex((i) => (i + 1) % REVIEWS.length);

  const current = REVIEWS[index];

  return (
    <section
      className="bg-cream-light py-20 md:py-28 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-4 font-medium">
            What Our Clients Say
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.5px] text-dark">
            Trusted by {REVIEWS.length}+ clients across Boston.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Quote area */}
          <div className="min-h-[280px] sm:min-h-[240px] flex flex-col items-center justify-center text-center px-6 sm:px-16">
            {/* Stars */}
            <div className="flex gap-1.5 mb-7">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#CC9433" stroke="#CC9433" />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              key={index}
              className="font-serif italic text-xl sm:text-2xl md:text-[26px] text-dark leading-[1.55] mb-8 transition-opacity duration-500"
              style={{ animation: 'fadeIn 0.6s ease-in-out' }}
            >
              "{current.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="space-y-1">
              <p className="font-serif text-lg text-dark tracking-[0.3px]">{current.name}</p>
              <p className="text-gray-500 text-sm tracking-wide">{current.role}</p>
              {current.event && (
                <p className="text-gold text-[10px] tracking-[3px] uppercase mt-2 font-medium">
                  {current.event}
                </p>
              )}
            </div>
          </div>

          {/* Side arrows — hidden on small mobile, visible from sm: */}
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-dark/40 hover:text-gold transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next review"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-dark/40 hover:text-gold transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Mobile arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="sm:hidden text-dark/40 hover:text-gold transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-1.5 bg-dark/20 hover:bg-dark/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next review"
            className="sm:hidden text-dark/40 hover:text-gold transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

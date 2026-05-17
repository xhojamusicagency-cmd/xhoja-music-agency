import { Star } from 'lucide-react';

interface Review {
  quote: string;
  name: string;
  role: string;
  event?: string;
}

// Real 5-star Google Reviews. Add new ones here as they come in.
const REVIEWS: Review[] = [
  {
    quote:
      "I recently hired Xhoja Music Agency for a private event, and they were absolutely incredible. They provided a beautiful jazz trio that completely elevated the atmosphere of the evening. The musicians were not only extremely talented, but also professional, punctual, and easy to work with throughout the entire process.",
    name: 'Sofia',
    role: 'Private Event Host',
    event: 'Jazz Trio · Private Event',
  },
  {
    quote:
      "We are incredibly grateful to Alexander Xhoja and his team of pianists for their amazing musical contributions towards our worship services. They were especially helpful during a time when we were between music directors, stepping in seamlessly. The music greatly enriched our services, and we would highly recommend Alexander to anyone seeking exceptional musicians.",
    name: 'Federated Church of Norfolk',
    role: 'Worship Services',
    event: 'Norfolk, MA',
  },
  {
    quote:
      "I can't say enough great things about Alex. As a piano teacher, he is incredibly talented, patient, and truly passionate. Beyond teaching, Alex is also an exceptional event planner — organized, creative, detail-oriented, and calm under pressure. His musical expertise adds an extra level of professionalism and elegance to any event.",
    name: 'FayFay33',
    role: 'Piano Student · Local Guide',
    event: 'Lessons & Event Planning',
  },
  {
    quote:
      "My daughter suddenly became interested in learning guitar. Alex and Xhoja Music Agency were recommended and we decided to give it a try. Alex had a great conversation with me about what we were looking for and matched us up with Jude. My daughter has now been learning with Jude for 3 months and continues to look forward to her weekly lessons. Definitely recommend.",
    name: 'Lana Rifkin',
    role: 'Parent · Local Guide',
    event: 'Guitar Lessons',
  },
  {
    quote:
      "Alex performed at our daughter's wedding cocktail hour. He was totally flexible in playing from a playlist I provided along with a lovely array of music that he included. We were so pleased and our guests truly enjoyed his playing. I would definitely recommend him to family, friends, and venues looking for a gifted and experienced performer.",
    name: 'Susan Gorny',
    role: 'Mother of the Bride',
    event: 'Wedding Cocktail Hour',
  },
  {
    quote:
      "I hired Alex to play piano at our home for a family holiday. I cannot say enough about his exquisite music, enthusiasm, energy and kindness. He also wrote an original song to honor my dad's memory because he sensed we were all thinking of him that evening. Alex has immense talent and is a very special person.",
    name: 'Marjory Gundersheim',
    role: 'Private Client',
    event: 'Private Holiday Event',
  },
  {
    quote:
      "I recently booked a studio session with Xhoja Music Agency and had an amazing experience. In less than two weeks, the agency arranged everything — the studio, sound engineer and a talented string quartet. Everyone arrived on time and was set up quickly and professionally. I highly recommend Xhoja Music Agency to any artist looking for a smooth and professional recording experience.",
    name: 'Petr',
    role: 'Recording Artist',
    event: 'Studio Session · String Quartet',
  },
  {
    quote:
      "Thanks for an amazing performance for our wedding. Casandra and I totally loved it for our Henna ceremony. He was phenomenal and we'd be working with him again soon. Catch him before he gets famous — totally a rockstar.",
    name: 'Adhunik Anubhav',
    role: 'Wedding Client · Local Guide',
    event: 'Henna Ceremony',
  },
  {
    quote:
      "Great company! Will hire them anytime. Second time I'm using their pianist — very professional, shows up on time, and delivers.",
    name: 'Ketty Magnus',
    role: 'Repeat Client',
    event: 'Returning Customer',
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[440px] bg-white p-8 sm:p-10 flex flex-col shadow-[0_10px_30px_-15px_rgba(20,20,20,0.08)] transition-all duration-500 hover:shadow-[0_18px_40px_-18px_rgba(20,20,20,0.18)] hover:-translate-y-1"
      style={{ minHeight: '320px' }}
    >
      {/* Stars */}
      <div className="flex gap-1.5 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#CC9433" stroke="#CC9433" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-serif italic text-[16px] sm:text-[17px] md:text-[18px] text-dark leading-[1.7] mb-8 flex-1">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="border-t border-gold/20 pt-5">
        <p className="font-serif text-base text-dark tracking-[0.3px]">{review.name}</p>
        <p className="text-gray-500 text-xs tracking-wide mt-0.5">{review.role}</p>
        {review.event && (
          <p className="text-gold text-[10px] tracking-[2.5px] uppercase mt-2 font-medium">
            {review.event}
          </p>
        )}
      </div>
    </article>
  );
}

export default function ReviewsCarousel() {
  // Duplicate the reviews so the marquee loop is seamless
  // (when translateX hits -50%, the second copy lines up exactly where the first was)
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section className="bg-cream-light py-20 md:py-28 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-4 font-medium">
            What Our Clients Say
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.5px] text-dark">
            Trusted by clients across Boston &amp; beyond.
          </h2>
          {/* Google verification badge */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#CC9433" stroke="#CC9433" />
              ))}
            </div>
            <span className="text-gray-500 text-xs tracking-wide">
              5.0 · Verified Google reviews
            </span>
          </div>
        </div>
      </div>

      {/* Marquee container — full bleed, fade overlays on each edge */}
      <div className="relative">
        {/* Left fade gradient — fades from cream-light to transparent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(249, 248, 245, 1) 0%, rgba(249, 248, 245, 0) 100%)',
          }}
        ></div>
        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, rgba(249, 248, 245, 1) 0%, rgba(249, 248, 245, 0) 100%)',
          }}
        ></div>

        {/* The animated track */}
        <div className="reviews-marquee flex gap-6 sm:gap-8 w-max py-4">
          {loop.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes reviewsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .reviews-marquee {
          animation: reviewsMarquee 55s linear infinite;
          will-change: transform;
        }
        .reviews-marquee:hover {
          animation-play-state: paused;
        }
        /* Slow down a touch on smaller screens since fewer cards are visible at once */
        @media (max-width: 640px) {
          .reviews-marquee {
            animation-duration: 42s;
          }
        }
        /* Respect users who prefer reduced motion — stop the animation entirely */
        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

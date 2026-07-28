interface PageHeroProps {
  /** Small uppercase text above the headline (eyebrow) */
  eyebrow: string;
  /** Main page headline */
  headline: string;
  /** Optional italic subhead beneath the headline */
  subhead?: string;
  /** Show tap-to-call phone line below subhead */
  showPhone?: boolean;
  /** Optional background image path (e.g. "/wedding-reception.webp"). When provided, renders a cinematic hero with overlay and white text. */
  backgroundImage?: string;
  /** Optional vertical position for background image (e.g. "center", "top", "bottom"). Defaults to "center". */
  imagePosition?: string;
}

/**
 * Shared hero pattern. Two modes:
 * 1. Text-only (no backgroundImage) — cream-light background, dark text
 * 2. Cinematic (with backgroundImage) — full-bleed image with dark overlay, white text
 *
 * Pattern: eyebrow → divider → headline → subhead → (optional phone)
 */
export default function PageHero({
  eyebrow,
  headline,
  subhead,
  showPhone = true,
  backgroundImage,
  imagePosition = 'center',
}: PageHeroProps) {
  if (backgroundImage) {
    return (
      <section className="relative bg-dark overflow-hidden min-h-[520px] md:min-h-[620px] flex items-center">
        {/* Background image */}
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.65) 60%, rgba(15,15,15,0.75) 100%)',
          }}
        ></div>
        {/* Subtle gold glow accent matching homepage style */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(204, 148, 51, 0.18) 0%, transparent 70%)',
          }}
        ></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center w-full">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-4 font-medium">
            {eyebrow}
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-6"></div>
          <h1 className="font-serif text-white text-[36px] sm:text-[48px] md:text-[60px] font-light leading-[1.08] tracking-[0.5px] mb-6">
            {headline}
          </h1>
          {subhead && (
            <p className="font-serif italic text-cream/85 text-base md:text-lg max-w-2xl mx-auto leading-[1.7] mb-7">
              {subhead}
            </p>
          )}
          {showPhone && (
            <p className="text-cream/75 text-sm tracking-[2px]">
              Or call directly:{' '}
              <a href="tel:+18574988487" className="text-gold font-medium hover:underline">
                (857) 498-8487
              </a>
            </p>
          )}
        </div>
      </section>
    );
  }

  // Text-only mode (original)
  return (
    <section className="bg-cream-light pt-10 pb-8 md:pt-14 md:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
          {eyebrow}
        </p>
        <div className="w-12 h-px bg-gold mx-auto mb-4"></div>
        <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[52px] font-light leading-[1.08] tracking-[0.5px] mb-5 text-dark">
          {headline}
        </h1>
        {subhead && (
          <p className="font-serif italic text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-[1.7] mb-6">
            {subhead}
          </p>
        )}
        {showPhone && (
          <p className="text-dark text-sm tracking-[2px] mt-2">
            Or call directly:{' '}
            <a href="tel:+18574988487" className="text-gold font-medium hover:underline">
              (857) 498-8487
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

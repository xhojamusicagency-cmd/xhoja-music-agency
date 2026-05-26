interface PageHeroProps {
  /** Small uppercase text above the headline (eyebrow) */
  eyebrow: string;
  /** Main page headline */
  headline: string;
  /** Optional italic subhead beneath the headline */
  subhead?: string;
  /** Show tap-to-call phone line below subhead */
  showPhone?: boolean;
}

/**
 * Shared hero pattern matching the Ensembles page design:
 * eyebrow → divider → headline → subhead → (optional phone)
 */
export default function PageHero({
  eyebrow,
  headline,
  subhead,
  showPhone = true,
}: PageHeroProps) {
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

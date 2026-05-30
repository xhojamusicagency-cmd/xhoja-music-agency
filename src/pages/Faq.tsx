import usePageTitle from '../hooks/usePageTitle';
import { FAQS } from '../data/faqContent';

/**
 * Dedicated /faq page rendering the canonical Q&A list.
 *
 * The page intentionally does NOT include the FAQPage JSON-LD inline here —
 * the schema is injected into the document <head> by src/prerender.tsx so it
 * works for Google's first crawl pass (no JS execution required) without
 * needing dangerouslySetInnerHTML on the client.
 */
export default function Faq() {
  usePageTitle(
    'Frequently Asked Questions',
    'Common questions about hiring live musicians for weddings, corporate events, and private parties in Boston — pricing, lead times, ensemble options, custom configurations, and more.'
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">COMMON QUESTIONS</p>
          <div className="w-12 h-px bg-gold mx-auto mb-4"></div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[0.9px] mb-4">
            Frequently Asked
          </h1>
          <p className="font-serif italic text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-[1.7]">
            Answers to the questions we hear most often from couples, planners, and event hosts
            booking live music across Greater Boston.
          </p>
        </div>
      </section>

      {/* FAQ list — <details>/<summary> for native accessibility + no-JS expansion
          (works in Google's static HTML pass for indexing). */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group bg-cream border border-border p-5 sm:p-7 transition-shadow hover:shadow-sm"
              >
                <summary className="font-serif text-lg sm:text-xl font-medium cursor-pointer hover:text-gold transition-colors flex items-start justify-between gap-4 list-none">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-gold text-2xl leading-none flex-shrink-0 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-gray-500 mt-4 leading-relaxed text-[15px] sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="font-serif italic text-gray-500 text-base mb-6">
              Did not find what you were looking for?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-9 py-4 bg-gold text-dark text-[11px] font-medium tracking-[3.5px] uppercase hover:bg-cream-light transition-all duration-300"
            >
              Get In Touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect } from 'react';

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  /** Small uppercase eyebrow text (e.g. "Common Questions") */
  eyebrow: string;
  /** Section headline (e.g. "What planners ask us") */
  headline: string;
  /** Ordered list of FAQs — rendered visibly AND injected as FAQPage JSON-LD */
  faqs: FAQ[];
}

/**
 * Reusable FAQ section. Renders elegant numbered Q&A pairs in the existing
 * design language AND injects FAQPage schema.org JSON-LD into the document
 * head so Google can display the answers as rich-result snippets.
 *
 * Schema and visible content come from the same `faqs` array — guarantees
 * they stay in sync (Google penalizes pages where the schema FAQ doesn't
 * match the visible FAQ).
 */
export default function FAQSection({ eyebrow, headline, faqs }: FAQSectionProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.faqSchema = 'true';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      // Clean up the schema when the component unmounts (route change)
      document.head.removeChild(script);
    };
  }, [faqs]);

  return (
    <section className="bg-cream-light py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
            {eyebrow}
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-light leading-[1.15] text-dark">
            {headline}
          </h2>
        </div>

        <div className="space-y-10 md:space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <div className="flex gap-5 md:gap-7 items-start mb-3">
                <span className="text-gold font-serif italic text-2xl md:text-3xl shrink-0 leading-none mt-1">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-[20px] md:text-[24px] font-light leading-[1.3] tracking-[0.3px] text-dark">
                  {faq.question}
                </h3>
              </div>
              <p className="font-serif italic text-[15px] md:text-[16px] text-gray-500 leading-[1.8] pl-[40px] md:pl-[52px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

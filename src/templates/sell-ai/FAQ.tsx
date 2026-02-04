'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Do I need technical experience to sell AI?',
    answer:
      "Not at all! Our done-for-you AI agent and sales scripts handle the technical side. You just need to follow our proven system for finding and closing clients. We've had complete beginners sign their first client within 2 weeks.",
  },
  {
    question: 'How much money do I need to get started?',
    answer:
      "The main investment is the program itself. You don't need expensive software subscriptions or ad budgets to start. Our organic outreach methods are completely free and highly effective.",
  },
  {
    question: 'What if I have a full-time job?',
    answer:
      'Many of our most successful members started this as a side hustle. You can build your AI agency in just 5-10 hours per week. Once you have a few recurring clients, you can choose to go full-time.',
  },
  {
    question: 'Is the AI market saturated?',
    answer:
      "Absolutely not. Less than 5% of local businesses have implemented AI automation. There are millions of potential clients who desperately need these solutions. The market is wide open.",
  },
  {
    question: 'What kind of support do I get?',
    answer:
      'You get weekly group coaching calls, 1-on-1 mentorship sessions, and 24/7 access to our private community. Our team is committed to your success and will be with you every step of the way.',
  },
  {
    question: 'What if it doesn\'t work for me?',
    answer:
      'We offer a 30-day action-based guarantee. If you follow our system, attend the calls, and do the work without getting results, we\'ll work with you until you do or refund your investment.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Section header */}
        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
          Frequently Asked Questions
        </h2>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-navy-700 bg-navy-800"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-navy-700"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 font-semibold text-white">
                  {faq.question}
                </span>
                <svg
                  className={`size-5 shrink-0 text-orange-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-navy-700 px-6 py-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };

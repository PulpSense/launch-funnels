'use client';

import { useState } from 'react';

import type { FAQProps } from './types';

const FAQ = ({ header, items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Section header */}
        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
          {header}
        </h2>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {items.map((faq, index) => (
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

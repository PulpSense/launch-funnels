'use client';

import { useCallback, useState } from 'react';

import s from './AIOs.module.css';

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  title: string;
  items: FaqItem[];
};

export function FaqAccordion({ title, items }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = useCallback(
    (index: number) => setOpenFaq((prev) => (prev === index ? null : index)),
    [],
  );

  return (
    <section id="faq" className={s.faqSection}>
      <div className={s.wrap}>
        <h2 className={s.faqSectionH2}>{title}</h2>
        <div className={s.faqListRef}>
          {items.map((item, index) => (
            <div
              key={item.q}
              className={`${s.faqItemRef} ${openFaq === index ? s.faqItemOpen : ''}`}
            >
              <button className={s.faqQ} onClick={() => toggleFaq(index)}>
                {item.q}
                <span className={s.faqIcon}>+</span>
              </button>
              <div className={s.faqA}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


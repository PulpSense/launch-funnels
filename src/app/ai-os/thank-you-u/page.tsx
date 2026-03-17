import type { Metadata } from 'next';

import s from './page.module.css';

export const metadata: Metadata = {
  title: 'Thanks for your interest | AI OS',
};

export default function ThankYouUnqualifiedPage() {
  return (
    <div className={s.page}>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.wrap}>
          <h1 className={s.heroH1}>Thanks for reaching out.</h1>
          <p className={s.heroSub}>
            Based on your responses, this program may not be the right fit right
            now.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className={s.body}>
        <div className={s.wrap}>
          <p>
            We typically work with agency owners, consultants, and operators
            doing $50K+/month who have an established business and are looking to
            scale without adding headcount. If your situation changes, feel free
            to apply again anytime.
          </p>
          <p className={s.ctaText}>
            In the meantime, follow us for free content on AI and automation.{' '}
            <a
              href="https://x.com/autosants"
              target="_blank"
              rel="noopener noreferrer"
            >
              @autosants on X
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={s.footer}>
        <p>&copy; {new Date().getFullYear()} PulpSense. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

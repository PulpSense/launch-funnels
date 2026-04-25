import { FunnelCta, FunnelLegalFooter } from '@/components/funnel';
import { creativeMultiplierContent } from '../content';

import s from './CreativeMultiplier.module.css';

type SprintThankYouPageProps = {
  qualified: boolean;
};

export function SprintThankYouPage({ qualified }: SprintThankYouPageProps) {
  const title = qualified
    ? 'Your Creative Multiplier Sprint call is booked.'
    : 'Thanks for applying.';
  const subtitle = qualified
    ? 'Bring the winning ad link, brand URL, and any creative guidelines. We will use the call to confirm fit and map the 10 avatar variations.'
    : 'This sprint is built for brands with a proven paid-social winner and at least $20k/month in ad spend. If that changes, come back with your winning ad and we can review fit.';
  const steps = qualified
    ? [
        'Keep your winning ad link handy for the call.',
        'Gather basic brand guidelines, examples, and platform preferences.',
        'After the call, payment and asset intake start the 2-business-day clock.',
      ]
    : [
        'Keep testing until you have one clear winning ad.',
        'Track which hook, offer, claim, and creator delivery style carried performance.',
        'Reapply when you are ready to multiply a validated creative.',
      ];

  return (
    <main className={s.page}>
      <section className={s.thankYouHero}>
        <span className={s.kicker}>{qualified ? 'Call confirmed' : 'Application received'}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {qualified && (
          <FunnelCta href="/creative-multiplier-sprint#proof" className={s.secondaryCta}>
            Review the proof examples
          </FunnelCta>
        )}
      </section>

      <section className={s.thankYouSteps}>
        {steps.map((step, index) => (
          <article key={step} className={s.stepCard}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </article>
        ))}
      </section>

      <FunnelLegalFooter
        links={creativeMultiplierContent.footer.links}
        copyright={<> &copy; {new Date().getFullYear()} pulpsense.com. All Rights Reserved.</>}
        className={s.footer}
        linksClassName={s.footerLinks}
        copyrightClassName={s.footerCopy}
        after={<p>{creativeMultiplierContent.footer.platform}</p>}
      >
        <p>
          <strong>Performance Disclaimer:</strong>{' '}
          {creativeMultiplierContent.footer.disclaimer}
        </p>
      </FunnelLegalFooter>
    </main>
  );
}

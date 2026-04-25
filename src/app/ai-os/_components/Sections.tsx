import Image from 'next/image';
import type { ReactNode } from 'react';

import {
  FunnelChecklist,
  FunnelCta,
  FunnelLegalFooter,
  FunnelLogoMarquee,
  FunnelSection,
} from '@/components/funnel';
import type { AiOsContent } from '../content';

import s from './AIOs.module.css';

type Cta = {
  href: string;
  text: string;
};

export function TopBanner({ text }: { text: string }) {
  return <div className={s.banner}>{text}</div>;
}

export function HeroSection({
  content,
  cta,
}: {
  content: AiOsContent['hero'];
  cta: Cta;
}) {
  return (
    <FunnelSection className={s.hero}>
      <div className={s.heroPill}>{content.pill}</div>
      <h1 className={s.heroH1}>
        {content.headline}
        <br className="hidden md:inline" />
        <span className={s.heroHighlight}> {content.highlight}</span>
      </h1>
      <p className={s.heroSub}>{content.subheadline}</p>
      <div className={s.dslEmbed}>
        <iframe src={content.deck.src} allowFullScreen title={content.deck.title} />
      </div>
      <FunnelCta href={cta.href} className={s.ctaBtn}>
        {cta.text} &rarr;
      </FunnelCta>
    </FunnelSection>
  );
}

export function ClientLogos({
  logos,
}: {
  logos: AiOsContent['logos'];
}) {
  return (
    <div className={s.logosSection}>
      <p className={s.logosTitle}>Trusted by growing businesses</p>
      <div className={s.marqueeOuter}>
        <div className={s.marqueeInner}>
          <div className={s.marqueeTrack}>
            <FunnelLogoMarquee logos={logos} imageClassName={s.logoImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProblemSection({
  content,
}: {
  content: AiOsContent['problem'];
}) {
  return (
    <FunnelSection className={s.section}>
      <span className={s.sectionLabel}>{content.label}</span>
      <h2 className={s.sectionTitle}>{content.title}</h2>
      <p className={s.sectionSubtitle}>{content.subtitle}</p>
      <div className={s.painGrid}>
        {content.items.map((item) => (
          <div key={item.title} className={s.painCard}>
            <span className={s.painIcon}>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </FunnelSection>
  );
}

export function ProcessSection({
  content,
  cta,
}: {
  content: AiOsContent['process'];
  cta: Cta;
}) {
  return (
    <FunnelSection id="how-it-works" className={s.section}>
      <span className={s.sectionLabel}>{content.label}</span>
      <h2 className={s.sectionTitle}>{content.title}</h2>
      <p className={s.sectionSubtitle}>{content.subtitle}</p>
      <div className={s.stepsGrid}>
        {content.steps.map((step) => (
          <div key={step.num} className={s.stepCard}>
            <div className={s.stepNumber}>{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className={s.ctaCenterLg}>
        <FunnelCta href={cta.href} className={s.ctaBtnSmall}>
          {cta.text} &rarr;
        </FunnelCta>
      </div>
    </FunnelSection>
  );
}

export function DeliverablesSection({
  content,
}: {
  content: AiOsContent['deliverables'];
}) {
  return (
    <FunnelSection id="deliverables" className={s.section}>
      <span className={s.sectionLabel}>{content.label}</span>
      <h2 className={s.sectionTitle}>{content.title}</h2>
      <p className={s.sectionSubtitle}>{content.subtitle}</p>
      <div className={s.deliverablesGrid}>
        {content.columns.map((column) => (
          <div key={column.title} className={s.deliverableCol}>
            <h3>{column.title}</h3>
            <FunnelChecklist
              items={column.items}
              className={s.checkList}
              markerClassName={s.checkMark}
            />
          </div>
        ))}
      </div>
    </FunnelSection>
  );
}

export function ResultsSection({
  content,
}: {
  content: AiOsContent['results'];
}) {
  return (
    <FunnelSection className={s.section}>
      <span className={s.sectionLabel}>{content.label}</span>
      <h2 className={s.sectionTitle}>{content.title}</h2>
      <div className={s.resultsGrid}>
        {content.items.map((item) => (
          <div key={item} className={s.resultCard}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </FunnelSection>
  );
}

export function WrittenTestimonials({
  content,
}: {
  content: AiOsContent['testimonials'];
}) {
  return (
    <FunnelSection className={s.section}>
      <span className={s.sectionLabel}>{content.label}</span>
      <h2 className={s.sectionTitle}>{content.title}</h2>
      <div className={s.testimonialsGrid}>
        {content.items.map((item) => (
          <div key={item.name} className={s.testimonialCard}>
            <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
            <div className={s.testimonialMeta}>
              <Image
                src={item.avatar}
                alt={item.name}
                width={48}
                height={48}
                className={s.testimonialAvatar}
              />
              <div>
                <div className={s.testimonialAuthor}>{item.name}</div>
                <div className={s.testimonialCompany}>{item.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FunnelSection>
  );
}

export function PricingSection({
  content,
  cta,
}: {
  content: AiOsContent['pricing'];
  cta: Cta;
}) {
  return (
    <FunnelSection id="pricing" className={s.section}>
      <span className={s.sectionLabel}>{content.label}</span>
      <h2 className={s.sectionTitle}>{content.title}</h2>
      <p className={s.sectionSubtitle}>{content.subtitle}</p>

      <div className={s.pricingGrid}>
        <div className={`${s.pricingCard} ${s.pricingFeatured}`}>
          <div className={s.pricingBadge}>{content.setup.badge}</div>
          <h3>{content.setup.title}</h3>
          <p className={s.pricingDesc}>{content.setup.desc}</p>
          <div className={s.priceRow}>
            <span className={s.priceAmount}>{content.setup.price}</span>
            <span className={s.pricePeriod}>{content.setup.period}</span>
          </div>
          <div className={s.priceRow}>
            <span className={s.priceOriginal}>{content.setup.originalPrice}</span>
          </div>
          <p className={s.priceNote}>{content.setup.note}</p>
          <FunnelChecklist items={content.setup.features} marker={null} />
          <FunnelCta href={cta.href} className={`${s.ctaBtn} ${s.ctaFull}`}>
            {cta.text} &rarr;
          </FunnelCta>

          <div className={s.addonInline}>
            <span className={s.addonTitle}>{content.setup.addonTitle}</span>
            <span className={s.addonPrice}>{content.setup.addonPrice}</span>
          </div>
        </div>

        <div className={s.pricingCard}>
          <h3>{content.retainer.title}</h3>
          <p className={s.pricingDesc}>{content.retainer.desc}</p>

          <div className={s.retainerTiers}>
            {content.retainer.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`${s.tierBlock} ${tier.badge ? s.tierPopular : ''}`}
              >
                <div className={s.tierHeader}>
                  <span className={s.tierName}>
                    {tier.name}
                    {tier.badge && <span className={s.tierBadge}>{tier.badge}</span>}
                  </span>
                  <span className={s.tierPrice}>{tier.price}</span>
                </div>
                <FunnelChecklist
                  items={tier.features}
                  className={s.tierList}
                  marker={null}
                />
              </div>
            ))}
          </div>

          <FunnelCta href={cta.href} className={`${s.ctaBtnSmall} ${s.ctaFull}`}>
            {cta.text} &rarr;
          </FunnelCta>
        </div>
      </div>

      <p className={s.runningCost}>{content.runningCost}</p>
    </FunnelSection>
  );
}

export function TrustSection({ content }: { content: AiOsContent['trust'] }) {
  return (
    <FunnelSection className={s.section}>
      <span className={s.sectionLabel}>{content.label}</span>
      <h2 className={s.sectionTitle}>{content.title}</h2>
      <div className={s.trustGrid}>
        {content.cards.map((card) => (
          <div key={card.title} className={s.trustCard}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
      <div className={s.alreadyRunning}>
        <h3>{content.callout.title}</h3>
        <p>{content.callout.desc}</p>
      </div>
    </FunnelSection>
  );
}

export function TimelineSection({
  content,
}: {
  content: AiOsContent['timeline'];
}) {
  return (
    <FunnelSection className={s.timelineSection}>
      <div className={s.wrap}>
        <h2 className={s.timelineSectionH2}>{content.title}</h2>
        <div className={s.timelineRef}>
          {content.items.map((item) => (
            <div key={item.badge} className={s.timelineRefItem}>
              <div className={s.timelineBadge}>{item.badge}</div>
              <div className={s.timelineText}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </FunnelSection>
  );
}

export function ApplicationSection({
  content,
  children,
}: {
  content: AiOsContent['application'];
  children: ReactNode;
}) {
  return (
    <FunnelSection id="apply" className={s.applySection}>
      <div className={s.wrap}>
        <span className={s.sectionLabel}>{content.label}</span>
        <h2 className={s.sectionTitle}>{content.title}</h2>
        <p className={s.sectionSubtitle}>{content.subtitle}</p>
      </div>
      {children}
    </FunnelSection>
  );
}

export function FinalCtaSection({
  content,
  cta,
}: {
  content: AiOsContent['finalCta'];
  cta: Cta;
}) {
  return (
    <FunnelSection className={s.finalCtaRef} id="cta">
      <div className={s.wrap}>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
        <FunnelCta href={cta.href} className={s.ctaBtn}>
          {cta.text}
        </FunnelCta>
        <div className={s.finalCtaSub}>{content.subtext}</div>
      </div>
    </FunnelSection>
  );
}

export function FooterSection({
  content,
}: {
  content: AiOsContent['footer'];
}) {
  return (
    <FunnelLegalFooter
      links={content.links}
      copyright={<> &copy; {new Date().getFullYear()} pulpsense.com. All Rights Reserved.</>}
      className={s.footer}
      linksClassName={s.footerLinks}
      copyrightClassName={s.footerCopy}
      after={<p>{content.platform}</p>}
    >
      <p>
        <strong>Earnings Disclaimer:</strong> {content.disclaimer}
      </p>
    </FunnelLegalFooter>
  );
}

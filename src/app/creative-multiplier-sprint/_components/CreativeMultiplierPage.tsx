import Image from 'next/image';
import { Suspense } from 'react';

import {
  FunnelChecklist,
  FunnelCta,
  FunnelLegalFooter,
  FunnelPage,
  FunnelSection,
} from '@/components/funnel';
import {
  creativeMultiplierContent,
  cta,
  formConfig,
  secondaryCta,
} from '../content';

import { ApplicationFormIsland } from './ApplicationFormIsland';
import s from './CreativeMultiplier.module.css';

type ProofCase = (typeof creativeMultiplierContent.proof.cases)[number];
type GalleryItem = (typeof creativeMultiplierContent.proof.gallery)[number];

export function CreativeMultiplierPage() {
  const content = creativeMultiplierContent;

  return (
    <FunnelPage className={s.page}>
      <TopBanner text={content.banner} />
      <HeroSection />
      <ProofGallery />
      <ProblemSection />
      <MechanismSection />
      <DeliverablesSection />
      <TrustSection />
      <FitSection />
      <ProcessSection />
      <GuaranteeSection />
      <FaqSection />
      <ApplicationSection />
      <FinalCtaSection />
      <FooterSection />
    </FunnelPage>
  );
}

function TopBanner({ text }: { text: string }) {
  return <div className={s.banner}>{text}</div>;
}

function HeroSection() {
  const { hero, heroFrames, proofStats } = creativeMultiplierContent;

  return (
    <FunnelSection className={s.hero}>
      <div className={s.heroCopy}>
        <span className={s.kicker}>{hero.pill}</span>
        <h1>{hero.headline}</h1>
        <p>{hero.subheadline}</p>
        <div className={s.heroActions}>
          <FunnelCta href={cta.href} className={s.primaryCta}>
            {cta.text}
          </FunnelCta>
          <FunnelCta href={secondaryCta.href} className={s.secondaryCta}>
            {secondaryCta.text}
          </FunnelCta>
        </div>
        <div className={s.statsStrip} aria-label="Sprint summary">
          {proofStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.heroProof} aria-label="Avatar variation preview">
        <div className={s.proofHeader}>
          <span>{hero.proofCaption}</span>
          <strong>2 business days</strong>
        </div>
        <div className={s.phoneRow}>
          {heroFrames.map((frame) => (
            <PhoneFrame key={frame.title} {...frame} />
          ))}
        </div>
      </div>
    </FunnelSection>
  );
}

function PhoneFrame({
  eyebrow,
  title,
  avatar,
  tag,
}: {
  eyebrow: string;
  title: string;
  avatar: string;
  tag: string;
}) {
  return (
    <div className={s.phoneFrame}>
      <div className={s.phoneMedia}>
        <Image src={avatar} alt="" fill sizes="(max-width: 900px) 38vw, 180px" />
        <div className={s.videoHud}>
          <span>{eyebrow}</span>
          <strong>{tag}</strong>
        </div>
      </div>
      <div className={s.phoneCaption}>{title}</div>
    </div>
  );
}

function ProofGallery() {
  const { proof } = creativeMultiplierContent;

  return (
    <FunnelSection id="proof" className={s.section}>
      <SectionHeader label={proof.label} title={proof.title} subtitle={proof.subtitle} />
      <div className={s.caseGrid}>
        {proof.cases.map((proofCase) => (
          <ProofCaseCard key={proofCase.title} proofCase={proofCase} />
        ))}
      </div>
      <div className={s.videoGrid}>
        {proof.gallery.map((item) => (
          <GalleryCard key={`${item.title}-${item.niche}`} item={item} />
        ))}
      </div>
    </FunnelSection>
  );
}

function ProofCaseCard({ proofCase }: { proofCase: ProofCase }) {
  return (
    <article className={s.caseCard}>
      <div className={s.caseAvatars}>
        {proofCase.avatars.map((avatar, index) => (
          <div key={`${avatar}-${index}`} className={s.avatarTile}>
            <Image src={avatar} alt="" fill sizes="96px" />
          </div>
        ))}
      </div>
      <h3>{proofCase.title}</h3>
      <dl>
        <div>
          <dt>Input</dt>
          <dd>{proofCase.input}</dd>
        </div>
        <div>
          <dt>Output</dt>
          <dd>{proofCase.output}</dd>
        </div>
        <div>
          <dt>Timeline</dt>
          <dd>{proofCase.timeline}</dd>
        </div>
      </dl>
      <p>{proofCase.note}</p>
    </article>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className={s.galleryCard}>
      <div className={s.galleryMedia}>
        <Image src={item.avatar} alt="" fill sizes="(max-width: 700px) 42vw, 180px" />
        <span className={s.playDot} aria-hidden="true" />
      </div>
      <div className={s.galleryMeta}>
        <strong>{item.title}</strong>
        <span>{item.niche}</span>
      </div>
    </article>
  );
}

function ProblemSection() {
  const { problem } = creativeMultiplierContent;

  return (
    <FunnelSection className={`${s.section} ${s.splitSection}`}>
      <div>
        <SectionHeader label={problem.label} title={problem.title} subtitle={problem.body} />
      </div>
      <div className={s.costPanel}>
        <FunnelChecklist items={problem.costs} markerClassName={s.checkMarker} />
      </div>
    </FunnelSection>
  );
}

function MechanismSection() {
  const { mechanism } = creativeMultiplierContent;

  return (
    <FunnelSection className={s.section}>
      <SectionHeader label={mechanism.label} title={mechanism.title} />
      <div className={s.mechanismGrid}>
        {mechanism.steps.map((step, index) => (
          <article key={step.title} className={s.stepCard}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </FunnelSection>
  );
}

function DeliverablesSection() {
  const { deliverables } = creativeMultiplierContent;

  return (
    <FunnelSection className={`${s.section} ${s.offerBand}`}>
      <div className={s.offerCopy}>
        <SectionHeader label={deliverables.label} title={deliverables.title} />
        <p>
          Price is discussed on the fit call after we review your ad, brand, and sprint
          scope.
        </p>
      </div>
      <div className={s.offerPanel}>
        <FunnelChecklist items={deliverables.items} markerClassName={s.checkMarker} />
      </div>
    </FunnelSection>
  );
}

function TrustSection() {
  const { trust } = creativeMultiplierContent;

  return (
    <FunnelSection className={s.section}>
      <SectionHeader label={trust.label} title={trust.title} subtitle={trust.body} />
      <div className={s.trustGrid}>
        {trust.cards.map((card) => (
          <div key={card} className={s.trustCard}>
            {card}
          </div>
        ))}
      </div>
    </FunnelSection>
  );
}

function FitSection() {
  const { fit } = creativeMultiplierContent;

  return (
    <FunnelSection className={s.section}>
      <SectionHeader label={fit.label} title={fit.title} />
      <div className={s.fitGrid}>
        <div className={s.fitPanel}>
          <h3>Good fit</h3>
          <FunnelChecklist items={fit.good} markerClassName={s.checkMarker} />
        </div>
        <div className={s.fitPanel}>
          <h3>Not a fit</h3>
          <FunnelChecklist items={fit.bad} marker="-" markerClassName={s.minusMarker} />
        </div>
      </div>
    </FunnelSection>
  );
}

function ProcessSection() {
  const { process } = creativeMultiplierContent;

  return (
    <FunnelSection id="process" className={s.section}>
      <SectionHeader label={process.label} title={process.title} />
      <ol className={s.processList}>
        {process.steps.map((step, index) => (
          <li key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </FunnelSection>
  );
}

function GuaranteeSection() {
  const { guarantee } = creativeMultiplierContent;

  return (
    <FunnelSection className={s.guaranteeBand}>
      <div className={s.guaranteeInner}>
        <SectionHeader
          label={guarantee.label}
          title={guarantee.title}
          subtitle={guarantee.body}
        />
      </div>
    </FunnelSection>
  );
}

function FaqSection() {
  const { faq } = creativeMultiplierContent;

  return (
    <FunnelSection className={s.section}>
      <SectionHeader label={faq.label} title={faq.title} />
      <div className={s.faqList}>
        {faq.items.map((item) => (
          <details key={item.q} className={s.faqItem}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </FunnelSection>
  );
}

function ApplicationSection() {
  const { application } = creativeMultiplierContent;

  return (
    <FunnelSection id="apply" className={s.applySection}>
      <div className={s.applyIntro}>
        <SectionHeader
          label={application.label}
          title={application.title}
          subtitle={application.subtitle}
        />
      </div>
      <Suspense fallback={<div className={s.formSkeleton} />}>
        <ApplicationFormIsland config={formConfig} />
      </Suspense>
    </FunnelSection>
  );
}

function FinalCtaSection() {
  return (
    <FunnelSection className={s.finalCta}>
      <h2>Do not replace your best ad. Multiply it.</h2>
      <p>
        If one proven creative is carrying performance, give your media buyer 10 new
        avatar variants before the current face burns out.
      </p>
      <FunnelCta href={cta.href} className={s.primaryCta}>
        {cta.text}
      </FunnelCta>
    </FunnelSection>
  );
}

function FooterSection() {
  const { footer } = creativeMultiplierContent;

  return (
    <FunnelLegalFooter
      links={footer.links}
      copyright={<> &copy; {new Date().getFullYear()} pulpsense.com. All Rights Reserved.</>}
      className={s.footer}
      linksClassName={s.footerLinks}
      copyrightClassName={s.footerCopy}
      after={<p>{footer.platform}</p>}
    >
      <p>
        <strong>Performance Disclaimer:</strong> {footer.disclaimer}
      </p>
    </FunnelLegalFooter>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={s.sectionHeader}>
      <span className={s.kicker}>{label}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

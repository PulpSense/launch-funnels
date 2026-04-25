import { FunnelPage } from '@/components/funnel';
import {
  aiOsContent,
  cta,
  facebookPixelId,
  formConfig,
} from '../content';

import { ApplicationFormIsland } from './ApplicationFormIsland';
import { FaqAccordion } from './FaqAccordion';
import { LazyVideoTestimonials } from './LazyVideoTestimonials';
import { RoiCalculator } from './RoiCalculator';
import {
  ApplicationSection,
  ClientLogos,
  DeliverablesSection,
  FinalCtaSection,
  FooterSection,
  HeroSection,
  PricingSection,
  ProblemSection,
  ProcessSection,
  ResultsSection,
  TimelineSection,
  TopBanner,
  TrustSection,
  WrittenTestimonials,
} from './Sections';
import { TrackingScripts } from './TrackingScripts';
import s from './AIOs.module.css';

export function AIOsPage() {
  return (
    <FunnelPage className={s.page}>
      <TrackingScripts facebookPixelId={facebookPixelId} />
      <TopBanner text={aiOsContent.banner} />
      <HeroSection content={aiOsContent.hero} cta={cta} />
      <ClientLogos logos={aiOsContent.logos} />
      <ProblemSection content={aiOsContent.problem} />
      <ProcessSection content={aiOsContent.process} cta={cta} />
      <DeliverablesSection content={aiOsContent.deliverables} />
      <ResultsSection content={aiOsContent.results} />
      <RoiCalculator ctaHref={cta.href} ctaText={cta.text} />
      <WrittenTestimonials content={aiOsContent.testimonials} />
      <LazyVideoTestimonials
        title={aiOsContent.videoTestimonials.title}
        videos={aiOsContent.videoTestimonials.videos}
        ctaHref={cta.href}
        ctaText={cta.text}
      />
      <PricingSection content={aiOsContent.pricing} cta={cta} />
      <TrustSection content={aiOsContent.trust} />
      <TimelineSection content={aiOsContent.timeline} />
      <ApplicationSection content={aiOsContent.application}>
        <ApplicationFormIsland config={formConfig} />
      </ApplicationSection>
      <FaqAccordion
        title={aiOsContent.faq.title}
        items={aiOsContent.faq.items}
      />
      <FinalCtaSection content={aiOsContent.finalCta} cta={cta} />
      <FooterSection content={aiOsContent.footer} />
    </FunnelPage>
  );
}


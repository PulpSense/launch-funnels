// Hero Section Types
export type TrustBadgeConfig = {
  text: string;
  stars?: number;
  imageCount?: number;
};

export type BannerConfig = {
  text: string;
  variant: 'orange' | 'red';
};

export type VideoConfig = {
  posterSrc?: string;
  altText?: string;
};

export type CTAConfig = {
  text: string;
  scrollTo?: string;
  disclaimer?: string;
};

export type HeroSectionProps = {
  trustBadge: TrustBadgeConfig;
  banner: BannerConfig;
  headline: string;
  highlightedText?: string;
  headlineSuffix?: string;
  subheadline: string;
  video: VideoConfig;
  cta: CTAConfig;
};

// Founder Story Types
export type FounderStoryProps = {
  header: string;
  headerHighlight?: string;
  paragraphs: string[];
  imageCount?: number;
  quote: string;
};

// Program Overview Types
export type FeatureItem = {
  title: string;
  description: string;
};

export type ValueStackConfig = {
  label: string;
  originalPrice: string;
  teaser: string;
};

export type ProgramOverviewProps = {
  header: string;
  description: string;
  features: FeatureItem[];
  valueStack: ValueStackConfig;
};

// FAQ Types
export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  header: string;
  items: FAQItem[];
};

// Application Section Types
export type ApplicationSectionProps = {
  header: string;
  description: string;
  urgency?: string;
  formUrl?: string;
};

// Disclaimer Footer Types
export type LegalLink = {
  text: string;
  href: string;
};

export type DisclaimerFooterProps = {
  disclaimerHeader: string;
  paragraphs: string[];
  legalLinks: LegalLink[];
  copyrightText: string;
  platformDisclaimer?: string;
};

// Thank You Section Types
export type NextStep = {
  number: string;
  text: string;
};

export type ThankYouSectionProps = {
  title: string;
  subtitle: string;
  stepsHeader: string;
  nextSteps: NextStep[];
};

// Unqualified Section Types
export type AlternativeOffer = {
  header: string;
  description: string;
  ctaText: string;
  ctaHref: string;
};

export type UnqualifiedSectionProps = {
  title: string;
  subtitle: string;
  alternativeOffer: AlternativeOffer;
  reapplyText: string;
  reapplyHref: string;
};

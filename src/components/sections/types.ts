// Shared CTA type for sections
export type SectionCTAConfig = {
  text: string;
  scrollTo?: string;
};

// Hero Section Types
export type TrustBadgeConfig = {
  text: string;
  stars?: number;
  avatars?: string[];
};

export type BannerConfig = {
  text: string;
  variant: 'orange' | 'red';
};

export type VideoConfig =
  | { provider: 'wistia'; videoId: string }
  | { provider: 'youtube'; videoId: string }
  | { provider?: undefined; posterSrc?: string; altText?: string };

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
export type FounderStoryImage = {
  src?: string; // Optional - shows placeholder if missing
  alt: string;
  caption: string;
};

export type FounderStoryProps = {
  sectionLabel?: string; // e.g., "WHO AM I?"
  name: string; // Highlighted name
  namePrefix?: string; // e.g., "MY NAME IS"
  paragraphs: string[];
  featuredImage?: FounderStoryImage;
  galleryImages?: FounderStoryImage[]; // 3 images with captions
  additionalContent?: {
    image?: FounderStoryImage;
    paragraphs: string[];
  };
  quote?: string;
  cta?: SectionCTAConfig;
};

// Program Overview Types
export type FeatureItem = {
  title: string;
  text: string;
};

export type HighlightBoxConfig = {
  title: string;
  content: string;
};

export type ProgramOverviewProps = {
  header: string;
  paragraphs: string[];
  highlightBox?: HighlightBoxConfig;
  features: FeatureItem[];
  cta?: SectionCTAConfig;
};

// FAQ Types
export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  headerLabel?: string; // "FAQ" above main header
  header: string;
  items: FAQItem[];
  cta?: SectionCTAConfig;
};

// Application Section Types
export type ApplicationSectionProps = {
  header: string;
  description: string;
  urgency?: string;
  filloutId?: string;
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
export type ThankYouStepCTA = {
  text: string;
  subtext?: string;
  href: string;
};

export type ThankYouStep = {
  number: number;
  heading: string;
  description?: string;
  highlightedText?: string;
  cta?: ThankYouStepCTA;
  imageSrc?: string;
  imageAlt?: string;
};

export type ThankYouVideo = { title: string } & (
  | { provider: 'wistia'; videoId: string }
  | { provider: 'youtube'; videoId: string }
  | { provider?: undefined; thumbnailSrc?: string; href?: string }
);

export type ThankYouHeroProps = {
  title: string;
  subtitle: string;
  requiredLabel?: string;
  alertMessage?: string;
  videoPlaceholder?:
    | { provider: 'wistia'; videoId: string }
    | { provider: 'youtube'; videoId: string }
    | { provider?: undefined; title?: string; subtitle?: string };
};

export type ThankYouContentProps = {
  steps: ThankYouStep[];
  bottomVideos?: ThankYouVideo[];
};

// Unqualified Section Types
export type UnqualifiedHeroProps = {
  trustBadge?: TrustBadgeConfig;
  banner?: BannerConfig;
  title: string;
  subtitle: string;
  cta: { text: string; href: string };
};

export type UnqualifiedContentProps = {
  followUpMessage: string;
  requirements: string[];
  reapplyText: string;
  reapplyHref: string;
};

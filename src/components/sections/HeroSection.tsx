import { AlertBanner, GradientButton, TrustBadge, VideoPlaceholder } from '@/components/ui';

import type { HeroSectionProps } from './types';

const HeroSection = ({
  trustBadge,
  banner,
  headline,
  highlightedText,
  headlineSuffix,
  subheadline,
  video,
  cta,
}: HeroSectionProps) => {
  return (
    <section className="bg-navy-900 pb-16 pt-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* Trust badge */}
        <div className="mb-6 flex justify-center">
          <TrustBadge
            text={trustBadge.text}
            stars={trustBadge.stars}
            imageCount={trustBadge.imageCount}
          />
        </div>

        {/* Banner */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <AlertBanner variant={banner.variant}>{banner.text}</AlertBanner>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          {headline}
          {highlightedText && (
            <>
              {' '}
              <span className="text-orange-500">{highlightedText}</span>
            </>
          )}
          {headlineSuffix && <> {headlineSuffix}</>}
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-gray-300">
          {subheadline}
        </p>

        {/* Video placeholder */}
        <div className="mb-8">
          <VideoPlaceholder
            posterSrc={video.posterSrc}
            altText={video.altText}
          />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <GradientButton xl scrollTo={cta.scrollTo}>
            {cta.text}
          </GradientButton>
          {cta.disclaimer && (
            <p className="mt-4 text-sm text-gray-400">{cta.disclaimer}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };

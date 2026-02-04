import { GradientButton, TrustBadge, VideoPlaceholder } from '@/components/ui';

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
    <section className="relative bg-navy-900 pb-16 pt-8">
      {/* White radial glow at top center */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Trust badge */}
        <div className="mb-6 flex justify-center">
          <TrustBadge
            text={trustBadge.text}
            stars={trustBadge.stars}
            imageCount={trustBadge.imageCount}
          />
        </div>

        {/* Banner */}
        <div className="mb-8 overflow-hidden rounded-full">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3 text-center">
            <span className="text-base font-bold text-white md:text-lg">
              {banner.text}
            </span>
          </div>
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

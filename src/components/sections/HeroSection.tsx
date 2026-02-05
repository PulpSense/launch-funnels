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
    <section className="pb-16 pt-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* Trust badge */}
        <div className="mb-6 flex justify-center">
          <TrustBadge
            text={trustBadge.text}
            stars={trustBadge.stars}
            avatars={trustBadge.avatars}
          />
        </div>

        {/* Banner */}
        <div className="mb-8 overflow-hidden rounded-full">
          <div className="bg-[#FA6B18] px-4 py-1 text-center">
            <span className="text-lg font-bold text-white md:text-xl">
              {banner.text}
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-center text-2xl font-extrabold leading-tight text-white md:text-3xl lg:text-4xl">
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
          <VideoPlaceholder video={video} />
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

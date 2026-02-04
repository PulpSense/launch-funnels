import { AlertBanner } from '@/banner/AlertBanner';
import { TrustBadge } from '@/badge/TrustBadge';
import { GradientButton } from '@/button/GradientButton';
import { VideoPlaceholder } from '@/video/VideoPlaceholder';

const HeroSection = () => {
  return (
    <section className="bg-navy-900 pb-16 pt-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* Trust badge */}
        <div className="mb-6 flex justify-center">
          <TrustBadge text="Trusted by 200+ Agencies" stars={5} imageCount={4} />
        </div>

        {/* Orange banner */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <AlertBanner variant="orange">
            For Anyone Wanting To Start Selling A.I. To Local Businesses...
          </AlertBanner>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          HOW WE SELL OUR AUTOMATED AI TOOLS TO LOCAL BUSINESSES FOR{' '}
          <span className="text-orange-500">$500-$3,000/MONTH</span>
          {' '}WITHOUT COLD CALLING OR HARD SELLING
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-gray-300">
          Watch this free training to discover the exact system we use to close
          high-ticket AI deals with local business owners who are desperate for
          automation solutions.
        </p>

        {/* Video placeholder */}
        <div className="mb-8">
          <VideoPlaceholder altText="AI Sales Training Video" />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <GradientButton xl scrollTo="apply-form">
            YES! I Want To Start Selling AI →
          </GradientButton>
          <p className="mt-4 text-sm text-gray-400">
            Limited spots available. Apply now to secure your place.
          </p>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };

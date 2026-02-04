import type { UnqualifiedSectionProps } from './types';

const UnqualifiedSection = ({
  title,
  subtitle,
  alternativeOffer,
  reapplyText,
  reapplyHref,
}: UnqualifiedSectionProps) => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-navy-900 px-4 text-center">
      <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h1>
      <p className="mb-8 max-w-lg text-lg text-gray-300">{subtitle}</p>

      {/* Alternative resource */}
      <div className="max-w-md rounded-lg border border-navy-700 bg-navy-800 p-6">
        <h2 className="mb-4 font-semibold text-white">
          {alternativeOffer.header}
        </h2>
        <p className="mb-4 text-gray-300">{alternativeOffer.description}</p>
        <a
          href={alternativeOffer.ctaHref}
          className="inline-block rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
        >
          {alternativeOffer.ctaText}
        </a>
      </div>

      {/* Reapply option */}
      <p className="mt-8 text-sm text-gray-400">
        {reapplyText}{' '}
        <a
          href={reapplyHref}
          className="text-orange-400 underline hover:text-orange-300"
        >
          Reapply here
        </a>
      </p>
    </main>
  );
};

export { UnqualifiedSection };

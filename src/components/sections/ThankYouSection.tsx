import Image from 'next/image';

import type { ThankYouSectionProps } from './types';

const ThankYouSection = ({
  title,
  subtitle,
  requiredLabel,
  alertMessage,
  videoPlaceholder,
  steps,
  bottomVideos,
}: ThankYouSectionProps) => {
  return (
    <main className="flex-1">
      {/* ── Top Hero: dark navy background ── */}
      <section className="px-4 pb-12 pt-8 text-center">
        <h1 className="mb-3 text-3xl font-black text-white md:text-4xl">
          {title}
        </h1>

        {(requiredLabel || subtitle) && (
          <h2 className="mb-6 text-xl text-white md:text-2xl">
            {requiredLabel && (
              <span className="mr-1 rounded bg-red-500 px-2 py-0.5 font-bold text-white">
                {requiredLabel}
              </span>
            )}
            {': '}
            {subtitle}
          </h2>
        )}

        {/* Red alert banner */}
        {alertMessage && (
          <div className="mx-auto mb-6 max-w-2xl rounded-t-lg bg-red-500 px-4 py-3 text-sm font-medium text-white">
            {alertMessage}
          </div>
        )}

        {/* Video placeholder area */}
        {videoPlaceholder && (
          <div className="mx-auto max-w-2xl overflow-hidden rounded-lg bg-black shadow-xl">
            <div className="flex aspect-video flex-col items-center justify-center bg-navy-800 text-white">
              {videoPlaceholder.title && (
                <p className="mb-2 text-lg font-bold md:text-xl">
                  {videoPlaceholder.title}
                </p>
              )}
              {/* Play button circle */}
              <div className="mb-3 flex size-16 items-center justify-center rounded-full bg-white/20">
                <svg
                  className="ml-1 size-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {videoPlaceholder.subtitle && (
                <p className="text-sm text-gray-300">
                  {videoPlaceholder.subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </section>

      {/* ── Middle: white card with steps ── */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white px-6 py-10 shadow-lg md:px-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="mb-10 text-center"
            >
              {/* Step heading with orange gradient badge */}
              <h3 className="mb-3 text-2xl font-black uppercase text-black md:text-3xl">
                <span className="mr-2 inline-block rounded bg-gradient-to-r from-orange-500 to-orange-400 px-2.5 py-0.5 text-xl font-black text-white md:text-2xl">
                  STEP {step.number}:
                </span>
                {step.heading}
              </h3>

              {/* Optional description */}
              {step.description && (
                <p className="mb-4 text-lg font-semibold text-black">
                  {step.highlightedText ? (
                    <>
                      {step.description.split(step.highlightedText)[0]}
                      <span className="underline">
                        {step.highlightedText}
                      </span>
                      {step.description.split(step.highlightedText)[1]}
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              )}

              {/* Optional email screenshot image */}
              {step.imageSrc && (
                <div className="mx-auto mb-4 max-w-xl overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt || 'Step illustration'}
                    width={754}
                    height={360}
                    className="h-auto w-full"
                  />
                </div>
              )}

              {/* Optional CTA button with orange gradient */}
              {step.cta && (
                <a
                  href={step.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center rounded-md bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-center font-bold text-white transition-opacity hover:opacity-90"
                >
                  <span>{step.cta.text}</span>
                  {step.cta.subtext && (
                    <span className="text-xs font-normal opacity-90">
                      {step.cta.subtext}
                    </span>
                  )}
                </a>
              )}
            </div>
          ))}

          {/* ── Video thumbnails grid ── */}
          {bottomVideos && bottomVideos.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bottomVideos.map((video) => (
                <div key={video.title} className="text-center">
                  <h4 className="mb-3 text-sm font-bold text-black">
                    {video.title}
                  </h4>
                  <a
                    href={video.href || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-video overflow-hidden rounded-lg bg-navy-800"
                  >
                    {video.thumbnailSrc ? (
                      <Image
                        src={video.thumbnailSrc}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-navy-800" />
                    )}
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-12 items-center justify-center rounded-full bg-black/60 transition-colors group-hover:bg-black/80">
                        <svg
                          className="ml-0.5 size-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export { ThankYouSection };

import { TrustBadge } from '@/components/ui';

import type { UnqualifiedSectionProps } from './types';

const UnqualifiedSection = ({
  trustBadge,
  banner,
  title,
  subtitle,
  cta,
  followUpMessage,
  requirements,
  reapplyText,
  reapplyHref,
}: UnqualifiedSectionProps) => {
  return (
    <main className="flex-1">
      {/* ── Top: dark navy with radial glow ── */}
      <section className="relative bg-navy-900 px-4 pb-16 pt-8 text-center">
        {/* White radial glow at top center */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-96"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Trust badge */}
          {trustBadge && (
            <div className="mb-6 flex justify-center">
              <TrustBadge
                text={trustBadge.text}
                stars={trustBadge.stars}
                avatars={trustBadge.avatars}
              />
            </div>
          )}

          {/* Banner */}
          {banner && (
            <div className="mb-8 overflow-hidden rounded-full">
              <div className="bg-[#FA6B18] px-4 py-1 text-center">
                <span className="text-lg font-bold text-white md:text-xl">
                  {banner.text}
                </span>
              </div>
            </div>
          )}

          {/* Heading */}
          <h1 className="mb-4 text-4xl font-black text-white md:text-5xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            {subtitle}
          </p>

          {/* CTA button */}
          <a
            href={cta.href}
            className="inline-block rounded-lg px-10 py-5 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #FF5B23, #F2BB06)',
            }}
          >
            {cta.text}
          </a>
        </div>
      </section>

      {/* ── Bottom: white card with requirements ── */}
      <section className="bg-navy-900 px-4 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white px-6 py-10 shadow-lg md:px-12">
          <h2 className="mb-8 text-center text-xl font-bold text-black md:text-2xl">
            {followUpMessage}
          </h2>

          {/* Requirements checklist */}
          <ul className="mx-auto mb-8 max-w-lg space-y-4">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 size-6 shrink-0 text-green-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg text-black">{req}</span>
              </li>
            ))}
          </ul>

          {/* Reapply link */}
          <p className="text-center text-sm text-gray-500">
            {reapplyText}{' '}
            <a
              href={reapplyHref}
              className="font-semibold text-orange-500 underline hover:text-orange-400"
            >
              Reapply here
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export { UnqualifiedSection };

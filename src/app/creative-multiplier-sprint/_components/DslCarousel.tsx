'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    eyebrow: '01 / The mistake',
    title: 'Your winner is dying before your team can replace it.',
    body: 'The ad still has a strong sales argument. The problem is that the same face, voice, and delivery are getting overexposed.',
  },
  {
    eyebrow: '02 / The fix',
    title: 'It needs new faces.',
    body: 'The same message can get more room to scale when the avatar, persona, and delivery style change.',
  },
  {
    eyebrow: '03 / Fatigue',
    title: 'Creative fatigue often starts with the face.',
    body: 'The offer can still work while the exact delivery gets overexposed.',
  },
  {
    eyebrow: '04 / Delay',
    title: 'Creator batches take weeks.',
    body: 'Briefing, shipping, filming, editing, and revisions are slow when your media buyer needs fresh tests now.',
  },
  {
    eyebrow: '05 / Cost',
    title: 'CPA can climb before the next batch lands.',
    body: 'Waiting too long turns a creative problem into a budget and scaling problem.',
  },
  {
    eyebrow: '06 / Risk',
    title: 'Random new concepts are risky.',
    body: 'When one ad already proved it can sell, the fastest path is controlled variation.',
  },
  {
    eyebrow: '07 / Rule',
    title: 'Keep what worked.',
    body: 'The point is not a new ad strategy. The point is to preserve the winning structure.',
  },
  {
    eyebrow: '08 / Preserve',
    title: 'Keep the hook.',
    body: 'The opener that got attention stays intact unless there is a clear reason to change it.',
  },
  {
    eyebrow: '09 / Preserve',
    title: 'Keep the offer.',
    body: 'The promise, product angle, and buying reason stay anchored to the original winner.',
  },
  {
    eyebrow: '10 / Preserve',
    title: 'Keep the sales argument.',
    body: 'The claim, objection handling, proof, and CTA do not get lost in AI randomness.',
  },
  {
    eyebrow: '11 / Change',
    title: 'Change the avatar layer.',
    body: 'New faces, personas, tones, and delivery styles give the same idea more shots.',
  },
  {
    eyebrow: '12 / Mechanism',
    title: 'That is the Winner Avatar Multiplier.',
    body: 'One proven ad becomes a controlled batch of avatar-led versions built for paid-social testing.',
  },
  {
    eyebrow: '13 / Input',
    title: '1 winning ad in.',
    body: 'Bring the ad that is already carrying performance. No full brief needed before the call.',
  },
  {
    eyebrow: '14 / Output',
    title: '10 AI avatar videos out.',
    body: 'You get a finished batch of vertical files, not a tool login or a folder of raw generations.',
  },
  {
    eyebrow: '15 / Speed',
    title: 'Delivered in 2 business days.',
    body: 'After payment and asset intake, the sprint is built for speed because winners do not stay fresh forever.',
  },
  {
    eyebrow: '16 / QA',
    title: 'QA checked, not raw AI output.',
    body: 'We review pacing, clarity, brand fit, and whether the videos are usable as paid-social assets.',
  },
  {
    eyebrow: '17 / Revision',
    title: 'One revision pass is included.',
    body: 'If something feels off, we tighten the batch instead of sending awkward clips and calling it done.',
  },
  {
    eyebrow: '18 / Guarantee',
    title: 'Usable creative or refund.',
    body: 'No ROAS promises. Just launch-ready creative after one revision pass, or your money back.',
  },
  {
    eyebrow: '19 / Fit',
    title: 'Built for brands with a proven winner.',
    body: 'Best fit: ecommerce teams spending $20k/month or more on paid social with at least one ad already working.',
  },
  {
    eyebrow: '20 / Next step',
    title: 'Apply below.',
    body: 'Answer a few questions. If your ad is a match, book the sprint call and bring the winner with you.',
  },
];

export function DslCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const index = centeredEntry?.target.getAttribute('data-slide-index');

        if (index !== null) {
          setActiveIndex(Number(index));
        }
      },
      {
        root: track,
        threshold: [0.55, 0.7, 0.85],
      },
    );

    Array.from(track.children).forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current;
    if (!track) return;

    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slide = track.children.item(clampedIndex) as HTMLElement | null;
    const firstSlide = track.children.item(0) as HTMLElement | null;
    const secondSlide = track.children.item(1) as HTMLElement | null;
    const slideStep =
      firstSlide && secondSlide
        ? secondSlide.getBoundingClientRect().left - firstSlide.getBoundingClientRect().left
        : track.clientWidth;

    setActiveIndex(clampedIndex);
    if (slide) {
      track.scrollTo({ left: clampedIndex * slideStep, behavior });
    }
  };

  return (
    <section className="relative mt-4 overflow-hidden bg-transparent px-5 pb-7 pt-0 select-none md:mt-5 md:px-8 md:pb-12 md:pt-0 lg:mt-2" aria-labelledby="dsl-heading">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 id="dsl-heading" className="text-sm font-medium leading-tight text-[#D0D6E0] sm:text-base md:text-lg">
            The 2-minute sales argument.
          </h2>
          <p className="hidden text-xs font-medium uppercase tracking-[0.22em] text-[#62666D] sm:block">
            Click or swipe
          </p>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Creative Multiplier Sprint deck"
          >
            {slides.map((slide, index) => (
              <article
                key={slide.eyebrow}
                data-slide-index={index}
                className="relative flex min-h-[255px] w-full shrink-0 snap-start flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0F1011]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:min-h-[430px] sm:rounded-[24px] sm:p-7 sm:shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:min-h-[360px] md:p-8 lg:min-h-[380px]"
                aria-label={`Slide ${index + 1} of ${slides.length}`}
              >
                <div className="absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-[#FF6B1A]/70 to-transparent sm:block" />
                <div className="absolute -right-20 -top-20 hidden h-56 w-56 rounded-full bg-[#FF6B1A]/10 blur-3xl sm:block" />
                <div className="absolute -bottom-24 left-10 hidden h-56 w-56 rounded-full bg-[#7170FF]/10 blur-3xl sm:block" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-[#FF6B1A]/20 bg-[#FF6B1A]/[0.055] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#ffb28a] md:text-[10px] md:tracking-[0.18em]">
                      {slide.eyebrow}
                    </span>
                    <span className="text-xs tabular-nums text-[#62666D]">{String(index + 1).padStart(2, '0')} / {slides.length}</span>
                  </div>

                  <h3 className="mt-7 max-w-xl text-[1.58rem] font-medium leading-[1] tracking-[-0.055em] text-white sm:text-[2.35rem] md:mt-8 md:max-w-3xl md:text-[2.65rem]">
                    {slide.title}
                  </h3>
                </div>

                <div className="relative mt-5 md:mt-6">
                  <p className="max-w-2xl text-[0.92rem] leading-6 text-[#AEB6C2] sm:text-base sm:leading-7 md:text-lg md:leading-8">
                    {slide.body}
                  </p>

                  {index === slides.length - 1 && (
                    <a
                      href="#apply"
                      onClick={(event) => event.stopPropagation()}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[#ff8752]/35 bg-[#B94100] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(255,107,26,0.18)] transition hover:bg-[#A83B00] sm:w-auto sm:px-6"
                    >
                      Apply now
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="group absolute inset-y-0 left-0 z-10 flex w-16 cursor-pointer items-center justify-start bg-gradient-to-r from-black/10 to-transparent transition hover:from-[#FF6B1A]/10 focus:outline-none disabled:pointer-events-none disabled:opacity-30 sm:w-20 md:w-24"
            aria-label="Previous slide"
          >
            <span className="flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur transition group-hover:border-[#FF6B1A]/45 group-hover:bg-[#B94100]/85 group-focus-visible:ring-2 group-focus-visible:ring-[#FF6B1A]/60 md:h-11 md:w-11">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 4.5 7 10l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            disabled={activeIndex === slides.length - 1}
            className="group absolute inset-y-0 right-0 z-10 flex w-16 cursor-pointer items-center justify-end bg-gradient-to-l from-black/10 to-transparent transition hover:from-[#FF6B1A]/10 focus:outline-none disabled:pointer-events-none disabled:opacity-30 sm:w-20 md:w-24"
            aria-label="Next slide"
          >
            <span className="flex h-9 w-9 translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur transition group-hover:border-[#FF6B1A]/45 group-hover:bg-[#B94100]/85 group-focus-visible:ring-2 group-focus-visible:ring-[#FF6B1A]/60 md:h-11 md:w-11">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.5 4.5 5.5 5.5-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="mt-3 flex w-full flex-nowrap items-center justify-center gap-1 overflow-hidden px-1" aria-label="Slide progress">
          {slides.map((slide, index) => (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => goToSlide(index, 'auto')}
              className={`h-1.5 min-w-0 flex-1 rounded-full transition md:max-w-7 ${
                activeIndex === index ? 'bg-[#FF6B1A]' : 'bg-white/15 hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? 'step' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

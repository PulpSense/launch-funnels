'use client';

import { useRef, useState } from 'react';

const slides = [
  {
    eyebrow: '01 / The mistake',
    title: 'Your winning ad does not need a new idea.',
    body: 'If it already sells, do not break the sales argument just to make something new.',
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
    title: 'Check fit below.',
    body: 'Answer a few questions. If your ad is a match, book the sprint call and bring the winner with you.',
  },
];

export function DslCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slide = track.children.item(clampedIndex) as HTMLElement | null;

    slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setActiveIndex(clampedIndex);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const slideWidth = track.clientWidth;
    if (!slideWidth) return;

    setActiveIndex(Math.round(track.scrollLeft / slideWidth));
  };

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050506] px-5 py-14 md:px-8 lg:py-20" aria-labelledby="dsl-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,107,26,0.14),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(113,112,255,0.10),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#8A8F98]">2-minute breakdown</p>
            <h2 id="dsl-heading" className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-white md:text-5xl">
              Before you book, see how the sprint works.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#AEB6C2]">
              Swipe through the sales argument. One idea per card, no webinar hostage situation.
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex" aria-label="Deck controls">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#D0D6E0] transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              disabled={activeIndex === 0}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="rounded-full border border-[#ff8752]/35 bg-[#B94100] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#A83B00] disabled:cursor-not-allowed disabled:opacity-35"
              disabled={activeIndex === slides.length - 1}
            >
              Next
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Creative Multiplier Sprint deck"
        >
          {slides.map((slide, index) => (
            <article
              key={slide.eyebrow}
              className="relative flex min-h-[430px] w-full shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#0F1011] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:min-h-[460px] md:p-8 lg:min-h-[500px]"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B1A]/70 to-transparent" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FF6B1A]/10 blur-3xl" />
              <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[#7170FF]/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[#FF6B1A]/25 bg-[#FF6B1A]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[#ffb28a]">
                    {slide.eyebrow}
                  </span>
                  <span className="text-xs tabular-nums text-[#62666D]">{String(index + 1).padStart(2, '0')} / {slides.length}</span>
                </div>

                <h3 className="mt-16 max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
                  {slide.title}
                </h3>
              </div>

              <p className="relative mt-10 max-w-2xl text-lg leading-8 text-[#AEB6C2] md:text-xl md:leading-9">
                {slide.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="Deck progress">
            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition ${activeIndex === index ? 'w-8 bg-[#FF6B1A]' : 'w-2.5 bg-white/20 hover:bg-white/35'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? 'step' : undefined}
              />
            ))}
          </div>

          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-md border border-[#ff8752]/35 bg-[#B94100] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(255,107,26,0.18)] transition hover:bg-[#A83B00]"
          >
            Check fit
          </a>
        </div>
      </div>
    </section>
  );
}

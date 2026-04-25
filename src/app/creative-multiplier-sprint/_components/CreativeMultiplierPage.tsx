import { Suspense } from 'react';

import { TrackingPixels } from '@/components/ui';
import type { PixelConfig } from '@/components/ui';
import { formConfig } from '../content';

import { ApplicationFormIsland } from './ApplicationFormIsland';

const CALL_URL = '#apply';

const pixels = {
  facebookPixelId: '828948073514575',
  facebookEvents: [{ name: 'PageView', type: 'standard' }],
} satisfies PixelConfig;

const outputCards = [
  { label: 'Founder angle', tone: 'Direct response', status: 'Ready' },
  { label: 'Expert voice', tone: 'Authority-led', status: 'Ready' },
  { label: 'Gen Z creator', tone: 'Fast TikTok pace', status: 'Ready' },
  { label: 'Mom buyer', tone: 'Problem-aware', status: 'Ready' },
  { label: 'Calm explainer', tone: 'Trust-builder', status: 'Ready' },
  { label: 'High-energy UGC', tone: 'Pattern interrupt', status: 'Ready' },
];

const proofStats = [
  { value: '10', label: 'avatar variations' },
  { value: '2 days', label: 'delivery window' },
  { value: '1', label: 'revision pass' },
  { value: '9:16', label: 'paid-social files' },
];

const problemCards = [
  {
    title: 'Creators take weeks',
    body: 'Briefs, shipping, filming, revisions, and delivery timelines slow down the account when it needs fresh tests now.',
  },
  {
    title: 'New concepts are risky',
    body: 'When a message already works, the fastest path is not reinventing the strategy. It is multiplying the visible variables.',
  },
  {
    title: 'Same face burns out',
    body: 'Editing old footage helps, but audience fatigue still hits when the avatar, voice, and delivery never change.',
  },
];

const processSteps = [
  {
    label: '01',
    title: 'Deconstruct the winner',
    body: 'We break down the hook, claim, proof, objections, pacing, and CTA so the sales structure stays intact.',
  },
  {
    label: '02',
    title: 'Build the avatar matrix',
    body: 'We map different personas, delivery styles, tones, and pacing options around the same proven argument.',
  },
  {
    label: '03',
    title: 'Produce the variations',
    body: 'We create the avatar-led edits, polish the output, and remove anything that feels fake, awkward, or off-brand.',
  },
  {
    label: '04',
    title: 'QA and deliver',
    body: 'You get 10 vertical files ready to test, plus one revision pass if something needs tightening.',
  },
];

const comparisonRows = [
  ['Speed', 'Often 2–4 weeks with briefs, shipping, filming, and edits', '10 variations delivered in 2 business days after assets'],
  ['Starting point', 'Usually starts from new concepts or creator interpretation', 'Starts from a paid-social ad that already works'],
  ['Testing variables', 'Limited by creator schedule, footage, and revisions', 'Avatar, persona, delivery, tone, and pacing variants'],
  ['Risk', 'New batch may miss the winning sales argument', 'Core hook and sales structure stay intact'],
  ['Your time', 'Briefing, chasing, reviewing, and editing back-and-forth', 'Send the winner and context, then review the finished batch'],
  ['Guarantee', 'Usually pay regardless of usable output', 'Usable creative after one revision pass or refund'],
];

const deliverables = [
  '10 AI avatar variations from one winning paid-social ad',
  'Same core concept, hook, and sales argument preserved',
  'Different avatars, personas, delivery styles, and pacing angles',
  'Platform-ready 9:16 files for Meta, TikTok, Reels, or Shorts',
  'One revision pass plus usable creative guarantee',
];

const testimonials = [
  {
    quote:
      "Working with Santi was a total game changer. Before, our leads would load to our CRM overnight, so we'd often respond a day late, hurting our conversions. Now, leads get added instantly and contacted right away.",
    name: 'Facundo Rosello',
    title: 'Good Nomads',
  },
  {
    quote:
      'Before Santi, our sales system was disjointed, creating extra steps and slowing us down. Santi understood the gaps and streamlined everything with Make, Monday.com, and AI.',
    name: 'Charlie Vicente',
    title: 'Ares Projects',
  },
  {
    quote:
      'They nailed the complicated nature of our project and communicated every step of the way. The systems they set up are exactly what I needed — they work.',
    name: 'Meegan Gregg',
    title: 'Backbody Project',
  },
];

const faqs = [
  {
    question: 'Why no price on the page?',
    answer:
      'Because fit matters. We need to see your original ad, brand, product, and whether AI avatar variants make sense before taking payment. This is call-close, not self-checkout.',
  },
  {
    question: 'Will the avatars look fake?',
    answer:
      'Some AI videos do. That is why this is not raw tool output. We QA the batch before delivery and include one revision pass to tighten anything that feels off.',
  },
  {
    question: 'Are you changing my winning ad?',
    answer:
      'No. The point is to preserve the core concept, hook, structure, and sales argument while multiplying the avatar and persona layer around it.',
  },
  {
    question: 'Do you guarantee performance?',
    answer:
      'No. We guarantee usable creative output, not ROAS. Performance depends on your media buying, offer, account history, audience, budget, and platform dynamics.',
  },
  {
    question: 'What do I need to send you?',
    answer:
      'Your winning ad, product and brand context, any claims or compliance rules we need to respect, and examples of delivery styles you like or hate.',
  },
];

const goodFit = [
  'You have a proven ad or message already working',
  'You run paid social and need fresh variants quickly',
  'You can send product, brand, and compliance context fast',
  'You are comfortable testing AI-generated avatar creative',
];

const notFit = [
  'You need a complete ad strategy from zero',
  'You expect guaranteed ROAS or platform approval',
  'You do not have a proven concept to multiply',
  'You want raw AI tool output instead of a QA-led sprint',
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#8A8F98]">
    {children}
  </p>
);

const PrimaryCta = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <a
    href={CALL_URL}
    className={`inline-flex items-center justify-center rounded-md border border-[#ff8752]/40 bg-[#FF6B1A] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(255,107,26,0.22)] transition hover:bg-[#ff7b33] ${className}`}
  >
    {children}
  </a>
);

const GhostCta = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#output"
    className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#D0D6E0] transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
  >
    {children}
  </a>
);

const AvatarOutputMockup = () => (
  <div className="relative mx-auto w-full max-w-[560px] rounded-[28px] border border-white/10 bg-[#0F1011]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur">
    <div className="absolute -inset-1 -z-10 rounded-[30px] bg-[radial-gradient(circle_at_25%_20%,rgba(255,107,26,0.28),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(113,112,255,0.20),transparent_30%)] blur-xl" />

    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-[#62666D]">Creative lab</p>
        <p className="mt-1 text-sm font-medium text-[#F7F8F8]">Winner Avatar Multiplier</p>
      </div>
      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
        QA ready
      </span>
    </div>

    <div className="grid gap-3 lg:grid-cols-[0.92fr_1.25fr]">
      <div className="rounded-2xl border border-white/10 bg-black p-3">
        <div className="aspect-[9/16] rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1f2328,#0b0c0f)] p-3">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
                Original
              </span>
              <div className="mt-4 h-24 rounded-lg bg-[radial-gradient(circle_at_50%_15%,#f59e0b,transparent_28%),linear-gradient(180deg,#2d333b,#111)]" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-4/5 rounded-full bg-white/70" />
              <div className="h-2 w-3/5 rounded-full bg-white/30" />
              <div className="rounded-md bg-[#FF6B1A] px-2 py-1 text-center text-[10px] font-semibold text-white">
                Winning ad
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {outputCards.map((card, index) => (
          <div
            key={card.label}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition hover:border-[#FF6B1A]/40 hover:bg-white/[0.055]"
          >
            <div className="mb-3 aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-black">
              <div
                className="h-full w-full bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.9),transparent_13%),linear-gradient(145deg,rgba(255,107,26,0.72),rgba(113,112,255,0.18)_42%,rgba(255,255,255,0.04))] opacity-80 transition group-hover:scale-105"
                style={{ filter: `hue-rotate(${index * 22}deg)` }}
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-xs font-medium text-[#F7F8F8]">{card.label}</p>
              <span className="rounded-full bg-[#FF6B1A]/15 px-2 py-0.5 text-[10px] text-[#ffb28a]">
                {card.status}
              </span>
            </div>
            <p className="mt-1 truncate text-[11px] text-[#8A8F98]">{card.tone}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export function CreativeMultiplierPage() {
  return (
    <>
      <TrackingPixels pixels={pixels} />
      <main className="min-h-screen bg-[#010102] text-[#F7F8F8] [font-feature-settings:'cv01','ss03']">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,107,26,0.22),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(113,112,255,0.18),transparent_30%),linear-gradient(180deg,#08090A_0%,#010102_100%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B1A]/60 to-transparent" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-8 md:px-8 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-[#D0D6E0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B1A] shadow-[0_0_16px_rgba(255,107,26,0.8)]" />
                1 winning ad → 10 avatar variations in 48h
              </div>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] text-[#F7F8F8] md:text-6xl lg:text-7xl">
                Turn your winning ad into{' '}
                <span className="text-[#FF6B1A]">10 AI avatar variations</span> in 2 business days.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 tracking-[-0.01em] text-[#AEB6C2] md:text-lg">
                Give your best paid-social ad new faces, personas, and delivery styles without waiting weeks for UGC creators or gambling on brand-new concepts.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta>Book a 15-min sprint fit call</PrimaryCta>
                <GhostCta>See what you get</GhostCta>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#8A8F98]">
                No checkout on this page. We review fit first, then invoice after the call. Built for ecommerce brands running paid social.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-xl font-medium tracking-[-0.04em] text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-[#8A8F98]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <AvatarOutputMockup />
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#08090A] px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>The problem</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
                  Creative fatigue is not always a concept problem.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#AEB6C2]">
                  If the message works, multiply the messenger. We keep the winning sales argument intact and change the visible variables around it.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {problemCards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <h3 className="text-lg font-medium tracking-[-0.03em] text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#8A8F98]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel>The mechanism</SectionLabel>
                <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
                  A production pipeline for multiplying what already works.
                </h2>
              </div>
              <PrimaryCta className="md:self-end">Book the fit call</PrimaryCta>
            </div>

            <div className="grid gap-3 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.label} className="relative rounded-2xl border border-white/10 bg-[#0F1011] p-5">
                  <span className="mb-10 inline-flex rounded-full border border-[#FF6B1A]/25 bg-[#FF6B1A]/10 px-3 py-1 text-xs font-medium text-[#ffb28a]">
                    {step.label}
                  </span>
                  <h3 className="text-xl font-medium leading-tight tracking-[-0.04em] text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#8A8F98]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#08090A] px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Before vs after</SectionLabel>
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
              Waiting on UGC creators vs AI avatar multiplication.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#AEB6C2]">
              Same creative strategy, much faster testing velocity.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0F1011]">
              <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.22em] text-[#8A8F98] md:grid-cols-[0.7fr_1fr_1fr]">
                <div className="p-4">Variable</div>
                <div className="border-t border-white/10 p-4 md:border-l md:border-t-0">Traditional UGC batch</div>
                <div className="border-t border-[#FF6B1A]/25 bg-[#FF6B1A]/10 p-4 text-[#ffb28a] md:border-l md:border-t-0">Creative Multiplier Sprint</div>
              </div>
              {comparisonRows.map(([feature, traditional, modern]) => (
                <div key={feature} className="grid grid-cols-1 border-b border-white/10 last:border-b-0 md:grid-cols-[0.7fr_1fr_1fr]">
                  <div className="p-4 text-sm font-medium text-white">{feature}</div>
                  <div className="border-white/10 p-4 text-sm leading-6 text-[#8A8F98] md:border-l">{traditional}</div>
                  <div className="border-[#FF6B1A]/20 bg-[#FF6B1A]/[0.035] p-4 text-sm leading-6 text-[#D0D6E0] md:border-l">{modern}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="output" className="px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionLabel>The output</SectionLabel>
              <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
                A clean creative handoff, not a folder of AI slop.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#AEB6C2]">
                You get a QA-led sprint deliverable built for paid-social testing. Not raw dashboard exports. Not random new concepts. Variations of the thing that already proved it can sell.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0F1011] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#62666D]">Delivery receipt</p>
                  <h3 className="mt-1 text-2xl font-medium tracking-[-0.045em] text-white">Creative Multiplier Sprint</h3>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  QA checked
                </span>
              </div>
              <div className="space-y-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B1A] text-xs font-bold text-white">✓</span>
                    <p className="text-sm leading-6 text-[#D0D6E0]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#08090A] px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Fit check</SectionLabel>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6">
                <h2 className="text-3xl font-medium tracking-[-0.05em] text-white">Good fit if...</h2>
                <div className="mt-6 space-y-3">
                  {goodFit.map((item) => (
                    <p key={item} className="rounded-xl border border-emerald-400/15 bg-black/20 p-4 text-sm text-[#D0D6E0]">✓ {item}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-red-400/20 bg-red-400/[0.035] p-6">
                <h2 className="text-3xl font-medium tracking-[-0.05em] text-white">Not a fit if...</h2>
                <div className="mt-6 space-y-3">
                  {notFit.map((item) => (
                    <p key={item} className="rounded-xl border border-red-400/15 bg-black/20 p-4 text-sm text-[#D0D6E0]">× {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Trust</SectionLabel>
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
                Why trust PulpSense with this?
              </h2>
              <p className="max-w-md text-sm leading-6 text-[#8A8F98]">
                Different projects, same operating principle: fast execution, clean systems, and no disappearing after the kickoff call.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-3xl border border-white/10 bg-[#0F1011] p-6">
                  <p className="text-base leading-7 text-[#D0D6E0]">“{testimonial.quote}”</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-[#8A8F98]">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#08090A] px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
                Questions before you send the winner.
              </h2>
              <div className="mt-8 hidden lg:block">
                <PrimaryCta>Book your sprint fit call</PrimaryCta>
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-white/10 bg-[#0F1011] p-5 open:border-[#FF6B1A]/30">
                  <summary className="cursor-pointer list-none text-lg font-medium tracking-[-0.03em] text-white">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-[#FF6B1A] transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-[#8A8F98]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <SectionLabel>Apply to book</SectionLabel>
              <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-5xl">
                Answer a few fit questions. Qualified brands book immediately.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#AEB6C2]">
                The sprint only works when there is already a proven ad to multiply. The form checks spend, winner status, platforms, and timeline before showing the booking step.
              </p>
              <div className="mt-6 rounded-2xl border border-[#FF6B1A]/20 bg-[#FF6B1A]/[0.055] p-5 text-sm leading-6 text-[#D0D6E0]">
                If it is a fit, you pick a time. If it is not, we route you away instead of wasting a call.
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0F1011] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:p-6">
              <Suspense fallback={<div className="h-[620px] animate-pulse rounded-2xl bg-white/[0.04]" />}>
                <ApplicationFormIsland config={formConfig} />
              </Suspense>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#FF6B1A]/25 bg-[radial-gradient(circle_at_20%_0%,rgba(255,107,26,0.22),transparent_32%),linear-gradient(145deg,#111318,#050506)] p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:p-12">
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-6xl">
              Have a winning ad that needs new faces?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#AEB6C2]">
              Complete the short fit form. Qualified brands get the booking step, then we review the winning ad and confirm the sprint scope.
            </p>
            <div className="mt-8">
              <PrimaryCta className="px-7 py-4 text-base">Start the Creative Multiplier application</PrimaryCta>
            </div>
            <p className="mt-4 text-sm text-[#8A8F98]">Qualification first. Booking second. No public price. No self-checkout.</p>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-10 text-sm text-[#62666D] md:px-8">
          <div className="mx-auto max-w-7xl">
            <h3 className="text-base font-medium text-[#D0D6E0]">Performance Disclaimer</h3>
            <p className="mt-3 max-w-4xl leading-6">
              Creative output and advertising performance vary based on your offer, product, account history, audience, budget, media buying, platform policies, and market conditions. We do not guarantee ROAS, CPA, revenue, or ad account performance.
            </p>
            <p className="mt-2 max-w-4xl leading-6">
              The Creative Multiplier Sprint guarantees usable creative output after one revision pass, not paid-media results. Platform approval and compliance remain your responsibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#" className="hover:text-[#D0D6E0]">Privacy Policy</a>
              <a href="#" className="hover:text-[#D0D6E0]">Terms of Service</a>
              <a href="#" className="hover:text-[#D0D6E0]">Contact Us</a>
            </div>
            <p className="mt-6">© {new Date().getFullYear()} PulpSense. All Rights Reserved.</p>
          </div>
        </footer>

        <div className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/10 bg-[#0F1011]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur md:hidden">
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">10 variations / 2 business days</p>
              <p className="truncate text-xs text-[#8A8F98]">Fit call first. No checkout.</p>
            </div>
            <PrimaryCta className="shrink-0 px-4 py-3 text-xs">Book call</PrimaryCta>
          </div>
        </div>
      </main>
    </>
  );
}
import type { Metadata } from 'next';

import {
  BenefitsSection,
  ComparisonTable,
  CTASection,
  DisclaimerFooter,
  FAQ,
  HeroSection,
  HowItWorks,
  ProblemSection,
  ResultsSection,
  SocialProofLogos,
  TestimonialsSection,
} from '@/components/sections';
import type {
  BenefitsSectionProps,
  ComparisonTableProps,
  CTASectionProps,
  DisclaimerFooterProps,
  FAQProps,
  HeroSectionProps,
  HowItWorksProps,
  ProblemSectionProps,
  ResultsSectionProps,
  SocialProofLogosProps,
  TestimonialsSectionProps,
} from '@/components/sections';
import { PageLayout, TrackingPixels } from '@/components/ui';
import type { PixelConfig } from '@/components/ui';

const CALL_URL = '#'; // TBD: booking/application URL

export const metadata: Metadata = {
  title: 'Creative Multiplier Sprint | 10 AI Avatar Ad Variations in 2 Days',
  description:
    'Turn one winning paid-social ad into 10 launch-ready AI avatar variations in 2 business days. Built for ecommerce brands that need fresh creative without waiting weeks for UGC creators.',
};

const content = {
  pixels: {
    facebookPixelId: '828948073514575',
    facebookEvents: [{ name: 'PageView', type: 'standard' }],
  } satisfies PixelConfig,

  hero: {
    trustBadge: {
      text: 'Built by PulpSense — Official n8n + Make Partners',
      stars: 5,
    },
    banner: {
      text: 'For Ecommerce Brands Running Paid Social',
      variant: 'orange',
    },
    headline: 'Turn Your Winning Ad Into',
    highlightedText: '10 AI Avatar Variations in 2 Business Days.',
    subheadline:
      'Give your best ad new faces, new delivery styles, and more testing angles without waiting weeks for UGC creators or gambling on brand-new concepts.',
    video: {
      provider: undefined,
      altText: 'Creative Multiplier Sprint proof montage placeholder',
    },
    cta: {
      text: 'Book a 15-Min Sprint Fit Call →',
      href: CALL_URL,
      disclaimer: 'No checkout on this page. We review fit first, then invoice after the call.',
    },
  } satisfies HeroSectionProps,

  clientLogos: {
    title: 'Trusted By Growing Businesses',
    invertLogos: true,
    logos: [
      { src: '/assets/images/client-logos/logo-client-1.avif', alt: 'Client 1' },
      { src: '/assets/images/client-logos/logo-client-2.avif', alt: 'Client 2' },
      { src: '/assets/images/client-logos/logo-client-3.svg', alt: 'Client 3' },
      { src: '/assets/images/client-logos/logo-client-4.avif', alt: 'Client 4' },
      { src: '/assets/images/client-logos/logo-client-5.avif', alt: 'Client 5' },
      { src: '/assets/images/client-logos/logo-client-6.avif', alt: 'Client 6' },
      { src: '/assets/images/client-logos/logo-client-7.avif', alt: 'Client 7' },
      { src: '/assets/images/client-logos/logo-client-8.svg', alt: 'Client 8' },
    ],
  } satisfies SocialProofLogosProps,

  benefits: {
    headline:
      'Your Winner Is Working. The Problem Is It Needs Fresh Faces Before It Burns Out.',
    benefits: [
      'Creators take weeks. Your ad account needs fresh creative now.',
      'Random new concepts are risky when you already know what message converts.',
      'Editing old footage only goes so far — the same face and delivery can still fatigue.',
      'We keep the winning sales argument and multiply the avatar/persona layer around it.',
      'You get launch-ready vertical files in 2 business days after we receive your assets.',
    ],
    cta: {
      text: 'Book a 15-Min Sprint Fit Call →',
      href: CALL_URL,
    },
  } satisfies BenefitsSectionProps,

  problem: {
    headline: '🤔 You Do Not Need Another New Concept. You Need More Versions of What Already Works.',
    paragraphs: [
      'Most brands treat creative fatigue like a strategy problem. They brainstorm new angles, wait on creator briefs, chase revisions, and lose weeks before the next batch is ready.',
      'But if you already have a paid-social ad that is working, the fastest path is not reinventing everything. It is preserving the core argument and changing the visible variables: face, voice, persona, pacing, and delivery style.',
      'That is where AI avatar creative finally makes sense. Not as cheap content spam. As a speed layer on top of a proven ad.',
      'The catch is quality. Raw AI video can look fake fast. So this is not a dashboard subscription. It is a founder-led production sprint with creative judgment, QA, and a tight output promise.',
    ],
    emphasizedText: 'Not as cheap content spam. As a speed layer on top of a proven ad.',
    highlight:
      'Send us one winning ad. We deconstruct why it works, keep the sales structure intact, and produce 10 avatar-led variations you can actually test.',
    conclusion:
      'The goal is simple: more tests from the creative that already proved it deserves more shots.',
    cta: {
      text: 'See If Your Ad Is a Fit →',
      href: CALL_URL,
    },
  } satisfies ProblemSectionProps,

  howItWorks: {
    headerLabel: 'The Mechanism',
    header: 'Winner Avatar Multiplier',
    steps: [
      {
        number: 1,
        title: 'We Deconstruct Your Winning Ad',
        description:
          'We look at the hook, claim, proof, objections, offer framing, pacing, and CTA so we understand what must stay intact before touching the avatar layer.',
      },
      {
        number: 2,
        title: 'We Rebuild It With Different AI Avatars and Personas',
        description:
          'We create variations across avatar type, demographic, delivery style, tone, and pacing while preserving the original sales argument that made the ad work.',
      },
      {
        number: 3,
        title: 'We QA and Deliver Platform-Ready Files',
        description:
          'You get 10 vertical video variations within 2 business days after assets are received, plus one revision pass if something needs tightening.',
      },
    ],
    cta: {
      text: 'Book the Fit Call →',
      href: CALL_URL,
    },
  } satisfies HowItWorksProps,

  comparison: {
    header: 'Waiting on UGC Creators vs',
    headerHighlight: 'AI Avatar Multiplication',
    subheader: 'Same creative strategy, much faster testing velocity',
    traditionalLabel: 'Traditional UGC Batch',
    modernLabel: 'Creative Multiplier Sprint ✨',
    rows: [
      {
        feature: 'Speed',
        traditional: 'Often 2–4 weeks with briefs, shipping, filming, edits',
        modern: '10 variations delivered in 2 business days after assets',
      },
      {
        feature: 'Starting Point',
        traditional: 'Often starts from new concepts or creator interpretation',
        modern: 'Starts from a proven ad that already works',
      },
      {
        feature: 'Testing Variables',
        traditional: 'Limited by creators, schedule, footage, and revisions',
        modern: 'Avatar, persona, delivery, tone, and pacing variations',
      },
      {
        feature: 'Risk',
        traditional: 'New batch may miss the winning message completely',
        modern: 'Core sales argument stays intact',
      },
      {
        feature: 'Your Time',
        traditional: 'Briefing, chasing, reviewing, editing back-and-forth',
        modern: 'Send the winning ad + context, then review the batch',
      },
      {
        feature: 'Guarantee',
        traditional: 'Usually pay regardless of usable output',
        modern: 'Usable creative after one revision pass or refund',
      },
    ],
    bottomNote: {
      title: 'The Bottom Line',
      content:
        'Do not replace creators forever. Use AI avatars when your account needs fast, controlled variations of a message that already proved it can sell.',
    },
    cta: {
      text: 'Book a Creative Multiplier Call →',
      href: CALL_URL,
    },
  } satisfies ComparisonTableProps,

  results: {
    header: 'What You Get',
    stats: [
      '10 AI avatar variations from one winning paid-social ad',
      'Same core concept, hook, and sales argument preserved',
      'Different avatars, personas, delivery styles, and pacing angles',
      'Platform-ready vertical video files delivered in 2 business days',
      'One revision pass + usable creative guarantee',
    ],
  } satisfies ResultsSectionProps,

  testimonials: {
    header: 'Why Trust PulpSense With This?',
    testimonials: [
      {
        quote:
          "Working with Santi was a total game changer. Before, our leads would load to our CRM overnight, so we'd often respond a day late, hurting our conversions. Now, thanks to his automations, leads get added instantly and contacted right away.",
        name: 'Facundo Rosello',
        title: 'Good Nomads',
        avatar: '/assets/images/testimonials/facundo.avif',
      },
      {
        quote:
          "Before Santi, our sales system was disjointed, creating extra steps and slowing us down. Santi understood the gaps and streamlined everything with Make, Monday.com, and AI.",
        name: 'Charlie Vicente',
        title: 'Ares Projects',
        avatar: '/assets/images/testimonials/charlie.avif',
      },
      {
        quote:
          'They nailed the complicated nature of our project and communicated every step of the way. The systems they set up are exactly what I needed — they work.',
        name: 'Meegan Gregg',
        title: 'Backbody Project',
        avatar: '/assets/images/testimonials/meegan.avif',
      },
    ],
  } satisfies TestimonialsSectionProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently Asked Questions',
    items: [
      {
        question: 'Why no price on the page?',
        answer:
          'Because fit matters. We need to see your original ad, your brand, your product, and whether AI avatar variants make sense before taking payment. This is call-close, not self-checkout.',
      },
      {
        question: 'Will the avatars look fake?',
        answer:
          'Some AI videos do. That is exactly why the page is proof-heavy and why we QA before delivery. We are not selling raw AI tool output. We are selling usable creative files.',
      },
      {
        question: 'Are you changing my winning ad?',
        answer:
          'No. The point is to preserve the core concept, hook, structure, and sales argument while multiplying the avatar/persona layer around it.',
      },
      {
        question: 'Do you guarantee performance?',
        answer:
          'No. We guarantee usable creative output, not ROAS. Performance depends on your media buying, offer, account history, audience, budget, and platform dynamics.',
      },
      {
        question: 'Can I use these on Meta, TikTok, Reels, or Shorts?',
        answer:
          'Yes, assuming your account and platform policies allow the creative. We export platform-ready vertical files for paid-social testing.',
      },
      {
        question: 'What do I need to send you?',
        answer:
          'Your winning ad, product/brand context, any claims or compliance rules we need to respect, and examples of delivery styles you like or hate.',
      },
      {
        question: 'Who is this not for?',
        answer:
          'This is not for brands with no proven ad, people who want full strategy from scratch, anyone who needs guaranteed ROAS, or brands that are not comfortable testing AI-generated avatars.',
      },
    ],
    cta: {
      text: 'Book Your Sprint Fit Call →',
      href: CALL_URL,
    },
  } satisfies FAQProps,

  cta: {
    id: 'apply-section',
    header: 'Have a Winning Ad That Needs New Faces?',
    steps: [
      'Book a short fit call so we can review your current winning ad and decide whether avatar variants make sense',
      'If it is a fit, we send the invoice after the call — no self-checkout, no surprise payment page',
      'You send your winning ad, brand context, product notes, and any compliance guardrails',
      'We produce 10 AI avatar variations and deliver platform-ready files in 2 business days after assets are received',
      'If the creatives are not usable after one revision pass, we refund you',
    ],
    cta: {
      text: 'Book a 15-Min Creative Multiplier Sprint Call →',
      href: CALL_URL,
    },
    urgency: 'Founder-led sprint capacity is limited each week',
    cardTitle: 'Book the Fit Call First',
    cardSubtext: 'Call-close only. No public price. No self-checkout.',
  } satisfies CTASectionProps,

  footer: {
    disclaimerHeader: 'Performance Disclaimer',
    paragraphs: [
      'Creative output and advertising performance vary based on your offer, product, account history, audience, budget, media buying, platform policies, and market conditions. We do not guarantee ROAS, CPA, revenue, or ad account performance.',
      'The Creative Multiplier Sprint guarantees usable creative output after one revision pass, not paid-media results. Platform approval and compliance remain your responsibility.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} PulpSense. All Rights Reserved.`,
    platformDisclaimer:
      'This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. This site is not a part of the Google website or Alphabet Inc. Additionally, this site is not endorsed by Google in any way. GOOGLE is a trademark of ALPHABET, Inc.',
  } satisfies DisclaimerFooterProps,
};

export default function CreativeMultiplierSprintPage() {
  return (
    <>
      <TrackingPixels pixels={content.pixels} />
      <PageLayout
        hero={<HeroSection {...content.hero} />}
        footer={
          <>
            <FAQ {...content.faq} />
            <CTASection {...content.cta} />
            <DisclaimerFooter {...content.footer} />
          </>
        }
      >
        <SocialProofLogos {...content.clientLogos} />
        <BenefitsSection {...content.benefits} />
        <ProblemSection {...content.problem} />
        <HowItWorks {...content.howItWorks} />
        <ComparisonTable {...content.comparison} />
        <ResultsSection {...content.results} />
        <TestimonialsSection {...content.testimonials} />
      </PageLayout>
    </>
  );
}

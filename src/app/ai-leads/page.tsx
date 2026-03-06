import type { Metadata } from 'next';

import {
  BonusSection,
  DisclaimerFooter,
  FAQ,
  GuaranteeSection,
  ProgramOverview,
  ScrollerSummarySection,
  VSLHeroSection,
} from '@/components/sections';
import type {
  BonusSectionProps,
  DisclaimerFooterProps,
  FAQProps,
  GuaranteeSectionProps,
  ProgramOverviewProps,
  ScrollerSummarySectionProps,
  VSLHeroSectionProps,
} from '@/components/sections';

export const metadata: Metadata = {
  title:
    'Copy & Paste The 7 AI Automations That Built Our Agency | Just $27',
  description:
    'AI Agency Founder Reveals The Exact 7 Automations That Helped His Clients Generate 100M+ In Pipeline. Deploy them in your business this week for only $27.',
};

const content = {
  hero: {
    announcementBar:
      'For Coaches, Consultants, Agencies, and Any Service-Based Business Wanting More Clients...',
    forLabel: 'For Coaches, Consultants, Agencies & Service-Based Businesses...',
    headline: 'Copy & Paste The 7 AI Automations That Built Our Agency',
    highlightedPrice: 'For Only $27!',
    subheadline:
      'AI Agency Founder Reveals The Exact 7 Automations That Helped His Clients Generate 100M+ In Pipeline \u2014 And How You Can Deploy Them In Your Business This Week',
    video: {},
    checkout: {
      originalPrice: 97,
      currentPrice: 27,
      productLabels: [
        'Digital Download',
        '7 Done-For-You Automations',
        '5 FREE Bonuses',
      ],
      ctaText: 'GIVE ME ACCESS \u2014 Instant Digital Access',
    },
  } satisfies VSLHeroSectionProps,

  programOverview: {
    header: "What's Inside The AI Leads System?",
    paragraphs: [],
    features: [
      {
        title: '7 Proven AI Automations',
        text: "We've battle-tested with real clients \u2014 licensed to you so you can deploy them immediately",
      },
      {
        title: 'Ad Copy, Email Scripts & Funnel Templates',
        text: 'Fill-in-the-blank for your offer, niche, and industry \u2014 start generating leads in 30 days',
      },
      {
        title: 'Cold-Converting Offer Framework',
        text: "How to package an AI offer that works even with cold traffic \u2014 most agencies can't crack this",
      },
      {
        title: '1-Click n8n & Make.com Downloads',
        text: 'Pre-built automation flows you can deploy in hours \u2014 just customize for your offer',
      },
      {
        title: 'AI Appointment Setter System',
        text: 'The exact flows, scripts, and tech stack our clients use to book calls on autopilot',
      },
      {
        title: '1:1 Implementation Call',
        text: 'Figure out which automation fits your business and get a step-by-step game plan',
      },
    ],
    cta: {
      text: 'YES! GIVE ME INSTANT ACCESS',
      scrollTo: 'checkout',
    },
  } satisfies ProgramOverviewProps,

  bonuses: {
    header:
      'UNLOCK IMMEDIATE ACCESS TO 5 BONUSES TO GENERATE MORE LEADS',
    bonuses: [
      {
        number: 1,
        title:
          '1:1 Call To Determine Which Automation Is Right For You',
        subtitle: 'And Customize It For Your Niche, Offer & Industry',
        paragraphs: [
          'If you have a service-based business selling above $2,000... all of these automations can work for you. The question is: which one do you start with?',
          "This is why the first step is a 1:1 call with our implementation team. We'll map out exactly which system to start with based on your offer, niche, and revenue level \u2014 so you leave with a step-by-step game plan ready to execute.",
        ],
      },
      {
        number: 2,
        title: 'Zero \u2192 $1M ARR Agency Workshop',
        paragraphs: [
          'After scaling PulpSense from scratch and helping dozens of agencies implement AI systems...',
          "I've distilled everything into a blueprint any service-based business can use to scale from zero to their first million. It's the most requested training we've ever done \u2014 and it's included free.",
        ],
      },
      {
        number: 3,
        title: 'How To Run A High-Converting Sales Process',
        subtitle: 'In As Little As 30 Minutes A Day!',
        paragraphs: [
          "I presented this framework to a room of 7 and 8-figure founders \u2014 and it got the best feedback of any talk I've given.",
          "I'll show you exactly how we've built and managed high-performing sales processes across multiple client businesses. You get it free with your purchase.",
        ],
      },
      {
        number: 4,
        title: 'Skyrocket Your Show Rates',
        paragraphs: [
          'Increasing show rates is the fastest way to increase revenue without spending more on ads.',
          "You'll discover: pre-call email sequences that pre-sell prospects, AI-powered text sequences that confirm attendance, qualification filters to cut no-shows before they happen \u2014 all automatable.",
        ],
      },
      {
        number: 5,
        title: "Don't Want To Be On Camera?",
        subtitle:
          'How To Create Multiple Brand Faces For Your Ads!',
        paragraphs: [
          "The ad scripts and templates I'll give you are easy to film \u2014 many top performers are 90-second iPhone videos.",
          "But if you don't want to be the face of your ads, I'll show you exactly how we source talent to film ads for us \u2014 people who are excited to do it for a fraction of what you'd expect.",
        ],
      },
    ],
    cta: {
      text: 'YES! GIVE ME INSTANT ACCESS',
      scrollTo: 'checkout',
    },
  } satisfies BonusSectionProps,

  guarantee: {
    headline: 'Backed By Our 90-Day Money-Back Guarantee',
    days: 90,
    keepOnRefund: true,
    paragraphs: [
      "If you implement even one automation and don't immediately see value in your business, email us and we'll refund you \u2014 and let you keep the system.",
      'Either way, you win. Zero risk on your part.',
    ],
    cta: {
      text: 'YES! GIVE ME INSTANT ACCESS',
      scrollTo: 'checkout',
    },
  } satisfies GuaranteeSectionProps,

  scrollerSummary: {
    label: 'FOR THE SCROLLERS...',
    heading: "Here's Everything You Get For Just $27",
    intro: "You're a busy person. Here's the short version:",
    items: [
      '7 Proven AI Automations',
      'Ad Copy, Email Scripts & Funnel Templates',
      'Cold-Converting Offer Framework',
      '1-Click n8n & Make.com Downloads',
      'AI Appointment Setter System',
      '1:1 Implementation Call',
      'BONUS #1: 1:1 Call To Determine Which Automation Is Right For You',
      'BONUS #2: Zero \u2192 $1M ARR Agency Workshop',
      'BONUS #3: How To Run A High-Converting Sales Process',
      'BONUS #4: Skyrocket Your Show Rates',
      "BONUS #5: Don't Want To Be On Camera? How To Create Multiple Brand Faces For Your Ads!",
    ],
    price: 'JUST $27 TODAY',
    cta: {
      text: 'YES! GIVE ME INSTANT ACCESS',
      scrollTo: 'checkout',
    },
  } satisfies ScrollerSummarySectionProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently Asked Questions',
    items: [
      {
        question: 'Will this work in my industry?',
        answer:
          "As long as you have a service offer above $2,000, yes. We've deployed these automations across agencies, consultancies, SaaS, medical practices, coaching businesses, and more. If you're not satisfied, the 90-day guarantee covers you.",
      },
      {
        question: 'What exactly am I getting?',
        answer:
          '7 done-for-you AI automation workflows (n8n/Make.com compatible), ad copy and email scripts, funnel templates, the AI Appointment Setter system, 5 bonuses including a 1:1 implementation call, and a 90-day money-back guarantee.',
      },
      {
        question: 'How fast do I get access?',
        answer:
          "Instantly after purchase. You'll receive login credentials via email within minutes.",
      },
      {
        question: 'Is there a guarantee?',
        answer:
          'Yes \u2014 90 days, no questions asked. And you keep the system even if you refund.',
      },
    ],
  } satisfies FAQProps,

  footer: {
    disclaimerHeader: 'Earnings Disclaimer',
    paragraphs: [
      'The earnings and income representations made by our company and its advertisers/sponsors are aspirational statements only of your earning potential. These results are not typical and results will vary. The results on this page are OUR results and from years of testing. We can in NO way guarantee you will get similar results.',
      'The average person who buys any "how to" information gets little to no results. We\'re using these references for example purposes only. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you\'re not willing to accept that, please DO NOT PURCHASE.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact', href: '#' },
    ],
    copyrightText: '\u00A9 2025 PulpSense. All rights reserved.',
  } satisfies DisclaimerFooterProps,
};

export default function AILeadsPage() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <VSLHeroSection {...content.hero} />
      <main className="flex-1">
        <ProgramOverview {...content.programOverview} />
        <BonusSection {...content.bonuses} />
        <GuaranteeSection {...content.guarantee} />
        <ScrollerSummarySection {...content.scrollerSummary} />
        <FAQ {...content.faq} />
      </main>
      <DisclaimerFooter {...content.footer} />
    </div>
  );
}

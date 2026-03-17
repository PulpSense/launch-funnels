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
  VideoTestimonials,
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
  VideoTestimonialsProps,
} from '@/components/sections';
import { PageLayout, TrackingPixels } from '@/components/ui';
import type { PixelConfig } from '@/components/ui';

export const metadata: Metadata = {
  title:
    'The Operator Launchpad | AI Agent Systems for $50K+/Month Operators',
  description:
    'We build 3 custom AI agents that handle your email, reporting, and follow-ups 24/7. One dashboard. Set up in 14 days. You get 15+ hours back every month.',
};

const content = {
  pixels: {
    facebookPixelId: '828948073514575',
    facebookEvents: [{ name: 'PageView', type: 'standard' }],
  } satisfies PixelConfig,

  hero: {
    trustBadge: {
      text: 'Trusted by 50+ Founders',
      stars: 5,
    },
    banner: {
      text: 'Agency Owners, Consultants & Coaches Doing $50K+/Month',
      variant: 'orange',
    },
    headline: 'Stop Spending Half Your Week on Admin.',
    highlightedText: '\nLet AI Handle It.',
    subheadline:
      'We build 3 custom AI agents that handle your email, reporting, and follow-ups 24/7. One dashboard. Set up in 14 days. You get 15+ hours back every month.',
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
      disclaimer: 'No commitment. 25 minutes. We\'ll map your biggest time drains.',
    },
  } satisfies HeroSectionProps,

  clientLogos: {
    title: 'Trusted by growing businesses',
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
      'How We Eliminated 30+ Hours of Weekly Ops Work From Our Own Business — and Now We Build It For Yours',
    benefits: [
      'Your content pipeline runs on autopilot — research, drafts, and scheduling handled before you wake up',
      'Every lead gets tracked, followed up on, and flagged automatically. No more deals dying in your CRM.',
      'Your team communication channels get monitored 24/7 — issues flagged before they escalate, daily digests delivered to you.',
      'You and your team get trained to use and extend the system yourselves. No black box. No dependency.',
      'Runs locally on your hardware. Your data never leaves your building. You own it completely.',
    ],
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
    },
  } satisfies BenefitsSectionProps,

  problem: {
    headline:
      '🤔 You Built a Real Business.\nSo Why Are You Still the One Holding It Together?',
    paragraphs: [
      'You have clients. You have a team. Revenue is real. But somewhere past $1M, you became the operating system.',
      'The businesses that will own your market in 5 years are building AI into their core right now. Not as a feature. As infrastructure. As a moat.',
      'You are the one who remembers which client is getting frustrated. You are the one checking messages to see if deliverables are on track. You are the one who notices when a lead goes cold because nobody followed up. You are the one reviewing content before it goes out, managing the pipeline in your head, and fielding questions from your team all day because they need your context to move forward.',
      'And the worst part? You have tried to fix this. You hired an ops person. Three months of onboarding and they still came to you for every decision. You bought project management tools. Your team used them for two weeks. You set up automations. They handle the easy stuff but break the moment anything falls outside the script.',
      'None of it replaced you. It just added more things to manage.',
      'You are tired of copy-pasting between ChatGPT, Claude, and five other tabs just to get one piece of content out the door. Each tool does one thing. None of them know your business. None of them talk to each other.',
    ],
    emphasizedText: 'You are the system.',
    highlight:
      'Every hour you spend checking on your team is an hour you are not selling. Every lead that sits in your CRM for 48 hours without follow-up is revenue you will never recover. Every client issue you catch late costs 10x more to fix than if you had caught it on day one.',
    conclusion:
      'The businesses that break past this ceiling do not hire their way out. They build a system that watches the business the way the founder does, without the founder needing to be there. That is exactly what we build.',
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
    },
  } satisfies ProblemSectionProps,

  howItWorks: {
    headerLabel: 'The Process',
    header: 'How It Works',
    steps: [
      {
        number: 1,
        title: 'Operations Audit',
        description:
          '60-minute call. We map every tool you use, every task you repeat, and every hour you waste. We pick the 3 highest-ROI workflows to automate.',
      },
      {
        number: 2,
        title: 'Build & Configure',
        description:
          'We build 3 custom AI agents trained on YOUR business. Your tone. Your rules. Your tools. Connected to Slack, email, CRM, calendar, and more.',
      },
      {
        number: 3,
        title: 'Test & Refine',
        description:
          'Every agent is tested against real workflows and edge cases. Permissions locked down. Nothing sends or books without your approval rules.',
      },
      {
        number: 4,
        title: 'Go Live',
        description:
          'You get your Command Center dashboard, a 30-min training video, and 14 days of hands-on support. Your agents start working immediately.',
      },
    ],
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
    },
  } satisfies HowItWorksProps,

  comparison: {
    header: 'Hiring an ops person vs',
    headerHighlight: 'Your AI OS',
    subheader: 'See why business owners are making the switch',
    traditionalLabel: 'Ops Hire',
    modernLabel: 'The Operator Launchpad ✨',
    rows: [
      {
        feature: 'Availability',
        traditional: 'Business hours, sick days, vacations',
        modern: '24/7/365. Never quits, never calls in sick.',
      },
      {
        feature: 'Ramp-Up Time',
        traditional: '2-3 months to learn your business',
        modern: 'Configured and running in days',
      },
      {
        feature: 'Consistency',
        traditional: 'Varies by mood, workload, attention',
        modern: 'Same quality every time, no drift',
      },
      {
        feature: 'Client Monitoring',
        traditional: 'Checks messages when they remember to',
        modern: 'Watches every channel, flags issues instantly',
      },
      {
        feature: 'Content Pipeline',
        traditional: 'Maybe manages it, probably delegates it',
        modern: 'Researches, drafts, and schedules automatically',
      },
      {
        feature: 'Lead Follow-Up',
        traditional: 'Depends on their to-do list',
        modern: 'Every lead tracked, every follow-up on time',
      },
      {
        feature: 'Annual Cost',
        traditional: '$60K–$120K+ (fully loaded)',
        modern: 'Fraction of one hire',
      },
      {
        feature: 'Data Privacy',
        traditional: 'Has access to everything, takes it when they leave',
        modern: 'You control access completely. Data stays private.',
      },
    ],
    bottomNote: {
      title: 'The bottom line',
      content:
        'An ops hire manages tasks. Your AI OS watches the entire business. It does not forget, does not get overwhelmed, and does not quit after 8 months to go work somewhere else.',
    },
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
    },
  } satisfies ComparisonTableProps,

  results: {
    header: 'What business owners are seeing',
    stats: [
      '30+ hours of founder ops time reclaimed per week',
      'Lead follow-up time reduced from days to under 5 minutes',
      'Zero dropped leads or missed client escalations since deployment',
      'Full AI OS operational within 7 days of kickoff',
    ],
  } satisfies ResultsSectionProps,

  testimonials: {
    header: 'What our clients say',
    testimonials: [
      {
        quote:
          "Working with Santi was a total game changer. Before, our leads would load to our CRM overnight, so we'd often respond a day late, hurting our conversions.\n\nNow, thanks to his automations, leads get added into our CRM and get contacted instantly. It's saved us loads of time and really boosted our conversions. Highly recommend them if you want to stay on top of your leads!",
        name: 'Facundo Rosello',
        title: 'Good Nomads',
        avatar: '/assets/images/testimonials/facundo.avif',
      },
      {
        quote:
          "Before Santi, our sales system was disjointed, creating extra steps and slowing us down. Santi came in, understood the gaps, and streamlined everything.\n\nHe automated processes and connected tools like Make, Monday.com, and AI, creating a seamless flow from sales to onboarding and delivery. Now, we're more efficient, and our team can focus on scaling instead of admin work.",
        name: 'Charlie Vicente',
        title: 'Ares Projects',
        avatar: '/assets/images/testimonials/charlie.avif',
      },
      {
        quote:
          "They nailed the complicated nature of our project and communicated every step of the way. The systems they set up for me are exactly what I needed - they work.\n\nFurther, he has gone above and beyond to continue to check in with me and our team to make sure all systems continue to run smoothly. I consider them a valuable part of my team.",
        name: 'Meegan Gregg',
        title: 'Backbody Project',
        avatar: '/assets/images/testimonials/meegan.avif',
      },
      {
        quote:
          "Santi's deep knowledge of AI and automations shone through every step of the way. His ability to simplify complex concepts and his meticulous attention to detail made the whole process seamless and highly productive.\n\nI highly recommend him to anyone looking to excel in this field. A true gem in the world of AI and automations!",
        name: 'George Banda',
        title: 'Skale Media',
        avatar: '/assets/images/testimonials/george.avif',
      },
    ],
  } satisfies TestimonialsSectionProps,

  videoTestimonials: {
    header: 'See the results for yourself',
    videos: [
      {
        video: { provider: 'wistia', videoId: 'mg51fk3kah' },
        title: 'Amazon Agency Cuts VAs 67% & Saves 400+ Hs/Wk',
      },
      {
        video: { provider: 'wistia', videoId: 'nrehjvyz7s' },
        title: 'Sports Agency Grows 4 to 25 Clubs, Cuts 640 Hs/M',
      },
      {
        video: { provider: 'wistia', videoId: 'ge2tc7bxu9' },
        title: '$630K in Captured Global Food Trading Opportunities',
      },
    ],
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
    },
  } satisfies VideoTestimonialsProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently asked questions',
    items: [
      {
        question: 'What is OpenClaw?',
        answer:
          'OpenClaw is an open-source AI assistant that runs locally on your infrastructure. It connects to your messaging apps, email, calendar, CRM, and other tools. The software is free (MIT license). You only pay for API usage and hosting, which typically runs $8–$50/month depending on usage.',
      },
      {
        question: 'What kind of tasks can AI agents handle?',
        answer:
          'Email triage and drafting, client follow-ups, report generation, CRM updates, meeting scheduling, lead qualification, invoice reminders, onboarding sequences, and more. If it is repetitive and rule-based, an agent can handle it. We pick the 3 highest-ROI workflows during your audit.',
      },
      {
        question: 'How much time do I need to invest?',
        answer:
          'One 60-minute discovery call and one 30-minute walkthrough at handoff. That is it. Everything else happens on our side. Total commitment: under 2 hours across the full 14 days.',
      },
      {
        question: 'Will agents send things without my approval?',
        answer:
          'Not unless you want them to. Every agent has configurable approval rules. You decide the level of autonomy for each workflow.',
      },
      {
        question: 'What tools do you integrate with?',
        answer:
          'Gmail, Outlook, Slack, HubSpot, Salesforce, ClickUp, Asana, Calendly, Google Calendar, Notion, Stripe, and more. If it has an API, we can likely connect it. Your Launchpad includes 5 integrations.',
      },
      {
        question: 'What if it does not work?',
        answer:
          'You are covered by our Iterate-Until-It-Works Guarantee. Not live in 14 days? Full refund on your second payment. Agent not performing in 30 days? We rebuild it free. You keep everything we built regardless.',
      },
      {
        question: 'Do I own the agents you build?',
        answer:
          '100%. Everything we build is yours. OpenClaw is open-source. If you ever want to part ways, you keep the entire system.',
      },
      {
        question: 'What is the investment?',
        answer:
          'We put together custom packages based on your business size, complexity, and workflows. Apply and we will walk you through the options on the call.',
      },
    ],
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
    },
  } satisfies FAQProps,

  cta: {
    header: 'What to Expect on Your 25-Minute Strategy Call',
    steps: [
      'We audit your current operations and show you exactly where time, leads, and client trust are leaking',
      'We walk you through a live demo of the AI agent system using our own business as the example',
      'We map out what your specific deployment would look like — which agents, which integrations, what timeline',
      'No pressure. If it is not the right fit, we will tell you. We only take on 3 new clients per month.',
    ],
    cta: {
      text: 'Book Your Free Strategy Call →',
      href: 'https://pulpsense.fillout.com/t/xsMCsFPnw6us',
    },
    urgency: '3 spots available this month',
  } satisfies CTASectionProps,

  footer: {
    disclaimerHeader: 'Earnings Disclaimer',
    paragraphs: [
      'The results stated on this page and discussed in our materials are specific client results. Please understand these results are not typical. We are not implying you will duplicate them. The average person who buys information or services gets little to no results. We use these references for example purposes only. Your results will vary based on your effort, business model, market conditions, and many other factors.',
      'The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.',
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

export default function OpenClawAgentPage() {
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
        <VideoTestimonials {...content.videoTestimonials} />
      </PageLayout>
    </>
  );
}

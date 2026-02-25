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
    'AI Employee for $1M+ Businesses | Runs Your Backend Operations 24/7',
  description:
    'We build you an AI employee that actually runs your business backend. Not a chatbot. A real AI agent deployed on your hardware — managing content, monitoring clients, tracking leads, and reporting to you daily.',
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
      text: 'Coaches, Consultants & Agency Owners Doing $1M+/Year',
      variant: 'orange',
    },
    headline: 'We Build You an AI Employee That',
    highlightedText: 'Actually Runs Your Business\'s Backend.',
    subheadline:
      'Not a chatbot. Not another SaaS tool. A real AI agent deployed on your hardware — managing content, monitoring clients, tracking leads, and reporting to you daily. Setup in days, not months.',
    video: {
      provider: 'wistia',
      videoId: 'sm1gejc6p5', // TODO: Replace with OpenClaw-specific video
    },
    cta: {
      text: 'Book a Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
      disclaimer: '3 spots available this month',
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

  socialProof: {
    title: 'Built With Enterprise-Grade Tools',
    logos: [
      { src: '/ai-setter/images/tools/N8n-logo-new.svg.png', alt: 'n8n' },
    ],
  } satisfies SocialProofLogosProps,

  benefits: {
    headline:
      'How We Eliminated 30+ Hours of Weekly Ops Work From Our Own Business — and Now We Build It For Yours',
    benefits: [
      'Your content pipeline runs on autopilot — research, drafts, and scheduling handled before you wake up',
      'Every lead gets tracked, followed up on, and flagged automatically. No more deals dying in your CRM',
      'Your team communication channels get monitored 24/7 — issues flagged before they escalate, daily digests delivered to you',
      'You and your team get trained to use and extend the system yourselves. No black box. No dependency.',
      'Runs locally on your hardware. Your data never leaves your building. You own it completely.',
    ],
    cta: {
      text: 'Book a Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
    },
  } satisfies BenefitsSectionProps,

  problem: {
    headline:
      '🤔 You Built a Real Business. So Why Are You Still the One Holding It Together?',
    paragraphs: [
      'You have clients. You have a team. Revenue is real. But somewhere past $1M, you became the operating system.',
      'You are the one who remembers which client is getting frustrated. You are the one checking messages to see if deliverables are on track. You are the one who notices when a lead goes cold because nobody followed up. You are the one reviewing content before it goes out, managing the pipeline in your head, and fielding questions from your team all day because they need your context to move forward.',
      'And the worst part? You have tried to fix this. You hired an ops person — they needed three months of onboarding and still came to you for every decision. You bought project management tools — your team used them for two weeks. You set up automations — they handle the easy stuff but break the moment something falls outside the playbook.',
      'None of it replaced you. It just added more things to manage.',
    ],
    emphasizedText: 'You are the system.',
    highlight:
      'Every hour you spend checking on your team is an hour you are not selling. Every lead that sits in your CRM for 48 hours without follow-up is revenue you will never recover. Every client issue you catch late costs 10x more to fix than if you had caught it on day one.',
    conclusion:
      'The businesses that break past this ceiling are not the ones that hire more people. They are the ones that build a system that watches the business the way the founder does — but without the founder having to be there. That is exactly what we build.',
    cta: {
      text: 'Book a Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
    },
  } satisfies ProblemSectionProps,

  howItWorks: {
    headerLabel: 'The Process',
    header: 'How It Works',
    steps: [
      {
        number: 1,
        title: 'We Audit Your Operations and Identify the Bottlenecks',
        description:
          'We look at how your business actually runs day to day — where your time goes, what falls through the cracks, which tasks eat hours but add no value. No generic assessment. We map your specific workflows across content, sales, client management, and team coordination to find where an AI agent will have the biggest impact.',
      },
      {
        number: 2,
        title: 'We Build and Deploy Your AI Agent on Your Hardware',
        description:
          'We configure a local AI agent tailored to your business — your CRM, your communication channels, your content pipeline, your processes. It runs on your machine, not in the cloud. Your data never leaves your building. The agent is trained on how your business works, not a generic template.',
      },
      {
        number: 3,
        title: 'We Train You to Use It, Extend It, and Make It Yours',
        description:
          'This is not a black box you depend on us to operate. We run 2-3 hands-on training sessions with you and your team so you understand what the agent does, how to talk to it, and how to build new workflows on top of it. Six months from now, you are not paying someone to maintain something you do not understand. You own the system and the knowledge.',
      },
    ],
    cta: {
      text: 'Book a Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
    },
  } satisfies HowItWorksProps,

  comparison: {
    header: 'Hiring an Ops Person vs',
    headerHighlight: 'Your AI Employee',
    subheader: 'See why business owners are making the switch',
    traditionalLabel: 'Ops Hire',
    modernLabel: 'Your AI Employee ✨',
    rows: [
      {
        feature: 'Availability',
        traditional: 'Business hours, sick days, vacations',
        modern: '24/7/365 — never quits, never calls in sick',
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
        modern: 'Runs locally, data never leaves your hardware',
      },
    ],
    bottomNote: {
      title: 'The Bottom Line',
      content:
        'An ops hire manages tasks. Your AI employee watches the entire business. It does not forget, it does not get overwhelmed, and it does not quit after 8 months to go work somewhere else.',
    },
    cta: {
      text: 'Book a Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
    },
  } satisfies ComparisonTableProps,

  results: {
    header: 'What Business Owners Are Seeing',
    stats: [
      '30+ hours of founder ops time reclaimed per week',
      'Lead follow-up time reduced from days to under 5 minutes',
      'Zero dropped leads or missed client escalations since deployment',
      'Full agent operational within 7 days of kickoff',
    ],
  } satisfies ResultsSectionProps,

  testimonials: {
    header: 'What Our Clients Say',
    testimonials: [
      {
        quote:
          "Working with Santi was a total game changer. Before, our leads would load to our CRM overnight, so we'd often respond a day late, hurting our conversions.\n\nNow, thanks to his automations, leads get added into our CRM instantly, a sales rep gets assigned to it and instantly gets contacted. It's saved us loads of time and really boosted our conversions. Highly recommend them if you want to stay on top of your leads!",
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
    header: 'See the Results for Yourself',
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
      text: 'Book a Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
    },
  } satisfies VideoTestimonialsProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently Asked Questions',
    items: [
      {
        question: 'How is this different from ChatGPT or other AI tools?',
        answer:
          'ChatGPT is a tool you open when you remember to use it. This is an agent that runs in the background 24/7 without you touching it. It monitors your channels, tracks your leads, drafts your content, and sends you briefings. You do not prompt it. It works on its own, based on how your business actually operates.',
      },
      {
        question: 'Is my client data safe?',
        answer:
          'Yes. The agent runs locally on your hardware — not in the cloud. Your client data, lead information, messages, and internal files never leave your machine. Nothing is sent to external servers for storage or training. You control it completely.',
      },
      {
        question: 'What if something breaks or needs updating?',
        answer:
          'That is what the maintenance retainer covers. We monitor, update, and improve your agent on an ongoing basis. If something needs adjusting as your business changes — new CRM, new processes, new team members — we handle it. You use it, we maintain it.',
      },
      {
        question: 'We already tried automation and it did not stick.',
        answer:
          'Most automation fails because it is rule-based and fragile. It only does exactly what you programmed it to do, and the moment something falls outside the playbook, it breaks or does nothing. An AI agent is different — it understands context, adapts to new situations, and handles the stuff that rigid automations cannot. Plus, we train you to extend it yourself so it evolves with your business.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'Most businesses are fully operational within 7 days. We start with an ops audit, build and configure the agent, then run training sessions with you and your team. You do not need to be technical — we handle the setup end to end.',
      },
      {
        question: 'Why would I not just hire an ops person instead?',
        answer:
          'You can. A good ops person costs $60K to $120K a year, needs months to ramp up, works business hours, and eventually leaves. Your AI employee costs a fraction of that, works 24/7, never forgets, and does not quit. Most of our clients use it alongside their team — it handles the monitoring and repetitive work so their people can focus on higher-value tasks.',
      },
      {
        question: 'Do I need to be technical to use this?',
        answer:
          'No. The agent is designed to be used by business owners, not developers. You interact with it through Slack or a simple chat interface. We train you on everything during setup. If you can send a message, you can use the agent.',
      },
      {
        question: 'What is the investment?',
        answer:
          'We offer custom packages based on your business size, complexity, and which capabilities you need. Book a strategy call and we will walk you through options that make sense for your business.',
      },
    ],
    cta: {
      text: 'Book Your Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
    },
  } satisfies FAQProps,

  cta: {
    header: 'What to Expect on Your 30-Minute Strategy Call',
    steps: [
      'We audit your current operations and show you exactly where time, leads, and client trust are leaking',
      'We walk you through a live demo of the AI agent using our own business as the example',
      'We map out what your specific deployment would look like — which capabilities, which integrations, what timeline',
      'No pressure. If it is not the right fit, we will tell you. We only take on 3 new clients per month.',
    ],
    cta: {
      text: 'Book Your Strategy Call →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
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
      <SocialProofLogos {...content.socialProof} />
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

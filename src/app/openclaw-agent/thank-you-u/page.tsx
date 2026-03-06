import type { Metadata } from 'next';

import {
  DisclaimerFooter,
  FAQ,
  ThankYouContent,
  ThankYouHero,
} from '@/components/sections';
import type {
  DisclaimerFooterProps,
  FAQProps,
  ThankYouContentProps,
  ThankYouHeroProps,
} from '@/components/sections';
import { PageLayout } from '@/components/ui';

export const metadata: Metadata = {
  title: "You're In. Here's What Happens Next. | AI Employee",
  description:
    "We've received your application and it looks like a strong fit. Here's what to expect before your strategy call.",
};

const content = {
  hero: {
    title: "You're In. Here's What Happens Next.",
    subtitle: 'Watch this quick case study while you wait',
    requiredLabel: 'Required',
    videoPlaceholder: {
      provider: 'wistia',
      videoId: 'mg51fk3kah',
    },
  } satisfies ThankYouHeroProps,

  content: {
    steps: [
      {
        number: 1,
        heading: 'Check Your Email',
        description:
          "You'll receive a calendar link within 24 hours to book your 30-minute strategy call.",
        highlightedText: 'Check your spam folder if you don\'t see it.',
      },
      {
        number: 2,
        heading: 'We Review Your Application',
        description:
          "Before the call, we'll review your application so we come prepared with specific recommendations for your business.",
      },
      {
        number: 3,
        heading: 'Your Strategy Call',
        description:
          "On the call, we'll walk you through a live demo of the agent running our own business — and map out what yours would look like.",
      },
    ],
    bottomVideos: [
      {
        title: 'Amazon Agency Cuts VAs 67% & Saves 400+ Hs/Wk',
        provider: 'wistia',
        videoId: 'mg51fk3kah',
      },
      {
        title: 'Sports Agency Grows 4 to 25 Clubs, Cuts 640 Hs/M',
        provider: 'wistia',
        videoId: 'nrehjvyz7s',
      },
      {
        title: '$630K in Captured Global Food Trading Opportunities',
        provider: 'wistia',
        videoId: 'ge2tc7bxu9',
      },
    ],
  } satisfies ThankYouContentProps,

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
  } satisfies FAQProps,

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

export default function ThankYouUnqualifiedPage() {
  return (
    <PageLayout
      hero={<ThankYouHero {...content.hero} />}
      footer={
        <>
          <FAQ {...content.faq} />
          <DisclaimerFooter {...content.footer} />
        </>
      }
    >
      <ThankYouContent {...content.content} />
    </PageLayout>
  );
}

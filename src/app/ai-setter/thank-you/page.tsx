import type { Metadata } from 'next';

import {
  DisclaimerFooter,
  ThankYouContent,
  ThankYouHero,
} from '@/components/sections';
import type {
  DisclaimerFooterProps,
  ThankYouContentProps,
  ThankYouHeroProps,
} from '@/components/sections';
import { PageLayout } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Your Call is Booked! | AI Search Optimization',
  description:
    "You're all set. Here's what to expect before your AI visibility audit call.",
};

const content = {
  hero: {
    title: '🎉 Congratulations: One last step 🚨',
    subtitle: 'Watch this important video',
    requiredLabel: 'Required',
    alertMessage:
      'Watch the video below before your call to make the most of our time together.',
    videoPlaceholder: {
      provider: 'wistia',
      videoId: 'tam0inpvqg', // Replace with pre-call video
    },
  } satisfies ThankYouHeroProps,

  content: {
    steps: [
      {
        number: 1,
        heading: 'Check Your Email',
        description:
          "You'll receive a calendar invite and confirmation email within the next few minutes. Add the call to your calendar so you don't miss it.",
        highlightedText: 'Check your spam folder if you don\'t see it.',
      },
      {
        number: 2,
        heading: 'Prepare Your Questions',
        description:
          "Think about your current marketing challenges and what you'd like to achieve with AI visibility. The more specific your questions, the more valuable our call will be.",
      },
      {
        number: 3,
        heading: 'Show Up Ready',
        description:
          "On the call, we'll audit your current AI visibility, show you what ChatGPT says about you and your competitors, and outline a custom strategy. Come prepared to take notes!",
        cta: {
          text: 'Add to Calendar',
          subtext: 'Google Calendar, iCal, or Outlook',
          href: '#',
        },
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

export default function ThankYouPage() {
  return (
    <PageLayout
      hero={<ThankYouHero {...content.hero} />}
      footer={<DisclaimerFooter {...content.footer} />}
    >
      <ThankYouContent {...content.content} />
    </PageLayout>
  );
}

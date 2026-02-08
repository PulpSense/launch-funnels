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
    title: "You're All Set!",
    subtitle: 'Your strategy call has been scheduled.',
    requiredLabel: 'REQUIRED',
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
        title: 'What to Expect on the Call',
        provider: 'wistia',
        videoId: 'placeholder1',
      },
      {
        title: 'Client Success: 3x Appointments',
        provider: 'wistia',
        videoId: 'placeholder2',
      },
    ],
  } satisfies ThankYouContentProps,

  footer: {
    disclaimerHeader: 'Disclaimer',
    paragraphs: [
      'Results shown are from real clients but represent exceptional outcomes. Individual results will vary.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} AI Search Optimization. All rights reserved.`,
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

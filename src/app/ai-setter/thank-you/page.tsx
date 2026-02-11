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
import { PageLayout, TrackingPixels } from '@/components/ui';
import type { PixelConfig } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Your Call is Booked! | AI Appointment Setter',
  description:
    "You're all set. Here's what to expect before your AI setter strategy call.",
};

const content = {
  pixels: {
    facebookPixelId: '', // Add your Facebook Pixel ID here
    facebookEvents: [{ name: 'Schedule', type: 'custom' }],
  } satisfies PixelConfig,

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
          "You'll receive a calendar invite and confirmation email within the next few minutes. Add the call to your calendar so you don't miss it. ",
        highlightedText: 'Check your spam folder if you don\'t see it.',
      },
      {
        number: 2,
        heading: 'Prepare Your Questions',
        description:
          "Think about your current setter setup, lead response times, and where follow-up is breaking down. The more specific your questions, the more valuable our call will be.",
      },
      {
        number: 3,
        heading: 'Show Up Ready',
        description:
          "On the call, we'll audit your current pipeline, identify where leads are going cold, and map out how an AI setter would work for your specific sales process. Come prepared to take notes!",
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

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently Asked Questions',
    items: [
      {
        question: 'How is this different from a chatbot?',
        answer:
          'Most chatbots follow rigid scripts and feel robotic. Your AI setter is trained on your actual best-performing conversations, your qualification criteria, and your objection handling. It reads context, adapts responses, and sounds like your best rep on their best day. It is not a chatbot. It is a trained setter that happens to be powered by AI.',
      },
      {
        question:
          'We already have a CRM and some automations. Why would we need this?',
        answer:
          'Having tools is not the same as having a system. If your follow-up still depends on human memory, your qualification is inconsistent, and leads are going cold because someone forgot to send the second message, you do not have a system. You have software. We turn your existing stack into an enforced, reliable engine where every lead gets handled the same way, every time.',
      },
      {
        question: 'This sounds expensive. I can hire a setter for less.',
        answer:
          'You can. But you are comparing the wrong things. A setter costs $3K to $8K per month, works limited hours, needs training, management, and will eventually leave. Your AI setter works 24/7, never calls in sick, never forgets a follow-up, handles unlimited conversations simultaneously, and costs a fraction of a single hire. When you factor in missed leads, slow response times, and management overhead, the AI is not an expense. It is a margin multiplier.',
      },
      {
        question: 'We have tried automation before and it broke.',
        answer:
          'Most automation fails because it was built to demo, not built to scale. Fragile zaps, no documentation, no error handling. We build enterprise-grade systems using Make.com and n8n with partner-level expertise. Everything is documented, monitored, and designed to hold under volume. That is why clients trust us with their pipeline.',
      },
      {
        question: 'Will this feel spammy or hurt our brand?',
        answer:
          'The opposite. Because the AI is trained on your voice and your process, conversations feel natural and on-brand. And because it responds instantly and follows up consistently, your prospects actually get a better experience than they do with most human setters. No generic templates. No over-messaging. Just smart, timely conversations that move qualified people to your calendar.',
      },
      {
        question:
          'My sales process is unique. Can this really handle our complexity?',
        answer:
          'That is exactly why we do not sell a generic product. We build your AI setter around your offer, your qualification logic, your objection handling, and your scheduling rules. If your best setter can do it, we can train the AI to do it. And it will do it the same way, every time, without drift.',
      },
      {
        question: 'How long does it take to see results?',
        answer:
          'We start implementation within 24 hours of plan approval. Most clients have their AI setter live and booking calls within the first week. Meaningful impact on pipeline velocity, response time, and booked call volume is typically visible within 30 days.',
      },
      {
        question: "What's the investment?",
        answer:
          'We offer custom packages based on your volume, channels, and complexity. Book a call and we will walk you through options that make sense for your business. No long-term contracts. No lock-in.',
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

export default function ThankYouPage() {
  return (
    <>
      <TrackingPixels pixels={content.pixels} />
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
    </>
  );
}

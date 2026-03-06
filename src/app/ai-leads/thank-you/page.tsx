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
import { ContentCard, PageLayout } from '@/components/ui';

const content = {
  hero: {
    title: "You're In! Check Your Email.",
    subtitle: 'Your access details are on the way.',
  } satisfies ThankYouHeroProps,

  content: {
    steps: [
      {
        number: 1,
        heading: 'Check Your Email',
        description:
          'Look for your access credentials in your inbox (and spam folder, just in case).',
      },
      {
        number: 2,
        heading: 'Join Our Private Community',
        cta: {
          text: 'Join Community',
          subtext: 'Connect with other members implementing AI automations',
          href: '#',
        },
      },
      {
        number: 3,
        heading: 'Book Your 1:1 Implementation Call',
        cta: {
          text: 'Book Your Call',
          subtext: 'Schedule your implementation call with our team',
          href: '#',
        },
      },
    ],
  } satisfies ThankYouContentProps,

  footer: {
    disclaimerHeader: 'Earnings Disclaimer',
    paragraphs: [
      'The earnings and income representations made by our company and its advertisers/sponsors are aspirational statements only of your earning potential. These results are not typical and results will vary.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact', href: '#' },
    ],
    copyrightText: '\u00A9 2025 PulpSense. All rights reserved.',
  } satisfies DisclaimerFooterProps,
};

export default function AILeadsThankYouPage() {
  return (
    <PageLayout
      hero={<ThankYouHero {...content.hero} />}
      footer={<DisclaimerFooter {...content.footer} />}
    >
      <ContentCard>
        <ThankYouContent {...content.content} />
      </ContentCard>
    </PageLayout>
  );
}

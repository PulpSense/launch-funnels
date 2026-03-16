import type { Metadata } from 'next';

import {
  DisclaimerFooter,
  UnqualifiedContent,
  UnqualifiedHero,
} from '@/components/sections';
import type {
  DisclaimerFooterProps,
  UnqualifiedContentProps,
  UnqualifiedHeroProps,
} from '@/components/sections';
import { PageLayout } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Thanks for Your Interest | AI Employee',
  description:
    'We appreciate your interest. This program may not be the right fit for your business right now.',
};

const content = {
  hero: {
    trustBadge: {
      text: 'Trusted by 50+ Founders',
      stars: 5,
    },
    banner: {
      text: "We've received your application",
      variant: 'orange',
    },
    title: 'Thanks for Your Interest',
    subtitle:
      'Based on your responses, this program may not be the right fit for your business right now. We typically work with coaches, consultants, and agency owners doing $1M+/year who have an established team and are looking to scale operations without adding headcount.',
    cta: {
      text: 'Follow Us for Free AI Content →',
      href: 'https://pulpsense.fillout.com/openclaw-agent',
    },
  } satisfies UnqualifiedHeroProps,

  content: {
    followUpMessage:
      'If your situation changes, feel free to reapply anytime. In the meantime, follow us for free content on AI and automation for businesses.',
    requirements: [
      'Build consistent revenue past $1M/year with a proven offer',
      'Have an established team handling day-to-day operations',
      'Identify repetitive ops tasks that consume founder time',
      'Document your core workflows and communication channels',
      'Ensure stable internet and a dedicated machine for agent deployment',
    ],
    reapplyText:
      'Once your business meets these criteria, we would love to hear from you again.',
    reapplyHref: '/openclaw-agent',
  } satisfies UnqualifiedContentProps,

  footer: {
    disclaimerHeader: 'Disclaimer',
    paragraphs: [
      'The recommendations above are general guidelines. Individual results will vary based on your specific situation and execution.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} PulpSense. All Rights Reserved.`,
  } satisfies DisclaimerFooterProps,
};

export default function UnqualifiedPage() {
  return (
    <PageLayout
      hero={<UnqualifiedHero {...content.hero} />}
      footer={<DisclaimerFooter {...content.footer} />}
    >
      <UnqualifiedContent {...content.content} />
    </PageLayout>
  );
}

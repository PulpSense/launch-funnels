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
  title: 'Thanks for Your Interest | Creative Multiplier Sprint',
  description:
    'We appreciate your interest. The Creative Multiplier Sprint may not be the right fit for your brand right now.',
};

const content = {
  hero: {
    trustBadge: {
      text: 'Built by PulpSense',
      stars: 5,
    },
    banner: {
      text: "We've received your application",
      variant: 'orange',
    },
    title: 'Thanks for Your Interest',
    subtitle:
      'Based on your responses, the Creative Multiplier Sprint may not be the right fit right now. This works best when you already have a proven paid-social ad and want fast avatar variations of that winning concept.',
    cta: {
      text: 'Back to the Sprint Page →',
      href: '/creative-multiplier-sprint',
    },
  } satisfies UnqualifiedHeroProps,

  content: {
    followUpMessage:
      'If your situation changes, come back with a winning ad and we can review whether it makes sense to multiply it.',
    requirements: [
      'You run paid social for an ecommerce or DTC brand',
      'You already have at least one ad that has proven traction',
      'You want variations of a winning concept, not full strategy from scratch',
      'You are comfortable testing AI avatar-led creative',
      'You can provide brand/product context and any compliance guardrails',
    ],
    reapplyText:
      'Once you have a proven ad ready to multiply, we would love to take another look.',
    reapplyHref: '/creative-multiplier-sprint',
  } satisfies UnqualifiedContentProps,

  footer: {
    disclaimerHeader: 'Disclaimer',
    paragraphs: [
      'These qualification criteria are general guidelines. Final fit depends on your ad, product, brand requirements, and whether AI avatar creative makes sense for your use case.',
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

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
  title: 'Thanks for Your Interest | AI Search Optimization',
  description:
    "We appreciate your interest. Here's how you can still benefit from AI visibility strategies.",
};

const content = {
  hero: {
    trustBadge: {
      text: 'Trusted by 500+ Businesses',
      stars: 5,
    },
    banner: {
      text: "We've received your application",
      variant: 'orange',
    },
    title: "Thanks for Your Interest!",
    subtitle:
      "Based on your responses, our AI Search Optimization service might not be the best fit right now. But don't worry - we have resources that can help.",
    cta: {
      text: 'Get Our Free AI Visibility Guide →',
      href: '#',
    },
  } satisfies UnqualifiedHeroProps,

  content: {
    followUpMessage:
      "While our done-for-you service works best for established businesses with proven offers, you can still improve your AI visibility on your own. Here's what we recommend:",
    requirements: [
      'Ensure your business has consistent NAP (Name, Address, Phone) across all platforms',
      'Create detailed FAQ content that AI assistants can easily parse',
      'Build authoritative backlinks from industry publications',
      'Maintain active profiles on review platforms like Yelp and Google Business',
      'Publish case studies and testimonials that demonstrate expertise',
    ],
    reapplyText:
      "Once you've built a stronger foundation, we'd love to hear from you again. Most businesses become eligible after 3-6 months of following these strategies.",
    reapplyHref: '/ai-seo-funnel',
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
    copyrightText: `© ${new Date().getFullYear()} AI Search Optimization. All rights reserved.`,
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

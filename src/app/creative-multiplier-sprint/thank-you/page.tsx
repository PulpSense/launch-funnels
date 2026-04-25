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
  title: "Application Received | Creative Multiplier Sprint",
  description:
    "We've received your Creative Multiplier Sprint application. Here's what happens before your fit call.",
};

const content = {
  pixels: {
    facebookPixelId: '828948073514575',
    facebookEvents: [{ name: 'Schedule', type: 'standard' }],
  } satisfies PixelConfig,

  hero: {
    title: "You're In. Here's What Happens Next.",
    subtitle: 'We will review your ad before the Creative Multiplier Sprint call',
    requiredLabel: 'Next step',
    videoPlaceholder: {
      provider: undefined,
      title: 'AI avatar proof montage coming soon',
      subtitle: 'Add the best proof video here once the first examples are ready.',
    },
  } satisfies ThankYouHeroProps,

  content: {
    steps: [
      {
        number: 1,
        heading: 'Check Your Email',
        description:
          "You will receive the call confirmation and any pre-call instructions. If you do not see it, check spam or promotions.",
        highlightedText: 'Bring the winning ad you want multiplied.',
      },
      {
        number: 2,
        heading: 'We Review Fit Before Taking Payment',
        description:
          'This is not self-checkout. We look at your ad, product, brand constraints, and whether AI avatars make sense before sending an invoice.',
      },
      {
        number: 3,
        heading: 'If It Is a Fit, We Start the Sprint',
        description:
          'After the call and payment, you send the final assets and context. We produce 10 AI avatar variations within 2 business days after everything is received.',
      },
    ],
    bottomVideos: [
      {
        title: 'Proof Slot 1: Original Ad → AI Avatar Variants',
        provider: undefined,
      },
      {
        title: 'Proof Slot 2: Different Persona, Same Core Script',
        provider: undefined,
      },
      {
        title: 'Proof Slot 3: Platform-Ready Vertical Outputs',
        provider: undefined,
      },
    ],
  } satisfies ThankYouContentProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Before Your Call',
    items: [
      {
        question: 'Do I pay before the call?',
        answer:
          'No. This is call-close. We review fit first, then send an invoice if your ad and brand are a good match for the sprint.',
      },
      {
        question: 'What should I prepare?',
        answer:
          'Bring the winning ad you want multiplied, your product page, any brand/compliance rules, and a few examples of creator or avatar styles you like.',
      },
      {
        question: 'What if my ad is not a fit?',
        answer:
          'We will tell you. The sprint only makes sense when there is already a proven creative concept worth multiplying.',
      },
    ],
  } satisfies FAQProps,

  footer: {
    disclaimerHeader: 'Performance Disclaimer',
    paragraphs: [
      'The Creative Multiplier Sprint guarantees usable creative output after one revision pass, not paid-media performance. We do not guarantee ROAS, CPA, revenue, or platform approval.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} PulpSense. All Rights Reserved.`,
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

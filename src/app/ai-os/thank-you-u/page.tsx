import type { Metadata } from 'next';

import { ThankYouPage as AIOsThankYouPage } from '../_components/ThankYouPage';
import { thankYouUnqualifiedContent } from '../content';

export const metadata: Metadata = {
  title: 'Thanks for your interest | AI OS',
  description: 'Here is what to expect before your strategy call.',
};

export default function ThankYouUnqualifiedPage() {
  return (
    <AIOsThankYouPage
      content={thankYouUnqualifiedContent}
      largeCheckIcon
    />
  );
}

import type { Metadata } from 'next';

import { ThankYouPage as AIOsThankYouPage } from '../_components/ThankYouPage';
import { thankYouContent } from '../content';

export const metadata: Metadata = {
  title: 'You are in | AI OS',
  description: 'Here is what to expect before your strategy call.',
};

export default function ThankYouPage() {
  return <AIOsThankYouPage content={thankYouContent} showScheduleEvent />;
}

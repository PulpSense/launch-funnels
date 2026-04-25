import type { Metadata } from 'next';

import { CreativeMultiplierPage } from './_components/CreativeMultiplierPage';

export const metadata: Metadata = {
  title: 'Creative Multiplier Sprint | 10 AI Avatar Variations in 2 Days',
  description:
    'Turn one proven paid-social ad into 10 AI avatar variations in 2 business days. Built for ecommerce brands with winning creatives.',
  openGraph: {
    title: 'Creative Multiplier Sprint | PulpSense',
    description:
      'Same winning ad. 10 new AI avatars. Delivered ready to test in 2 business days.',
    siteName: 'PulpSense',
    locale: 'en',
    type: 'website',
  },
};

export default function CreativeMultiplierSprintPage() {
  return <CreativeMultiplierPage />;
}

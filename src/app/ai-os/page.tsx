import type { Metadata } from 'next';
import AIOsClient from './AIOsClient';

export const metadata: Metadata = {
  title: 'AI Agent Systems for Agency Owners & Operators | PulpSense',
  description:
    'We build 3 custom AI agents that handle your email, reporting, and follow-ups 24/7. One dashboard. Set up in 14 days. For agency owners and operators doing $50K+/month.',
  openGraph: {
    title: 'AI Agent Systems for Agency Owners & Operators | PulpSense',
    description:
      'We build 3 custom AI agents that handle your email, reporting, and follow-ups 24/7. One dashboard. Set up in 14 days.',
    siteName: 'PulpSense',
    locale: 'en',
    type: 'website',
  },
};

export default function AIOsPage() {
  return <AIOsClient />;
}

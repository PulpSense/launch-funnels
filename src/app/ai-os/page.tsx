import type { Metadata } from 'next';
import AIOsClient from './AIOsClient';

export const metadata: Metadata = {
  title: 'AI OS for Business | Custom AI Agent Systems Built for Operators',
  description:
    'A custom AI agent system built for your business, running your ops around the clock. Email, reporting, follow-ups handled. Live in 14 days.',
  openGraph: {
    title: 'AI OS for Business | Custom AI Agent Systems Built for Operators',
    description:
      'Custom AI agents that handle your email, reporting, and follow-ups 24/7. One dashboard. Set up in 14 days.',
    siteName: 'PulpSense',
    locale: 'en',
    type: 'website',
  },
};

export default function AIOsPage() {
  return <AIOsClient />;
}

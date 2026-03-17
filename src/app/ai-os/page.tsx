import type { Metadata } from 'next';
import AIOsClient from './AIOsClient';

export const metadata: Metadata = {
  title: 'AI OS by PulpSense | Custom AI Agent Systems for Agency Owners',
  description:
    'AI OS by PulpSense builds you a custom AI agent system that runs your ops around the clock. Email, reporting, follow-ups handled. Live in 14 days.',
  openGraph: {
    title: 'AI OS by PulpSense | Custom AI Agent Systems for Agency Owners',
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

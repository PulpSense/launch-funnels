import './globals.css';

import type { Metadata } from 'next';

import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    siteName: AppConfig.site_name,
    locale: AppConfig.locale,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body>{children}</body>
    </html>
  );
}

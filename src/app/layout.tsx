import './globals.css';

import type { Metadata } from 'next';

import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={AppConfig.locale}>
      <body>{children}</body>
    </html>
  );
}

import { notFound } from 'next/navigation';

import { Footer } from '@/templates/Footer';

// TODO: Replace with actual funnel config lookup
const validFunnels = ['demo'];

type ThankYouPageProps = {
  params: Promise<{ funnel: string }>;
};

export default async function ThankYouPage({ params }: ThankYouPageProps) {
  const { funnel } = await params;

  if (!validFunnels.includes(funnel)) {
    notFound();
  }

  // TODO: Load funnel-specific thank you config
  // const config = await getFunnelConfig(funnel);

  return (
    <div className="flex min-h-screen flex-col text-gray-600 antialiased">
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Thank You!</h1>
        <p className="mb-8 max-w-md text-lg">
          Your submission has been received. Check your email for next steps.
        </p>
      </main>
      <Footer />
    </div>
  );
}

import { notFound } from 'next/navigation';

import { Footer } from '@/templates/Footer';
import { DisclaimerFooter } from '@/templates/sell-ai/DisclaimerFooter';

// TODO: Replace with actual funnel config lookup
const validFunnels = ['demo', 'sell-ai-funnel'];

type ThankYouPageProps = {
  params: Promise<{ funnel: string }>;
};

export default async function ThankYouPage({ params }: ThankYouPageProps) {
  const { funnel } = await params;

  if (!validFunnels.includes(funnel)) {
    notFound();
  }

  // Sell-AI funnel thank you page
  if (funnel === 'sell-ai-funnel') {
    return (
      <div className="flex min-h-screen flex-col antialiased">
        <main className="flex flex-1 flex-col items-center justify-center bg-navy-900 px-4 text-center">
          {/* Success checkmark */}
          <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-green-500/20">
            <svg
              className="size-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            You&apos;re In! 🎉
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-300">
            Your application has been received. Our team will review it and
            reach out within 24-48 hours.
          </p>

          {/* Next steps */}
          <div className="max-w-md rounded-lg border border-navy-700 bg-navy-800 p-6 text-left">
            <h2 className="mb-4 font-semibold text-white">
              While You Wait, Here&apos;s What To Do:
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">1.</span>
                <span>Check your email inbox (and spam folder)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">2.</span>
                <span>Save our email to your contacts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">3.</span>
                <span>Be ready to hop on a quick call with our team</span>
              </li>
            </ul>
          </div>
        </main>
        <DisclaimerFooter />
      </div>
    );
  }

  // Default thank you page
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

export async function generateStaticParams() {
  return validFunnels.map((funnel) => ({ funnel }));
}

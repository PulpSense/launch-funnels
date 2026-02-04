import { notFound } from 'next/navigation';

import { Footer } from '@/templates/Footer';
import { DisclaimerFooter } from '@/templates/sell-ai/DisclaimerFooter';

const validFunnels = ['demo', 'sell-ai-funnel'];

type UnqualifiedPageProps = {
  params: Promise<{ funnel: string }>;
};

export default async function UnqualifiedPage({ params }: UnqualifiedPageProps) {
  const { funnel } = await params;

  if (!validFunnels.includes(funnel)) {
    notFound();
  }

  // Sell-AI funnel unqualified page
  if (funnel === 'sell-ai-funnel') {
    return (
      <div className="flex min-h-screen flex-col antialiased">
        <main className="flex flex-1 flex-col items-center justify-center bg-navy-900 px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Thanks For Your Interest
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gray-300">
            Based on your responses, it looks like our program may not be the
            right fit for you at this time. But don&apos;t worry – we have other
            resources that might help!
          </p>

          {/* Alternative resource */}
          <div className="max-w-md rounded-lg border border-navy-700 bg-navy-800 p-6">
            <h2 className="mb-4 font-semibold text-white">
              Free Resource For You:
            </h2>
            <p className="mb-4 text-gray-300">
              Get our free guide on &ldquo;5 AI Tools Every Local Business
              Needs&rdquo; to learn more about the AI opportunity.
            </p>
            <a
              href="#"
              className="inline-block rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Download Free Guide →
            </a>
          </div>

          {/* Reapply option */}
          <p className="mt-8 text-sm text-gray-400">
            Situation changed?{' '}
            <a
              href={`/${funnel}`}
              className="text-orange-400 underline hover:text-orange-300"
            >
              Reapply here
            </a>
          </p>
        </main>
        <DisclaimerFooter />
      </div>
    );
  }

  // Default unqualified page
  return (
    <div className="flex min-h-screen flex-col text-gray-600 antialiased">
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Thanks For Your Interest
        </h1>
        <p className="mb-8 max-w-md text-lg">
          Based on your responses, our program may not be the right fit at this
          time. Check back later or explore our other resources.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return validFunnels.map((funnel) => ({ funnel }));
}

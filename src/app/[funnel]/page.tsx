import { notFound } from 'next/navigation';

import { Banner } from '@/templates/Banner';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { VerticalFeatures } from '@/templates/VerticalFeatures';

// TODO: Replace with actual funnel config lookup
const validFunnels = ['demo'];

type FunnelPageProps = {
  params: Promise<{ funnel: string }>;
};

export default async function FunnelPage({ params }: FunnelPageProps) {
  const { funnel } = await params;

  if (!validFunnels.includes(funnel)) {
    notFound();
  }

  // TODO: Load funnel-specific config here
  // const config = await getFunnelConfig(funnel);

  return (
    <div className="text-gray-600 antialiased">
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return validFunnels.map((funnel) => ({ funnel }));
}

import { notFound } from 'next/navigation';

import { Banner } from '@/templates/Banner';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { VerticalFeatures } from '@/templates/VerticalFeatures';

// Sell-AI funnel templates
import { ApplicationSection } from '@/templates/sell-ai/ApplicationSection';
import { DisclaimerFooter } from '@/templates/sell-ai/DisclaimerFooter';
import { FAQ } from '@/templates/sell-ai/FAQ';
import { FounderStory } from '@/templates/sell-ai/FounderStory';
import { HeroSection } from '@/templates/sell-ai/HeroSection';
import { ProgramOverview } from '@/templates/sell-ai/ProgramOverview';

// TODO: Replace with actual funnel config lookup
const validFunnels = ['demo', 'sell-ai-funnel'];

type FunnelPageProps = {
  params: Promise<{ funnel: string }>;
};

export default async function FunnelPage({ params }: FunnelPageProps) {
  const { funnel } = await params;

  if (!validFunnels.includes(funnel)) {
    notFound();
  }

  // Sell-AI funnel layout
  if (funnel === 'sell-ai-funnel') {
    return (
      <div className="antialiased">
        <HeroSection />
        <FounderStory />
        <ProgramOverview />
        <FAQ />
        <ApplicationSection />
        <DisclaimerFooter />
      </div>
    );
  }

  // Default funnel layout
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

import { Banner } from '@/templates/Banner';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Sponsors } from '@/templates/Sponsors';
import { VerticalFeatures } from '@/templates/VerticalFeatures';

export default function HomePage() {
  return (
    <div className="text-gray-600 antialiased">
      <Hero />
      <Sponsors />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
}

import type { Metadata } from 'next';

import {
  ComparisonTable,
  DisclaimerFooter,
  FAQ,
  HeroSection,
  HowItWorks,
  SocialProofLogos,
  VideoTestimonials,
} from '@/components/sections';
import type {
  ComparisonTableProps,
  DisclaimerFooterProps,
  FAQProps,
  HeroSectionProps,
  HowItWorksProps,
  SocialProofLogosProps,
  VideoTestimonialsProps,
} from '@/components/sections';
import { PageLayout } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Get ChatGPT to Recommend Your Business | AI SEO Optimization',
  description:
    'We get ChatGPT and other AI assistants to recommend your business when people ask for your service. Without spending a dime on ads or making unprofessional Reels.',
};

const content = {
  hero: {
    trustBadge: {
      text: 'Trusted by 500+ Businesses',
      stars: 5,
    },
    banner: {
      text: 'For Business Owners Who Want More Customers From AI Search...',
      variant: 'orange',
    },
    headline: 'We Get',
    highlightedText: 'ChatGPT',
    headlineSuffix:
      'to Recommend Your Business When People Ask for Your Service.',
    subheadline:
      'Without spending a dime on ads, making unprofessional Reels, or chasing the next algorithm change.',
    video: {
      provider: 'wistia',
      videoId: 'tam0inpvqg', // Replace with actual video ID
    },
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
      disclaimer: 'Free 15-minute strategy call. No obligation.',
    },
  } satisfies HeroSectionProps,

  socialProof: {
    title: 'Featured In',
    logos: [
      { src: '/ai-seo-funnel/images/logo-chrome.svg', alt: 'Chrome' },
      { src: '/ai-seo-funnel/images/logo-trustpilot.svg', alt: 'TrustPilot' },
      { src: '/ai-seo-funnel/images/logo-github.svg', alt: 'GitHub' },
      {
        src: '/ai-seo-funnel/images/logo-producthunt.svg',
        alt: 'Product Hunt',
      },
      { src: '/ai-seo-funnel/images/logo-g2.svg', alt: 'G2' },
    ],
  } satisfies SocialProofLogosProps,

  howItWorks: {
    headerLabel: 'The Process',
    header: 'How It Works?',
    steps: [
      {
        number: 1,
        title: 'Step 1. We Audit Your AI Visibility',
        description:
          "First, we analyze how ChatGPT and other AI assistants currently see your business. We identify gaps where competitors are showing up and you're not. This takes just 24 hours.",
      },
      {
        number: 2,
        title: 'Step 2. We Get You Positioned',
        description:
          "Using our proprietary AI SEO framework, we optimize your online presence so AI assistants naturally recommend your business. No technical knowledge needed on your end - we handle everything.",
      },
      {
        number: 3,
        title: 'Step 3. You Get More Customers',
        description:
          'As people ask ChatGPT, Claude, and other AI tools for recommendations, your business starts appearing in their responses. This means qualified leads coming to you on autopilot.',
      },
    ],
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
    },
  } satisfies HowItWorksProps,

  comparison: {
    header: 'Traditional Marketing vs',
    headerHighlight: 'AI Search Optimization',
    subheader:
      'See why forward-thinking businesses are switching to AI-first strategies.',
    traditionalLabel: 'Traditional Marketing',
    modernLabel: 'AI Search Optimization',
    rows: [
      {
        feature: 'Cost per lead',
        traditional: '$50-200+',
        modern: 'Near zero ongoing cost',
      },
      {
        feature: 'Time to results',
        traditional: '3-6 months',
        modern: '2-4 weeks',
      },
      {
        feature: 'Algorithm dependency',
        traditional: 'High (constant changes)',
        modern: 'Low (AI favors authority)',
      },
      {
        feature: 'Content creation needed',
        traditional: 'Constant posting',
        modern: 'Strategic one-time setup',
      },
      {
        feature: 'Lead quality',
        traditional: 'Mixed',
        modern: 'High intent buyers',
      },
      {
        feature: 'Scalability',
        traditional: 'Requires more ad spend',
        modern: 'Grows organically',
      },
    ],
    bottomNote: {
      title: 'The Bottom Line',
      content:
        "While others fight over increasingly expensive ad placements and declining organic reach, AI Search Optimization positions your business where the traffic is flowing next. It's like having prime real estate in tomorrow's marketplace, today.",
    },
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
    },
  } satisfies ComparisonTableProps,

  testimonials: {
    headerLabel: 'Case Studies',
    header: 'Need Proof?',
    subheader: 'See how real businesses are getting recommended by AI assistants.',
    videos: [
      {
        video: { provider: 'wistia', videoId: 'placeholder1' }, // Replace with actual video IDs
        title: 'Local Dentist - 3x More Appointments',
        subtitle: 'Dr. Smith saw results in just 3 weeks',
      },
      {
        video: { provider: 'wistia', videoId: 'placeholder2' },
        title: 'Law Firm - $50k in New Cases',
        subtitle: 'From AI referrals in the first month',
      },
      {
        video: { provider: 'wistia', videoId: 'placeholder3' },
        title: 'Real Estate Agent - 12 New Listings',
        subtitle: 'All from ChatGPT recommendations',
      },
    ],
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
    },
  } satisfies VideoTestimonialsProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently Asked Questions',
    items: [
      {
        question: 'How is this different from regular SEO?',
        answer:
          "Traditional SEO focuses on Google's search algorithm. AI Search Optimization focuses on how AI assistants like ChatGPT, Claude, and Perplexity gather and present information. These are completely different systems with different ranking factors.",
      },
      {
        question: 'How long does it take to see results?',
        answer:
          'Most clients start seeing their business appear in AI responses within 2-4 weeks. Full optimization typically takes 30-60 days depending on your industry and competition level.',
      },
      {
        question: 'Will this work for my type of business?',
        answer:
          "AI Search Optimization works best for service-based businesses where people naturally ask for recommendations - lawyers, doctors, contractors, agencies, consultants, and local service providers. If people ask 'who's the best X in my area?' - it works for you.",
      },
      {
        question: "What if my competitors start doing this too?",
        answer:
          "First-mover advantage is real. The businesses that establish AI authority now will be harder to displace later. Just like early Google SEO adopters still dominate today, early AI optimization adopters will have significant advantages.",
      },
      {
        question: 'Do I need any technical skills?',
        answer:
          'Not at all. We handle everything - the research, optimization, implementation, and monitoring. You just need to show up for a brief onboarding call and approve our strategy.',
      },
      {
        question: 'What does the 15-minute call cover?',
        answer:
          "We'll audit your current AI visibility, show you exactly what ChatGPT says about your business (and your competitors), and outline a custom strategy. No pressure, no obligation - just valuable insights whether you work with us or not.",
      },
    ],
    cta: {
      text: 'Book Your Free Strategy Call →',
      scrollTo: 'apply-section',
    },
  } satisfies FAQProps,

  // CTA section for click-through (replaces embedded form)
  ctaSection: {
    header: 'What to Expect on Our 15 Min Call',
    steps: [
      "We'll audit your current AI visibility and see exactly what ChatGPT says about your business and competitors.",
      "We'll walk you through our proven system, the same one that got 68% of businesses to see results in 30 days.",
      "We'll outline a custom game-plan for your business. If it's a fit, we'll map out exactly how we'll implement it.",
      "No pushy sales tactics, no commitment required. Just a straightforward conversation.",
    ],
    cta: {
      text: 'Book Your Free Call Now →',
      href: 'https://calendly.com/your-link', // Replace with actual booking link
    },
    urgency: 'Limited spots available this week',
  },

  footer: {
    disclaimerHeader: 'Earnings Disclaimer',
    paragraphs: [
      'The results and testimonials shown on this page are from real clients but represent exceptional outcomes. Individual results will vary based on your industry, competition, and other factors. We cannot guarantee specific results.',
      "This service involves optimization for AI-based search and recommendation systems. While we've achieved significant results for our clients, the AI landscape is constantly evolving and past performance doesn't guarantee future results.",
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} AI Search Optimization. All rights reserved.`,
    platformDisclaimer:
      'This site is not affiliated with or endorsed by OpenAI, Google, Anthropic, or any AI company mentioned. ChatGPT is a trademark of OpenAI.',
  } satisfies DisclaimerFooterProps,
};

// Simple CTA Section component (inline since it's unique to this funnel)
const CTASection = () => (
  <section id="apply-section" className="bg-navy-900 py-16">
    <div className="mx-auto max-w-2xl px-4 text-center">
      <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
        {content.ctaSection.header}
      </h2>

      <ul className="mb-8 space-y-4 text-left text-gray-300">
        {content.ctaSection.steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-xl bg-white p-8">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Save your Slot for a Personalized Demo
        </h3>
        <p className="mb-6 text-sm text-gray-600">
          {content.ctaSection.urgency}
        </p>

        <a
          href={content.ctaSection.cta.href}
          className="inline-block w-full rounded-lg px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          style={{
            background: 'linear-gradient(90deg, #FF5B23, #F2BB06)',
          }}
        >
          {content.ctaSection.cta.text}
        </a>
      </div>
    </div>
  </section>
);

export default function AiSeoFunnelPage() {
  return (
    <PageLayout
      hero={<HeroSection {...content.hero} />}
      footer={
        <>
          <FAQ {...content.faq} />
          <CTASection />
          <DisclaimerFooter {...content.footer} />
        </>
      }
    >
      <SocialProofLogos {...content.socialProof} />
      <HowItWorks {...content.howItWorks} />
      <ComparisonTable {...content.comparison} />
      <VideoTestimonials {...content.testimonials} />
    </PageLayout>
  );
}

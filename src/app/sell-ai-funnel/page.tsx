import {
  ApplicationSection,
  DisclaimerFooter,
  FAQ,
  FounderStory,
  HeroSection,
  ProgramOverview,
} from '@/components/sections';
import type {
  ApplicationSectionProps,
  DisclaimerFooterProps,
  FAQProps,
  FounderStoryProps,
  HeroSectionProps,
  ProgramOverviewProps,
} from '@/components/sections';
import { PageLayout } from '@/components/ui';

const content = {
  hero: {
    trustBadge: {
      text: 'Trusted by 200+ Agencies',
      stars: 5,
    },
    banner: {
      text: 'For Anyone Wanting To Start Selling A.I. To Local Businesses...',
      variant: 'orange',
    },
    headline: 'HOW WE SELL OUR AUTOMATED AI TOOLS TO LOCAL BUSINESSES FOR',
    highlightedText: '$500-$3,000/MONTH',
    headlineSuffix: 'WITHOUT COLD CALLING OR HARD SELLING',
    subheadline:
      'Watch this free training to discover the exact system we use to close high-ticket AI deals with local business owners who are desperate for automation solutions.',
    video: {
      altText: 'AI Sales Training Video',
    },
    cta: {
      text: 'YES! I Want To Start Selling AI →',
      scrollTo: 'apply-form',
      disclaimer: 'Limited spots available. Apply now to secure your place.',
    },
  } satisfies HeroSectionProps,

  founderStory: {
    sectionLabel: 'WHO AM I?',
    namePrefix: 'MY NAME IS',
    name: 'SANTIAGO LEONI',
    paragraphs: [
      'Three years ago, I was stuck in a dead-end 9-5 job, barely making ends meet. I knew there had to be a better way to build wealth and create freedom in my life.',
      "Then I discovered the power of selling AI automation to local businesses. These business owners are drowning in manual tasks – answering phones, scheduling appointments, following up with leads – and they're willing to pay a premium for solutions that save them time.",
      'Within 6 months of implementing my system, I went from $0 to $15,000/month in recurring revenue. Today, my agency generates over $50,000/month helping local businesses automate their operations.',
    ],
    featuredImage: {
      alt: 'Santiago Leoni portrait',
      caption: 'Founder & CEO',
    },
    galleryImages: [
      {
        alt: 'Speaking at AI conference',
        caption: 'Speaking at AI Summit 2024',
      },
      {
        alt: 'Team meeting',
        caption: 'Working with our team',
      },
      {
        alt: 'Client success story',
        caption: 'Client meeting in Miami',
      },
    ],
    additionalContent: {
      image: {
        alt: 'AI dashboard screenshot',
        caption: 'Our proprietary AI platform',
      },
      paragraphs: [
        "I've now helped over 200 people start their own AI agencies using the exact same system I developed.",
        "The best part? You don't need any technical skills or prior experience. Our done-for-you AI tools handle all the complexity – you just need to follow the proven sales process.",
      ],
    },
    quote:
      'The best time to start an AI business was yesterday. The second best time is today.',
    cta: {
      text: 'YES! I Want To Start Selling AI →',
      scrollTo: 'apply-form',
    },
  } satisfies FounderStoryProps,

  programOverview: {
    header: 'What You Get Inside The Program',
    paragraphs: [
      'Our comprehensive program gives you all the tools, training, and support you need to start signing clients within your first 30 days.',
      "We've distilled years of trial and error into a proven, step-by-step system that anyone can follow.",
    ],
    highlightBox: {
      title: 'Our Sell AI to Local Businesses Program',
      content:
        'A complete done-for-you system including AI tools, sales scripts, lead generation strategies, and 1-on-1 mentorship to help you build a profitable AI agency from scratch.',
    },
    features: [
      {
        title: '1-on-1 Mentorship',
        text: 'Weekly calls with our team to guide you through every step',
      },
      {
        title: 'Done-For-You AI Agent',
        text: 'A fully-built AI voice agent you can white-label and sell',
      },
      {
        title: 'Proven Sales Scripts',
        text: 'Word-for-word scripts that convert cold prospects',
      },
      {
        title: 'Lead Generation System',
        text: 'Our exact process for finding qualified business owners',
      },
      {
        title: 'Pricing & Packaging',
        text: 'How to price at $500-$3,000/month and justify every penny',
      },
      {
        title: 'Private Community',
        text: 'Exclusive access to AI agency owners sharing strategies',
      },
    ],
    cta: {
      text: 'YES! I Want To Start Selling AI →',
      scrollTo: 'apply-form',
    },
  } satisfies ProgramOverviewProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently Asked Questions',
    items: [
      {
        question: 'Do I need technical experience to sell AI?',
        answer:
          "Not at all! Our done-for-you AI agent and sales scripts handle the technical side. You just need to follow our proven system for finding and closing clients. We've had complete beginners sign their first client within 2 weeks.",
      },
      {
        question: 'How much money do I need to get started?',
        answer:
          "The main investment is the program itself. You don't need expensive software subscriptions or ad budgets to start. Our organic outreach methods are completely free and highly effective.",
      },
      {
        question: 'What if I have a full-time job?',
        answer:
          'Many of our most successful members started this as a side hustle. You can build your AI agency in just 5-10 hours per week. Once you have a few recurring clients, you can choose to go full-time.',
      },
      {
        question: 'Is the AI market saturated?',
        answer:
          'Absolutely not. Less than 5% of local businesses have implemented AI automation. There are millions of potential clients who desperately need these solutions. The market is wide open.',
      },
      {
        question: 'What kind of support do I get?',
        answer:
          'You get weekly group coaching calls, 1-on-1 mentorship sessions, and 24/7 access to our private community. Our team is committed to your success and will be with you every step of the way.',
      },
      {
        question: "What if it doesn't work for me?",
        answer:
          "We offer a 30-day action-based guarantee. If you follow our system, attend the calls, and do the work without getting results, we'll work with you until you do or refund your investment.",
      },
    ],
    cta: {
      text: 'Apply Now - Limited Spots Available →',
      scrollTo: 'apply-form',
    },
  } satisfies FAQProps,

  application: {
    header: 'Apply For The AI Agency Accelerator',
    description:
      "Fill out the application below. We review every application and will reach out within 24-48 hours if you're a good fit.",
    urgency:
      '⚠️ We only accept <strong>10 new members</strong> per month to ensure quality mentorship',
    filloutId: 'ubZvchh5jtus',
  } satisfies ApplicationSectionProps,

  footer: {
    disclaimerHeader: 'Earnings Disclaimer',
    paragraphs: [
      'The earnings and income representations made by our company and its advertisers/sponsors are aspirational statements only of your earning potential. These results are not typical and results will vary. The results on this page are OUR results and from years of testing. We can in NO way guarantee you will get similar results.',
      'The average person who buys any "how to" information gets little to no results. We\'re using these references for example purposes only. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you\'re not willing to accept that, please DO NOT APPLY.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} AI Agency Accelerator. All rights reserved.`,
    platformDisclaimer:
      'This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.',
  } satisfies DisclaimerFooterProps,
};

export default function SellAiFunnelPage() {
  return (
    <PageLayout
      hero={<HeroSection {...content.hero} />}
      footer={
        <>
          <FAQ {...content.faq} />
          <ApplicationSection {...content.application} />
          <DisclaimerFooter {...content.footer} />
        </>
      }
    >
      <FounderStory {...content.founderStory} />
      <ProgramOverview {...content.programOverview} />
    </PageLayout>
  );
}

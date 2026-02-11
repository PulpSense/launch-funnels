import type { Metadata } from 'next';

import {
  BenefitsSection,
  ComparisonTable,
  CTASection,
  DisclaimerFooter,
  FAQ,
  HeroSection,
  HowItWorks,
  ProblemSection,
  ResultsSection,
  SocialProofLogos,
  TestimonialsSection,
} from '@/components/sections';
import type {
  BenefitsSectionProps,
  ComparisonTableProps,
  CTASectionProps,
  DisclaimerFooterProps,
  FAQProps,
  HeroSectionProps,
  HowItWorksProps,
  ProblemSectionProps,
  ResultsSectionProps,
  SocialProofLogosProps,
  TestimonialsSectionProps,
} from '@/components/sections';
import { PageLayout, TrackingPixels } from '@/components/ui';
import type { PixelConfig } from '@/components/ui';

export const metadata: Metadata = {
  title:
    'AI Appointment Setter for $5M+ Businesses | Replace Inconsistent Setters',
  description:
    'We replace your inconsistent setters with an AI that books qualified calls 24/7. No hiring, no training, no babysitting. Your AI setter qualifies leads, handles objections, and fills your calendar.',
};

const content = {
  pixels: {
    facebookPixelId: '', // Add your Facebook Pixel ID here
    facebookEvents: [{ name: 'PageView', type: 'standard' }],
  } satisfies PixelConfig,

  hero: {
    trustBadge: {
      text: 'Trusted by 50+ Founders',
      stars: 5,
    },
    banner: {
      text: 'Coaches, Consultants & Agencies',
      variant: 'orange',
    },
    headline: 'We Replace Your Inconsistent Setters With an AI That',
    highlightedText: 'Books Qualified Calls 24/7.',
    subheadline:
      'No hiring, training, or babysitting. Your AI qualifies leads, handles objections, and fills your calendar.',
    video: {
      provider: 'wistia',
      videoId: 'sm1gejc6p5',
    },
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
      disclaimer: 'Clients see 3x more booked calls',
    },
  } satisfies HeroSectionProps,

  clientLogos: {
    title: 'Trusted By Growing Businesses',
    invertLogos: true,
    logos: [
      { src: '/assets/images/client-logos/logo-client-1.avif', alt: 'Client 1' },
      { src: '/assets/images/client-logos/logo-client-2.avif', alt: 'Client 2' },
      { src: '/assets/images/client-logos/logo-client-3.svg', alt: 'Client 3' },
      { src: '/assets/images/client-logos/logo-client-4.avif', alt: 'Client 4' },
      { src: '/assets/images/client-logos/logo-client-5.avif', alt: 'Client 5' },
      { src: '/assets/images/client-logos/logo-client-6.avif', alt: 'Client 6' },
      { src: '/assets/images/client-logos/logo-client-7.avif', alt: 'Client 7' },
      { src: '/assets/images/client-logos/logo-client-8.svg', alt: 'Client 8' },
    ],
  } satisfies SocialProofLogosProps,

  socialProof: {
    title: 'Built With Enterprise-Grade Tools',
    logos: [
      { src: '/ai-setter/images/tools/48001205362-using-the-highlevel-logo.png', alt: 'GoHighLevel' },
      { src: '/ai-setter/images/tools/HubSpot_Logo.svg.png', alt: 'HubSpot' },
      { src: '/ai-setter/images/tools/N8n-logo-new.svg.png', alt: 'n8n' },
      { src: '/ai-setter/images/tools/Salesforce.com_logo.svg', alt: 'Salesforce' },
      { src: '/ai-setter/images/tools/Twilio_logo.png', alt: 'Twilio' },
    ],
  } satisfies SocialProofLogosProps,

  benefits: {
    headline:
      'How One Agency Eliminated 400+ Hours of Manual Setter Work Per Week and Stopped Leaking Deals',
    benefits: [
      'Leads get a response in under 60 seconds, day or night, weekends and holidays included',
      'Every prospect gets qualified, disqualified, or nurtured automatically using your exact criteria',
      'No more training cycles, no more churn, no more inconsistent follow-up',
      'Your closers only talk to prospects who are ready and pre-qualified',
      'Done-for-you setup. Trained on your best conversations. Built around your sales process.',
    ],
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
    },
  } satisfies BenefitsSectionProps,

  problem: {
    headline:
      "🤔 Your Setters Are Your Bottleneck. You Just Haven't Admitted It Yet.",
    paragraphs: [
      'You built something real. Proven offer. Real demand. Consistent revenue. But somewhere between $5M and $20M, something started breaking.',
      'Not your offer. Not your ads. Not your closers.',
      'Your setters.',
      'You know the cycle. Hire a setter. Spend weeks training them on your scripts, your qualification criteria, your objection handling. They start slow. Maybe they get decent after a month. Then they plateau. Or they leave. Or they start cutting corners when nobody is watching. And you are back to square one, except now you have cold leads sitting in your CRM that nobody followed up with.',
      'Meanwhile, the math keeps getting worse. More revenue means more leads means more setters means more payroll, more management, more inconsistency. You are scaling headcount linearly just to keep up, and your margins are getting thinner even though top-line revenue looks healthy.',
    ],
    emphasizedText: 'Your setters.',
    highlight:
      'Every lead that waits more than 5 minutes for a response is 10x less likely to book. Every setter who forgets to follow up is a deal you will never see. Every inconsistent qualification is a wasted closer call.',
    conclusion:
      "The businesses that figure this out first will not just grow faster. They will make their competitors irrelevant. Because while everyone else is hiring their fifth setter and praying for consistency, you will have a system that never sleeps, never forgets, and never has a bad day.",
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
    },
  } satisfies ProblemSectionProps,

  howItWorks: {
    headerLabel: 'The Process',
    header: 'How It Works',
    steps: [
      {
        number: 1,
        title: 'We Audit Your Current Pipeline and Setter Performance',
        description:
          'We map every touchpoint from lead capture to booked call. We identify where leads are going cold, where follow-up is inconsistent, and exactly how much revenue you are leaking. No guesswork. Just a clear diagnosis of what is costing you money right now.',
      },
      {
        number: 2,
        title: 'We Build and Train Your AI Setter on Your Exact Process',
        description:
          'We do not give you a generic chatbot. We train your AI setter on your best-performing scripts, your qualification criteria, your objection handling, and your scheduling rules. It speaks in your voice, follows your process, and qualifies the way your best human setter would on their best day, every single time.',
      },
      {
        number: 3,
        title: 'Your Calendar Fills With Qualified, Ready-to-Close Prospects',
        description:
          "Once live, your AI setter handles inbound and outbound conversations across SMS, DM, email, and chat. It responds instantly, qualifies ruthlessly, handles objections naturally, and books directly onto your closers' calendars. Your team stops chasing and starts closing.",
      },
    ],
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
    },
  } satisfies HowItWorksProps,

  comparison: {
    header: 'Human Setters vs',
    headerHighlight: 'Your AI Appointment Setter',
    subheader: 'See why high-growth founders are making the switch',
    traditionalLabel: 'Human Setters',
    modernLabel: 'PulpSense AI Setter ✨',
    rows: [
      {
        feature: 'Response Time',
        traditional: 'Minutes to hours (or never)',
        modern: 'Under 60 seconds, every time',
      },
      {
        feature: 'Availability',
        traditional: 'Business hours only',
        modern: '24/7/365, no breaks',
      },
      {
        feature: 'Consistency',
        traditional: 'Varies by mood, day, skill',
        modern: 'Same quality every conversation',
      },
      {
        feature: 'Qualification Accuracy',
        traditional: 'Depends on training + memory',
        modern: 'Follows your exact criteria, no deviation',
      },
      {
        feature: 'Follow-Up',
        traditional: 'Often forgotten or delayed',
        modern: 'Automated, persistent, timed perfectly',
      },
      {
        feature: 'Onboarding Time',
        traditional: '2–4 weeks per new hire',
        modern: 'Built and live within days',
      },
      {
        feature: 'Monthly Cost',
        traditional: '$1K–$2K+ per setter',
        modern: "Fraction of one setter's salary",
      },
      {
        feature: 'Scalability',
        traditional: 'Hire more = more payroll',
        modern: 'Handles volume without added headcount',
      },
      {
        feature: 'Churn Risk',
        traditional: 'High (setters leave constantly)',
        modern: 'Zero. Your AI never quits.',
      },
      {
        feature: 'Objection Handling',
        traditional: 'Inconsistent across reps',
        modern: 'Trained on your best scripts, every time',
      },
      {
        feature: 'Data & Insights',
        traditional: 'Anecdotal at best',
        modern: 'Every conversation logged and analyzed',
      },
      {
        feature: 'Long-Term Contracts',
        traditional: 'Employment obligations',
        modern: 'No lock-in. Cancel anytime.',
      },
    ],
    bottomNote: {
      title: 'The Bottom Line',
      content:
        'Your closers are only as good as the meetings on their calendar. When the setter is inconsistent, everything downstream suffers: show rates drop, close rates fall, and revenue becomes unpredictable. Your AI setter removes the weakest link in your sales chain and replaces it with a system that compounds instead of decays.',
    },
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
    },
  } satisfies ComparisonTableProps,

  results: {
    header: 'Need Proof?',
    stats: [
      '400+ hours of manual setter work eliminated per week',
      'Zero missed follow-ups since implementation',
      'Lead response time reduced from hours to under 60 seconds',
      'Implementation started within 24 hours, not weeks',
    ],
  } satisfies ResultsSectionProps,

  testimonials: {
    header: 'What Our Clients Say',
    testimonials: [
      {
        // Lead with strongest - directly about lead response time
        quote:
          "Working with Santi was a total game changer. Before, our leads would load to our CRM overnight, so we'd often respond a day late, hurting our conversions.\n\nNow, thanks to his automations, leads get added into our CRM instantly, a sales rep gets assigned to it and instantly gets contacted. It's saved us loads of time and really boosted our conversions. Highly recommend them if you want to stay on top of your leads!",
        name: 'Facundo Rosello',
        title: 'Good Nomads',
        avatar: '/assets/images/testimonials/facundo.avif',
      },
      {
        // Trimmed to focus on sales system + automation, removed generic praise
        quote:
          "Before Santi, our sales system was disjointed, creating extra steps and slowing us down. Santi came in, understood the gaps, and streamlined everything.\n\nHe automated processes and connected tools like Make, Monday.com, and AI, creating a seamless flow from sales to onboarding and delivery. Now, we're more efficient, and our team can focus on scaling instead of admin work.",
        name: 'Charlie Vicente',
        title: 'Ares Projects',
        avatar: '/assets/images/testimonials/charlie.avif',
      },
      {
        // Trimmed to focus on systems + ongoing reliability, removed generic "go to" pitch
        quote:
          "They nailed the complicated nature of our project and communicated every step of the way. The systems they set up for me are exactly what I needed - they work.\n\nFurther, he has gone above and beyond to continue to check in with me and our team to make sure all systems continue to run smoothly. I consider them a valuable part of my team.",
        name: 'Meegan Gregg',
        title: 'Backbody Project',
        avatar: '/assets/images/testimonials/meegan.avif',
      },
      {
        // Reframed around AI expertise - this is the weakest fit, consider replacing
        quote:
          "Santi's deep knowledge of AI and automations shone through every step of the way. His ability to simplify complex concepts and his meticulous attention to detail made the whole process seamless and highly productive.\n\nI highly recommend him to anyone looking to excel in this field. A true gem in the world of AI and automations!",
        name: 'George Banda',
        title: 'Skale Media',
        avatar: '/assets/images/testimonials/george.avif',
      },
    ],
  } satisfies TestimonialsSectionProps,

  faq: {
    headerLabel: 'FAQ',
    header: 'Frequently Asked Questions',
    items: [
      {
        question: 'How is this different from a chatbot?',
        answer:
          'Most chatbots follow rigid scripts and feel robotic. Your AI setter is trained on your actual best-performing conversations, your qualification criteria, and your objection handling. It reads context, adapts responses, and sounds like your best rep on their best day. It is not a chatbot. It is a trained setter that happens to be powered by AI.',
      },
      {
        question:
          'We already have a CRM and some automations. Why would we need this?',
        answer:
          'Having tools is not the same as having a system. If your follow-up still depends on human memory, your qualification is inconsistent, and leads are going cold because someone forgot to send the second message, you do not have a system. You have software. We turn your existing stack into an enforced, reliable engine where every lead gets handled the same way, every time.',
      },
      {
        question: 'This sounds expensive. I can hire a setter for less.',
        answer:
          'You can. But you are comparing the wrong things. A setter costs $3K to $8K per month, works limited hours, needs training, management, and will eventually leave. Your AI setter works 24/7, never calls in sick, never forgets a follow-up, handles unlimited conversations simultaneously, and costs a fraction of a single hire. When you factor in missed leads, slow response times, and management overhead, the AI is not an expense. It is a margin multiplier.',
      },
      {
        question: 'We have tried automation before and it broke.',
        answer:
          'Most automation fails because it was built to demo, not built to scale. Fragile zaps, no documentation, no error handling. We build enterprise-grade systems using Make.com and n8n with partner-level expertise. Everything is documented, monitored, and designed to hold under volume. That is why clients trust us with their pipeline.',
      },
      {
        question: 'Will this feel spammy or hurt our brand?',
        answer:
          'The opposite. Because the AI is trained on your voice and your process, conversations feel natural and on-brand. And because it responds instantly and follows up consistently, your prospects actually get a better experience than they do with most human setters. No generic templates. No over-messaging. Just smart, timely conversations that move qualified people to your calendar.',
      },
      {
        question:
          'My sales process is unique. Can this really handle our complexity?',
        answer:
          'That is exactly why we do not sell a generic product. We build your AI setter around your offer, your qualification logic, your objection handling, and your scheduling rules. If your best setter can do it, we can train the AI to do it. And it will do it the same way, every time, without drift.',
      },
      {
        question: 'How long does it take to see results?',
        answer:
          'We start implementation within 24 hours of plan approval. Most clients have their AI setter live and booking calls within the first week. Meaningful impact on pipeline velocity, response time, and booked call volume is typically visible within 30 days.',
      },
      {
        question: "What's the investment?",
        answer:
          'We offer custom packages based on your volume, channels, and complexity. Book a call and we will walk you through options that make sense for your business. No long-term contracts. No lock-in.',
      },
    ],
    cta: {
      text: 'Book Your AI Setter Demo →',
      scrollTo: 'apply-section',
    },
  } satisfies FAQProps,

  cta: {
    header: 'What to Expect on Your 15-Minute Call',
    steps: [
      'We will audit your current setter setup and show you exactly where leads are slipping, response times are lagging, and follow-up is breaking down',
      'We will walk you through how the AI setter works using real examples from businesses like yours',
      'We will map out a custom game plan: what gets built, what gets automated, and what results you can realistically expect',
      'No pushy sales tactics. Just a clear picture of what your pipeline could look like with the right system behind it',
    ],
    cta: {
      text: 'Book Your AI Setter Demo →',
      href: 'https://pulpsense.fillout.com/ai-setter',
    },
    urgency: 'Limited spots available this week',
  } satisfies CTASectionProps,

  footer: {
    disclaimerHeader: 'Earnings Disclaimer',
    paragraphs: [
      'The results stated on this page and discussed in our materials are specific client results. Please understand these results are not typical. We are not implying you will duplicate them. The average person who buys information or services gets little to no results. We use these references for example purposes only. Your results will vary based on your effort, business model, market conditions, and many other factors.',
      'The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} PulpSense. All Rights Reserved.`,
    platformDisclaimer:
      'This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. This site is not a part of the Google website or Alphabet Inc. Additionally, this site is not endorsed by Google in any way. GOOGLE is a trademark of ALPHABET, Inc.',
  } satisfies DisclaimerFooterProps,
};

export default function AiSetterPage() {
  return (
    <>
      <TrackingPixels pixels={content.pixels} />
      <PageLayout
      hero={<HeroSection {...content.hero} />}
      footer={
        <>
          <FAQ {...content.faq} />
          <CTASection {...content.cta} />
          <DisclaimerFooter {...content.footer} />
        </>
      }
    >
      <SocialProofLogos {...content.clientLogos} />
      <BenefitsSection {...content.benefits} />
      <SocialProofLogos {...content.socialProof} />
      <ProblemSection {...content.problem} />
      <HowItWorks {...content.howItWorks} />
      <ComparisonTable {...content.comparison} />
      <ResultsSection {...content.results} />
      <TestimonialsSection {...content.testimonials} />
    </PageLayout>
    </>
  );
}

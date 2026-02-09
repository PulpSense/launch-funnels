import type { Metadata } from 'next';

import {
  ComparisonTable,
  DisclaimerFooter,
  FAQ,
  HeroSection,
  HowItWorks,
  SocialProofLogos,
} from '@/components/sections';
import type {
  ComparisonTableProps,
  DisclaimerFooterProps,
  FAQProps,
  HeroSectionProps,
  HowItWorksProps,
  SocialProofLogosProps,
} from '@/components/sections';
import { GradientButton, PageLayout } from '@/components/ui';

export const metadata: Metadata = {
  title:
    'AI Appointment Setter for $5M+ Businesses | Replace Inconsistent Setters',
  description:
    'We replace your inconsistent setters with an AI that books qualified calls 24/7. No hiring, no training, no babysitting. Your AI setter qualifies leads, handles objections, and fills your calendar.',
};

const content = {
  hero: {
    trustBadge: {
      text: 'Trusted by 40+ High-Growth Founders',
      stars: 5,
    },
    banner: {
      text: '🚨 Attention Coaches, Consultants & Agency Owners Doing $5M+ 🚨',
      variant: 'orange',
    },
    headline: 'We Replace Your Inconsistent Setters With an AI That',
    highlightedText: 'Books Qualified Calls 24/7.',
    subheadline:
      'Without hiring, training, or babysitting another human. Your AI setter qualifies leads, handles objections, and fills your calendar while your team focuses on closing.',
    video: {
      provider: 'wistia',
      videoId: 'tam0inpvqg', // Replace with actual video ID
    },
    cta: {
      text: 'See If You Qualify →',
      scrollTo: 'apply-section',
      disclaimer:
        'Our Clients See an Average 3x Increase in Booked Qualified Calls',
    },
  } satisfies HeroSectionProps,

  socialProof: {
    title: 'Built With Enterprise-Grade Tools',
    logos: [
      { src: '/ai-setter/images/logo-make.svg', alt: 'Make.com' },
      { src: '/ai-setter/images/logo-n8n.svg', alt: 'n8n' },
      {
        src: '/ai-setter/images/logo-gohighlevel.svg',
        alt: 'GoHighLevel',
      },
      { src: '/ai-setter/images/logo-openai.svg', alt: 'OpenAI' },
      { src: '/ai-setter/images/logo-twilio.svg', alt: 'Twilio' },
    ],
  } satisfies SocialProofLogosProps,

  caseStudy: {
    headline:
      'How One Agency Eliminated 400+ Hours of Manual Setter Work Per Week and Stopped Leaking Deals',
    benefits: [
      'Leads get a response in under 60 seconds, day or night, weekends and holidays included',
      'Every prospect gets qualified, disqualified, or nurtured automatically using your exact criteria',
      'No more training cycles, no more churn, no more inconsistent follow-up',
      'Your closers only talk to prospects who are ready and pre-qualified',
      'Done-for-you setup. Trained on your best conversations. Built around your sales process.',
    ],
  },

  problemSection: {
    headline:
      "🤔 Your Setters Are Your Bottleneck. You Just Haven't Admitted It Yet.",
    paragraphs: [
      'You built something real. Proven offer. Real demand. Consistent revenue. But somewhere between $5M and $20M, something started breaking.',
      'Not your offer. Not your ads. Not your closers.',
      'Your setters.',
      'You know the cycle. Hire a setter. Spend weeks training them on your scripts, your qualification criteria, your objection handling. They start slow. Maybe they get decent after a month. Then they plateau. Or they leave. Or they start cutting corners when nobody is watching. And you are back to square one, except now you have cold leads sitting in your CRM that nobody followed up with.',
      'Meanwhile, the math keeps getting worse. More revenue means more leads means more setters means more payroll, more management, more inconsistency. You are scaling headcount linearly just to keep up, and your margins are getting thinner even though top-line revenue looks healthy.',
    ],
    highlight:
      'Every lead that waits more than 5 minutes for a response is 10x less likely to book. Every setter who forgets to follow up is a deal you will never see. Every inconsistent qualification is a wasted closer call.',
    conclusion:
      "The businesses that figure this out first will not just grow faster. They will make their competitors irrelevant. Because while everyone else is hiring their fifth setter and praying for consistency, you will have a system that never sleeps, never forgets, and never has a bad day.",
  },

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
          'Once live, your AI setter handles inbound and outbound conversations across SMS, DM, email, and chat. It responds instantly, qualifies ruthlessly, handles objections naturally, and books directly onto your closers\' calendars. Your team stops chasing and starts closing.',
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
        traditional: '$3K–$8K+ per setter',
        modern: 'Fraction of one setter\'s salary',
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
  },

  testimonials: [
    {
      quote:
        'We were spending $28K a month on setters and still missing leads. Within the first week of going live with PulpSense, our response time went from hours to seconds. My closers are finally talking to people who are actually qualified. The ROI was obvious in the first 30 days.',
      name: '[Client Name]',
      title: '[Title], [Company]',
    },
    {
      quote:
        'I did not need another tool. I needed a machine. For the first time in a long time, my pipeline behaves predictably. The system follows up, qualifies, and books without me checking in. My business finally feels like an asset that runs instead of a monster that constantly needs to be fed.',
      name: '[Client Name]',
      title: '[Title], [Company]',
    },
    {
      quote:
        'We tried automation before and it broke under volume. PulpSense is different. The system held when we scaled ad spend 3x. No more scrambling. No more leaked leads. Just qualified calls showing up on the calendar every morning.',
      name: '[Client Name]',
      title: '[Title], [Company]',
    },
    {
      quote:
        'The biggest change has been trust. I trust the pipeline again. Not because I am checking it more, but because it behaves more predictably. Stages make sense. Ownership is clear. Nothing sits without a next step. I am thinking about scaling again, but with less fear.',
      name: '[Client Name]',
      title: '[Title], [Company]',
    },
  ],

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
        question: 'My sales process is unique. Can this really handle our complexity?',
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

  ctaSection: {
    header: 'What to Expect on Your 15-Minute Call',
    steps: [
      'We will audit your current setter setup and show you exactly where leads are slipping, response times are lagging, and follow-up is breaking down',
      'We will walk you through how the AI setter works using real examples from businesses like yours',
      'We will map out a custom game plan: what gets built, what gets automated, and what results you can realistically expect',
      'No pushy sales tactics. Just a clear picture of what your pipeline could look like with the right system behind it',
    ],
    cta: {
      text: 'Book Your AI Setter Demo →',
      href: 'https://calendly.com/your-link', // Replace with actual booking link
    },
    urgency: 'Limited spots available this week',
  },

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

// Case Study Hook Section
const CaseStudySection = () => (
  <section className="bg-navy-900 py-16">
    <div className="mx-auto max-w-screen-lg px-4">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        {content.caseStudy.headline}
      </h2>
      <ul className="mx-auto max-w-2xl space-y-4">
        {content.caseStudy.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300">
            <span className="mt-1 text-green-400">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center">
        <GradientButton xl scrollTo="apply-section">
          See If You Qualify →
        </GradientButton>
      </div>
    </div>
  </section>
);

// Problem Awareness Section
const ProblemSection = () => (
  <section className="bg-white py-16">
    <div className="mx-auto max-w-3xl px-4">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
        {content.problemSection.headline}
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        {content.problemSection.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={
              paragraph === 'Your setters.'
                ? 'text-xl font-bold text-gray-900'
                : ''
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="my-8 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
        <p className="font-semibold text-gray-900">
          {content.problemSection.highlight}
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed">
        {content.problemSection.conclusion}
      </p>
      <div className="mt-10 text-center">
        <GradientButton xl scrollTo="apply-section">
          See If You Qualify →
        </GradientButton>
      </div>
    </div>
  </section>
);

// Results Section with Stats
const ResultsSection = () => (
  <section className="bg-gray-50 py-16">
    <div className="mx-auto max-w-screen-lg px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
        {content.results.header}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {content.results.stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
              ✓
            </span>
            <span className="font-medium text-gray-900">{stat}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="bg-white py-16">
    <div className="mx-auto max-w-screen-lg px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
        What Our Clients Say
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {content.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-gray-50 p-6"
          >
            <p className="mb-4 text-gray-700 italic leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// CTA Section
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
              ✓
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-xl bg-white p-8">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Save Your Slot for a Personalized Demo
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

        <p className="mt-4 text-xs text-gray-500">
          No long-term contracts. Cancel anytime.
        </p>
      </div>
    </div>
  </section>
);

export default function AiSetterPage() {
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
      <CaseStudySection />
      <ProblemSection />
      <HowItWorks {...content.howItWorks} />
      <ComparisonTable {...content.comparison} />
      <ResultsSection />
      <TestimonialsSection />
    </PageLayout>
  );
}

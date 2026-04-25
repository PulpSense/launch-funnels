import type { MultiStepFormConfig } from '@/components/ui/MultiStepForm';

export const cta = {
  href: '#apply',
  text: 'See If You Qualify',
};

export const facebookPixelId = '828948073514575';

export const formConfig: MultiStepFormConfig = {
  qualifiedRedirect: '/ai-os/thank-you',
  unqualifiedRedirect: '/ai-os/thank-you-u',
  qualificationRules: [
    { field: 'revenue', disqualifyValues: ['< $25k'] },
    { field: 'businessType', disqualifyValues: ['Other'] },
  ],
  steps: [
    {
      type: 'contact',
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          inputType: 'text',
          placeholder: 'Henry',
          required: true,
        },
        {
          name: 'lastName',
          label: 'Last name',
          inputType: 'text',
          placeholder: 'Ford',
          required: true,
        },
        {
          name: 'email',
          label: 'Business email',
          inputType: 'email',
          placeholder: 'henry@ford.com',
          required: true,
        },
        {
          name: 'phone',
          label: 'Phone number',
          inputType: 'phone',
          placeholder: '(888) 123-4567',
          required: true,
        },
      ],
    },
    {
      type: 'qualify',
      fields: [
        {
          name: 'revenue',
          label: "What's your current monthly revenue (USD)?",
          inputType: 'select',
          required: true,
          options: [
            '< $25k',
            '$25k - $50k',
            '$50k - $100k',
            '$100k - $200k',
            '$200k - $500k',
            '$500k - $1m',
            '> $1m',
          ],
        },
        {
          name: 'businessType',
          label: 'What type of business do you run?',
          inputType: 'select',
          required: true,
          options: ['Coaching', 'Consultant', 'Agency', 'Other'],
        },
        {
          name: 'leadGen',
          label: 'What are your main lead generation methods?',
          inputType: 'multi-select',
          required: true,
          options: [
            'Ads',
            'Content (Inbound)',
            'Cold Email',
            'LinkedIn Outreach',
            'Cold Calls',
            'Referrals',
          ],
        },
      ],
    },
    {
      type: 'cal',
      calLink: 'santileoni/growth-mapping-funnel',
      namespace: 'growth-mapping-funnel',
    },
  ],
};

export const aiOsContent = {
  banner: 'Early adopter pricing for the first 5 clients. 2 spots left.',
  hero: {
    pill: 'Agency Owners, Consultants & Coaches Doing $50K+/Month',
    headline: 'Get 15+ hours back every week.',
    highlight: 'We install your AI workforce.',
    subheadline:
      'AI agents built for your ops. Email, reporting and follow-ups handled 24/7. Live in 14 days.',
    deck: {
      src: 'https://docs.google.com/presentation/d/1DlKMRNmurT6bocVWPy4vf6zSfBaqG4V8TrXYU2DGdZ0/embed?start=false&loop=false&delayms=3000&rm=minimal#slide=id.slide001xx',
      title: 'AI OS - DSL',
    },
  },
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
  problem: {
    label: 'The problem',
    title: "You didn't start a business to do admin",
    subtitle:
      'But somehow, half your week is emails, reports, follow-ups, and CRM updates. Sound familiar?',
    items: [
      {
        icon: '🔥',
        title: 'You are the bottleneck',
        desc: 'Every decision, every check-in, every approval flows through you. Your team is stuck waiting and you are stuck doing.',
      },
      {
        icon: '⏱️',
        title: 'Leads go cold',
        desc: 'It takes you hours - sometimes days - to follow up. By then, your competitor already responded.',
      },
      {
        icon: '📉',
        title: 'Clients slip through cracks',
        desc: 'You only find out about unhappy clients when they cancel. Nobody is watching the signals.',
      },
      {
        icon: '🤯',
        title: 'Tools everywhere, system nowhere',
        desc: 'CRM, Slack, email, spreadsheets, project boards. Nothing talks to each other. You are the integration layer.',
      },
      {
        icon: '💸',
        title: 'Ops hires do not scale',
        desc: 'You hired someone. Three months of ramp-up, and they still come to you for every edge case.',
      },
      {
        icon: '🔄',
        title: 'Automations break constantly',
        desc: 'Rule-based workflows handle the happy path. The moment something changes, they fail silently.',
      },
    ],
  },
  process: {
    label: 'The process',
    title: 'How it works',
    subtitle:
      'From kickoff to go-live in 14 days. Your total time commitment: one 60-minute call.',
    steps: [
      {
        num: 1,
        title: 'Operations Audit',
        desc: '60-minute call. We map every tool you use, every task you repeat, and every hour you waste. We pick the 3 highest-ROI workflows to automate.',
      },
      {
        num: 2,
        title: 'Build & Configure',
        desc: 'We build 3 custom AI agents trained on YOUR business. Your tone. Your rules. Your tools. Connected to Slack, email, CRM, calendar, and more.',
      },
      {
        num: 3,
        title: 'Test & Refine',
        desc: 'Every agent is tested against real workflows and edge cases. Permissions locked down. Nothing sends or books without your approval rules.',
      },
      {
        num: 4,
        title: 'Go Live',
        desc: 'You get your Command Center dashboard, a 30-min training video, and 14 days of hands-on support. Your agents start working immediately.',
      },
    ],
  },
  deliverables: {
    label: 'What you get',
    title: 'The Operator Launchpad - deliverables',
    subtitle: 'Everything included in your setup. No hidden extras.',
    columns: [
      {
        title: 'Core build',
        items: [
          '3 AI agents built around your actual workflows',
          'One dashboard to see everything agents are doing',
          '5 integrations: Gmail, Slack, CRM, calendar, and more',
          'Agents tuned to your tone, your rules, your business',
          'Approval controls so nothing sends without your sign-off',
        ],
      },
      {
        title: 'Support & ownership',
        items: [
          '30-min Loom walkthrough of your specific setup',
          '14 days of support after you go live',
          'Written docs for every workflow we automate',
          'Monitoring so you know if something stops working',
          'You own everything - code, configs, the whole system',
        ],
      },
    ],
  },
  results: {
    label: 'Results',
    title: 'What business owners are seeing',
    items: [
      '30+ hours of founder ops time reclaimed per week',
      'Lead follow-up time reduced from days to under 5 minutes',
      'Full AI agent system operational within 14 days of kickoff',
    ],
  },
  testimonials: {
    label: 'Social proof',
    title: 'What our clients say',
    items: [
      {
        quote:
          'Working with Santi was a total game changer. Before, our leads would load to our CRM overnight, so we would often respond a day late, hurting our conversions. Now, thanks to his automations, leads get added into our CRM and get contacted instantly. It has saved us loads of time and really boosted our conversions.',
        name: 'Facundo Rosello',
        company: 'Good Nomads',
        avatar: '/assets/images/testimonials/facundo.avif',
      },
      {
        quote:
          'Before Santi, our sales system was disjointed, creating extra steps and slowing us down. Santi came in, understood the gaps, and streamlined everything. He automated processes and connected tools, creating a seamless flow from sales to onboarding and delivery. Now, we are more efficient, and our team can focus on scaling instead of admin work.',
        name: 'Charlie Vicente',
        company: 'Ares Projects',
        avatar: '/assets/images/testimonials/charlie.avif',
      },
      {
        quote:
          'They nailed the complicated nature of our project and communicated every step of the way. The systems they set up for me are exactly what I needed, they work. He has gone above and beyond to continue to check in with me and our team to make sure all systems continue to run smoothly. I consider them a valuable part of my team.',
        name: 'Meegan Gregg',
        company: 'Backbody Project',
        avatar: '/assets/images/testimonials/meegan.avif',
      },
      {
        quote:
          "Santi's deep knowledge of AI and automations shone through every step of the way. His ability to simplify complex concepts and his meticulous attention to detail made the whole process seamless and highly productive. I highly recommend him to anyone looking to excel in this field.",
        name: 'George Banda',
        company: 'Skale Media',
        avatar: '/assets/images/testimonials/george.avif',
      },
    ],
  },
  videoTestimonials: {
    title: 'See the results for yourself',
    videos: [
      { id: 'mg51fk3kah', title: 'Amazon Agency Cuts VAs 67% & Saves 400+ Hrs/Wk' },
      { id: 'nrehjvyz7s', title: 'Sports Agency Grows 4 to 25 Clubs, Cuts 640 Hrs/M' },
      { id: 'ge2tc7bxu9', title: '$630K in Captured Global Food Trading Opportunities' },
    ],
  },
  pricing: {
    label: 'Investment',
    title: 'Simple pricing. No surprises.',
    subtitle: 'One-time setup + optional monthly retainer. You own everything we build.',
    setup: {
      badge: 'Most popular',
      title: 'The Operator Launchpad',
      desc: 'Full AI agent system, built and deployed for your business.',
      price: '$5,000',
      period: 'one-time setup',
      originalPrice: '$7,500',
      note: 'Early adopter pricing',
      features: [
        '3 custom AI agents',
        'Command Center dashboard',
        '5 tool integrations',
        'Custom prompt engineering',
        '14 days hands-on support',
        'Training video + documentation',
        'Iterate-Until-It-Works Guarantee',
      ],
      addonTitle: 'Need more than 3 agents?',
      addonPrice: '$1,500 each',
    },
    retainer: {
      title: 'Ongoing retainer',
      desc: 'We keep your agents running, optimized, and evolving with your business.',
      tiers: [
        {
          name: 'Maintain',
          price: '$1,500/mo',
          features: [
            'Agent monitoring & uptime',
            'Prompt tuning (up to 5/month)',
            'Monthly performance report',
            'Priority email support',
          ],
        },
        {
          name: 'Optimize',
          price: '$3,500/mo',
          badge: 'Most popular',
          features: [
            'Everything in Maintain',
            '1 new agent every 2 months',
            'Bi-weekly optimization call',
            '1 new tool integration per month',
            'A/B testing of prompts',
          ],
        },
        {
          name: 'Scale',
          price: '$5,000-$8,000/mo',
          features: [
            'Everything in Optimize',
            'Unlimited agents',
            'Weekly strategy call',
            'Multi-team deployment',
            'Custom dashboards',
            'Dedicated Slack channel',
          ],
        },
      ],
    },
    runningCost:
      'Running costs (API + server hosting) are under $200/month, paid directly to providers. You own everything we build.',
  },
  trust: {
    label: 'Trust & security',
    title: 'Built for privacy and ownership',
    cards: [
      {
        title: '🔒 Your data stays yours',
        desc: 'We deploy on a dedicated private server provisioned specifically for your business. Your client data, lead information, messages, and internal files never touch shared infrastructure.',
      },
      {
        title: '🛡️ Full ownership',
        desc: 'OpenClaw is open-source (MIT license). Everything we build belongs to you. No lock-in, no proprietary dependencies. If you ever want to part ways, you keep the entire system.',
      },
    ],
    callout: {
      title: 'Already running OpenClaw?',
      desc: "I'll audit your setup, build your Mission Control layer, tune your prompts, and add monitoring. Same pricing.",
    },
  },
  timeline: {
    title: 'After you purchase',
    items: [
      {
        badge: 'Within 48 hrs',
        text: 'I reach out to schedule your kickoff call and create a dedicated Slack channel',
      },
      {
        badge: 'Day 1',
        text: '60-minute discovery call. We map your workflows, integrations, and preferences.',
      },
      {
        badge: 'Days 2-12',
        text: 'I build your agents, wire your integrations, and configure your dashboard',
      },
      {
        badge: 'Day 13',
        text: "Walkthrough and handoff. Recorded Loom + live Q&A. You're in control.",
      },
      {
        badge: 'Day 14',
        text: "You're live. Second payment due only after you confirm it's working.",
      },
    ],
  },
  application: {
    label: 'Apply now',
    title: 'See if you qualify',
    subtitle:
      "Answer a few quick questions and we'll show you exactly which 3 AI agents would make the biggest impact on your business.",
  },
  faq: {
    title: 'Common questions',
    items: [
      {
        q: 'What is OpenClaw?',
        a: 'OpenClaw is an open-source AI assistant that runs on a dedicated private server provisioned for your business. It connects to your messaging apps, email, calendar, CRM, and other tools. The software is free (MIT license). You pay for API usage and server hosting, which runs under $200/month.',
      },
      {
        q: 'What kind of tasks can AI agents handle?',
        a: 'Email triage and drafting, client follow-ups, report generation, CRM updates, meeting scheduling, lead qualification, invoice reminders, onboarding sequences, and more. If it is repetitive and rule-based, an agent can handle it. We pick the 3 highest-ROI workflows during your audit.',
      },
      {
        q: 'Is my data safe?',
        a: 'Yes. We deploy on a dedicated private server provisioned specifically for your business. Your client data, lead information, messages, and internal files never touch shared infrastructure. Nothing is stored on our end. You control it completely.',
      },
      {
        q: 'How much time do I need to invest?',
        a: 'One 60-minute discovery call and one 30-minute walkthrough at handoff. That is it. Everything else happens on our side. Total commitment: under 2 hours across the full 14 days.',
      },
      {
        q: 'Will agents send things without my approval?',
        a: 'Not unless you want them to. Every agent has configurable approval rules. You decide the level of autonomy for each workflow.',
      },
      {
        q: 'What tools do you integrate with?',
        a: 'Gmail, Outlook, Slack, HubSpot, Salesforce, ClickUp, Asana, Calendly, Google Calendar, Notion, Stripe, and more. If it has an API, we can likely connect it. Your Launchpad includes 5 integrations.',
      },
      {
        q: 'What if it does not work?',
        a: 'You are covered by our Iterate-Until-It-Works Guarantee. Not live in 14 days? Full refund on your second payment. Agent not performing in 30 days? We rebuild it free. You keep everything we built regardless.',
      },
      {
        q: 'Do I own the agents you build?',
        a: '100%. Everything we build is yours. OpenClaw is open-source. If you ever want to part ways, you keep the entire system.',
      },
      {
        q: 'What is the investment?',
        a: 'Setup starts at $5,000 (early adopter pricing). Ongoing retainer tiers start at $1,500/month. Apply and we will walk you through the options on the call.',
      },
    ],
  },
  finalCta: {
    title: 'Ready to get 15+ hours back?',
    body: "Answer a few quick questions to see if you qualify. We'll show you exactly which 3 AI agents would make the biggest impact on your business.",
    subtext: "No commitment · 25 minutes If it's not a fit, we'll tell you.",
  },
  footer: {
    disclaimer:
      'The results stated on this page are specific client results. Please understand these results are not typical. We are not implying you will duplicate them. Your results will vary based on your effort, business model, market conditions, and many other factors.',
    links: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
    platform:
      'This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. This site is not a part of the Google website or Alphabet Inc. Additionally, this site is not endorsed by Google in any way. GOOGLE is a trademark of ALPHABET, Inc.',
  },
};

export const thankYouContent = {
  banner: aiOsContent.banner,
  heroVideoId: '8py8vigtf1',
  hero: {
    title: "You're in. Here's what happens next.",
    subtitle:
      "Check your email for next steps. If you don't see it in 5 minutes, check spam.",
  },
  steps: [
    {
      num: 1,
      title: 'Check your email',
      desc: 'A calendar link is on its way within 24 hours. Use it to book your strategy call.',
    },
    {
      num: 2,
      title: 'We review your application',
      desc: "We'll go through your application before we talk so we show up with specific ideas for your business, not generic ones.",
    },
    {
      num: 3,
      title: 'Your strategy call',
      desc: 'You see the AI OS running on our actual business, then we map out what yours would look like.',
    },
  ],
  videosTitle: 'See what others have built',
  videos: [
    { id: 'mg51fk3kah', title: 'Amazon Agency Cuts VAs 67% & Saves 400+ Hrs/Wk' },
    { id: 'nrehjvyz7s', title: 'Sports Agency Grows 4 to 25 Clubs, Cuts 640 Hrs/Month' },
    { id: 'ge2tc7bxu9', title: '$630K in Captured Global Food Trading Opportunities' },
  ],
};

export const thankYouUnqualifiedContent = {
  banner: aiOsContent.banner,
  hero: thankYouContent.hero,
  steps: [
    {
      num: 1,
      title: 'Check your email',
      desc: "You'll get a calendar link within 24 hours to book your strategy call.",
    },
    {
      num: 2,
      title: 'We review your application',
      desc: "Before the call, we'll review your details and come prepared with specific recommendations for your business.",
    },
    {
      num: 3,
      title: 'Your strategy call',
      desc: 'We walk you through a live demo using our own business as the example, then map out what your deployment would look like.',
    },
  ],
  videosTitle: 'While you wait - see the results',
  videos: thankYouContent.videos,
};

export type AiOsContent = typeof aiOsContent;

'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import s from './page.module.css';

/* ── Metadata (exported from a separate file since this is 'use client') ── */
// See layout.tsx or use generateMetadata in a wrapper; inline approach below via <title>.

const CTA_HREF = 'https://pulpsense.fillout.com/t/xsMCsFPnw6us';
const CTA_TEXT = 'Book Your Free Strategy Call';
const FB_PIXEL_ID = '828948073514575';

/* ── Client logos (same as /ai-os) ── */
const CLIENT_LOGOS = [
  { src: '/assets/images/client-logos/logo-client-1.avif', alt: 'Client 1' },
  { src: '/assets/images/client-logos/logo-client-2.avif', alt: 'Client 2' },
  { src: '/assets/images/client-logos/logo-client-3.svg', alt: 'Client 3' },
  { src: '/assets/images/client-logos/logo-client-4.avif', alt: 'Client 4' },
  { src: '/assets/images/client-logos/logo-client-5.avif', alt: 'Client 5' },
  { src: '/assets/images/client-logos/logo-client-6.avif', alt: 'Client 6' },
  { src: '/assets/images/client-logos/logo-client-7.avif', alt: 'Client 7' },
  { src: '/assets/images/client-logos/logo-client-8.svg', alt: 'Client 8' },
];

/* ── Pain points ── */
const PAIN_POINTS = [
  {
    icon: '🔥',
    title: 'You are the bottleneck',
    desc: 'Every decision, every check-in, every approval flows through you. Your team is stuck waiting and you are stuck doing.',
  },
  {
    icon: '⏱️',
    title: 'Leads go cold',
    desc: 'It takes you hours — sometimes days — to follow up. By then, your competitor already responded.',
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
];

/* ── How it works ── */
const STEPS = [
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
];

/* ── Deliverables ── */
const DELIVERABLES_LEFT = [
  '3 AI agents built around your actual workflows',
  'One dashboard to see everything agents are doing',
  '5 integrations: Gmail, Slack, CRM, calendar, and more',
  'Agents tuned to your tone, your rules, your business',
  'Approval controls so nothing sends without your sign-off',
];

const DELIVERABLES_RIGHT = [
  '30-min Loom walkthrough of your specific setup',
  '14 days of support after you go live',
  'Written docs for every workflow we automate',
  'Monitoring so you know if something stops working',
  'You own everything — code, configs, the whole system',
];

/* ── Results ── */
const RESULTS = [
  '30+ hours of founder ops time reclaimed per week',
  'Lead follow-up time reduced from days to under 5 minutes',
  'Full AI agent system operational within 14 days of kickoff',
];

/* ── Testimonials ── */
const TESTIMONIALS = [
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
];

/* ── Video testimonials ── */
const VIDEO_TESTIMONIALS = [
  { id: 'mg51fk3kah', title: 'Amazon Agency Cuts VAs 67% & Saves 400+ Hrs/Wk' },
  { id: 'nrehjvyz7s', title: 'Sports Agency Grows 4 to 25 Clubs, Cuts 640 Hrs/M' },
  { id: 'ge2tc7bxu9', title: '$630K in Captured Global Food Trading Opportunities' },
];

/* ── FAQ ── */
const FAQ_ITEMS = [
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
];

/* ── Timeline ── */
const TIMELINE = [
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
    text: 'Walkthrough and handoff. Recorded Loom + live Q&A. You\u2019re in control.',
  },
  {
    badge: 'Day 14',
    text: 'You\u2019re live. Second payment due only after you confirm it\u2019s working.',
  },
];

/* ── Component ── */
export default function AIOsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revenueDisplay, setRevenueDisplay] = useState('50,000');
  const [revenue, setRevenue] = useState(50000);
  const [adminHours, setAdminHours] = useState(15);

  const toggleFaq = useCallback(
    (i: number) => setOpenFaq((prev) => (prev === i ? null : i)),
    [],
  );

  const handleRevenueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/,/g, '');
      if (raw === '' || /^\d+$/.test(raw)) {
        const num = Number(raw) || 0;
        setRevenue(num);
        setRevenueDisplay(num === 0 && raw === '' ? '' : num.toLocaleString());
      }
    },
    [],
  );

  /* ROI calculator logic — matches reference */
  const HOURS_PER_WEEK = 40;
  const OPS_HIRE_MONTHLY = 6000;
  const SETUP_FEE = 5000;
  const MONTHLY_RUNNING = 150;

  const monthlyHours = HOURS_PER_WEEK * 4.33;
  const rate = revenue / monthlyHours;
  const monthlyAdmin = adminHours * 4.33 * rate;
  const annualAdmin = monthlyAdmin * 12;
  const annualOps = OPS_HIRE_MONTHLY * 12;
  const annualClaw = SETUP_FEE + MONTHLY_RUNNING * 12;
  const roi = annualAdmin > 0 ? annualAdmin / annualClaw : 0;

  const monthlySavingsCalc = monthlyAdmin - MONTHLY_RUNNING;
  let paybackDays = 0;
  if (monthlySavingsCalc > 0) {
    paybackDays = Math.ceil((SETUP_FEE / monthlySavingsCalc) * 30);
  }

  const maxVal = Math.max(annualAdmin, annualOps, annualClaw, 1);
  const selfPct = Math.min((annualAdmin / maxVal) * 100, 100);
  const hirePct = Math.min((annualOps / maxVal) * 100, 100);
  const clawPct = Math.max((annualClaw / maxVal) * 100, 5);

  const fmt = (n: number) => {
    if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(1) + 'M';
    if (n >= 1000) return '$' + Math.round(n).toLocaleString();
    return '$' + Math.round(n);
  };

  const paybackLabel =
    monthlySavingsCalc <= 0 || paybackDays <= 0
      ? '--'
      : paybackDays + ' days';
  const paybackSub =
    monthlySavingsCalc <= 0 || paybackDays <= 0
      ? 'Enter your numbers above.'
      : paybackDays <= 30
        ? 'Pays for itself in under a month.'
        : paybackDays <= 60
          ? 'Pays for itself in under 2 months.'
          : paybackDays <= 90
            ? 'Pays for itself in under 3 months.'
            : `Pays for itself in ${Math.ceil(paybackDays / 30)} months.`;

  return (
    <div className={s.page}>
      {/* Meta */}
      <title>
        The Operator Launchpad | AI Agent Systems for $50K+/Month Operators
      </title>
      <meta
        name="description"
        content="We build 3 custom AI agents that handle your email, reporting, and follow-ups 24/7. One dashboard. Set up in 14 days. You get 15+ hours back every month."
      />

      {/* Facebook Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `}</Script>
      <noscript>
        { }
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Wistia embed scripts */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />

      {/* ── Banner ── */}
      <div className={s.banner}>
        Early adopter pricing for the first 5 clients. 2 spots left.
      </div>


      {/* ── Hero ── */}
      <section className={s.hero}>
        <div className={s.heroPill}>
          Agency Owners, Consultants &amp; Coaches Doing $50K+/Month
        </div>
        <h1 className={s.heroH1}>
          Stop Spending Half Your Week on Admin.{' '}
          <span className={s.heroHighlight}>Let AI Handle It.</span>
        </h1>
        <p className={s.heroSub}>
          We build 3 custom AI agents that handle your email, reporting, and
          follow-ups 24/7. One dashboard. Set up in 14 days. You get 15+ hours
          back every month.
        </p>
        <a href={CTA_HREF} className={s.ctaBtn}>
          {CTA_TEXT} &rarr;
        </a>
        <p className={s.ctaDisclaimer}>
          No commitment. 25 minutes. We&apos;ll map your biggest time drains.
        </p>

        {/* Stats bar */}
        <div className={s.statsBar}>
          <div className={s.statItem}>
            <span className={s.statValue}>15+</span>
            <span className={s.statLabel}>Hours Saved/Month</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>14</span>
            <span className={s.statLabel}>Days to System Live</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>24/7</span>
            <span className={s.statLabel}>Agents Never Sleep</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>&lt;$200</span>
            <span className={s.statLabel}>Monthly Running Cost</span>
          </div>
        </div>
      </section>

      {/* ── Client Logos ── */}
      <div className={s.logosSection}>
        <p className={s.logosTitle}>Trusted by growing businesses</p>
        <div className={s.logosGrid}>
          {CLIENT_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={32}
              style={{ height: 32, width: 'auto' }}
            />
          ))}
        </div>
      </div>

      {/* ── Problem Section — 6 Pain Cards ── */}
      <section className={s.section}>
        <span className={s.sectionLabel}>The problem</span>
        <h2 className={s.sectionTitle}>
          You didn&apos;t start a business to do admin
        </h2>
        <p className={s.sectionSubtitle}>
          But somehow, half your week is emails, reports, follow-ups, and CRM
          updates. Sound familiar?
        </p>
        <div className={s.painGrid}>
          {PAIN_POINTS.map((p) => (
            <div key={p.title} className={s.painCard}>
              <span className={s.painIcon}>{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className={s.section}>
        <span className={s.sectionLabel}>The process</span>
        <h2 className={s.sectionTitle}>How it works</h2>
        <p className={s.sectionSubtitle}>
          From kickoff to go-live in 14 days. Your total time commitment: one
          60-minute call.
        </p>
        <div className={s.stepsGrid}>
          {STEPS.map((step) => (
            <div key={step.num} className={s.stepCard}>
              <div className={s.stepNumber}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href={CTA_HREF} className={s.ctaBtnSmall}>
            {CTA_TEXT} &rarr;
          </a>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section id="deliverables" className={s.section}>
        <span className={s.sectionLabel}>What you get</span>
        <h2 className={s.sectionTitle}>The Operator Launchpad — deliverables</h2>
        <p className={s.sectionSubtitle}>
          Everything included in your setup. No hidden extras.
        </p>
        <div className={s.deliverablesGrid}>
          <div className={s.deliverableCol}>
            <h3>Core build</h3>
            <ul className={s.checkList}>
              {DELIVERABLES_LEFT.map((d) => (
                <li key={d}>
                  <span className={s.checkMark}>&#10003;</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.deliverableCol}>
            <h3>Support &amp; ownership</h3>
            <ul className={s.checkList}>
              {DELIVERABLES_RIGHT.map((d) => (
                <li key={d}>
                  <span className={s.checkMark}>&#10003;</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className={s.section}>
        <span className={s.sectionLabel}>Results</span>
        <h2 className={s.sectionTitle}>What business owners are seeing</h2>
        <div className={s.resultsGrid}>
          {RESULTS.map((r) => (
            <div key={r} className={s.resultCard}>
              <p>{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section className={s.calcSection}>
        <div className={s.calcWrap}>
          <h2 className={s.calcH2}>How much is admin costing you?</h2>
          <p className={s.calcSubtitle}>
            Plug in your numbers. See what you&apos;d save. Takes 30 seconds.
          </p>

          <div className={s.calculator}>
            <div className={s.calcInputs}>
              <div className={s.calcRow}>
                <div className={s.calcLabel}>
                  Your monthly revenue
                  <small>Gross revenue before expenses</small>
                </div>
                <div className={s.calcInputWrap}>
                  <span className={s.calcPrefix}>$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={revenueDisplay}
                    onChange={handleRevenueChange}
                    className={s.calcInput}
                  />
                </div>
              </div>

              <div className={s.calcRow}>
                <div className={s.calcLabel}>
                  Hours spent on admin per week
                  <small>Email, reports, follow-ups, CRM, scheduling</small>
                </div>
                <div className={s.calcInputWrap}>
                  <input
                    type="number"
                    value={adminHours}
                    min={0}
                    max={40}
                    onChange={(e) => setAdminHours(Number(e.target.value) || 0)}
                    className={s.calcInput}
                    style={{ paddingLeft: 14 }}
                  />
                  <span className={s.calcSuffix}>hrs</span>
                </div>
              </div>
            </div>

            <div className={s.calcResults}>
              <div className={s.resultsTitle}>Your numbers</div>

              <div className={s.resultRows}>
                <div className={s.resultRow}>
                  <span className={s.resultRowLabel}>Effective hourly rate</span>
                  <span className={`${s.resultRowVal} ${s.accentText}`}>
                    {fmt(rate)}/hr
                  </span>
                </div>
                <div className={s.resultRow}>
                  <span className={s.resultRowLabel}>Monthly cost of admin</span>
                  <span className={`${s.resultRowVal} ${s.greenText}`}>
                    {fmt(monthlyAdmin)}/mo
                  </span>
                </div>
                <div className={s.resultRow}>
                  <span className={s.resultRowLabel}>Annual cost of admin</span>
                  <span className={`${s.resultRowVal} ${s.blueText}`}>
                    {fmt(annualAdmin)}/yr
                  </span>
                </div>
              </div>

              {/* Bar chart */}
              <div style={{ marginBottom: 20 }}>
                <div className={s.barSectionTitle}>Annual cost comparison</div>

                <div className={s.resultBar}>
                  <div className={s.resultBarLabel}>Doing it yourself</div>
                  <div className={s.resultBarRow}>
                    <div className={s.resultBarTrack}>
                      <div
                        className={`${s.resultBarFill} ${s.redBar}`}
                        style={{ width: `${selfPct}%` }}
                      />
                    </div>
                    <div className={`${s.resultBarAmount} ${s.redText}`}>
                      {fmt(annualAdmin)}/yr
                    </div>
                  </div>
                </div>

                <div className={s.resultBar}>
                  <div className={s.resultBarLabel}>Full-time ops hire</div>
                  <div className={s.resultBarRow}>
                    <div className={s.resultBarTrack}>
                      <div
                        className={`${s.resultBarFill} ${s.accentBar}`}
                        style={{ width: `${hirePct}%` }}
                      />
                    </div>
                    <div className={`${s.resultBarAmount} ${s.accentText}`}>
                      {fmt(annualOps)}/yr
                    </div>
                  </div>
                </div>

                <div className={s.resultBar}>
                  <div className={s.resultBarLabel}>The Operator Launchpad (year 1)</div>
                  <div className={s.resultBarRow}>
                    <div className={s.resultBarTrack}>
                      <div
                        className={`${s.resultBarFill} ${s.greenBar}`}
                        style={{ width: `${clawPct}%` }}
                      />
                    </div>
                    <div className={`${s.resultBarAmount} ${s.greenText}`}>
                      {fmt(annualClaw)}/yr
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight boxes */}
              <div className={s.resultHighlights}>
                <div className={s.resultPayback}>
                  <div className={s.resultPaybackVal}>{paybackLabel}</div>
                  <div className={s.resultPaybackLabel}>Payback period</div>
                  <div className={s.resultPaybackSub}>{paybackSub}</div>
                </div>
                <div className={s.resultBig}>
                  <div className={s.resultBigVal}>{roi.toFixed(1)}x</div>
                  <div className={s.resultBigLabel}>First-year ROI</div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <a href={CTA_HREF} className={s.ctaBtnSmall}>
                  {CTA_TEXT} &rarr;
                </a>
              </div>
            </div>

            <div className={s.calcNote}>
              <span>
                Note: This only measures admin time costs. It doesn&apos;t
                include the extra revenue from redirecting freed hours into
                revenue generating activities. The true ROI is significantly
                higher.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Written Testimonials ── */}
      <section className={s.section}>
        <span className={s.sectionLabel}>Social proof</span>
        <h2 className={s.sectionTitle}>What our clients say</h2>
        <div className={s.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={s.testimonialCard}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={s.testimonialMeta}>
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className={s.testimonialAvatar}
                />
                <div>
                  <div className={s.testimonialAuthor}>{t.name}</div>
                  <div className={s.testimonialCompany}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Video Testimonials ── */}
      <section className={s.section}>
        <h2 className={s.sectionTitle}>See the results for yourself</h2>
        <div className={s.videosGrid}>
          {VIDEO_TESTIMONIALS.map((v) => (
            <div key={v.id} className={s.videoCard}>
              <div className={s.videoEmbed}>
                <div
                  className={`wistia_embed wistia_async_${v.id}`}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h4>{v.title}</h4>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href={CTA_HREF} className={s.ctaBtnSmall}>
            {CTA_TEXT} &rarr;
          </a>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className={s.section}>
        <span className={s.sectionLabel}>Investment</span>
        <h2 className={s.sectionTitle}>Simple pricing. No surprises.</h2>
        <p className={s.sectionSubtitle}>
          One-time setup + optional monthly retainer. You own everything we
          build.
        </p>

        <div className={s.pricingGrid}>
          {/* Featured — Setup */}
          <div className={`${s.pricingCard} ${s.pricingFeatured}`}>
            <div className={s.pricingBadge}>Most popular</div>
            <h3>The Operator Launchpad</h3>
            <p className={s.pricingDesc}>
              Full AI agent system, built and deployed for your business.
            </p>
            <div className={s.priceRow}>
              <span className={s.priceAmount}>$5,000</span>
              <span className={s.pricePeriod}>one-time setup</span>
            </div>
            <div className={s.priceRow}>
              <span className={s.priceOriginal}>$7,500</span>
            </div>
            <p className={s.priceNote}>Early adopter pricing</p>
            <ul>
              <li>3 custom AI agents</li>
              <li>Command Center dashboard</li>
              <li>5 tool integrations</li>
              <li>Custom prompt engineering</li>
              <li>14 days hands-on support</li>
              <li>Training video + documentation</li>
              <li>Iterate-Until-It-Works Guarantee</li>
            </ul>
            <a
              href={CTA_HREF}
              className={s.ctaBtn}
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
            >
              {CTA_TEXT} &rarr;
            </a>

            {/* Add-on strip — inside left card */}
            <div className={s.addonInline}>
              <span className={s.addonTitle}>Need more than 3 agents?</span>
              <span className={s.addonPrice}>$1,500 each</span>
            </div>
          </div>

          {/* Secondary — Retainer with 3 tiers */}
          <div className={s.pricingCard}>
            <h3>Ongoing retainer</h3>
            <p className={s.pricingDesc}>
              We keep your agents running, optimized, and evolving with your
              business.
            </p>

            <div className={s.retainerTiers}>
              {/* Maintain */}
              <div className={s.tierBlock}>
                <div className={s.tierHeader}>
                  <span className={s.tierName}>Maintain</span>
                  <span className={s.tierPrice}>$1,500/mo</span>
                </div>
                <ul className={s.tierList}>
                  <li>Agent monitoring &amp; uptime</li>
                  <li>Prompt tuning (up to 5/month)</li>
                  <li>Monthly performance report</li>
                  <li>Priority email support</li>
                </ul>
              </div>

              {/* Optimize */}
              <div className={`${s.tierBlock} ${s.tierPopular}`}>
                <div className={s.tierHeader}>
                  <span className={s.tierName}>
                    Optimize
                    <span className={s.tierBadge}>Most popular</span>
                  </span>
                  <span className={s.tierPrice}>$3,500/mo</span>
                </div>
                <ul className={s.tierList}>
                  <li>Everything in Maintain</li>
                  <li>1 new agent every 2 months</li>
                  <li>Bi-weekly optimization call</li>
                  <li>1 new tool integration per month</li>
                  <li>A/B testing of prompts</li>
                </ul>
              </div>

              {/* Scale */}
              <div className={s.tierBlock}>
                <div className={s.tierHeader}>
                  <span className={s.tierName}>Scale</span>
                  <span className={s.tierPrice}>$5,000–$8,000/mo</span>
                </div>
                <ul className={s.tierList}>
                  <li>Everything in Optimize</li>
                  <li>Unlimited agents</li>
                  <li>Weekly strategy call</li>
                  <li>Multi-team deployment</li>
                  <li>Custom dashboards</li>
                  <li>Dedicated Slack channel</li>
                </ul>
              </div>
            </div>

            <a
              href={CTA_HREF}
              className={s.ctaBtnSmall}
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
            >
              {CTA_TEXT} &rarr;
            </a>
          </div>
        </div>

        {/* Running cost note */}
        <p className={s.runningCost}>
          Running costs (API + server hosting) are under $200/month, paid
          directly to providers. You own everything we build.
        </p>
      </section>

      {/* ── Trust Section ── */}
      <section className={s.section}>
        <span className={s.sectionLabel}>Trust &amp; security</span>
        <h2 className={s.sectionTitle}>Built for privacy and ownership</h2>
        <div className={s.trustGrid}>
          <div className={s.trustCard}>
            <h3>🔒 Your data stays yours</h3>
            <p>
              We deploy on a dedicated private server provisioned specifically
              for your business. Your client data, lead information, messages,
              and internal files never touch shared infrastructure.
            </p>
          </div>
          <div className={s.trustCard}>
            <h3>🛡️ Full ownership</h3>
            <p>
              OpenClaw is open-source (MIT license). Everything we build belongs
              to you. No lock-in, no proprietary dependencies. If you ever want
              to part ways, you keep the entire system.
            </p>
          </div>
        </div>
        <div className={s.alreadyRunning}>
          <h4>Already running OpenClaw?</h4>
          <p>
            I&apos;ll audit your setup, build your Mission Control layer, tune
            your prompts, and add monitoring. Same pricing.
          </p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className={s.timelineSection}>
        <div className={s.wrap}>
          <h2 className={s.timelineSectionH2}>After you purchase</h2>
          <div className={s.timelineRef}>
            {TIMELINE.map((t) => (
              <div key={t.badge} className={s.timelineRefItem}>
                <div className={s.timelineBadge}>{t.badge}</div>
                <div className={s.timelineText}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className={s.faqSection}>
        <div className={s.wrap}>
          <h2 className={s.faqSectionH2}>Common questions</h2>
          <div className={s.faqListRef}>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.q}
                className={`${s.faqItemRef} ${openFaq === i ? s.faqItemOpen : ''}`}
              >
                <button className={s.faqQ} onClick={() => toggleFaq(i)}>
                  {item.q}
                  <span className={s.faqIcon}>+</span>
                </button>
                <div className={s.faqA}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={s.finalCtaRef} id="cta">
        <div className={s.wrap}>
          <h2>Ready to get 15+ hours back?</h2>
          <p>
            Book a free 25-minute strategy call. We&apos;ll map your biggest
            time drains and show you exactly which 3 agents would make the
            biggest impact.
          </p>
          <a href={CTA_HREF} className={s.ctaBtn}>
            {CTA_TEXT}
          </a>
          <div className={s.finalCtaSub}>
            No commitment. 25 minutes. If it&apos;s not a fit, we&apos;ll tell
            you.
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={s.footer}>
        <p>
          <strong>Earnings Disclaimer:</strong> The results stated on this page
          are specific client results. Please understand these results are not
          typical. We are not implying you will duplicate them. Your results will
          vary based on your effort, business model, market conditions, and many
          other factors.
        </p>
        <div className={s.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <p className={s.footerCopy}>
          &copy; {new Date().getFullYear()} pulpsense.com. All Rights Reserved.
        </p>
        <p>
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, this site is not endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc. This site is not a part of
          the Google website or Alphabet Inc. Additionally, this site is not
          endorsed by Google in any way. GOOGLE is a trademark of ALPHABET, Inc.
        </p>
      </footer>
    </div>
  );
}

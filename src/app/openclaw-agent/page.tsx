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
  '3 custom AI agents built for your workflows',
  'Command Center dashboard — one view of all agent activity',
  'CRM, email, calendar, and Slack integrations (5 included)',
  'Custom prompt engineering tuned to your tone and rules',
  'Approval rules and permission configuration',
];

const DELIVERABLES_RIGHT = [
  'Agent monitoring and alerting system',
  '30-minute training video for you and your team',
  'Documentation for every workflow we automate',
  '14 days of post-launch hands-on support',
  'Full ownership — everything we build is yours',
];

/* ── Results ── */
const RESULTS = [
  '30+ hours of founder ops time reclaimed per week',
  'Lead follow-up time reduced from days to under 5 minutes',
  'Zero dropped leads or missed client escalations since deployment',
  'Full AI agent system operational within 7 days of kickoff',
];

/* ── Testimonials ── */
const TESTIMONIALS = [
  {
    quote:
      'Working with Santi was a total game changer. Before, our leads would load to our CRM overnight, so we would often respond a day late, hurting our conversions. Now, thanks to his automations, leads get added into our CRM and get contacted instantly. It has saved us loads of time and really boosted our conversions.',
    name: 'Facundo Rosello',
    company: 'Good Nomads',
  },
  {
    quote:
      'Before Santi, our sales system was disjointed, creating extra steps and slowing us down. Santi came in, understood the gaps, and streamlined everything. He automated processes and connected tools, creating a seamless flow from sales to onboarding and delivery. Now, we are more efficient, and our team can focus on scaling instead of admin work.',
    name: 'Charlie Vicente',
    company: 'Ares Projects',
  },
  {
    quote:
      'They nailed the complicated nature of our project and communicated every step of the way. The systems they set up for me are exactly what I needed, they work. He has gone above and beyond to continue to check in with me and our team to make sure all systems continue to run smoothly. I consider them a valuable part of my team.',
    name: 'Meegan Gregg',
    company: 'Backbody Project',
  },
  {
    quote:
      "Santi's deep knowledge of AI and automations shone through every step of the way. His ability to simplify complex concepts and his meticulous attention to detail made the whole process seamless and highly productive. I highly recommend him to anyone looking to excel in this field.",
    name: 'George Banda',
    company: 'Skale Media',
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
    a: 'Setup starts at $7,500 (early adopter pricing). Ongoing retainer tiers start at $1,500/month. Apply and we will walk you through the options on the call.',
  },
];

/* ── Timeline ── */
const TIMELINE = [
  {
    day: 'Day 1',
    title: 'Kickoff & Operations Audit',
    desc: '60-minute deep dive into your tools, workflows, and bottlenecks. We identify the 3 highest-ROI automations.',
  },
  {
    day: 'Days 2–7',
    title: 'Build & Configure Agents',
    desc: 'We build your 3 custom AI agents, connect integrations, engineer prompts, and set up your Command Center dashboard.',
  },
  {
    day: 'Days 8–10',
    title: 'Internal Testing & QA',
    desc: 'Every agent is stress-tested against real scenarios and edge cases. Permissions and approval rules locked down.',
  },
  {
    day: 'Days 11–12',
    title: 'Training & Handoff',
    desc: '30-minute walkthrough with you and your team. Training video delivered. Full documentation provided.',
  },
  {
    day: 'Days 13–14+',
    title: 'Go Live + Hands-On Support',
    desc: 'Your agents go live. We monitor performance, tune prompts, and handle any issues for the first 14 days.',
  },
];

/* ── Component ── */
export default function OpenClawAgentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(150);

  const toggleFaq = useCallback(
    (i: number) => setOpenFaq((prev) => (prev === i ? null : i)),
    [],
  );

  const annualSavings = hoursPerWeek * hourlyRate * 52;
  const monthlySavings = hoursPerWeek * hourlyRate * 4;

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

      {/* ── Nav ── */}
      <nav className={s.nav}>
        <div className={s.navInner}>
          <a href="#" className={s.navLogo}>
            Setup<span>Claw</span>
          </a>
          <ul className={s.navLinks}>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#deliverables">Deliverables</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href={CTA_HREF} className={s.navCta}>
                {CTA_TEXT}
              </a>
            </li>
          </ul>
        </div>
      </nav>

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
            <span className={s.statLabel}>Days to Go Live</span>
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
          You built a real business. So why are you still the one holding it
          together?
        </h2>
        <p className={s.sectionSubtitle}>
          Somewhere past $50K/month, you became the operating system. These are
          the symptoms.
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
          From audit to go-live in 14 days. Four steps, zero fluff.
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
      <section className={s.section}>
        <div className={s.roiCalc}>
          <h3>ROI Calculator</h3>
          <p className={s.roiCalcSub}>
            See how much time and money you could save with AI agents.
          </p>
          <div className={s.roiSliders}>
            <div className={s.roiSliderGroup}>
              <label>
                Hours spent on admin per week
                <span>{hoursPerWeek}h</span>
              </label>
              <input
                type="range"
                min={5}
                max={40}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              />
            </div>
            <div className={s.roiSliderGroup}>
              <label>
                Your effective hourly rate
                <span>${hourlyRate}</span>
              </label>
              <input
                type="range"
                min={50}
                max={500}
                step={10}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
              />
            </div>
          </div>
          <div className={s.roiResult}>
            <span className={s.roiValue}>
              ${annualSavings.toLocaleString()}
            </span>
            <span className={s.roiLabel}>
              estimated annual value recovered ({' '}
              ${monthlySavings.toLocaleString()}/month )
            </span>
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
              <div className={s.testimonialAuthor}>{t.name}</div>
              <div className={s.testimonialCompany}>{t.company}</div>
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
        <h2 className={s.sectionTitle}>Simple, transparent pricing</h2>
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
              <span className={s.priceAmount}>$7,500</span>
              <span className={s.pricePeriod}>one-time setup</span>
            </div>
            <div className={s.priceRow}>
              <span className={s.priceOriginal}>$10,000</span>
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
          </div>

          {/* Secondary — Retainer */}
          <div className={s.pricingCard}>
            <h3>Ongoing Retainer</h3>
            <p className={s.pricingDesc}>
              We keep your agents running, optimized, and evolving with your
              business.
            </p>
            <div className={s.priceRow}>
              <span className={s.priceAmount}>$3,500</span>
              <span className={s.pricePeriod}>/month</span>
            </div>
            <p className={s.priceNote}>Most clients choose Optimize</p>

            <div className={s.retainerTiers}>
              <h4>3 tiers available</h4>
              <div className={s.tierRow}>
                <span>Maintain</span>
                <span className={s.tierPrice}>$1,500/mo</span>
              </div>
              <div className={s.tierRow}>
                <span>Optimize</span>
                <span className={s.tierPrice}>$3,500/mo</span>
              </div>
              <div className={s.tierRow}>
                <span>Scale</span>
                <span className={s.tierPrice}>$5,000–$8,000/mo</span>
              </div>
            </div>

            <ul>
              <li>Agent monitoring &amp; alerting</li>
              <li>Prompt tuning &amp; optimization</li>
              <li>New workflow builds</li>
              <li>Priority support</li>
              <li>Monthly performance reviews</li>
            </ul>
            <a
              href={CTA_HREF}
              className={s.ctaBtnSmall}
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
            >
              {CTA_TEXT} &rarr;
            </a>
          </div>
        </div>

        {/* Add-on strip */}
        <div className={s.addonStrip}>
          <h4>Additional agents: $2,500 each</h4>
          <p>
            Need more than 3 agents? Add extras during setup or anytime after.
          </p>
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
      <section className={s.section}>
        <span className={s.sectionLabel}>After you purchase</span>
        <h2 className={s.sectionTitle}>Your 14-day timeline</h2>
        <p className={s.sectionSubtitle}>
          Here is exactly what happens after you say &ldquo;go.&rdquo;
        </p>
        <div className={s.timeline}>
          {TIMELINE.map((t) => (
            <div key={t.day} className={s.timelineItem}>
              <div className={s.timelineDot} />
              <div className={s.timelineDay}>{t.day}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className={s.section}>
        <span className={s.sectionLabel}>FAQ</span>
        <h2 className={s.sectionTitle} style={{ textAlign: 'center' }}>
          Frequently asked questions
        </h2>
        <div className={s.faqList}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.q} className={s.faqItem}>
              <button className={s.faqQuestion} onClick={() => toggleFaq(i)}>
                {item.q}
                <span
                  className={`${s.faqChevron} ${openFaq === i ? s.faqChevronOpen : ''}`}
                >
                  &#9662;
                </span>
              </button>
              {openFaq === i && <div className={s.faqAnswer}>{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={s.finalCta}>
        <h2>
          Ready to get 15+ hours back every month?
        </h2>
        <p>
          Book a free 25-minute strategy call. We&apos;ll audit your ops, show
          you a live demo, and map out your deployment. No pressure — 3 spots
          available this month.
        </p>
        <a href={CTA_HREF} className={s.ctaBtn}>
          {CTA_TEXT} &rarr;
        </a>
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
          &copy; {new Date().getFullYear()} setupclaw.com. All Rights Reserved.
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

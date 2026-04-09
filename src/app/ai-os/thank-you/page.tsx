import type { Metadata } from 'next';
import Script from 'next/script';

import { MetaPixelEvents } from '@/components/ui/MetaPixelEvents';
import s from './page.module.css';

export const metadata: Metadata = {
  title: 'You are in | AI OS',
  description: 'Here is what to expect before your strategy call.',
};

const FB_PIXEL_ID = '828948073514575';

// TODO: replace with final Wistia video ID
const HERO_VIDEO_ID = 'mg51fk3kah';

const STEPS = [
  {
    num: 1,
    title: 'Check your email',
    desc: "A calendar link is on its way within 24 hours. Use it to book your strategy call.",
  },
  {
    num: 2,
    title: 'We review your application',
    desc: "We'll go through your application before we talk so we show up with specific ideas for your business, not generic ones.",
  },
  {
    num: 3,
    title: 'Your strategy call',
    desc: "You see the AI OS running on our actual business, then we map out what yours would look like.",
  },
];

const VIDEOS = [
  { id: 'mg51fk3kah', title: 'Amazon Agency Cuts VAs 67% & Saves 400+ Hrs/Wk' },
  { id: 'nrehjvyz7s', title: 'Sports Agency Grows 4 to 25 Clubs, Cuts 640 Hrs/Month' },
  { id: 'ge2tc7bxu9', title: '$630K in Captured Global Food Trading Opportunities' },
];

export default function ThankYouPage() {
  return (
    <div className={s.page}>
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
      `}</Script>
      <MetaPixelEvents events={['Schedule']} />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Wistia */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />

      {/* Banner */}
      <div className={s.banner}>
        Early adopter pricing for the first 5 clients. 2 spots left.
      </div>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.wrap}>
          <span className={s.checkIcon}>&#9989;</span>
          <h1 className={s.heroH1}>
            You&apos;re in. Here&apos;s what happens next.
          </h1>
          <p className={s.heroSub}>
            Check your email for next steps. If you don&apos;t see it in 5
            minutes, check spam.
          </p>

          {/* Hero video */}
          <div className={s.heroVideo}>
            <iframe
              src={`https://fast.wistia.net/embed/iframe/${HERO_VIDEO_ID}?seo=true&videoFoam=false`}
              title="What to expect"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={s.stepsSection}>
        <div className={s.wrap}>
          <div className={s.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.num} className={s.stepCard}>
                <div className={s.stepHeader}>
                  <span className={s.stepNumber}>{step.num}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className={s.videosSection}>
        <div className={s.wrap}>
          <h2 className={s.sectionTitle}>
            See what others have built
          </h2>
          <div className={s.videosGrid}>
            {VIDEOS.map((v) => (
              <div key={v.id} className={s.videoCard}>
                <div className={s.videoEmbed}>
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${v.id}?seo=true&videoFoam=false`}
                    title={v.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
                <h4>{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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

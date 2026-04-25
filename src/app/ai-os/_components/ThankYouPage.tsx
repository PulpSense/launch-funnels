import Script from 'next/script';

import { FunnelLegalFooter } from '@/components/funnel';
import { MetaPixelEvents } from '@/components/ui/MetaPixelEvents';

import { aiOsContent, facebookPixelId } from '../content';
import s from './ThankYou.module.css';

type ThankYouStep = {
  num: number;
  title: string;
  desc: string;
};

type ThankYouVideo = {
  id: string;
  title: string;
};

type ThankYouPageContent = {
  banner: string;
  heroVideoId?: string;
  hero: {
    title: string;
    subtitle: string;
  };
  steps: ThankYouStep[];
  videosTitle: string;
  videos: ThankYouVideo[];
};

type ThankYouPageProps = {
  content: ThankYouPageContent;
  showScheduleEvent?: boolean;
  largeCheckIcon?: boolean;
};

export function ThankYouPage({
  content,
  showScheduleEvent,
  largeCheckIcon,
}: ThankYouPageProps) {
  return (
    <div className={s.page}>
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      {showScheduleEvent && <SchedulePixel />}
      <div className={s.banner}>{content.banner}</div>

      <section className={s.hero}>
        <div className={s.wrap}>
          <h1 className={s.heroH1}>
            <span
              className={
                largeCheckIcon
                  ? `${s.checkIcon} ${s.checkIconLarge}`
                  : s.checkIcon
              }
            >
              &#9989;
            </span>
            {content.hero.title}
          </h1>
          <p className={s.heroSub}>{content.hero.subtitle}</p>
          {content.heroVideoId && (
            <div className={s.heroVideo}>
              <iframe
                src={`https://fast.wistia.net/embed/iframe/${content.heroVideoId}?seo=true&videoFoam=false`}
                title="What to expect"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </section>

      <section className={s.stepsSection}>
        <div className={s.wrap}>
          <div className={s.stepsGrid}>
            {content.steps.map((step) => (
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

      <section className={s.videosSection}>
        <div className={s.wrap}>
          <h2 className={s.sectionTitle}>{content.videosTitle}</h2>
          <div className={s.videosGrid}>
            {content.videos.map((video) => (
              <div key={video.id} className={s.videoCard}>
                <div className={s.videoEmbed}>
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${video.id}?seo=true&videoFoam=false`}
                    title={video.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
                <h4>{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ThankYouFooter />
    </div>
  );
}

function SchedulePixel() {
  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${facebookPixelId}');
      `}</Script>
      <MetaPixelEvents events={['Schedule']} />
      <noscript>
        <img
          height="1"
          width="1"
          className={s.trackingPixel}
          src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

function ThankYouFooter() {
  return (
    <FunnelLegalFooter
      links={aiOsContent.footer.links}
      copyright={<> &copy; {new Date().getFullYear()} pulpsense.com. All Rights Reserved.</>}
      className={s.footer}
      linksClassName={s.footerLinks}
      copyrightClassName={s.footerCopy}
      after={<p>{aiOsContent.footer.platform}</p>}
    >
      <p>
        <strong>Earnings Disclaimer:</strong> {aiOsContent.footer.disclaimer}
      </p>
    </FunnelLegalFooter>
  );
}

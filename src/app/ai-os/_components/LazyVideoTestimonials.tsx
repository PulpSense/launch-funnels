'use client';

import Script from 'next/script';

import { FunnelCta, FunnelSection, FunnelVideoGrid } from '@/components/funnel';

import s from './AIOs.module.css';
import { useInView } from './useInView';

type Video = {
  id: string;
  title: string;
};

type LazyVideoTestimonialsProps = {
  title: string;
  videos: Video[];
  ctaHref: string;
  ctaText: string;
};

export function LazyVideoTestimonials({
  title,
  videos,
  ctaHref,
  ctaText,
}: LazyVideoTestimonialsProps) {
  const [videosRef, videosVisible] = useInView('400px');

  return (
    <FunnelSection ref={videosRef} className={s.section}>
      {videosVisible && (
        <Script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          strategy="lazyOnload"
        />
      )}
      <h2 className={s.sectionTitle}>{title}</h2>
      <FunnelVideoGrid
        videos={videos}
        className={s.videosGrid}
        cardClassName={s.videoCard}
        embedClassName={s.videoEmbed}
        renderEmbed={(video) => (
          <div
            className={`${s.wistiaEmbed} wistia_embed wistia_async_${video.id}`}
          />
        )}
      />
      <div className={s.ctaCenterLg}>
        <FunnelCta href={ctaHref} className={s.ctaBtnSmall}>
          {ctaText} &rarr;
        </FunnelCta>
      </div>
    </FunnelSection>
  );
}


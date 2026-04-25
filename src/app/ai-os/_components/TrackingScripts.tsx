'use client';

import { useEffect } from 'react';
import Script from 'next/script';

import { trackMetaEvent } from '@/utils/metaCapi';

import s from './AIOs.module.css';

type TrackingScriptsProps = {
  facebookPixelId: string;
};

export function TrackingScripts({ facebookPixelId }: TrackingScriptsProps) {
  useEffect(() => {
    const timer = setTimeout(() => trackMetaEvent('PageView'), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script id="fb-pixel" strategy="lazyOnload">{`
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


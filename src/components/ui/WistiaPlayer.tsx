'use client';

import Script from 'next/script';

type WistiaPlayerProps = {
  mediaId: string;
  aspect?: number;
};

const WistiaPlayer = ({
  mediaId,
  aspect = 1.7777777777777777,
}: WistiaPlayerProps) => {
  return (
    <>
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="lazyOnload"
      />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="lazyOnload"
        type="module"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; filter: blur(5px); padding-top: ${(1 / aspect) * 100}%; }`,
        }}
      />
      {/* @ts-expect-error -- wistia-player is a custom element */}
      <wistia-player media-id={mediaId} aspect={String(aspect)} />
    </>
  );
};

export { WistiaPlayer };

'use client';

import type { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap">
    {props.children}

    <style jsx>
      {`
        .footer-icon-list :global(a:not(:last-child)) {
          margin-right: 0.75rem;
        }

        .footer-icon-list :global(a) {
          color: rgb(107 114 128);
        }

        .footer-icon-list :global(a:hover) {
          color: rgb(55 65 81);
        }

        .footer-icon-list :global(svg) {
          fill: currentColor;
          width: 1.25rem;
          height: 1.25rem;
        }
      `}
    </style>
  </div>
);

export { FooterIconList };

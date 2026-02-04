import {
  DisclaimerFooter,
  UnqualifiedSection,
} from '@/components/sections';
import type {
  DisclaimerFooterProps,
  UnqualifiedSectionProps,
} from '@/components/sections';

const content = {
  unqualified: {
    title: 'Thanks For Your Interest',
    subtitle:
      "Based on your responses, it looks like our program may not be the right fit for you at this time. But don't worry – we have other resources that might help!",
    alternativeOffer: {
      header: 'Free Resource For You:',
      description:
        'Get our free guide on "5 AI Tools Every Local Business Needs" to learn more about the AI opportunity.',
      ctaText: 'Download Free Guide →',
      ctaHref: '#',
    },
    reapplyText: 'Situation changed?',
    reapplyHref: '/sell-ai-funnel',
  } satisfies UnqualifiedSectionProps,

  footer: {
    disclaimerHeader: 'Earnings Disclaimer',
    paragraphs: [
      'The earnings and income representations made by our company and its advertisers/sponsors are aspirational statements only of your earning potential. These results are not typical and results will vary. The results on this page are OUR results and from years of testing. We can in NO way guarantee you will get similar results.',
      'The average person who buys any "how to" information gets little to no results. We\'re using these references for example purposes only. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you\'re not willing to accept that, please DO NOT APPLY.',
    ],
    legalLinks: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
    copyrightText: `© ${new Date().getFullYear()} AI Agency Accelerator. All rights reserved.`,
    platformDisclaimer:
      'This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.',
  } satisfies DisclaimerFooterProps,
};

export default function UnqualifiedPage() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <UnqualifiedSection {...content.unqualified} />
      <DisclaimerFooter {...content.footer} />
    </div>
  );
}

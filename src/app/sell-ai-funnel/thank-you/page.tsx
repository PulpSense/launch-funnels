import {
  DisclaimerFooter,
  ThankYouSection,
} from '@/components/sections';
import type {
  DisclaimerFooterProps,
  ThankYouSectionProps,
} from '@/components/sections';

const content = {
  thankYou: {
    title: '\u{1F389} Congratulations: One Last Step \u{1F6A8}',
    subtitle: 'Watch This Mandatory',
    requiredLabel: 'REQUIRED',
    alertMessage:
      '\u{1F6A8} There is a button that appears below at the end of the video you NEED TO CLICK or else we\'ll cancel your call',
    videoPlaceholder: {
      title: 'Watch This Before Our Call',
      subtitle: 'Mandatory or else we\'ll cancel the call',
    },
    steps: [
      {
        number: 1,
        heading: 'Search your inbox/spam for "Scale Up Your AI Agency"',
        description:
          'Click "Add to calendar" and "Yes" for the calendar invitation',
        highlightedText: 'Add to calendar',
      },
      {
        number: 2,
        heading: 'Check out our wall of fame',
        cta: {
          text: 'Check Out Wall Of Fame',
          subtext: 'View our program client wins...',
          href: '#',
        },
      },
      {
        number: 3,
        heading: 'Got a question?',
        cta: {
          text: 'Check Out FAQs',
          subtext: 'Got a question about our program?',
          href: '#',
        },
      },
      {
        number: 4,
        heading: 'Watch The Videos Down Below \u{1F447}',
      },
    ],
    bottomVideos: [
      {
        title: 'How I Made $3K in a Day Selling AI to Local Businesses',
        href: '#',
      },
      {
        title: 'Getting rich will be a spiritual journey',
        href: '#',
      },
      {
        title: 'One decision will change the trajectory of your life (make that decision)',
        href: '#',
      },
    ],
  } satisfies ThankYouSectionProps,

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

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <ThankYouSection {...content.thankYou} />
      <DisclaimerFooter {...content.footer} />
    </div>
  );
}

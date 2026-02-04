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
    title: "You're In! 🎉",
    subtitle:
      'Your application has been received. Our team will review it and reach out within 24-48 hours.',
    stepsHeader: "While You Wait, Here's What To Do:",
    nextSteps: [
      { number: '1.', text: 'Check your email inbox (and spam folder)' },
      { number: '2.', text: 'Save our email to your contacts' },
      { number: '3.', text: 'Be ready to hop on a quick call with our team' },
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

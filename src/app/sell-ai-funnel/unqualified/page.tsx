import {
  DisclaimerFooter,
  UnqualifiedContent,
  UnqualifiedHero,
} from '@/components/sections';
import type {
  DisclaimerFooterProps,
  UnqualifiedContentProps,
  UnqualifiedHeroProps,
} from '@/components/sections';
import { PageLayout } from '@/components/ui';

const content = {
  hero: {
    trustBadge: {
      text: 'Trusted by 200+ Agencies',
      stars: 5,
    },
    banner: {
      text: 'For Anyone Wanting To Start Selling A.I. To Local Businesses...',
      variant: 'orange',
    },
    title: 'We Are So Sorry!',
    subtitle:
      'Unfortunately, we are only able to work with applicants who are serious about building an AI agency and can fully commit to the program requirements.',
    cta: {
      text: 'Back To Homepage →',
      href: '/sell-ai-funnel',
    },
  } satisfies UnqualifiedHeroProps,

  content: {
    followUpMessage:
      "That being said, when your situation has a few more boxes checked, we'd love to help!",
    requirements: [
      'Ability to dedicate 5-10 hours per week',
      'Willingness to invest in your business',
      'Basic computer and communication skills',
      'Ready to start within 30 days',
    ],
    reapplyText: 'Situation changed?',
    reapplyHref: '/sell-ai-funnel',
  } satisfies UnqualifiedContentProps,

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
    <PageLayout
      hero={<UnqualifiedHero {...content.hero} />}
      footer={<DisclaimerFooter {...content.footer} />}
    >
      <UnqualifiedContent {...content.content} />
    </PageLayout>
  );
}

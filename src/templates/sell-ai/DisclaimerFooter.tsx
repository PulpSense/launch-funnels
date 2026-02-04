const DisclaimerFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-12">
      <div className="mx-auto max-w-4xl px-4">
        {/* Earnings disclaimer */}
        <div className="mb-8 border-t border-navy-700 pt-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
            Earnings Disclaimer
          </h3>
          <p className="text-xs leading-relaxed text-gray-500">
            The earnings and income representations made by our company and its
            advertisers/sponsors are aspirational statements only of your
            earning potential. These results are not typical and results will
            vary. The results on this page are OUR results and from years of
            testing. We can in NO way guarantee you will get similar results.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-gray-500">
            The average person who buys any &ldquo;how to&rdquo; information gets little to
            no results. We&apos;re using these references for example purposes only.
            Your results will vary and depend on many factors including but not
            limited to your background, experience, and work ethic. All business
            entails risk as well as massive and consistent effort and action. If
            you&apos;re not willing to accept that, please DO NOT APPLY.
          </p>
        </div>

        {/* Legal links and copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-navy-700 pt-8 text-center md:flex-row md:text-left">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 md:justify-start">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © {currentYear} AI Agency Accelerator. All rights reserved.
          </p>
        </div>

        {/* This site is not affiliated disclaimer */}
        <p className="mt-8 text-center text-xs text-gray-600">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, this site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};

export { DisclaimerFooter };

import type { ThankYouSectionProps } from './types';

const ThankYouSection = ({
  title,
  subtitle,
  stepsHeader,
  nextSteps,
}: ThankYouSectionProps) => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-navy-900 px-4 text-center">
      {/* Success checkmark */}
      <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-green-500/20">
        <svg
          className="size-10 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{title}</h1>
      <p className="mb-8 max-w-md text-lg text-gray-300">{subtitle}</p>

      {/* Next steps */}
      <div className="max-w-md rounded-lg border border-navy-700 bg-navy-800 p-6 text-left">
        <h2 className="mb-4 font-semibold text-white">{stepsHeader}</h2>
        <ul className="space-y-3 text-gray-300">
          {nextSteps.map((step) => (
            <li key={step.number} className="flex items-start gap-2">
              <span className="text-orange-500">{step.number}</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export { ThankYouSection };

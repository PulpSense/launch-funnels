import type { ProgramOverviewProps } from './types';

const ProgramOverview = ({
  header,
  description,
  features,
  valueStack,
}: ProgramOverviewProps) => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section header */}
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          {header}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          {description}
        </p>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                {/* Checkmark icon */}
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="size-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Value stack */}
        <div className="mt-12 rounded-lg bg-navy-900 p-8 text-center">
          <p className="mb-2 text-gray-400">{valueStack.label}</p>
          <p className="mb-4 text-4xl font-bold text-white line-through">
            {valueStack.originalPrice}
          </p>
          <p className="text-gray-300">{valueStack.teaser}</p>
        </div>
      </div>
    </section>
  );
};

export { ProgramOverview };

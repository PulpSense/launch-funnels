import { FormEmbed } from '@/components/ui';

import type { ApplicationSectionProps } from './types';

const ApplicationSection = ({
  header,
  description,
  urgency,
  filloutId,
}: ApplicationSectionProps) => {
  return (
    <section className="bg-navy-800 py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Section header */}
        <h2 className="mb-4 text-center text-2xl font-bold text-white md:text-3xl">
          {header}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-gray-300">
          {description}
        </p>

        {/* Urgency indicator */}
        {urgency && (
          <div className="mb-8 rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
            <p
              className="text-orange-400"
              dangerouslySetInnerHTML={{ __html: urgency }}
            />
          </div>
        )}

        {/* Form embed */}
        <FormEmbed filloutId={filloutId} />
      </div>
    </section>
  );
};

export { ApplicationSection };

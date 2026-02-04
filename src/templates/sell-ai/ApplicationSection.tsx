import { FormEmbed } from '@/form/FormEmbed';

type ApplicationSectionProps = {
  formUrl?: string;
};

const ApplicationSection = ({ formUrl }: ApplicationSectionProps) => {
  return (
    <section className="bg-navy-800 py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Section header */}
        <h2 className="mb-4 text-center text-2xl font-bold text-white md:text-3xl">
          Apply For The AI Agency Accelerator
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-gray-300">
          Fill out the application below. We review every application and will
          reach out within 24-48 hours if you&apos;re a good fit.
        </p>

        {/* Urgency indicator */}
        <div className="mb-8 rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
          <p className="text-orange-400">
            ⚠️ We only accept <strong>10 new members</strong> per month to
            ensure quality mentorship
          </p>
        </div>

        {/* Form embed */}
        <FormEmbed formUrl={formUrl} minHeight="700px" />
      </div>
    </section>
  );
};

export { ApplicationSection };

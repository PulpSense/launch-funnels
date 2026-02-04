type FormEmbedProps = {
  formUrl?: string;
  minHeight?: string;
};

const FormEmbed = ({
  formUrl,
  minHeight = '600px',
}: FormEmbedProps) => {
  return (
    <div id="apply-form" className="w-full">
      {formUrl ? (
        <iframe
          src={formUrl}
          title="Application Form"
          className="w-full rounded-lg border-0"
          style={{ minHeight }}
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-navy-800"
          style={{ minHeight }}
        >
          <div className="text-center">
            <p className="mb-2 text-lg text-gray-400">Form Embed Placeholder</p>
            <p className="text-sm text-gray-500">
              Add your Fillout form URL to embed the form here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export { FormEmbed };

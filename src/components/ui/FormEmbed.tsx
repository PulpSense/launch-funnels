'use client';

import { FilloutStandardEmbed } from '@fillout/react';

type FormEmbedProps = {
  filloutId?: string;
  dynamicResize?: boolean;
  inheritParameters?: boolean;
  onSubmit?: (submissionUuid: string) => void;
};

const FormEmbed = ({
  filloutId,
  dynamicResize = true,
  inheritParameters = true,
  onSubmit,
}: FormEmbedProps) => {
  if (!filloutId) {
    return (
      <div
        id="apply-form"
        className="flex min-h-[600px] w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-navy-800"
      >
        <div className="text-center">
          <p className="mb-2 text-lg text-gray-400">Form Embed Placeholder</p>
          <p className="text-sm text-gray-500">
            Add your Fillout form ID to embed the form here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="apply-form" className="w-full">
      <FilloutStandardEmbed
        filloutId={filloutId}
        dynamicResize={dynamicResize}
        inheritParameters={inheritParameters}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export { FormEmbed };

import type { FounderStoryProps } from './types';

const FounderStory = ({
  header,
  headerHighlight,
  paragraphs,
  imageCount = 4,
  quote,
}: FounderStoryProps) => {
  return (
    <section className="bg-navy-800 py-16">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section header */}
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          {header}
          {headerHighlight && (
            <>
              {' '}
              <span className="text-orange-500">{headerHighlight}</span>
            </>
          )}
        </h2>

        {/* Story content */}
        <div className="mb-12 space-y-6 text-gray-300">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Image grid placeholder */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: imageCount }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-navy-700"
              aria-label={`Lifestyle image ${i + 1}`}
            >
              <div className="flex size-full items-center justify-center text-gray-500">
                <span className="text-xs">Image {i + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mt-12 border-l-4 border-orange-500 pl-6 text-xl italic text-white">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </section>
  );
};

export { FounderStory };

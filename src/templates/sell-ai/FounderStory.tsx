const FounderStory = () => {
  return (
    <section className="bg-navy-800 py-16">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section header */}
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          From Struggling Freelancer To{' '}
          <span className="text-orange-500">$50K/Month</span> AI Agency Owner
        </h2>

        {/* Story content */}
        <div className="mb-12 space-y-6 text-gray-300">
          <p>
            Three years ago, I was stuck in a dead-end 9-5 job, barely making
            ends meet. I knew there had to be a better way to build wealth and
            create freedom in my life.
          </p>
          <p>
            Then I discovered the power of selling AI automation to local
            businesses. These business owners are drowning in manual tasks –
            answering phones, scheduling appointments, following up with leads –
            and they&apos;re willing to pay a premium for solutions that save them
            time.
          </p>
          <p>
            Within 6 months of implementing my system, I went from $0 to
            $15,000/month in recurring revenue. Today, my agency generates over
            $50,000/month helping local businesses automate their operations.
          </p>
        </div>

        {/* Image grid placeholder */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
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
          &ldquo;The best time to start an AI business was yesterday. The second
          best time is today.&rdquo;
        </blockquote>
      </div>
    </section>
  );
};

export { FounderStory };

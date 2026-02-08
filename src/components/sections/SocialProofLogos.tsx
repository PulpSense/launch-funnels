import Image from 'next/image';

export type SocialProofLogosProps = {
  title?: string;
  logos: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
};

const SocialProofLogos = ({ title, logos }: SocialProofLogosProps) => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-screen-lg px-4">
        {title && (
          <p className="mb-6 text-center text-sm font-medium text-gray-500 uppercase tracking-wide">
            {title}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 120}
              height={logo.height || 40}
              className="h-8 w-auto object-contain grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SocialProofLogos };

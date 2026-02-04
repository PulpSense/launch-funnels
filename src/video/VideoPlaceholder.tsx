import { AlertBanner } from '@/banner/AlertBanner';

type VideoPlaceholderProps = {
  posterSrc?: string;
  altText?: string;
};

const VideoPlaceholder = ({
  posterSrc,
  altText = 'Video placeholder',
}: VideoPlaceholderProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-2xl">
      {/* Sound alert bar */}
      <AlertBanner variant="red">
        🔊 Make Sure Sound Is Turned On
      </AlertBanner>

      {/* Video poster with play button */}
      <div className="relative aspect-video bg-navy-800">
        {posterSrc ? (
          <img
            src={posterSrc}
            alt={altText}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900">
            <span className="text-gray-500">Video Placeholder</span>
          </div>
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-20 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110">
            <svg
              className="ml-1 size-8 text-navy-900"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoPlaceholder };

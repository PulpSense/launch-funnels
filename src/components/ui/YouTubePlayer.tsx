type YouTubePlayerProps = {
  videoId: string;
};

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  return (
    <div className="relative aspect-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    </div>
  );
};

export { YouTubePlayer };

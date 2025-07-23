import VideoCard from "./VideoCard";

function VideoGallery({ videos, onOpen, startIndex }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div key={`video-wrapper-${startIndex + index}`}>
          <p className="text-sm text-gray-600 mb-1 font-satisfy maintTittle">
            Video {startIndex + index + 1}
          </p>
          <VideoCard
            embedUrl={video.url}
            type={video.type}
            orientation={video.orientation}
            onClick={() => onOpen(startIndex + index)}
          />
        </div>
      ))}
    </div>
  );
}

export default VideoGallery;

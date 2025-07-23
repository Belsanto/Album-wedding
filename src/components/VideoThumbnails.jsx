function VideoThumbnails({ videos, currentIndex, onSelect }) {
  return (
    <div className="flex overflow-x-auto gap-2 max-w-full pb-4">
      {videos.map((vid, index) => (
        <div
          key={`thumb-${index}`}
          className={`w-24 h-16 flex-shrink-0 cursor-pointer border-2 ${
            index === currentIndex ? "border-purple-400" : "border-transparent"
          }`}
          onClick={() => onSelect(index)}
        >
          {vid.type === "vimeo" ? (
            <iframe
              src={vid.url}
              className="w-full h-full pointer-events-none"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <video
              src={vid.url}
              className="w-full h-full object-cover pointer-events-none"
              muted
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default VideoThumbnails;

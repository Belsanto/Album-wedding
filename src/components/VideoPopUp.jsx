function VideoPopUp({ videoUrl, type = "cloudinary", onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4 bg-black p-2 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full px-3 py-1 text-sm text-gray-800 shadow-md hover:bg-gray-100 transition"
        >
          ✕
        </button>

        {type === "vimeo" ? (
          <div className="w-full aspect-video">
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title="Vimeo Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        ) : (
          <video
            src={videoUrl}
            className="w-full max-h-[80vh] object-contain rounded-lg"
            autoPlay
            controls
          />
        )}
      </div>
    </div>
  );
}

export default VideoPopUp;

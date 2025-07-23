import { useEffect } from "react";
import VideoThumbnails from "./VideoThumbnails";

function VideoModal({ videos, currentIndex, onClose, onSelect }) {
  const currentVideo = videos[currentIndex];

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
      onSelect(currentIndex - 1);
    } else if (e.key === "ArrowRight" && currentIndex < videos.length - 1) {
      onSelect(currentIndex + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center px-4">
      {/* Botón cerrar */}
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Video principal */}
      <div className="relative w-full max-w-4xl mb-4 z-10">

        {/* Botón Anterior */}
        {currentIndex > 0 && (
            <button
                onClick={() => onSelect(currentIndex - 1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white text-3xl px-4 py-2 z-20"
                >
                ‹
            </button>
        )}
        {/* Botón Siguiente */}
        {currentIndex < videos.length - 1 && (
            <button
                onClick={() => onSelect(currentIndex + 1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white text-3xl px-4 py-2 z-20"
                >
                ›
            </button>
        )}

        {currentVideo.type === "vimeo" ? (
          <iframe
            src={currentVideo.url}
            className="w-full aspect-video rounded"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <video
            src={currentVideo.url}
            controls
            autoPlay
            className="w-full max-h-[70vh] rounded"
          />
        )}
      </div>

      {/* Carrusel de miniaturas */}
      <VideoThumbnails
        videos={videos}
        currentIndex={currentIndex}
        onSelect={onSelect}
      />
    </div>
  );
}

export default VideoModal;

// src/components/VideoGalleryModal.jsx
import { useEffect } from "react";

function VideoGalleryModal({ isOpen, onClose, videos, currentIndex, setCurrentIndex }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % videos.length);
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + videos.length) % videos.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, setCurrentIndex, videos.length]);

  if (!isOpen) return null;

  const currentVideo = videos[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl px-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">✕</button>
        <div className="aspect-video">
          {currentVideo.type === "vimeo" ? (
            <iframe
              src={currentVideo.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <video src={currentVideo.embedUrl} controls className="w-full h-full" />
          )}
        </div>
        <div className="flex justify-between mt-4 text-white">
          <button onClick={() => setCurrentIndex((i) => (i - 1 + videos.length) % videos.length)}>← Anterior</button>
          <button onClick={() => setCurrentIndex((i) => (i + 1) % videos.length)}>Siguiente →</button>
        </div>
      </div>
    </div>
  );
}

export default VideoGalleryModal;

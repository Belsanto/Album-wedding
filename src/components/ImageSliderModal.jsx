import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ImageSliderModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4 p-4 rounded shadow-lg overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 text-gray-800 shadow hover:bg-gray-100 transition text-xl"
        >
          <FontAwesomeIcon icon="xmark" />
        </button>

        {/* Botón anterior */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 text-gray-800 p-3 rounded-full hover:bg-opacity-90 text-xl"
        >
          <FontAwesomeIcon icon="chevron-left" />
        </button>

        {/* Botón siguiente */}
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 text-gray-800 p-3 rounded-full hover:bg-opacity-90 text-xl"
        >
          <FontAwesomeIcon icon="chevron-right" />
        </button>

        {/* Imagen */}
        <img
          src={currentImage}
          alt={`Foto ${currentIndex + 1}`}
          className="w-full max-h-[90vh] object-contain rounded"
        />
      </div>
    </div>
  );
}

export default ImageSliderModal;

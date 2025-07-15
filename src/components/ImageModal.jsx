import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-4 p-4 rounded shadow-lg overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 text-gray-800 shadow-md hover:bg-gray-100 transition text-xl"
        >
          <FontAwesomeIcon icon="xmark" />
        </button>

        <img
          src={src}
          alt={alt}
          className="w-full max-h-[90vh] object-contain rounded"
        />
      </div>
    </div>
  );
}

export default ImageModal;

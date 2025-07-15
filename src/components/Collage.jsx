import { useState } from "react";
import ImageSliderModal from "./ImageSliderModal";

function Collage({ folder }) {
  const allImages = import.meta.glob('/src/assets/**/**/*.{jpg,jpeg,JPG,png}', {
    eager: true,
    as: 'url'
  });

  // Filtra solo las imágenes del folder especificado
  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .map(([, url]) => url);

  const [modalIndex, setModalIndex] = useState(null);

  const handleOpen = (index) => setModalIndex(index);
  const handleClose = () => setModalIndex(null);
  const handleNext = () => setModalIndex((i) => (i + 1) % images.length);
  const handlePrev = () => setModalIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-great-vibes text-primary mb-10 capitalize">
        {folder}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Imagen ${idx + 1}`}
            className="rounded shadow-md cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleOpen(idx)}
          />
        ))}
      </div>

      {modalIndex !== null && (
        <ImageSliderModal
          images={images}
          currentIndex={modalIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}

export default Collage;

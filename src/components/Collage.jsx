import { useState, useEffect, useRef } from "react";
import fotosJson from "../assets/fotos/fotos.json";
import ImageSliderModal from "./ImageSliderModal";
import PaginationControls from "./PaginationControls";

function Collage({ folder }) {
  const [images, setImages] = useState([]);

  const allLocal = import.meta.glob('/src/assets/boda/*/*.{jpg,jpeg,JPG,png}', {
  eager: true,
  as: 'url'
});

  const allPhone = import.meta.glob('/src/assets/phone/**/*.{jpg,jpeg,JPG,png}', {
    eager: true,
    as: 'url'
  });

  useEffect(() => {
  if (folder === "todas") {
    const remote = Object.values(fotosJson).flat();
    const local = Object.values(allLocal);
    setImages([...remote, ...local]);
  } else if (folder === "phone") {
      const localImages = Object.values(allPhone);
      setImages(localImages);
  } else if (fotosJson[folder]) {
    setImages(fotosJson[folder]);
  } else {
    // Local específico
    const localImages = Object.entries(allLocal)
      .filter(([path]) => path.includes(`/boda/${folder}/`))
      .map(([_, url]) => url);
    setImages(localImages);
  }
}, [folder]);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(12);

  const totalPages = imagesPerPage === "all" ? 1 : Math.ceil(images.length / imagesPerPage);
  const startIndex = imagesPerPage === "all" ? 0 : (currentPage - 1) * imagesPerPage;
  const currentImages =
    imagesPerPage === "all" ? images : images.slice(startIndex, startIndex + imagesPerPage);

  const [modalIndex, setModalIndex] = useState(null);
  const handleOpen = (index) => setModalIndex(startIndex + index);
  const handleClose = () => setModalIndex(null);
  const handleNext = () => setModalIndex((i) => (i + 1) % images.length);
  const handlePrev = () => setModalIndex((i) => (i - 1 + images.length) % images.length);

  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto" ref={galleryRef}>
      <h2 className="text-center text-3xl font-great-vibes maintTittle mb-6 capitalize">
        {folder}
      </h2>

      {/* Selector de cantidad */}
      <div className="flex justify-center mb-4 items-center gap-4 text-sm text-gray-700">
        <label htmlFor="imagesPerPage">Mostrar:</label>
        <select
          id="imagesPerPage"
          value={imagesPerPage}
          onChange={(e) => {
            setImagesPerPage(e.target.value === "all" ? "all" : parseInt(e.target.value));
            setCurrentPage(1);
          }}
          className="border rounded px-2 py-1"
        >
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="all">Todas</option>
        </select>

        {imagesPerPage !== "all" && (
          <span className="ml-4">
            Mostrando fotos de la {startIndex + 1} a la {Math.min(startIndex + imagesPerPage, images.length)} de {images.length}
          </span>
        )}
      </div>

      {imagesPerPage !== "all" && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {currentImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Imagen ${startIndex + idx + 1}`}
            className="rounded shadow-md cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleOpen(idx)}
          />
        ))}
      </div>

      {imagesPerPage !== "all" && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

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

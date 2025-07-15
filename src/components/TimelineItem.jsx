import { useState } from "react";
import ImageModal from "./ImageModal";

function TimelineItem({ title, text, image, reverse = false }) {
  const [showModal, setShowModal] = useState(false);
  const baseClasses = 'flex flex-col md:flex-row items-center mb-16 reveal active';
  const reversedClasses = 'md:flex-row-reverse';

  return (
    <>
      <div className={`${baseClasses} ${reverse ? reversedClasses : ''}`}>
        <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
          <div
            className="photo-frame rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="bg-secondary h-64 w-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left md:px-8">
          <h3 className="text-2xl mb-4 font-dancing">{title}</h3>
          <p className="text-lg">{text}</p>
        </div>
      </div>

      {showModal && (
        <ImageModal
          src={image}
          alt={title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default TimelineItem;

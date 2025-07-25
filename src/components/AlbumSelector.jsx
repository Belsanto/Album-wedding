import { useEffect, useState } from "react";
import fotosJson from '../assets/fotos/fotos.json';
import comingSoon from '../assets/fotos/coming_soon_elegant.jpg';
import todasCover from '../assets/boda/pareja/Estefa y Santiago-49.jpg';

// Cargar todas las imágenes de álbumes locales dinámicamente
const allLocalImages = import.meta.glob('/src/assets/boda/*/*.{jpg,jpeg,png}', {
  eager: true,
  as: 'url',
});

function AlbumSelector({ onSelectAlbum }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const remoteAlbums = Object.entries(fotosJson)
      .filter(([_, fotos]) => Array.isArray(fotos) && fotos.length > 0)
      .map(([key, fotos]) => ({
        key,
        title: key.charAt(0).toUpperCase() + key.slice(1),
        cover: fotos[0] || comingSoon,
        isLocal: false,
      }));

    const localAlbumMap = {};
    for (const path in allLocalImages) {
      const match = path.match(/\/assets\/boda\/([^/]+)\/[^/]+\.(jpg|jpeg|png)$/);
      if (match) {
        const folder = match[1];
        if (!localAlbumMap[folder]) {
          localAlbumMap[folder] = allLocalImages[path]; // Primera imagen encontrada
        }
      }
    }

    const localAlbums = Object.entries(localAlbumMap).map(([key, cover]) => ({
      key,
      title: key.charAt(0).toUpperCase() + key.slice(1),
      cover: cover || comingSoon,
      isLocal: true,
    }));

    const allAlbums = [
      { key: "todas", title: "Todas las fotos", cover: todasCover },
      ...remoteAlbums,
      ...localAlbums,
    ];

    setAlbums(allAlbums);
  }, []);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = comingSoon;
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-great-vibes maintTittle mb-10">
        Elige un Álbum
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {albums.map(({ key, title, cover }) => (
          <div
            key={key}
            className="relative cursor-pointer group"
            onClick={() => onSelectAlbum(key)}
          >
            <div className="relative w-72 h-48 transition-transform group-hover:scale-105">
              <div className="absolute top-2 left-2 w-full h-full bg-white border border-gray-300 rounded-lg shadow-md rotate-[-4deg] z-0" />
              <div className="absolute top-1 left-1 w-full h-full bg-white border border-gray-300 rounded-lg shadow-md rotate-[3deg] z-10" />
              <img
                src={cover}
                alt={title}
                onError={handleImgError}
                className="w-full h-full object-cover rounded-lg border border-gray-300 shadow-lg relative z-20"
              />
            </div>
            <h3 className="text-center mt-3 font-semibold text-lg text-gray-800">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumSelector;

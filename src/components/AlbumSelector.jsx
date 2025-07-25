import { useEffect, useState } from "react";
import otrasFotos from '../assets/otras/DSC_0003.jpg';
import amigosFotos from '../assets/otras/DSC_0020.jpg';
import fotosJson from '../assets/fotos/fotos.json';
import comingSoon from '../assets/fotos/coming_soon_elegant.jpg';

function AlbumSelector({ onSelectAlbum }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const covers = {
      novia: fotosJson.novia?.[0] || comingSoon,
      novio: fotosJson.novio?.[0] || comingSoon,
      familia: fotosJson.familia?.[0] || comingSoon,
      juntos: fotosJson.juntos?.[0] || comingSoon,
      todas: fotosJson.juntos?.[2] || amigosFotos || comingSoon,
      otras: otrasFotos || comingSoon,
    };

    const dynamicAlbums = Object.keys(fotosJson).map((key) => ({
      key,
      title: key.charAt(0).toUpperCase() + key.slice(1),
      cover: fotosJson[key]?.[0] || comingSoon,
    }));

    setAlbums([
      { key: "todas", title: "Todas las fotos", cover: covers.todas},
      ...dynamicAlbums,
      { key: "otras", title: "Otras fotos", cover: covers.otras },
    ]);
  }, []);

  // Función fallback para errores de carga de imagen
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

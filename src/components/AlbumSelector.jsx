
import otrasFotos from '../assets/otras/DSC_0003.jpg';

function AlbumSelector({ onSelectAlbum }) {
  // Define los nombres y títulos de las carpetas
  const albums = [
    { key: "otras", title: "Otras Fotos", cover: otrasFotos },
  ];

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
            {/* Pila de fotos */}
            <div className="relative w-72 h-48 transition-transform group-hover:scale-105">
              <div className="absolute top-2 left-2 w-full h-full bg-white border border-gray-300 rounded-lg shadow-md rotate-[-4deg] z-0" />
              <div className="absolute top-1 left-1 w-full h-full bg-white border border-gray-300 rounded-lg shadow-md rotate-[3deg] z-10" />
              <img
                src={cover}
                alt={title}
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

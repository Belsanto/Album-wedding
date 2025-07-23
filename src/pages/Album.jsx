import { useState } from "react";
import AlbumSelector from "../components/AlbumSelector";
import Collage from "../components/Collage";

function Album() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto album">
      {selectedAlbum ? (
        <>
          {/* Botón volver */}
          <div className="mb-7">
            <button
              onClick={() => setSelectedAlbum(null)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded shadow transition"
            >
              ⬅ Volver a Álbumes
            </button>
          </div>

          {/* Contenido del álbum */}
          <Collage folder={selectedAlbum} />
        </>
      ) : (
        <AlbumSelector onSelectAlbum={setSelectedAlbum} />
      )}
    </div>
  );
}

export default Album;

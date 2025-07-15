import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";

const SpecialIntro = () => {
  const [fallback, setFallback] = useState(false);
  const mainVideo = "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/2025-07-11_17-23-23_vbnbi8.mkv";
  const fallbackVideo = "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/VID-20250712-WA0021_ko4dz5.mp4";

  return (
    <div>
      <div className="relative h-screen bg-black">
        <video
          src={fallback ? fallbackVideo : mainVideo}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          onError={() => setFallback(true)}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black/30">
          <h1 className="text-5xl md:text-7xl font-great-vibes mb-4">Santiago & Estefania</h1>
          <p className="text-2xl md:text-4xl font-eb-garamond">Ambos dijimos "Sí"</p>

          <AudioPlayer track="violin" volume={0.1} loop />
        </div>
      </div>
    </div>
  );
};

export default SpecialIntro;

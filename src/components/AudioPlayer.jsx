import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultSong from "../assets/song/DJ Snake ft. Justin Bieber - Let Me Love You.mp3";
import violinSong from "../assets/song/Let Me Love You  Piano Cover  Sheet Music.mp3";

function AudioPlayer({ track = "default", volume = 0.3, loop = false }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const isViolin = track === "violin";
  const selectedSong = isViolin ? violinSong : defaultSong;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = loop;

    const handleTimeUpdate = () => {
      if (!loop && audio.currentTime >= 68) {
        audio.currentTime = 0;
        audio.play();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [loop, volume]);

  const handlePlayScroll = (e) => {
    e.preventDefault();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error", err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }

    const delay = isViolin ? 3000 : 1000;

    setTimeout(() => {
      const section = document.getElementById("nuestra-invitacion");
      section?.scrollIntoView({ behavior: "smooth" });
    }, delay);
  };

  return (
    <>
      <audio id="wedding-audio" ref={audioRef} preload="auto">
        <source src={selectedSong} type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      <div className="mt-12 iconos-musica text-white">
        <span className="inline-block px-8 py-3 disabled">
          <FontAwesomeIcon icon="heart" />
        </span>
        <span className="inline-block px-8 py-3 disabled">
          <FontAwesomeIcon icon="backward-step" />
        </span>
        <a
          id="play-and-scroll"
          href="#nuestra-invitacion"
          onClick={handlePlayScroll}
          className="play-button inline-block border-2 border-white text-white px-8 py-3 rounded-full transition duration-300"
          style={{ padding: "9px", margin: "3px", borderRadius: "9999px", borderColor: "black" }}
        >
          <FontAwesomeIcon icon={isPlaying ? "pause" : "play"} />
        </a>
        <span className="inline-block px-8 py-3 disabled">
          <FontAwesomeIcon icon="forward-step" />
        </span>
        <span className="inline-block px-8 py-3 disabled">
          <FontAwesomeIcon icon="plus" className="round-icon" />
        </span>
      </div>
    </>
  );
}

export default AudioPlayer;

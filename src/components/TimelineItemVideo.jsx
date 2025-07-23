import { useState } from "react";
import VideoPopUp from "./VideoPopUp";

function TimelineItemVideo({ title, text, videoUrl, thumb, type = "cloudinary", reverse }) {
  const [open, setOpen] = useState(false);
  const isVimeo = type === "vimeo";
  const vimeoId = isVimeo ? videoUrl.split("/").pop() : null;

  return (
    <>
      <div className={`mb-12 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center`}>
        <div className="md:w-1/2 px-4 relative cursor-pointer" onClick={() => setOpen(true)}>
          <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={
                isVimeo
                  ? `https://vumbnail.com/${vimeoId}.jpg`
                  : thumb
              }
              alt="Video thumbnail"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button className="bg-white bg-opacity-70 rounded-full p-4 shadow-md hover:bg-opacity-90 transition">
                ▶
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left md:px-8">
          <h3 className="text-2xl mb-4 font-dancing">{title}</h3>
          <p className="text-lg">{text}</p>
        </div>
      </div>

      {open && (
        <VideoPopUp
          videoUrl={videoUrl}
          type={type}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default TimelineItemVideo;

function VideoCard({ embedUrl, type = "cloudinary", orientation = "vertical" }) {
  const isCloudinaryEmbed = embedUrl.includes("cloudinary.com/embed");

  const aspectRatioStyle =
    orientation === "horizontal"
      ? { paddingTop: "56.25%" } // 16:9
      : { paddingTop: "133.33%" }; // 3:4 aprox vertical

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <div className="relative" style={aspectRatioStyle}>
        {type === "vimeo" || isCloudinaryEmbed ? (
          <iframe
            src={embedUrl}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            title="Video Player"
          />
        ) : (
          <video
            src={embedUrl}
            controls
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default VideoCard;

function VideoCard({
  embedUrl,
  type = "cloudinary",
  orientation = "vertical",
  onClick,
  isHidden = false, // 👈 nueva prop para ocultar el video si está activo en modal
}) {
  const isCloudinaryEmbed = embedUrl.includes("cloudinary.com/embed");

  const aspectRatioStyle =
    orientation === "horizontal"
      ? { paddingTop: "56.25%" } // 16:9
      : { paddingTop: "133.33%" }; // 3:4 aprox vertical

  const wrapperClass =
    "rounded overflow-hidden shadow-lg bg-white relative" +
    (onClick ? " cursor-pointer" : "");

  return (
    <div className={wrapperClass} onClick={onClick}>
      <div className="relative" style={aspectRatioStyle}>
        {!isHidden && (
          <>
            {type === "vimeo" || isCloudinaryEmbed ? (
              <iframe
                src={embedUrl}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                title="Video Player"
              />
            ) : (
              <video
                src={embedUrl}
                controls
                muted
                preload="metadata"
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default VideoCard;

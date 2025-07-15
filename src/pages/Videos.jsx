import ShareContact from "../components/ShareContact";
import VideoCard from "../components/VideoCard";

function Videos() {
  const cloudinaryVertical = [
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464516/WhatsApp_Video_2025-07-12_at_12.20.06_PM_kz3dkk.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464516/VID-20250712-WA0009_cdfs5m.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464516/WhatsApp_Video_2025-07-12_at_1.21.19_PM_arr54u.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464516/WhatsApp_Video_2025-07-12_at_1.21.22_PM_mydia6.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464516/WhatsApp_Video_2025-07-12_at_1.21.21_PM_yvpix7.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/VID-20250712-WA0021_ko4dz5.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/VID-20250712-WA0034_npbyym.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/VID-20250712-WA0025_oaww7l.mp4",
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464514/VID-20250712-WA0023_xn9ekr.mp4"
  ];

  const cloudinaryHorizontal = [
    "https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/2025-07-11_17-23-23_vbnbi8.mkv"
  ];

  const vimeoVideos = [
    "https://player.vimeo.com/video/1101099808",
    "https://player.vimeo.com/video/1101099065",
  ];

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-great-vibes text-primary mb-10">
        Videos Especiales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cloudinaryVertical.map((url, index) => (
          <VideoCard
            key={`cloud-v-${index}`}
            embedUrl={url}
            type="direct"
            orientation="vertical"
          />
        ))}
        {cloudinaryHorizontal.map((url, index) => (
          <VideoCard
            key={`cloud-h-${index}`}
            embedUrl={url}
            type="direct"
            orientation="horizontal"
          />
        ))}
        {vimeoVideos.map((url, index) => (
          <VideoCard
            key={`vimeo-${index}`}
            embedUrl={url}
            type="vimeo"
            orientation="horizontal"
          />
        ))}
      </div>
      <br></br>
      <ShareContact />
    </div>
  );
}

export default Videos;

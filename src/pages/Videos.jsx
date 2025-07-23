import { useEffect, useRef, useState } from "react";
import videoData from "../assets/videos/videos.json";
import PaginationControls from "../components/PaginationControls";
import VideoGallery from "../components/VideoGallery";
import VideoModal from "../components/VideoModal";
import VideoSelectorHeader from "../components/VideoSelectorHeader";
import ShareContact from "../components/ShareContact";

function Videos() {
  const allVideos = [
    ...(videoData.cloudinaryVertical || []).map((url) => ({
      url,
      type: "direct",
      orientation: "vertical",
    })),
    ...(videoData.cloudinaryHorizontal || []).map((url) => ({
      url,
      type: "direct",
      orientation: "horizontal",
    })),
    ...(videoData.vimeo || []).map((url) => ({
      url,
      type: "vimeo",
      orientation: "horizontal",
    })),
  ];

  const [videosPerPage, setVideosPerPage] = useState("4");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const containerRef = useRef(null);

  const totalVideos = allVideos.length;
  const perPage = videosPerPage === "all" ? totalVideos : parseInt(videosPerPage);
  const totalPages = Math.ceil(totalVideos / perPage);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentVideos = allVideos.slice(start, end);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div ref={containerRef} className="pt-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-great-vibes maintTittle mb-6">Videos Especiales</h2>

      <VideoSelectorHeader
        videosPerPage={videosPerPage}
        setVideosPerPage={(value) => {
          setVideosPerPage(value);
          setCurrentPage(1);
        }}
        start={start}
        end={end}
        total={totalVideos}
      />

      {videosPerPage !== "all" && (
        <>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <br />
          <VideoGallery videos={currentVideos} onOpen={setCurrentVideoIndex} startIndex={start} />
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      <br />
      <ShareContact />

      {isModalOpen || currentVideoIndex !== null ? (
        <VideoModal
          videos={allVideos}
          currentIndex={currentVideoIndex}
          onClose={() => {
            setIsModalOpen(false);
            setCurrentVideoIndex(null);
          }}
          onSelect={setCurrentVideoIndex}
        />
      ) : null}
    </div>
  );
}

export default Videos;

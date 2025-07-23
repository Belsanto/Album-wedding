function VideoSelectorHeader({ videosPerPage, setVideosPerPage, start, end, total }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
      <div>
        <label className="mr-2 font-semibold maintTittle">Mostrar:</label>
        <select
          className="border rounded px-2 py-1"
          value={videosPerPage}
          onChange={(e) => {
            setVideosPerPage(e.target.value);
          }}
        >
          <option value="4">4</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="all">Todos</option>
        </select>
        <label className="ml-2 font-semibold maintTittle">de {total} videos</label>
      </div>
      <p className="text-sm text-gray-700">
        Mostrando videos del {start + 1} al {Math.min(end, total)}
      </p>
    </div>
  );
}

export default VideoSelectorHeader;

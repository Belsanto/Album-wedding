function PaginationControls({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6 maintTittle">
      <button
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ⬅ Anterior
      </button>
      <span className="font-semibold text-gray-700 ">
        Página {currentPage} de {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente ➡
      </button>
    </div>
  );
}

export default PaginationControls;

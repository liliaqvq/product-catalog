import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 mx-1 border rounded cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-teal-500 text-white'}`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {/* Page number */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 mx-1 border rounded cursor-pointer ${currentPage === index + 1 ? 'bg-teal-500 text-white' : 'bg-white text-gray-700'}`}
        >
          {index + 1}
        </button>
      ))}
      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 mx-1 border rounded cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-teal-500 text-white'}`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

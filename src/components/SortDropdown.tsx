import React from 'react';

interface SortDropdownProps {
  sortOrder: 'asc' | 'desc';
  onSortChange: (order: 'asc' | 'desc') => void;
}
{/* Sorting by price low to high or high to low */}
const SortDropdown: React.FC<SortDropdownProps> = ({ sortOrder, onSortChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2 font-semibold text-gray-700 dark:text-white">Sort by Price:</label>
      <select
        id="sort"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as 'asc' | 'desc')}
        className="border p-2 rounded bg-white dark:bg-gray-700 text-gray-700 dark:text-white"
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;

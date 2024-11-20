import React from "react";

const SelectedFilters = ({ selectedFilters, removeFilter }) => {
  return (
    <div className="flex gap-2 mt-4">
      {selectedFilters.map((filter) => (
        <div
          key={filter}
          className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
        >
          {filter}
          <button
            className="ml-2 text-red-500 font-bold"
            onClick={() => removeFilter(filter)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters;

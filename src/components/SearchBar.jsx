import React from 'react';

const SearchBar = ({placeholder}) => {
  return (
    <div>
      <input
        type="url"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-80"
      />
    </div>
  );
};

export default SearchBar;

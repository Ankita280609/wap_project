import React from 'react';


const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for products..." />
      <button><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBar;




import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for products, services, or blog posts..." />
      <button><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBar;
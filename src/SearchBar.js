import React from "react";

const SearchBar = ({ searchField, searchChange }) => {
  return (
    <div className="tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for robros!"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;

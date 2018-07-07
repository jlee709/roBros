import React from "react";

const SearchBar = ({ searchfield, searchChange }) => {
  console.log("SearchBar");
  return (
    <div className="tc">
      <input
        aria-label="Search Robros"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for robros!"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;

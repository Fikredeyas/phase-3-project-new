import React from "react";

function Search({ setSearchTerm }) {

  const onSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Stuff:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;
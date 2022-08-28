import React from "react";

function Search({onChangeSearchText}) {

  // create a function that runs on change and passes search text to App component
  function handleChange(e) {
    onChangeSearchText(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

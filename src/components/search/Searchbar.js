import React from "react";

function Searchbar({ handleChange, value, handlePress }) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search"
      onChange={handleChange}
      value={value}
      onKeyPress={handlePress}
    />
  );
}
export default Searchbar;

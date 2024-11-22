import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        id="user-input"
        placeholder="검색어를 입력하세요."
        className="view-42"
      />
      <button className="view-43" aria-label="검색 버튼"></button>
    </div>
  );
}

export default SearchBar;

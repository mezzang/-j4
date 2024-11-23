// SearchBar.jsx
import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: absolute;
  width: 847px;
  height: 56px;
  top: 340px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  border-radius: 90px;
  border: 1px solid #a64040;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 2;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 18px;
  padding: 8px;
`;

const SearchButton = styled.button`
  width: 34px;
  height: 34px;
  background: url('/돋보기.png') no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // 검색어 전달
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton aria-label="검색 버튼"></SearchButton>
    </SearchBarContainer>
  );
}

export default SearchBar;

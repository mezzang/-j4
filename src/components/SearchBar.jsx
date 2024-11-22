// SearchBar.jsx
import React from "react";
import styled from "styled-components";

// 스타일 정의
const SearchBarContainer = styled.div`
  position: absolute;
  width: 847px;
  height: 56px;
  top: 560px;
  left: 330px;
  background-color: #ffffff;
  border-radius: 90px;
  border: 1px solid #a64040;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 2; /* Header 아래 */
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

// 컴포넌트 정의
function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        id="user-input"
        placeholder="검색어를 입력하세요."
      />
      <SearchButton aria-label="검색 버튼"></SearchButton>
    </SearchBarContainer>
  );
}

export default SearchBar;

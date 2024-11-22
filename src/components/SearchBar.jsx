import styled from "styled-components";

const SearchContainer = styled.div`
  position: absolute;
  width: 847px;
  height: 56px;
  top: 471px;
  left: 330px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 90px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.body};
`;

const SearchIcon = styled.div`
  width: 34px;
  height: 34px;
  background-image: url(./img/search.svg);
  background-size: cover;
`;

const SearchBar = () => (
  <SearchContainer>
    <SearchInput placeholder="검색어를 입력하세요." />
    <SearchIcon />
  </SearchContainer>
);

export default SearchBar;

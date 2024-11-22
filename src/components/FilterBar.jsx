// KNU_SEMINAR/src/components/FilterBar.js
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 30px auto;
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  border-radius: 20px;
  background-color: #eaeaea;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts.body};

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

const FilterBar = () => (
  <FilterContainer>
    {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
      <FilterButton key={day}>{day}</FilterButton>
    ))}
  </FilterContainer>
);

export default FilterBar;

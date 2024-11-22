// Filters.jsx
import React from "react";
import styled from "styled-components";

// Styled Components
const FiltersContainer = styled.div`
  position: absolute;
  width: 1002px;
  height: 219px;
  top: 410px;
  left: 330px;
  z-index: 1; /* SearchBar 아래 */
`;

const FilterSectionContainer = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TagButton = styled.button`
  padding: 8px 16px;
  border-radius: 9999px;
  background-color: #d6cdff;
  color: #000;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

// Functional Components
function Filters() {
  const categories = [
    "진로/취업",
    "4차 산업",
    "교양",
    "멘토링",
    "경진대회",
    "창업",
    "전공",
    "국제 교류",
  ];
  const etcOptions = ["식사 제공", "사전 신청", "무료", "유료"];
  const locations = ["IT대", "글로벌 플라자", "경상대", "공대", "기타"];
  const times = ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6시 이후"];
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <FiltersContainer>
      <FilterSection title="요일" tags={days} />
      <FilterSection title="시간" tags={times} />
      <FilterSection title="장소" tags={locations} />
      <FilterSection title="카테고리" tags={categories} />
      <FilterSection title="기타" tags={etcOptions} />
    </FiltersContainer>
  );
}

function FilterSection({ title, tags }) {
  return (
    <FilterSectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <TagsContainer>
        {tags.map((tag, index) => (
          <TagButton key={index}>{tag}</TagButton>
        ))}
      </TagsContainer>
    </FilterSectionContainer>
  );
}

export default Filters;

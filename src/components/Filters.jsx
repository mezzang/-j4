// Filters.jsx
import React from "react";
import styled from "styled-components";

// Styled Components
// 필터바 전체
const FiltersContainer = styled.div`
  position: absolute;
  width: 1002px;
  height: auto; /* 높이를 내용에 맞게 조정 */
  top: 420px;
  left: 50%; /* 부모 요소 기준으로 50% 이동 */
  transform: translateX(-50%); /* 가운데 정렬 */
  z-index: 1; /* SearchBar 아래 */
`;

// 태그 사이 위아래 간격
const FilterSection = styled.div`
  display: flex; /* 두 요소를 가로로 배치 */
  align-items: center; /* 세로 정렬 */
  margin-bottom: 9px; /* 각 섹션 간 간격 */
`;

// 요일, 시간, 장소
const SectionTitle = styled.h3`
  width: 100px; /* 고정 너비 */
  background-color: #fef1f1; /* 직사각형 배경색 */
  color: #000;
  font-family: "SUITE-Regular", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: center; /* 텍스트 가운데 정렬 */
  padding: 8px 12px; /* 텍스트 안쪽 여백 */
  border-radius: 12px; /* 덜 둥근 모양 */
  margin-right: 20px; /* TagGroup과 간격 */
  white-space: nowrap; /* 제목이 여러 줄로 넘어가지 않도록 */
  border: 1px solid #ffd9d9; /* 테두리 색상 */
`;

// 태그 사이 간격
// 태그들을 감싸는 그룹
const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap; /* 태그가 화면 너비 초과하면 자동으로 줄바꿈 */
  gap: 8px; /* 위아래 간격 */
`;

const Tag = styled.div`
  background-color: ${(props) => props.bgColor || "#e8f5ff"};
  color: #000;
  font-family: "SUITE-Regular", sans-serif;
  font-size: 17px;
  font-weight: 400;
  padding: 6px 12px;
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

// Functional Components
function Filters({ onTagSelect }) {
  return (
    <FiltersContainer>
      {/* 요일 섹션 */}
      <FilterSection>
        <SectionTitle>요일</SectionTitle>
        <TagGroup>
          <Tag onClick={() => onTagSelect("월")} bgColor="#ff9d8e">
            월
          </Tag>
          <Tag onClick={() => onTagSelect("화")} bgColor="#ffac9f">
            화
          </Tag>
          <Tag onClick={() => onTagSelect("수")} bgColor="#ffb8ad">
            수
          </Tag>
          <Tag onClick={() => onTagSelect("목")} bgColor="#ffc2b9">
            목
          </Tag>
          <Tag onClick={() => onTagSelect("금")} bgColor="#ffcbc3">
            금
          </Tag>
          <Tag onClick={() => onTagSelect("토")} bgColor="#ffd3cc">
            토
          </Tag>
          <Tag onClick={() => onTagSelect("일")} bgColor="#ffd9d3">
            일
          </Tag>
        </TagGroup>
      </FilterSection>

      {/* 시간 섹션 */}
      <FilterSection>
        <SectionTitle>시간</SectionTitle>
        <TagGroup>
          <Tag onClick={() => onTagSelect("9-10")} bgColor="#ffd69d">
            9-10
          </Tag>
          <Tag onClick={() => onTagSelect("10-11")} bgColor="#ffdcac">
            10-11
          </Tag>
          <Tag onClick={() => onTagSelect("11-12")} bgColor="#ffe1b8">
            11-12
          </Tag>
          <Tag onClick={() => onTagSelect("12-1")} bgColor="#ffe5c2">
            12-1
          </Tag>
          <Tag onClick={() => onTagSelect("1-2")} bgColor="#ffe9cb">
            1-2
          </Tag>
          <Tag onClick={() => onTagSelect("2-3")} bgColor="#ffecd3">
            2-3
          </Tag>
          <Tag onClick={() => onTagSelect("3-4")} bgColor="#ffefd9">
            3-4
          </Tag>
          <Tag onClick={() => onTagSelect("4-5")} bgColor="#fff1de">
            4-5
          </Tag>
          <Tag onClick={() => onTagSelect("5-6")} bgColor="#fff3e3">
            5-6
          </Tag>
          <Tag onClick={() => onTagSelect("6시 이후")} bgColor="#fff5e7">
            6시 이후
          </Tag>
        </TagGroup>
      </FilterSection>

      {/* 장소 섹션 */}
      <FilterSection>
        <SectionTitle>장소</SectionTitle>
        <TagGroup>
          <Tag onClick={() => onTagSelect("IT대")} bgColor="#fff1ac">
            IT대
          </Tag>
          <Tag onClick={() => onTagSelect("글로벌 플라자")} bgColor="#fff3b9">
            글로벌 플라자
          </Tag>
          <Tag onClick={() => onTagSelect("경상대")} bgColor="#fff5c3">
            경상대
          </Tag>
          <Tag onClick={() => onTagSelect("공대")} bgColor="#fff5c3">
            공대
          </Tag>
        </TagGroup>
      </FilterSection>

      {/* 카테고리 섹션 */}
      <FilterSection>
        <SectionTitle>카테고리</SectionTitle>
        <TagGroup>
          <Tag onClick={() => onTagSelect("진로/취업")} bgColor="#b1dfff">
            진로/취업
          </Tag>
          <Tag onClick={() => onTagSelect("4차 산업")} bgColor="#bce4ff">
            4차 산업
          </Tag>
          <Tag onClick={() => onTagSelect("교양")} bgColor="#c6e8ff">
            교양
          </Tag>
          <Tag onClick={() => onTagSelect("멘토링")} bgColor="#ceebff">
            멘토링
          </Tag>
          <Tag onClick={() => onTagSelect("경진대회")} bgColor="#d5eeff">
            경진대회
          </Tag>
          <Tag onClick={() => onTagSelect("네트워킹")} bgColor="#dbf0ff">
            네트워킹
          </Tag>
          <Tag onClick={() => onTagSelect("창업")} bgColor="#e0f2ff">
            창업
          </Tag>
          <Tag onClick={() => onTagSelect("전공심화")} bgColor="#e4f4ff">
            전공심화
          </Tag>
          <Tag onClick={() => onTagSelect("국제 교류")} bgColor="#e8f5ff">
            국제 교류
          </Tag>
        </TagGroup>
      </FilterSection>

      {/* 기타 섹션 */}
      <FilterSection>
        <SectionTitle>기타</SectionTitle>
        <TagGroup>
          <Tag onClick={() => onTagSelect("식사 제공")} bgColor="#d6cdff">
            식사 제공
          </Tag>
          <Tag onClick={() => onTagSelect("사전 신청")} bgColor="#ddd5ff">
            사전 신청
          </Tag>
          <Tag onClick={() => onTagSelect("무료")} bgColor="#e2dbff">
            무료
          </Tag>
          <Tag onClick={() => onTagSelect("유료")} bgColor="#e6e0ff">
            유료
          </Tag>
        </TagGroup>
      </FilterSection>
    </FiltersContainer>
  );
}

export default Filters;


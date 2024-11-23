import React from "react";
import styled from "styled-components";

// 스타일 정의
const ChosenTagContainer = styled.div`
  position: absolute;
  top: 672px; /* 위쪽에서의 거리 */
  left: 50%; /* 부모 요소 기준으로 가로 중앙 */
  transform: translateX(-50%); /* 가로 중앙 정렬 */
  width: 1250px;
  height: auto; /* 높이를 내용에 맞게 조정 */
  display: flex; /* 태그를 가로로 나열 */
  flex-wrap: wrap; /* 공간이 부족하면 다음 줄로 넘김 */
  gap: 10px; /* 태그 간 간격 */
  padding: 10px; /* 안쪽 여백 */
  justify-content: flex-start; /* 태그를 왼쪽 정렬 */
  align-items: center; /* 태그를 수직 가운데 정렬 */
`;

const Tag = styled.div`
  display: flex;
  align-items: center; /* 텍스트와 닫기 버튼 수직 정렬 */
  padding: 10px 15px; /* 텍스트 주변 여백 */
  background-color: #d8d8d8; /* 태그 배경색 */
  color: #000000; /* 텍스트 색상 */
  font-size: 16px; /* 텍스트 크기 */
  font-weight: 500; /* 글자 두께 */
  border-radius: 20px; /* 둥근 태그 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  transition: background-color 0.2s ease;
  box-shadow: none;

  &:hover {
    background-color: #e3e3e3; /* 호버 시 배경색 변경 */
  }

  span {
    margin-right: 10px; /* 텍스트와 닫기 아이콘 간격 */
  }

  .close-icon {
    font-size: 14px; /* 닫기 버튼 크기 */
    font-weight: bold;
    cursor: pointer;
  }
`;

// 선택된 태그 컴포넌트
function ChosenTag({ tags, onRemove }) {
  return (
    <ChosenTagContainer>
      {tags.map((tag, index) => (
        <Tag key={index}>
          <span>{tag}</span>
          <div
            className="close-icon"
            onClick={() => onRemove(tag)} // 태그 삭제 핸들러
          >
            ✖
          </div>
        </Tag>
      ))}
    </ChosenTagContainer>
  );
}

export default ChosenTag;

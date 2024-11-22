// SeminarList.jsx
import React from "react";
import styled from "styled-components";
import SeminarItem from "./SeminarItem";

// Styled Components
const SeminarListContainer = styled.div`
  position: absolute;
  width: 1013px;
  top: 840px;
  left: 247px;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #edbdbd;
  box-shadow: 0px 6px 4px #d8baa4;
  z-index: 0; /* 가장 아래 */
`;

const SeminarHeader = styled.div`
  display: flex;
  background-color: #fffbf6;
  border-bottom: 2px solid #edbcbc;
`;

const HeaderItem = styled.div`
  flex: 1;
  padding: 15px;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
`;

function SeminarList() {
  const seminars = [
    {
      id: 192,
      title: "소프트웨어 재난 연구센터 11월 초청 세미나 안내",
      author: "이민지",
      category: "4차산업, 교양",
      date: "2024.11.11.",
    },
  ];

  return (
    <SeminarListContainer>
      <SeminarHeader>
        <HeaderItem>번호</HeaderItem>
        <HeaderItem>제목</HeaderItem>
        <HeaderItem>작성자</HeaderItem>
        <HeaderItem>카테고리</HeaderItem>
        <HeaderItem>작성날짜</HeaderItem>
      </SeminarHeader>
      {seminars.map((seminar) => (
        <SeminarItem key={seminar.id} {...seminar} />
      ))}
    </SeminarListContainer>
  );
}

export default SeminarList;

// SeminarList.jsx
import React from "react";
import styled from "styled-components";
import SeminarItem from "./SeminarItem";

// Styled Components for SeminarList
const ListContainer = styled.div`
  position: absolute;
  width: 1013px;
  height: 445px;
  top: 860px;
  left: 247px;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #edbdbd;
  box-shadow: 0px 6px 4px #d8baa4;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #fffbf6;
  border-bottom: 2px solid #edbcbc;
  height: 56px;
`;

const HeaderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inder-Regular", Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  flex: ${({ flex }) => flex || 1};
`;

// Mock Data for SeminarList
const seminars = [
  {
    id: 192,
    title: "소프트웨어 재난 연구센터 11월 초청 세미나 안내",
    author: "이민지",
    category: "4차산업, 교양",
    date: "2024.11.11.",
  },
  // 추가 세미나 데이터...
];

function SeminarList() {
  return (
    <ListContainer>
      {/* Header */}
      <HeaderRow>
        <HeaderCell flex="0.5">번호</HeaderCell>
        <HeaderCell flex="3">제목</HeaderCell>
        <HeaderCell flex="1.5">작성자</HeaderCell>
        <HeaderCell flex="2">카테고리</HeaderCell>
        <HeaderCell flex="1.5">작성날짜</HeaderCell>
      </HeaderRow>
      {/* Seminar Items */}
      {seminars.map((seminar) => (
        <SeminarItem key={seminar.id} {...seminar} />
      ))}
    </ListContainer>
  );
}

export default SeminarList;

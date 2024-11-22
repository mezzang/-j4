// SeminarItem.jsx
import React from "react";
import styled from "styled-components";

// Styled Components for SeminarItem
const SeminarRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #fffbf6;
  border-bottom: 1px solid #edbdbd;
  height: 52px;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inder-Regular", Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  flex: ${({ flex }) => flex || 1};
`;

function SeminarItem({ id, title, author, category, date }) {
  return (
    <SeminarRow>
      <Cell flex="0.5">{id}</Cell>
      <Cell flex="3">{title}</Cell>
      <Cell flex="1.5">{author}</Cell>
      <Cell flex="2">{category}</Cell>
      <Cell flex="1.5">{date}</Cell>
    </SeminarRow>
  );
}

export default SeminarItem;

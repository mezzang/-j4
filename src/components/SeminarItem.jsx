import React from "react";
import styled from "styled-components";

// Styled Components
const SeminarRow = styled.div`
  display: flex;
  background-color: #fffbf6;
  border-bottom: 1px solid #edbdbd;
`;

const SeminarCell = styled.div`
  flex: 1;
  padding: 15px;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
`;

// Functional Component
function SeminarItem({ id, title, author, category, date }) {
  return (
    <SeminarRow>
      <SeminarCell>{id}</SeminarCell>
      <SeminarCell>{title}</SeminarCell>
      <SeminarCell>{author}</SeminarCell>
      <SeminarCell>{category}</SeminarCell>
      <SeminarCell>{date}</SeminarCell>
    </SeminarRow>
  );
}

export default SeminarItem;

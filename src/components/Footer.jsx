// Footer.jsx
import styled from "styled-components";

// Styled Footer
const StyledFooter = styled.footer`
  position: fixed; /* 페이지 하단 고정 */
  bottom: 0;
  left: 0;
  width: 100%; /* 화면 전체 너비 */
  background-color: #f4f4f4; /* 부드러운 배경색 */
  text-align: center;
  padding: 10px 0; /* 위아래 여백 */
  font-size: 14px; /* 텍스트 크기 */
  color: #555; /* 텍스트 색상 */
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1); /* 상단 그림자 효과 */
  z-index: 10; /* 다른 컴포넌트보다 위 */
`;

function Footer() {
  return (
    <StyledFooter>
      <p>© 2024 Seminar.zip | Created by KNU IT Students</p>
    </StyledFooter>
  );
}

export default Footer;

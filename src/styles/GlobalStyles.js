import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
  }

  .desktop {
    position: relative;
    width: 100%;
    max-width: 1440px; /* 최대 크기 */
    height: auto;
    margin: 0 auto; /* 중앙 정렬 */
    background-color: #ffffff;
    border-radius: 0px 0px 400px 400px; /* 하단 모서리 둥글게 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 */
  }

  /* 반응형 처리 */
  @media (max-width: 768px) {
    .desktop {
      padding: 16px; /* 모바일에서 내부 여백 추가 */
      border-radius: 0; /* 둥근 모서리 제거 */
    }
  }
    .frame {
  position: absolute;
  width: 1440px;
  height: 942px;
  top: 0;
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%); /* 그라데이션 효과 */
  border-radius: 0px 0px 600px 600px; /* 하단 모서리에 곡선 추가 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
  z-index: -1; /* 다른 모든 요소 뒤로 배치 */
}

`;

export default GlobalStyles;
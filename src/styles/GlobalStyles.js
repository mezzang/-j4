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
    height: 2100px;
    margin: 0 auto; /* 중앙 정렬 */
    background-color: #fae8dc;
    z-index: 1; /* 컴포넌트들이 보이도록 설정 */
    padding: 20px; /* 내부 컴포넌트 여백 */
    
  }

  /* frame은 배경으로만 동작 */
  .frame {
    position: absolute;
    width: 2300px; /* 기존보다 더 크게 설정 */
    height: 1000px; /* 높이도 조정 */
    top: -10px; /* 위쪽에서 조금 더 내려옴 */
    left: -430px; /* 왼쪽으로 치우쳐서 중심 조정 */
    background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%); /* 그라데이션 효과 */
    border-radius: 0px 0px 800px 800px; /* 더 부드러운 곡선 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
    z-index: -1; /* 다른 모든 요소 뒤로 배치 */
  }

  /* 반응형 처리 */
  @media (max-width: 768px) {
    .desktop {
      padding: 16px; /* 모바일에서 내부 여백 추가 */
      border-radius: 0; /* 둥근 모서리 제거 */
    }
  }

  @font-face{
    font-family:'bitbit';
    src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
  }
  @font-face {
      font-family: 'Cafe24Decoschool';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/Cafe24Decoschool.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'Paperlogy-8ExtraBold';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
      font-weight: 800;
      font-style: normal;
  }
  @font-face {
      font-family: 'SUITE-Regular';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
  }

`;

export default GlobalStyles;

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

  @media (max-width: 768px) {
  .desktop {
    width: 100%;
    height: auto;
  }
}

  .overlap {
    position: relative;
    width: 1500px;
    height: 1291px;
    top: -267px;
    left: -33px;
  }
`;

export default GlobalStyles;

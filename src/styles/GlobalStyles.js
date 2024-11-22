import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inder-Regular", Helvetica, sans-serif;
    background-color: #fae8dc;
    overflow-x: hidden;
  }

  .desktop {
    width: 1440px;
    height: 1024px;
    overflow: hidden;
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

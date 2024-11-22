// GlobalStyles.js
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
`;

export default GlobalStyles;

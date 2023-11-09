import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2 {
    margin: 0;
  }

  html {
    font-family: ${({ theme }) => theme.typography.mainFontFamily}
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;

  }
  
  button {
    border: none;
    font: inherit;
    background-color: transparent;
  }

  input {
    font: inherit
  }

  input[type="checkbox"] {
width: 30px;
height: 30px;

  }
`;

export default GlobalStyle;

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
`;

export default GlobalStyle;

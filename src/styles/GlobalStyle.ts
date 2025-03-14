import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', serif;
  }

  body {
    background-color: #f0f0f0;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Variables */
  :root {
    --primary-color: #000000;
    --secondary-color: #FFFFFF;
    --tertiary-color: #737373;
    --accent-color: #FF7700;
    --gray-light: #E0E0E0;
    --gray-medium: #B0B0B0;
    --gray-dark: #707070;
    --header-height: 50px;
  }
`;

export default GlobalStyle;
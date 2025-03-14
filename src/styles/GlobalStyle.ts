import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', serif;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
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

  /* Responsive font sizes */
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }
  
  h2 {
    font-size: clamp(1.3rem, 4vw, 2rem);
  }
  
  h3 {
    font-size: clamp(1.1rem, 3vw, 1.75rem);
  }

  /* Variables */
  :root {
    --primary-color: #000000;
    --secondary-color: #FFFFFF;
    --tertiary-color: #737373;
    --accent-color: #444;
    --gray-light: #E0E0E0;
    --gray-medium: #B0B0B0;
    --gray-dark: #707070;
    --header-height: 50px;
  }
  
  /* Media queries */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
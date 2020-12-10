import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font_primary};
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, a, p, li {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color_primary};
  }


`;

export default GlobalStyles;

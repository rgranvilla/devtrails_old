import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

interface ThemeProps {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<ThemeProps>`
  :root{
    font-size: 10px;
  }

  *, *::after, *::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: ${({ theme }) => theme.bgDark};
    color: ${({theme}) => theme.textLight};
    height: 100vh;
  }

  a{
    text-decoration: none;
    color: #293241;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;

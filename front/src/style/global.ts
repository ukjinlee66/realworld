import { createGlobalStyle } from 'styled-components';
import './reset.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, system-ui, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.white};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
`;

export default GlobalStyle;

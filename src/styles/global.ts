import { Inter } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

export const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: ${inter.style.fontFamily}, sans-serif;
  font-weight: 400;
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  
  scroll-behavior: auto;
}
`;
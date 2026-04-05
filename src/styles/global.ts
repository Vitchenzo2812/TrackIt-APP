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
  height: 100%;
  font-size: 62.5%;
}

body {
  overflow-x: hidden;
  scroll-behavior: auto;
  overscroll-behavior: none;
  background-color: #fff7f5;

  ::-webkit-scrollbar {
    display: none;
  }
}

#__next {
  height: 100%;
}
`;
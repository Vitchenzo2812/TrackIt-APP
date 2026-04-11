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
  scroll-behavior: smooth;
  overscroll-behavior: none;
  background-color: #fff7f5;
}

/* Scrollbar - Chrome, Edge, Safari */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.35);
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

#__next {
  height: 100%;
}
`;
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  colors: {
    body: '#FFFFFF',
    text: '#363537',
    background: '#FFFFFF',
    toggleButton: '#808080',
  },
};
export const darkTheme = {
  colors: {
    body: '#363537',
    text: '#FAFAFA',
    background: '#000000',
    toggleButton: '#C0C0C0',
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    transition: all 0.50s linear;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.body};
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

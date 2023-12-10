import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  colors: {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
  },
};
export const darkTheme = {
  colors: {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    transition: all 0.50s linear;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.body};
  }
`;

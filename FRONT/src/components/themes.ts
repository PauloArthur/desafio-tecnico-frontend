import { createGlobalStyle } from 'styled-components';

const { VITE_PRIMARY, VITE_SECONDARY } = import.meta.env;

export const lightTheme = {
  colors: {
    primary: VITE_PRIMARY,
    secondary: VITE_SECONDARY,
    body: '#FFFFFF',
    text: '#464547',
    background: '#FFFFFF',
    toggleButton: '#808080',
  },
};
export const darkTheme = {
  colors: {
    primary: VITE_SECONDARY,
    secondary: VITE_PRIMARY,
    body: '#363537',
    text: '#FAFAFA',
    background: '#161517',
    toggleButton: '#F0F0F0',
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    transition: all 0.50s linear;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primary ?? theme.colors.body};
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

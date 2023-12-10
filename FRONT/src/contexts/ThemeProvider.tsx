import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './themes';

interface ThemeHook {
  isDarkMode: boolean;
  themeToggler: () => void;
}

const ThemeContext = createContext<ThemeHook>({
  isDarkMode: false,
  themeToggler: () => null,
});

export const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeToggler = () => {
    setIsDarkMode((curr) => !curr);
  };

  const hooks: ThemeHook = { isDarkMode, themeToggler };

  return (
    <ThemeContext.Provider value={hooks}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeHook => useContext(ThemeContext);

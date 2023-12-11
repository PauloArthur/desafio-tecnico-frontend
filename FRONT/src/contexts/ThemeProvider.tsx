import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { LocalStorage } from '@consts/localStorage';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from '@components/themes';

interface ThemeHook {
  isDarkMode: boolean;
  themeToggler: () => void;
}

const ThemeContext = createContext<ThemeHook>({
  isDarkMode: false,
  themeToggler: () => null,
});

export const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem(LocalStorage.IS_DARKMODE_THEME) === 'true',
  );

  const setIsDarkModeHandler = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
    localStorage.setItem(
      LocalStorage.IS_DARKMODE_THEME,
      JSON.stringify(isDarkMode),
    );
  };

  const themeToggler = () => {
    setIsDarkModeHandler(!isDarkMode);
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setIsDarkModeHandler(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    setIsDarkModeHandler(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

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

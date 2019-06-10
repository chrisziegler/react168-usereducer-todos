import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../theme/theme.js';

const defaultContextData = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
    hasThemeMounted: false,
  });
  React.useEffect(() => {
    /* If dark is set to true in localStorage, we update the state
     to reflect this and the theme that will be passed to our Styled 
     Theme Provider will be the dark one. */
    const lsDark = localStorage.getItem('dark') === 'true';
    // Else, we’ll keep the default state which means that the app will render in light mode
    setThemeState({
      ...themeState,
      dark: lsDark,
      hasThemeMounted: true,
    });
    // Doing this makes sure that we only call this useEffect when the ThemeProvider component
    // mounts, or themeState is updated
  }, [themeState]);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark
    ? theme('dark')
    : theme('light');

  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export { ThemeProvider, useTheme };

import React, { createContext, useReducer } from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
export const ThemeContext = createContext({ toggleColorMode: () => {} })

export const ThemeAppProvider = (props) => {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          '--theme-background': {
            light: '#f9fdff',
            dark: '#121212',
          },
          '--theme-font-color__primary': {
            light: '#fff',
            dark: '#272727',
          },
          '--theme-font-color__tertiary': {
            light: '#2e2c34',
            dark: '#fff'
          }
        },
      }),
    [mode],
  );
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
import { createTheme, ThemeOptions } from '@mui/material/styles'

const getDesignTokens = (mode: string) => <ThemeOptions>({
  typography: {
    fontFamily: [
      'Montserrat',
      'system-ui',
      'sans-serif',
    ].join(','),
  },

  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#FFFFFF"
          },
          background: {
            default: '#000000',
            paper: '#000000'
          }
        }),
  },
})

export const theme = createTheme(getDesignTokens('dark'))

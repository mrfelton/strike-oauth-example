import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode: string) => ({
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
          },
          text: {
            // primary: '#fff',
            // secondary: '#000000',
          },
        }),
  },
});



getDesignTokens

export const theme = createTheme(getDesignTokens('dark'))

// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: 'FFFFFF',
//     }
//   },
//
//   typography: {
//     fontFamily: [
//       'Montserrat',
//       'system-ui',
//       'sans-serif',
//     ].join(','),
//   }
// });

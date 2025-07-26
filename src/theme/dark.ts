// src/theme/darkTheme.ts
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4169E1', // Royal Blue
    },
    secondary: {
      main: '#5C6BC0',
    },
    background: {
      default: '#0A0E1A',
      paper: '#121B2B',
    },
    text: {
      primary: '#E3F2FD',
      secondary: '#90A4AE',
    },
  },
  typography: {
    fontFamily: `'Segoe UI', Roboto, sans-serif`,
    allVariants: {
      color: '#E3F2FD',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0A0E1A',
          color: '#E3F2FD',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#121B2B',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121B2B',
          color: '#E3F2FD',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#4169E1',
          '&:hover': {
            backgroundColor: '#365ac1',
          },
        },
        outlinedPrimary: {
          borderColor: '#4169E1',
          color: '#4169E1',
          '&:hover': {
            borderColor: '#365ac1',
            color: '#365ac1',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A2333',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4169E1',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#365ac1',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4169E1',
          },
        },
        input: {
          color: '#E3F2FD',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#90A4AE',
          '&.Mui-focused': {
            color: '#4169E1',
          },
        },
        asterisk: {
          color: 'red',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#E3F2FD',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#E3F2FD',
        },
      },
    },
  },
});

export default darkTheme;

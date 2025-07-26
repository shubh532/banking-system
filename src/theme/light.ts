import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2', // Trendex blue
    },
    secondary: {
      main: '#5C6BC0',
    },
    background: {
      default: '#F9FAFB', // light gray bg
      paper: '#FFFFFF',   // white cards
    },
    text: {
      primary: '#111827', // dark gray text
      secondary: '#6B7280', // muted gray
    },
  },
  typography: {
    fontFamily: `'Inter', 'Segoe UI', Roboto, sans-serif`,
    h6: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.95rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12, // smoother cornering
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F9FAFB',
          color: '#111827',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 12px rgba(9, 64, 101, 0.27)',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#111827',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          background: 'linear-gradient(to right, #1976D2, #2196F3)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(to right, #1565C0, #1E88E5)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E0E0E0',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#90CAF9',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976D2',
          },
        },
        input: {
          color: '#111827',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#6B7280',
          '&.Mui-focused': {
            color: '#1976D2',
          },
        },
        asterisk: {
          color: 'red',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#111827',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#111827',
        },
      },
    },
  },
});

export default lightTheme;

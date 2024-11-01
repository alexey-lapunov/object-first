import { ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#5F3196',
    },
    success: {
      main: '#1A8754',
    },
    error: {
      main: '#DC3545',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        colorSuccess: {
          backgroundColor: '#F4F9F6',
          color: '#1A8754',
        },
        colorError: {
          backgroundColor: '#FEF5F6',
          color: '#DC3545',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6.25rem',
          textTransform: 'none',
        },
      },
    },
  },
};

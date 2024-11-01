import { Provider } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { store } from '@/store/store';
import { theme } from '@/styles/theme';

interface IProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<IProps> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={createTheme(theme)}>{children}</ThemeProvider>
  </Provider>
);

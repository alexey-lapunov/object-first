import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({
  padding: '1rem',
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
});

export const Content = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '.5rem',
  boxSizing: 'border-box',

  height: '100%',
});

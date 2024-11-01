import { Typography } from '@mui/material';
import { styled } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',

  '& span': {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '1.687rem',
    height: '1.687rem',

    background: 'white',
    borderRadius: '50%',
    fontSize: '.875rem',
    fontWeight: '700',
    color: theme.palette.primary.main,
  },
}));

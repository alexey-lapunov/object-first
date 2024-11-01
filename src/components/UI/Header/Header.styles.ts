import { NavLink } from 'react-router-dom';

import styled from '@mui/system/styled';

export const StyledHeader = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1.25rem 2.5rem',

  background: 'white',
});

export const StyledList = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  listStyle: 'none',
  margin: 0,
  padding: 0,

  fontSize: '1rem',
});

export const StyledUserContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  gap: '1rem',
});

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  fontWeight: 'normal',

  '&.active': {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textDecoration: 'underline',
  },
}));

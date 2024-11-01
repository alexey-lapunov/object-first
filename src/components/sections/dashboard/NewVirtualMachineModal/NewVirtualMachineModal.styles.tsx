import { DialogContent, IconButton, Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Header = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.625rem 0.5rem 0.625rem 1.5rem',
});

export const Container = styled('div')({
  display: 'flex',
});

export const SidePanel = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '300px',
  padding: '2rem 1.5rem',

  backgroundColor: '#5F3196',
  color: 'white',

  overflow: 'hidden',
});

export const SidePanelContent = styled('div')({
  position: 'relative',
  marginBottom: '150%',

  zIndex: 1,
});

export const IllustrationWrapper = styled('div')({
  position: 'absolute',
  bottom: '-.375rem',
  right: 0,
});

export const MainContent = styled(DialogContent)({
  padding: '2rem',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
});

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',
});

export const Field = styled(TextField)({
  margin: '2rem 0 0 0',
});

export const ReviewContainer = styled(Paper)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  padding: '1.5rem 1.5rem .5rem 1.5rem',
  marginTop: '2rem',
  backgroundColor: '#FFF7FF',
  borderRadius: '.5rem',

  boxShadow: 'none',
});

export const ReviewRow = styled('div')({
  display: 'flex',
  padding: '.75rem 0',

  width: '100%',

  borderBottom: '1px solid #CCC4CE',
});

export const ReviewLabel = styled('p')({
  width: '20%',
  margin: 0,

  fontSize: '.875rem',
  color: '#4A454E',
});

export const ReviewValue = styled('p')({
  width: '80%',
  margin: 0,

  fontSize: '1rem',
  color: '#1E1A20',

  wordBreak: 'break-word',
  whiteSpace: 'normal',
});

export const EditButton = styled(IconButton)({
  marginTop: '.5rem',
});

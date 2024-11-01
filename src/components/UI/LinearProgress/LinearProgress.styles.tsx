import MuiLinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  gap: '.5rem',
});

export const StyledText = styled('p')({
  margin: 0,
  fontSize: '.875rem',
  textAlign: 'left',
  color: '#212529',
});

export const StyledLinearProgress = styled(MuiLinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#F8F6FB',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

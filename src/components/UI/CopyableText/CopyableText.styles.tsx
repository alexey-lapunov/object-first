import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const Text = styled(Typography)({
  maxWidth: '150px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

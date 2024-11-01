import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { AlertProps } from './Alert';

const getColor = (type: string) => {
  switch (type) {
    case 'critical':
      return '#D32F2F';
    case 'important':
      return '#F57C00';
    case 'moderate':
      return '#FBC02D';
    case 'success':
      return '#388E3C';
    default:
      return '#388E3C';
  }
};

export const Container = styled(Box)<{ type: AlertProps['type'] }>(
  ({ type }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 0',
    fontWeight: 500,
    color: getColor(type),
  }),
);

export const AlertIcon = styled('div')<{ type: AlertProps['type'] }>(
  ({ type }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: getColor(type),
    svg: {
      fontSize: '24px',
    },
  }),
);

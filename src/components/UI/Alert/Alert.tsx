import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography } from '@mui/material';

import { AlertIcon, Container } from './Alert.styles';

export interface AlertProps {
  type: 'critical' | 'important' | 'moderate' | 'success';
  count?: number;
  label: string;
}

export const Alert: React.FC<AlertProps> = ({ type, count, label }) => {
  const renderIcon = () => {
    if (type === 'success') return <CheckCircleIcon />;
    return <ErrorOutlineIcon />;
  };

  return (
    <Container type={type}>
      <AlertIcon type={type}>{renderIcon()}</AlertIcon>
      {count && <Typography variant="body1">{count}</Typography>}
      <Typography variant="body1">{label}</Typography>
    </Container>
  );
};

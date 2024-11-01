import React from 'react';

import { Typography } from '@mui/material';

import { Container, Content } from './TitleBox.styles';

interface IProps {
  title: string;
  children: JSX.Element;
  className?: string;
}

export const TitleBox: React.FC<IProps> = ({ title, children, className }) => (
  <Container className={className}>
    <Typography variant="h6">{title}</Typography>
    <Content>{children}</Content>
  </Container>
);

import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const ChartContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CenteredText = styled('div')({
  position: 'absolute',
  textAlign: 'center',
});

export const LegendContainer = styled('div')({
  marginLeft: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const LegendItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const ColorCircle = styled('div')<{ color: string }>(({ color }) => ({
  width: 12,
  height: 12,
  backgroundColor: color,
  borderRadius: '50%',
}));

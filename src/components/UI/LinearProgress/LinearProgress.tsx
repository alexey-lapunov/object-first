import {
  StyledContainer,
  StyledLinearProgress,
  StyledText,
} from './LinearProgress.styles';

interface IProps {
  value?: number;
  text: string;
}

export const LinearProgress: React.FC<IProps> = ({ value = 50, text }) => (
  <StyledContainer>
    <StyledText>{text}</StyledText>
    <StyledLinearProgress variant="determinate" value={value} />
  </StyledContainer>
);

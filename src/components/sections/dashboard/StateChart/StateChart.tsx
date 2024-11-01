import { Typography } from '@mui/material';
import { Cell, Pie, PieChart } from 'recharts';

import { TitleBox } from '@/components/UI';

import {
  CenteredText,
  ChartContainer,
  ColorCircle,
  Container,
  LegendContainer,
  LegendItem,
} from './StateChart.styles';

interface IProps {
  data: { name: string; value: number; color: string }[];
  className?: string;
}

export const StateChart: React.FC<IProps> = ({ data, className }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <TitleBox title="State" className={className}>
      <Container>
        <ChartContainer>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <CenteredText>
            <Typography variant="h4" component="div">
              {total}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Total number
            </Typography>
          </CenteredText>
        </ChartContainer>
        <LegendContainer>
          {data.map((entry) => (
            <LegendItem key={entry.name}>
              <ColorCircle color={entry.color} />
              <Typography variant="body1">
                {entry.value} {entry.name}
              </Typography>
            </LegendItem>
          ))}
        </LegendContainer>
      </Container>
    </TitleBox>
  );
};

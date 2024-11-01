import React from 'react';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { TitleBox } from '@/components/UI';

interface IProps {
  data: { date: string; value: number }[];
  className?: string;
}

export const TrendAreaChart: React.FC<IProps> = ({ data, className }) => (
  <TitleBox title="Trend" className={className}>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5F3196" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#5F3196" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#6b7280' }} />
        <YAxis
          tick={{ fontSize: 12, fill: '#6b7280' }}
          tickFormatter={(value) => `${value}\u00A0TB`}
        />
        <Tooltip formatter={(value) => `${value} TB`} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#5F3196"
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </TitleBox>
);

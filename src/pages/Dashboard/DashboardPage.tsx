import { useState } from 'react';
import { useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  NewVirtualMachineModal,
  StateChart,
  TrendAreaChart,
  VirtualMachinesTable,
} from '@/components/sections/dashboard';
import { RootState } from '@/store/store';

import { Title } from './DashboardPage.styles';

const lineChartData = [
  { date: '11/06', value: 200 },
  { date: '13/06', value: 400 },
  { date: '15/06', value: 600 },
  { date: '17/06', value: 800 },
  { date: '19/06', value: 1200 },
  { date: '21/06', value: 1500 },
  { date: '23/06', value: 1600 },
  { date: '25/06', value: 1400 },
  { date: '27/06', value: 1200 },
];

const pieChartData = [
  { name: 'Running', value: 12, color: '#4CAF50' },
  { name: 'Stopped', value: 4, color: '#D32F2F' },
];

const ChartsContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
});

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '2rem 0 1.5rem',
});

const PieChartWrapper = styled(StateChart)({ width: '35%' });
const LineChartWrapper = styled(TrendAreaChart)({ width: '65%' });

export const DashboardPage = () => {
  const [open, setOpen] = useState(false);
  const tableData = useSelector(
    (state: RootState) => state.virtualMachines.list,
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ChartsContainer>
        <PieChartWrapper data={pieChartData} />
        <LineChartWrapper data={lineChartData} />
      </ChartsContainer>

      <Header>
        <Title variant="h6">
          Virtual machines <span>{tableData.length}</span>
        </Title>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          New
        </Button>
      </Header>

      <VirtualMachinesTable data={tableData} />
      <NewVirtualMachineModal open={open} onClose={handleClose} />
    </>
  );
};

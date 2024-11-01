import React from 'react';

import { Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';

import { Alert, CopyableText, LinearProgress } from '@/components/UI';
import { VirtualMachinesState } from '@/store/virtualMachinesSlice';

import {
  StyledHeadRow,
  StyledTableCell,
  StyledTableRow,
} from './VirtualMachinesTable.styles';

interface IProps {
  data: VirtualMachinesState['list'];
}

const parseNumericValue = (text: string) => {
  const match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const MAX_CPU = 12;
const MAX_MEMORY = 64;

export const VirtualMachinesTable: React.FC<IProps> = ({ data }) => (
  <Table>
    <TableHead>
      <StyledHeadRow>
        <StyledTableCell>
          <p>ID</p>
        </StyledTableCell>
        <StyledTableCell>State</StyledTableCell>
        <StyledTableCell>Host server</StyledTableCell>
        <StyledTableCell>CPU</StyledTableCell>
        <StyledTableCell>Memory</StyledTableCell>
        <StyledTableCell>Uptime</StyledTableCell>
        <StyledTableCell>Alerts</StyledTableCell>
      </StyledHeadRow>
    </TableHead>
    <TableBody>
      {data.map((row, index) => {
        const cpuValue = (parseNumericValue(row.cpu) / MAX_CPU) * 100;
        const memoryValue = (parseNumericValue(row.memory) / MAX_MEMORY) * 100;

        return (
          <StyledTableRow key={index}>
            <TableCell scope="row">
              <CopyableText text={row.id} />
            </TableCell>
            <TableCell>
              <Chip label={row.state} color="success" />
            </TableCell>
            <TableCell>{row.hostServer}</TableCell>
            <TableCell>
              <LinearProgress text={row.cpu} value={cpuValue} />
            </TableCell>
            <TableCell>
              <LinearProgress text={row.memory} value={memoryValue} />
            </TableCell>
            <TableCell>{row.uptime}</TableCell>
            <TableCell>
              <Alert
                type={row.alerts.type}
                count={row.alerts.count}
                label={row.alerts.label}
              />
            </TableCell>
          </StyledTableRow>
        );
      })}
    </TableBody>
  </Table>
);

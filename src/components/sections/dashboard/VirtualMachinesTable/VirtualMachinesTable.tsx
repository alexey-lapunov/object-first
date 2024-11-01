import React from 'react';

import { Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Alert, CopyableText, LinearProgress } from '@/components/UI';
import { VirtualMachinesState } from '@/store/virtualMachinesSlice';

import { StyledTableCell, StyledTableRow } from './VirtualMachinesTable.styles';

interface IProps {
  data: VirtualMachinesState['list'];
}

export const VirtualMachinesTable: React.FC<IProps> = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow>
        <StyledTableCell>
          <p>ID</p>
        </StyledTableCell>
        <StyledTableCell>State</StyledTableCell>
        <StyledTableCell>Host server</StyledTableCell>
        <StyledTableCell>CPU</StyledTableCell>
        <StyledTableCell>Memory</StyledTableCell>
        <StyledTableCell>Uptime</StyledTableCell>
        <StyledTableCell>Alerts</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row, index) => (
        <StyledTableRow key={index}>
          <TableCell scope="row">
            <CopyableText text={row.id} />
          </TableCell>
          <TableCell>
            <Chip label={row.state} color="success" />
          </TableCell>
          <TableCell>{row.hostServer}</TableCell>
          <TableCell>
            <LinearProgress text={row.cpu} />
          </TableCell>
          <TableCell>
            <LinearProgress text={row.memory} />
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
      ))}
    </TableBody>
  </Table>
);

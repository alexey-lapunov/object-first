import { styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableRow = styled(TableRow)({
  '& th, & td': {
    borderBottom: '2px solid #F9FAFB',
    backgroundColor: 'white',
  },
  '&:first-of-type td:first-of-type': {
    borderRadius: '.5rem 0 0 0',
  },
  '&:first-of-type td:last-of-type': {
    borderRadius: '0 .5rem 0 0',
  },
  '&:last-of-type td:first-of-type': {
    borderRadius: '0 0 0 .5rem',
  },
  '&:last-of-type td:last-of-type': {
    borderRadius: '0 0 .5rem 0',
  },
});

export const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    border: 0,

    fontWeight: 400,
    color: '#495057',
  },
});

export const StyledHeadRow = styled(TableRow)({
  '& th': {
    fontFamily: 'Manrope, sans-serif',
    padding: '0 1rem',
  },
});

import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales/useFamiliasProfesionales";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function FamiliasProfesionales() {

    const {lista, buscando} = useFamiliasProfesionales();
    

    function listarFamiliasProfesionales(familia) {
        return <StyledTableRow key={familia.codigo}>
                    <StyledTableCell>{familia.codigo}</StyledTableCell>
                    <StyledTableCell align="left">{familia.nombre}</StyledTableCell>
                </StyledTableRow>
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>CODIGO</StyledTableCell>
                            <StyledTableCell align="left">NOMBRE</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {lista.map(listarFamiliasProfesionales)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default FamiliasProfesionales
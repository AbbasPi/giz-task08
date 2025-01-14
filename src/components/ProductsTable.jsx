import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaTimes } from 'react-icons/fa'
import Drawer from './Drawer';
import AddProduct from './AddProduct'

export default function DenseTable({products, onDelete, onAdd}) {
    return (
<Drawer>
        <TableContainer style={{marginTop:'80px'}}  component={Paper}>
  <AddProduct onAdd={onAdd}/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price&nbsp;($)</TableCell>
            <TableCell>Category</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {products.map((row) => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.name}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell><FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(row.id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </Drawer>
  );
}

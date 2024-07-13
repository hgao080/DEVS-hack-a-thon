import React from 'react';
import Sidebar from '../Components/Sidebar';
import { FaLeaf } from 'react-icons/fa';
import styles from '../ComponentStyles/DashboardYear.module.css'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(Month, amount) {
  return { Month, amount};
}

const rows = [
  createData('January', 630000),
  createData('February', 630000),
  createData('March', 630000),
  createData('April', 630000),
  createData('May', 630000),
  createData('June', 630000),
  createData('July', 630000),
  createData('August', ),
  createData('September', ),
  createData('October', ),
  createData('November', ),
  createData('December', ),
  createData('Total', 4410000),
];

const DashboardYear = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
        <div className="right">
            <div className="title">
                <div className="titleright">
                    <div className="text">Green<span className="green">Print</span>Life</div>
                        <FaLeaf className="green" />
                    </div>
                </div>
            <h1>This Year's Print</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Month</TableCell>
                            <TableCell align="right">Carbon Emissions (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow key={row.Month}>
                        <TableCell component="th" scope="row">
                            {row.Month}
                        </TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  );
};

export default DashboardYear
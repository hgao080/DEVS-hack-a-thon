import React from 'react';
import Sidebar from '../Components/Sidebar';
import Logo from '../Components/Logo';
import styles from '../ComponentStyles/DashboardYear.module.css';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(Month, amount) {
  return { Month, amount };
}

const rows = [
  createData('January', 630),
  createData('February', 610),
  createData('March', 650),
  createData('April', 640),
  createData('May', 620),
  createData('June', 720),
  createData('July', 540),
  createData('August', 0), // Placeholder for August
  createData('September', 0), // Placeholder for September
  createData('October', 0), // Placeholder for October
  createData('November', 0), // Placeholder for November
  createData('December', 0), // Placeholder for December
  createData('Total', 4410),
];

const DashboardYear = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <div className = {styles.logo}>
            <Logo className = {styles.logo} />
          </div>
        </div>
        <h1>This Year's Print</h1>
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell align="right">Carbon Emissions (kg)</TableCell>
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

export default DashboardYear;

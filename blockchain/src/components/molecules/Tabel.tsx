import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

type Data = {
  hash: string;
  time: string;
  amountETH: number;
  amount: number;
}[]

export function DenseTable(props: {rows: Data}) {
  const { rows } = props
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Hash</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Amount&nbsp;(ETH)</TableCell>
            <TableCell align="right">Amount&nbsp;(USD)</TableCell>\
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.hash}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.amountETH} ETH</TableCell>
              <TableCell align="right">${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
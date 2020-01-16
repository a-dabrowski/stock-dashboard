import React, {useEffect, useState} from 'react';
import {TickerPrice, getPrices} from 'api';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function StockTable() {
  const [prices, setData] = useState();
  console.log(prices);
  useEffect(() => {
    getPrices('ENERGA').then(response => setData(response));
  }, []);
  return (
    <Table>
      <TableHead>{prices.map((el:TickerPrice) => el.name)}Hello</TableHead>
    </Table>
  );
}

export default StockTable;

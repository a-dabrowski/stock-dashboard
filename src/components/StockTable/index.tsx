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

interface FetchLoaded<T> {
  loaded: true;
  data: T;
}
interface FetchWaiting {
  loaded: false;
}
type Api<T> = FetchLoaded<T> | FetchWaiting;
type TickerPrices = Array<TickerPrice>;

function StockTable() {
  const [prices, setData] = useState<Api<TickerPrices>>({
    loaded: false,
  });
  console.log(prices.loaded && prices.data, prices.loaded && prices.data[0]);
  useEffect(() => {
    getPrices('ENERGA').then(response =>
      setData({loaded: true, data: response}),
    );
  }, []);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Open</TableCell>
          <TableCell>Close</TableCell>
          <TableCell>Min</TableCell>
          <TableCell>Max</TableCell>
          <TableCell>Volume</TableCell>
        </TableRow>
      </TableHead>
    <TableBody>
      {prices.loaded && prices.data.map((ticker, index) => (
        <TableRow key={index}>
          <TableCell>{ticker.name}</TableCell>
          <TableCell>{ticker.date}</TableCell>
          <TableCell>{ticker.open}</TableCell>
          <TableCell>{ticker.close}</TableCell>
          <TableCell>{ticker.min}</TableCell>
          <TableCell>{ticker.max}</TableCell>
          <TableCell>{ticker.volume}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
  );
}

export default StockTable;

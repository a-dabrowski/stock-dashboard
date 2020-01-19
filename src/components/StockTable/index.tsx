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
  loaded: true,
  data: T
}
interface FetchWaiting {
  loaded: false
}
type Api<T> = FetchLoaded<T> | FetchWaiting;
type TickerPrices = Array<TickerPrice>;

function StockTable() {
  const [prices, setData] = useState<Api<TickerPrices>>({
    loaded: false
  });
  console.log(prices.loaded && prices.data, prices.loaded && prices.data[0]);
  useEffect(() => {
    getPrices('ENERGA').then(response => setData({loaded: true, data: response}));
  }, []);
  return (
    <Table>
      <TableHead>{prices.loaded && prices.data.map((el) => el.name)}Hello</TableHead>
    </Table>
  );
}

export default StockTable;

import React, {useEffect, useState} from 'react';
import {Api, TickerPrice, getPrices} from 'api';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import format from 'date-fns/format'
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
`;

type TickerPrices = Array<TickerPrice>;

function StockTable() {
  const [prices, setData] = useState<Api<TickerPrices>>({
    loaded: false,
  });
  useEffect(() => {
    getPrices('ENERGA').then(response => {
      response.map((ticker: TickerPrice) => {
        ticker.formatDate = format(ticker.date, 'dd/MM/yyyy');
      });
      setData({loaded: true, data: response});
    });
  }, []);
  return prices.loaded ? (
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
        {prices.data.map((ticker, index) => (
          <TableRow key={index}>
            <TableCell>{ticker.name}</TableCell>
            <TableCell>{ticker.formatDate}</TableCell>
            <TableCell>{ticker.open}</TableCell>
            <TableCell>{ticker.close}</TableCell>
            <TableCell>{ticker.min}</TableCell>
            <TableCell>{ticker.max}</TableCell>
            <TableCell>{ticker.volume}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
}

export default StockTable;

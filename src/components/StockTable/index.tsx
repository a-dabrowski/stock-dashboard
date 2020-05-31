import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TickerPrice } from "api";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import styled from "styled-components";

import {
  fetchStockData,
  selectIsStockLoaded,
  selectSingleStockData
} from "./singleStockSlice";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
`;

function StockTable() {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(selectIsStockLoaded);
  const singleStockData = useSelector(selectSingleStockData);
  useEffect(() => {
    dispatch(fetchStockData());
  }, [dispatch]);
  return isDataLoaded ? (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Open</TableCell>
          <TableCell>Close</TableCell>
          <TableCell>Min</TableCell>
          <TableCell>Max</TableCell>
          <TableCell>Volume</TableCell>
          <TableCell>Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {singleStockData.map((ticker: TickerPrice, index: number) => (
          <TableRow key={index}>
            <TableCell>{ticker.name}</TableCell>
            <TableCell>{ticker.formatDate}</TableCell>
            <TableCell>{ticker.open}</TableCell>
            <TableCell>{ticker.close}</TableCell>
            <TableCell>{ticker.min}</TableCell>
            <TableCell>{ticker.max}</TableCell>
            <TableCell>{ticker.volume}</TableCell>
            <TableCell>
              <Button size="small" variant="contained" color="primary" href={`listing/${ticker.name}`}>Show</Button>
            </TableCell>
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

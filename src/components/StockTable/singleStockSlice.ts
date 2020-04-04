import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from 'store';
import format from 'date-fns/format'

import {TickerPrice, getPrices} from 'api';

export const slice = createSlice({
  name: "singleStock",
  initialState: {
    loaded: false,
    stockData: []
  },
  reducers: {
    stockLoading: (state) => {
      state.loaded = false;
    },
    stockDataReceived: (state, action) => {
      state.loaded = true;
      state.stockData = action.payload;
    }
  }
});

export const selectIsStockLoaded = (state: any) => state.singleStock.loaded;
export const selectSingleStockData = (state: any) => state.singleStock.stockData;
export const { stockLoading, stockDataReceived } = slice.actions;

export const fetchStockData = (): AppThunk => async dispatch => {
  dispatch(stockLoading());
  const fetched = await getPrices('ENERGA', '01-03-2020', '31-03-2020');
  // TODO cases where it fails or hangs
  fetched.map((ticker: TickerPrice) => {
    ticker.formatDate = format(ticker.date, 'dd/MM/yyyy');
    return ticker;
  });
  dispatch(stockDataReceived(fetched))
};

export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "store";
interface PointData {
  x: string;
  y: number;
}
interface StockData {
  id: string;
  color: string;
  data: Array<PointData>;
}
interface iChart {
  stockTickers: Array<StockData>;
}

export const initialStateChart: iChart = {
  stockTickers: [
    {
      id: "PGE",
      color: "hsl(11, 30%, 90%)",
      data: [
        {
          x: "2020-03-21",
          y: 241.2
        },
        {
          x: "2020-03-22",
          y: 42.2
        },
        {
          x: "2020-03-23",
          y: 15.5
        },
        {
          x: "2020-03-24",
          y: 249.6
        },
        {
          x: "2020-03-25",
          y: 304.23
        },
        {
          x: "2020-03-26",
          y: 211.231
        },
        {
          x: "2020-03-27",
          y: 279
        },
        {
          x: "2020-03-28",
          y: 181
        }
      ]
    }
  ]
};

export const slice = createSlice({
  name: "stockChart",
  initialState: initialStateChart,
  reducers: {
    pushAdditionalData: (state, action) => {
      // action.payload is ticker name, so TODO make it thunk
      //state.stockTickers.push(action.payload.newDisplayName);
      state.stockTickers.push({
        id: "Energa",
        color: "hsl(51, 70%, 50%)",
        data: [
          {
            x: "2020-03-21",
            y: 229.2
          },
          {
            x: "2020-03-22",
            y: 65.3
          },
          {
            x: "2020-03-23",
            y: 209.5
          },
          {
            x: "2020-03-24",
            y: 215.6
          },
          {
            x: "2020-03-25",
            y: 250.23
          },
          {
            x: "2020-03-26",
            y: 269.231
          },
          {
            x: "2020-03-27",
            y: 227
          },
          {
            x: "2020-03-28",
            y: 250
          }
        ]
      });
    }
  }
});

export const selectStockChartData = (state: any): string =>
  state.stockChart.stockTickers;

export const { pushAdditionalData } = slice.actions;

export default slice.reducer;

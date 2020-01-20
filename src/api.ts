import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

interface ServerResponse {
  data: Array<TickerPrice>;
}

export interface TickerPriceBackend { // TODO move it elsewhere
  name: string;
  data: number;
  open: string;
  close: string;
  volume: string;
  max: string;
  min: string;
}

export interface TickerPrice { // TODO move it elsewhere
  name: string;
  data: number;
  open: number;
  close: number;
  volume: number;
  max: number;
  min: number;
}

type Ticker = TickerPriceBackend | TickerPrice;

export const getPrices = (ticker: string) => {
  return axios
    .get(`${API_URL}/stock-prices?${ticker}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '127.0.0.1',
        port: 3000,
      },
      transformResponse: (r) => JSON.parse(r),
    })
    .then(response => {
      // TODO error handler
      return response.data.map((el: Ticker) => {
        el.open = Number(el.open);
        el.close = Number(el.close);
        el.min = Number(el.min);
        el.max = Number(el.max);
        return el;
      });
    });
};

export default API_URL;

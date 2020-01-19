import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

interface ServerResponse {
  data: Array<TickerPrice>;
}

export interface TickerPrice { // TODO move it elsewhere
  name: string;
  data: number;
  open: string;
  close: string;
  volume: string;
  max: string;
  min: string;
}

export const getPrices = (ticker: string) => {
  return axios
    .get(`${API_URL}/stock-prices`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '127.0.0.1',
        port: 3000,
      },
      // TODO one day i will provide data, status and other, so simple r => r won't work
      transformResponse: (r) => JSON.parse(r),
    })
    .then(response => {
      return response.data;
    });
};

export default API_URL;

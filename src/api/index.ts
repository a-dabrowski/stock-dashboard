import axios from 'axios';
import {Server} from 'miragejs';
const API_URL = process.env.REACT_APP_API_URL;

const requestOptions = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  proxy: {
    host: '127.0.0.1',
    port: 3000,
  },
  //transformResponse: (r: string) => JSON.parse(r), // WARNING - MIRAGE vs REAL BACKEND Possible error
};

new Server({
  routes() {
    this.urlPrefix = API_URL; // You can define your own api address
    // this.namespace = 'api'; // Not using this, leaving for tutorial 

    this.get('/user', () => {
      return {
        id: 3, name: 'Dunkirk', subscriptions: ['ENERGA', 'PGE'],
      };
    });
    this.passthrough()
  },
});

interface ServerResponse {
  data: Array<TickerPrice>;
}

export interface TickerPriceBackend {
  // TODO move it elsewhere
  name: string;
  date: number;
  open: string;
  close: string;
  volume: string;
  max: string;
  min: string;
}

export interface TickerPrice {
  // TODO move it elsewhere
  name: string;
  date: number;
  open: number;
  close: number;
  volume: number;
  max: number;
  min: number;
}

type Ticker = TickerPriceBackend | TickerPrice;

export const getPrices = (ticker: string) => {
  return axios
    .get(`${API_URL}/stock-prices?${ticker}`, requestOptions)
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


export interface User {
  id: string;
  name: string;
  subscriptions: string[];
}
export const getUserData = (id: number) => {
  return axios.get(`${API_URL}/user`, requestOptions)
    .then(response => {
      return response.data;
    });
};

export default API_URL;

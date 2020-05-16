import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const requestOptions = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  proxy: {
    host: "127.0.0.1",
    port: 3000
  },
  transformResponse: (r: string) => JSON.parse(r) // TODO error response or blank returns JSON error
};

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
  date: number | Date;
  formatDate?: string;
  open: number;
  close: number;
  volume: number;
  max: number;
  min: number;
}

type Ticker = TickerPriceBackend | TickerPrice;

export const getPrices = (
  ticker: string = "ENERGA",
  startDate: string = "01-03-2020",
  endDate: string = "31-03-2020"
) => {
  return axios
    .get(
      `${API_URL}/stock-prices?startDate=${startDate}&endDate=${endDate}&ticker=${ticker}`,
      requestOptions
    )
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
  return axios.get(`${API_URL}/user`, requestOptions).then(response => {
    return response.data;
  });
};
export const updateUserSubscriptions = (
  id: number,
  subscriptions: string[]
) => {
  return axios.put(`${API_URL}/user/subscriptions`, {
    ...requestOptions,
    data: { id, subscriptions }
  });
};

export const saveRiskPreferenceToBackend = (id: number, riskValue: number) => {
  return axios.put(`${API_URL}/user/risk`, {
    ...requestOptions,
    data: { id, riskValue }
  });
};
export default API_URL;

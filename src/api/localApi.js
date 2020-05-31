import {Server, Response} from 'miragejs';

const API_URL = process.env.REACT_APP_API_URL;

export function makeLocalServer() {
  const server = new Server({
    routes() {
      this.urlPrefix = API_URL; // You can define your own api address
      // this.namespace = 'api'; // Not using this, leaving for tutorial

      this.get('/user', () => {
        return JSON.stringify({
          id: 3,
          name: 'Dunkirk',
          subscriptions: ['ENERGA', 'PGE'],
        });
      });

      this.get('/stock-prices', () => {
        return JSON.stringify([
          {
            name: 'Energa',
            date: Date.now(),
            open: 3.5,
            close: 6.8,
            volume: 124,
            max: 250,
            min: 100,
          },
        ]);
      });

      this.put('/user/subscriptions', (schema, request) => {
      const data = JSON.parse(request.requestBody).data;
        return new Response(
          201,
          {'Mirage-Source': 'src/api'},
          {
            id: data.id,
            subscriptions: data.subscriptions
          }
        );
      });

      this.put('/user/risk', (schema, request) => {
      const id = JSON.parse(request.requestBody).data.id;
      const riskValue = JSON.parse(request.requestBody).data.riskValue;
        return new Response(
          201,
          {'Mirage-Source': 'src/api'},
          {
            id,
            riskValue
          }
        );
      });
      this.passthrough();
    },
  });
  return server;
}

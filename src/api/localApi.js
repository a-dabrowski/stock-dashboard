import {Server} from 'miragejs';

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
      this.passthrough();
    },
  });
  return server;
}

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import StockTable from 'components/StockTable';
import HeatGraph from 'components/HeatGraph';

const routes: React.FC = () => (
  <Switch>
    <Route path="/stock-table" component={StockTable} />
    <Route path="/heat-graph" component={HeatGraph} />
  </Switch>
);

export default routes;

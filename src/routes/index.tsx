import React from 'react';
import {Switch, Route} from 'react-router-dom';
import StockTable from 'components/StockTable';
import HeatGraph from 'components/HeatGraph';
import UserPanel from 'components/UserPanel';
import StockOverview from 'components/StockOverview';

const routes: React.FC = () => (
  <Switch>
    <Route path="/stock-table" component={StockTable} />
    <Route path="/heat-graph" component={HeatGraph} />
    <Route path="/user" component={UserPanel} />
    <Route path="/stock/:id" component={StockOverview} />
  </Switch>
);

export default routes;

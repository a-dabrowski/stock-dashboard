import React from 'react';
import {Switch, Route} from 'react-router-dom';
import StockTable from 'components/StockTable';
import HeatGraph from 'components/HeatGraph';

import Analytics from 'pages/analytics';
import Forbidden from 'pages/403';
import Listing from 'pages/listing';
import Login from 'pages/login';
import NotFound from 'pages/404';
import Register from 'pages/register';
import SingleStock from 'pages/singleStock';
import UserPanel from 'pages/user';

const routes: React.FC = () => (
  <Switch>
    <Route path="/403" component={Forbidden} />
    <Route path="/analytics" component={Analytics} />
    <Route path="/heat-graph" component={HeatGraph} />
    <Route path="/listing" component={Listing} />
    <Route path="/listing/:id" component={SingleStock} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/stock-table" component={StockTable} />
    <Route path="/user" component={UserPanel} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;

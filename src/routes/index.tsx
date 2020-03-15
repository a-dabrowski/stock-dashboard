import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import StockTable from 'components/StockTable';
import HeatGraph from 'components/HeatGraph';

import Forbidden from 'pages/403';
import NotFound from 'pages/404';

const Analytics = lazy(() => import('pages/analytics'));
const Listing = lazy(() => import('pages/listing'));
const Login = lazy(() => import('pages/login'));
const Register = lazy(() => import('pages/register'));
const SingleStock = lazy(() => import('pages/singleStock'));
const UserPanel = lazy(() => import('pages/user'));

const routes: React.FC = () => (
  <Suspense fallback={<NotFound />}>
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
  </Suspense>
);

export default routes;

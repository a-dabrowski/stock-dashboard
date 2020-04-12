import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import StockTable from 'components/StockTable';
import HeatGraph from 'components/HeatGraph';
import Navigation from 'components/Navigation';

import Forbidden from 'pages/403';
import NotFound from 'pages/404';

const Analytics = lazy(() => import('pages/analytics'));
const Listing = lazy(() => import('pages/listing'));
const Login = lazy(() => import('pages/login'));
const Register = lazy(() => import('pages/register'));
const SingleStock = lazy(() => import('pages/singleStock'));
const UserPanel = lazy(() => import('pages/user'));

const NavRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props: any) => (
    <div>
      <Component {...props} />
      <Navigation />
    </div>
  )} />
)

const routes: React.FC = () => (
  <Suspense fallback={<NotFound />}>
    <Switch>
      <NavRoute path="/analytics" component={Analytics} />
      <NavRoute path="/heat-graph" component={HeatGraph} />
      <NavRoute path="/listing" component={Listing} />
      <NavRoute path="/listing/:id" component={SingleStock} />
      <NavRoute path="/stock-table" component={StockTable} />
      <NavRoute path="/user" component={UserPanel} />
      <Route exactly path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/403" component={Forbidden} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default routes;
// TODO : dont route to components, only pages

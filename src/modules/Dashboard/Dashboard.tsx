import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'modules/routes';
import { isLoggedRedirect } from 'modules/shared/checkAuth';
import { IModule } from 'shared/types/app';

import Dashboard from './view/Dashboard/Dashboard';

const DashboardModule: IModule = {
  getRoutes() {
    return (
      <Route key="dashboard" path={routes.dashboard.getRoutePath()}>
        <Switch>
          <Route exact path={routes.dashboard.getRoutePath()} component={isLoggedRedirect(Dashboard)} />
          <Redirect to={routes.pageNotFound.getRedirectPath()} />
        </Switch>
      </Route>
    );
  },
};

export default DashboardModule;

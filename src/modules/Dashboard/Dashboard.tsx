import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { isLoggedRedirect } from 'modules/shared/checkAuth';
import { IModule } from 'shared/types/app';

import Dashboard from './view/Dashboard/Dashboard';

const DashboardModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="dashboard"
        path={routes.dashboard.getRoutePath()}
        component={isLoggedRedirect(Dashboard)}
      />
    );
  },
};

export default DashboardModule;

import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'modules/routes';
import { isLoggedRedirect } from 'modules/shared/checkAuth';
import { IModule } from 'shared/types/app';

import Marketplace from './view/Marketplace/Marketplace';

const MarketplaceModule: IModule = {
  getRoutes() {
    return (
      <Route key="marketplace" path={routes.marketplace.getRoutePath()}>
        <Switch>
          <Route exact path={routes.marketplace.getRoutePath()} component={isLoggedRedirect(Marketplace)} />
          <Redirect to={routes.pageNotFound.getRedirectPath()} />
        </Switch>
      </Route>
    );
  },
};

export default MarketplaceModule;

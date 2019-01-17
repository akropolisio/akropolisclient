import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { isLoggedRedirect } from 'modules/shared/checkAuth';
import { IModule } from 'shared/types/app';

import Marketplace from './view/Marketplace/Marketplace';

const MarketplaceModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="marketplace"
        path={routes.marketplace.getRoutePath()}
        component={isLoggedRedirect(Marketplace)}
      />
    );
  },
};

export default MarketplaceModule;

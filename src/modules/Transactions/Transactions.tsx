import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import { isLoggedRedirect } from 'modules/shared/checkAuth';

import Transactions from './view/Transactions/Transactions';

const TransactionsModule: IModule = {
  getRoutes() {
    return (
      <Route key="transactions" path={routes.transactions.getRoutePath()}>
        <Switch>
          <Route exact path={routes.transactions.getRoutePath()} component={isLoggedRedirect(Transactions)} />
          <Redirect to={routes.pageNotFound.getRedirectPath()} />
        </Switch>
      </Route>
    );
  },
};

export default TransactionsModule;

import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import Transactions from './view/Transactions/Transactions';

const TransactionsModule: IModule = {
  getRoutes() {
    return (
      <Route key="transactions" path={routes.transactions.getRoutePath()}>
        <Switch>
          <Route path={routes.transactions.getRoutePath()} component={Transactions} />
          <Redirect to={routes.transactions.getRedirectPath()} />
        </Switch>
      </Route>
    );
  },
};

export default TransactionsModule;
import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import { isLoggedRedirect } from 'modules/shared/checkAuth';

import Transactions from './view/Transactions/Transactions';

const TransactionsModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="transactions"
        path={routes.transactions.getRoutePath()}
        component={isLoggedRedirect(Transactions)}
      />
    );
  },
};

export default TransactionsModule;

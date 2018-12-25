import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import LoginForm from './view/LoginForm/LoginForm';

const AuthModule: IModule = {
  getRoutes() {
    return (
      <Route key="auth" path={routes.auth.getRoutePath()}>
        <Switch>
          <Route path={routes.auth.role.getRoutePath()} component={LoginForm} />
          <Redirect to={routes.auth.role.getRedirectPath({ role: 'beneficiary' })} />
        </Switch>
      </Route>
    );
  },
};

export default AuthModule;

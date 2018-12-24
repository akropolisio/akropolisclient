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
          <Redirect exact from={routes.auth.getRoutePath()} to={routes.auth.selectRole.getRedirectPath()} />
          <Route path={routes.auth.selectRole.getRoutePath()} component={LoginForm} />
        </Switch>
      </Route>
    );
  },
};

export default AuthModule;

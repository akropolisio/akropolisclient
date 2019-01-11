import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { isLoggedRedirect } from 'modules/shared/checkAuth';
import { IModule } from 'shared/types/app';

import Profile from './view/Profile/Profile';

const ProfileModule: IModule = {
  getRoutes() {
    return (
      <Route key="profile" path={routes.profile.getRoutePath()}>
        <Switch>
          <Route path={routes.profile.section.getRoutePath()} component={isLoggedRedirect(Profile)} />
          <Redirect to={routes.profile.section.getRedirectPath({ section: 'settings' })} />
        </Switch>
      </Route>
    );
  },
};

export default ProfileModule;

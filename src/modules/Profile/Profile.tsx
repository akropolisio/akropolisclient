import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import { EditMainInfo, Contributors } from 'shared/view/drafts';

import Profile from './view/Profile/Profile';

const ProfileModule: IModule = {
  getRoutes() {
    return (
      <Route key="profile" path={routes.profile.getRoutePath()}>
        <Switch>
          <Route path={routes.profile.settings.getRoutePath()}>
            {() => <Profile><EditMainInfo /></Profile>}
          </Route>
          <Route path={routes.profile.contributors.getRoutePath()}>
            {() => <Profile><Contributors /></Profile>}
          </Route>
          <Redirect to={routes.profile.settings.getRoutePath()} />
        </Switch>
      </Route>
    );
  },
};

export default ProfileModule;

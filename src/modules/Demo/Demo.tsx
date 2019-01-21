import * as React from 'react';
import { compose } from 'redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { isLoggedRedirect, makeRedirectByRole } from 'modules/shared/checkAuth';
import { IModule } from 'shared/types/app';

import DemoGUI from './view/DemoGUI/DemoGUI';
import DemoModal from './view/DemoModal/DemoModal';
import DemoTranslations from './view/DemoTranslations/DemoTranslations';
import DemoAdaptability from './view/DemoAdaptability/DemoAdaptability';
import DemoAuthRedirect from './view/DemoAuthRedirect/DemoAuthRedirect';
import DemoIcons from './view/DemoIcons/DemoIcons';

const rolesRedirect = makeRedirectByRole(['beneficiary', 'boardMember']);
const demoAuthRedirect = compose(isLoggedRedirect, rolesRedirect);

const DemoModule: IModule = {
  getRoutes() {
    return (
      <Route key="demo" path={routes.demo.getRoutePath()}>
        <Switch>
          <Route path={routes.demo.gui.getRoutePath()} component={DemoGUI} />
          <Route path={routes.demo.modal.getRoutePath()} component={DemoModal} />
          <Route path={routes.demo.translations.getRoutePath()} component={DemoTranslations} />
          <Route path={routes.demo.adaptability.getRoutePath()} component={DemoAdaptability} />
          <Route path={routes.demo.authRedirect.getRoutePath()} component={demoAuthRedirect(DemoAuthRedirect)} />
          <Route path={routes.demo.icons.getRoutePath()} component={DemoIcons} />
          <Redirect to={routes.demo.gui.getRedirectPath()} />
        </Switch>
      </Route>
    );
  },
};

export default DemoModule;

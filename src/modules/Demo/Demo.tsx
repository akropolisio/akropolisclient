import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import DemoGUI from './view/DemoGUI/DemoGUI';

const DemoModule: IModule = {
  getRoutes() {
    return (
      <Route key="demo" path={routes.demo.getRoutePath()}>
        <Switch>
          <Redirect exact from={routes.demo.getRoutePath()} to={routes.demo.gui.getRedirectPath()} />
          <Route path={routes.demo.gui.getRoutePath()} component={DemoGUI} />
        </Switch>
      </Route>
    );
  },
};

export default DemoModule;

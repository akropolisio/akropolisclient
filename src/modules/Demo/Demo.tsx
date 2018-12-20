import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import DemoGUI from './view/DemoGUI/DemoGUI';
import DemoHeader from './view/DemoHeader/DemoHeader';

const DemoModule: IModule = {
  getRoutes() {
    return (
      <Route key="demo" path={routes.demo.getRoutePath()}>
        <Switch>
          <Redirect exact from={routes.demo.getRoutePath()} to={routes.demo.gui.getRedirectPath()} />
          <Route path={routes.demo.gui.getRoutePath()} component={DemoGUI} />
          <Route path={routes.demo.header.getRoutePath()} component={DemoHeader} />
          <Route path={routes.demo.dashboard.getRoutePath()} component={DemoHeader} />
          <Route path={routes.demo.marketplace.getRoutePath()} component={DemoHeader} />
        </Switch>
      </Route>
    );
  },
};

export default DemoModule;

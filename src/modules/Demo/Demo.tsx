import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import DemoGUI from './view/DemoGUI/DemoGUI';
import DemoModal from './view/DemoModal/DemoModal';

const DemoModule: IModule = {
  getRoutes() {
    return (
      <Route key="demo" path={routes.demo.getRoutePath()}>
        <Switch>
          <Redirect exact from={routes.demo.getRoutePath()} to={routes.demo.gui.getRedirectPath()} />
          <Route path={routes.demo.gui.getRoutePath()} component={DemoGUI} />
          <Route path={routes.demo.modal.getRoutePath()} component={DemoModal} />

        </Switch>
      </Route>
    );
  },
};

export default DemoModule;

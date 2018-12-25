import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import DemoGUI from './view/DemoGUI/DemoGUI';
import DemoHeader from './view/DemoHeader/DemoHeader';
import DemoTranslations from './view/DemoTranslations/DemoTranslations';
import DemoAdaptability from './view/DemoAdaptability/DemoAdaptability';

const DemoModule: IModule = {
  getRoutes() {
    return (
      <Route key="demo" path={routes.demo.getRoutePath()}>
        <Switch>
          <Route path={routes.demo.gui.getRoutePath()} component={DemoGUI} />
          <Route path={routes.demo.header.getRoutePath()} component={DemoHeader} />
          <Route path={routes.demo.translations.getRoutePath()} component={DemoTranslations} />
          <Route path={routes.demo.adaptability.getRoutePath()} component={DemoAdaptability} />
          <Redirect to={routes.demo.gui.getRedirectPath()} />
        </Switch>
      </Route>
    );
  },
};

export default DemoModule;

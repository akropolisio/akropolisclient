import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import DemoGUI from './view/DemoGUI/DemoGUI';
import DemoModal from './view/DemoModal/DemoModal';
import DemoTranslations from './view/DemoTranslations/DemoTranslations';
import DemoAdaptability from './view/DemoAdaptability/DemoAdaptability';
import DemoDashboard from './view/DemoDashboard/DemoDashboard';
import FundsMarketplace from './view/FundsMarketplace/FundsMarketplace';

const DemoModule: IModule = {
  getRoutes() {
    return (
      <Route key="demo" path={routes.demo.getRoutePath()}>
        <Switch>
          <Route path={routes.demo.gui.getRoutePath()} component={DemoGUI} />
          <Route path={routes.demo.modal.getRoutePath()} component={DemoModal} />
          <Route path={routes.demo.dashboard.getRoutePath()} component={DemoDashboard} />
          <Route path={routes.demo.translations.getRoutePath()} component={DemoTranslations} />
          <Route path={routes.demo.adaptability.getRoutePath()} component={DemoAdaptability} />
          <Route path={routes.demo.marketplace.getRoutePath()} component={FundsMarketplace} />
          <Redirect to={routes.demo.gui.getRedirectPath()} />
        </Switch>
      </Route>
    );
  },
};

export default DemoModule;

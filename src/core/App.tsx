import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import 'normalize.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import { I18nProvider } from 'services/i18n';

import { IAppData, IModule, IJssDependencies } from 'shared/types/app';
import { JssProvider, SheetsRegistry, BaseStyles } from 'shared/styles';

import createRoutes from './routes';

interface IAppProps {
  jssDeps: IJssDependencies;
  disableStylesGeneration?: boolean;
}

export function App({ modules, store, jssDeps, disableStylesGeneration }: IAppData & IAppProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderSharedPart(modules, jssDeps, disableStylesGeneration)}
      </BrowserRouter>
    </Provider >
  );
}

interface IServerAppProps {
  jssDeps: IJssDependencies;
  registry?: SheetsRegistry;
  disableStylesGeneration?: boolean;
}

export function ServerApp(props: IAppData & IServerAppProps & StaticRouter['props']) {
  const { modules, store, registry, jssDeps, disableStylesGeneration, ...routerProps } = props;
  return (
    <Provider store={store}>
      <StaticRouter {...routerProps}>
        {renderSharedPart(modules, jssDeps, disableStylesGeneration, registry)}
      </StaticRouter>
    </Provider>
  );
}

function renderSharedPart(
  modules: IModule[], jssDeps: IJssDependencies,
  disableStylesGeneration?: boolean,
  registry?: SheetsRegistry,
) {
  const { generateClassName, jss, theme } = jssDeps;

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <I18nProvider>
        <JssProvider
          jss={jss}
          registry={registry}
          generateClassName={generateClassName}
          disableStylesGeneration={disableStylesGeneration}
        >
          <MuiThemeProvider theme={theme} disableStylesGeneration={disableStylesGeneration}>
            {/* <React.StrictMode> */}
            <BaseStyles />
            {createRoutes(modules)}
            {/* </React.StrictMode> */}
          </MuiThemeProvider>
        </JssProvider>
      </I18nProvider>
    </MuiPickersUtilsProvider>
  );
}

import { ReactElement } from 'react';
import { RouteProps } from 'react-router';
import { Store, Reducer, ActionCreator, Action } from 'redux';
import { SagaIterator } from 'redux-saga';
import { GenerateClassName } from 'jss';
import { Drizzle } from 'drizzle';

import * as adaptabilityNS from 'services/adaptability/namespace';
import * as dataProviderNS from 'services/dataProvider/namespace';
import * as i18nNS from 'services/i18n/namespace';
import * as signTransactionNS from 'services/signTransaction/namespace';
import * as userNS from 'services/user/namespace';
import Api from 'services/api/Api';

import * as signInNS from 'features/signIn/namespace';

import { JSS, Theme } from 'shared/styles';
import { IMultiInstanceState } from 'shared/helpers/redux';

export interface IModule {
  getRoutes?(): ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
  getReduxEntry?(): IReduxEntry;
}

export interface IAppData {
  modules: IModule[];
  drizzle: Drizzle;
  store: Store<IAppReduxState>;
  jssDeps: IJssDependencies;
}

export interface IJssDependencies {
  jss: JSS;
  generateClassName: GenerateClassName<any>;
  theme: Theme;
}

export interface IDependencies {
  api: Api;
  drizzle: Drizzle;
}

export type IDictionary<T, S extends keyof any = string> = {
  [key in S]: T;
};

export interface IReduxEntry {
  reducers?: { [key in keyof IAppReduxState]?: Reducer<IAppReduxState[key]> };
  sagas?: Array<(deps: IDependencies) => () => SagaIterator>;
}

export interface IFeatureEntry<
  C extends IDictionary<React.ReactType<any>, keyof C> | void,
  A extends IDictionary<ActionCreator<Action>, keyof A> | void,
  S extends IDictionary<(state: any, ...args: any[]) => any, keyof S> | void,
  > extends IReduxEntry {
  actions?: A;
  selectors?: S;
  containers?: C;
}

export interface IAppReduxState {
  // services
  adaptability: adaptabilityNS.IReduxState;
  dataProvider: IMultiInstanceState<dataProviderNS.IReduxState>;
  i18n: i18nNS.IReduxState;
  signTransaction: signTransactionNS.IReduxState;
  user: userNS.IReduxState;
  // features
  signIn: signInNS.IReduxState;
}

export type RootSaga = (deps: IDependencies) => () => SagaIterator;

export type Lang = 'en' | 'he';

export type Uid = number;

export interface IAssets {
  javascript: string[];
  styles: string[];
  favicons: CheerioElement[];
}

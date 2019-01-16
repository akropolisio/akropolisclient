import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'redux-make-communication';

import { ReducersMap } from 'shared/types/redux';
import { composeReducers } from 'shared/helpers/redux';

import * as NS from '../../namespace';
import { initial } from '../initial';

export const communicationReducer = composeReducers<NS.IReduxState['communication']>([
  combineReducers<NS.IReduxState['communication']>({
    loadingUser: makeCommunicationReducer<NS.ILoadUser, NS.ILoadUserSuccess, NS.ILoadUserFail>(
      'USER:LOAD_USER', 'USER:LOAD_USER_SUCCESS', 'USER:LOAD_USER_FAIL',
      initial.communication.loadingUser,
    ),
  } as ReducersMap<NS.IReduxState['communication']>),
]);

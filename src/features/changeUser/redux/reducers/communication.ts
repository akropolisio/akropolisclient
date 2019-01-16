import { combineReducers } from 'redux';
import { makeCommunicationReducer } from 'redux-make-communication';

import { ReducersMap } from 'shared/types/redux';
import { composeReducers } from 'shared/helpers/redux';

import * as NS from '../../namespace';
import { initial } from '../initial';

export const communicationReducer = composeReducers<NS.IReduxState['communication']>([
  combineReducers<NS.IReduxState['communication']>({
    editingMainInfo: makeCommunicationReducer<NS.IEditMainInfo, NS.IEditMainInfoSuccess, NS.IEditMainInfoFail>(
      'CHANGE_USER:EDIT_MAIN_INFO', 'CHANGE_USER:EDIT_MAIN_INFO_SUCCESS', 'CHANGE_USER:EDIT_MAIN_INFO_FAIL',
      initial.communication.editingMainInfo,
    ),
  } as ReducersMap<NS.IReduxState['communication']>),
]);

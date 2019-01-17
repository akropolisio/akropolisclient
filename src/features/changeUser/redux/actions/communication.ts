import { makeCommunicationActionCreators } from 'redux-make-communication';
import * as NS from '../../namespace';

export const { execute: editMainInfo, completed: editMainInfoSuccess, failed: editMainInfoFail } =
  makeCommunicationActionCreators<NS.IEditMainInfo, NS.IEditMainInfoSuccess, NS.IEditMainInfoFail>(
    'CHANGE_USER:EDIT_MAIN_INFO', 'CHANGE_USER:EDIT_MAIN_INFO_SUCCESS', 'CHANGE_USER:EDIT_MAIN_INFO_FAIL',
  );

import { ICommunication, IAction, IPlainFailAction, IPlainAction } from 'shared/types/redux';
import { IUser } from 'shared/types/models';

export interface IReduxState {
  communication: {
    editingMainInfo: ICommunication;
  };
}

export type IEditMainInfo = IAction<'CHANGE_USER:EDIT_MAIN_INFO', IUser>;
export type IEditMainInfoSuccess = IPlainAction<'CHANGE_USER:EDIT_MAIN_INFO_SUCCESS'>;
export type IEditMainInfoFail = IPlainFailAction<'CHANGE_USER:EDIT_MAIN_INFO_FAIL'>;

export type Action =
  IEditMainInfo | IEditMainInfoSuccess | IEditMainInfoFail;

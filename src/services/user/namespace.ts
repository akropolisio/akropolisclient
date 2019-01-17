import { IAction, IPlainAction, IPlainFailAction, ICommunication } from 'shared/types/redux';
import { UserRole, IUser } from 'shared/types/models';

export interface IReduxState {
  communication: {
    loadingUser: ICommunication;
  };
  data: {
    user: IUser | null;
    role: UserRole | null;
    isLogged: boolean;
  };
}

export type ICompleteAuthentication = IAction<'USER:COMPLETE_AUTHENTICATION', { role: UserRole }>;

export type ILoadUser = IPlainAction<'USER:LOAD_USER'>;
export type ILoadUserSuccess = IAction<'USER:LOAD_USER_SUCCESS', { user: IUser }>;
export type ILoadUserFail = IPlainFailAction<'USER:LOAD_USER_FAIL'>;

export type IUpdateUser = IAction<'USER:UPDATE_USER', { user: IUser }>;

export type Action = ICompleteAuthentication
  | ILoadUser | ILoadUserSuccess | ILoadUserFail
  | IUpdateUser;

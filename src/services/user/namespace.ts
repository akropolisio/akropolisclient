import { IAction } from 'shared/types/redux';
import { UserRole } from 'shared/types/models';

export interface IReduxState {
  data: {
    role: UserRole | null;
    isLogged: boolean;
  };
}

export type ICompleteAuthentication = IAction<'USER:COMPLETE_AUTHENTICATION', { role: UserRole }>;

export type Action = ICompleteAuthentication;

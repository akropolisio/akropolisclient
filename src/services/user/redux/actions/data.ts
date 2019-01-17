import { UserRole, IUser } from 'shared/types/models';
import * as NS from '../../namespace';

export function completeAuthentication(role: UserRole): NS.ICompleteAuthentication {
  return {
    type: 'USER:COMPLETE_AUTHENTICATION',
    payload: { role },
  };
}

export function updateUser(user: IUser): NS.IUpdateUser {
  return {
    type: 'USER:UPDATE_USER',
    payload: { user },
  };
}

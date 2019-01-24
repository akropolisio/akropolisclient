import { IUser } from 'shared/types/models';
import * as NS from '../../namespace';

export function completeAuthentication(address: string): NS.ICompleteAuthentication {
  return {
    type: 'USER:COMPLETE_AUTHENTICATION',
    payload: { address },
  };
}

export function updateUser(user: IUser): NS.IUpdateUser {
  return {
    type: 'USER:UPDATE_USER',
    payload: { user },
  };
}

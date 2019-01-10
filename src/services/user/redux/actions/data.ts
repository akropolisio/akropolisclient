import { UserRole } from 'shared/types/models';
import * as NS from '../../namespace';

export function completeAuthentication(role: UserRole): NS.ICompleteAuthentication {
  return {
    type: 'USER:COMPLETE_AUTHENTICATION',
    payload: { role },
  };
}

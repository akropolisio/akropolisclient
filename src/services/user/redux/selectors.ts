import { IAppReduxState } from 'shared/types/app';
import { UserRole } from 'shared/types/models';

import * as NS from '../namespace';

export function selectState(state: IAppReduxState): NS.IReduxState {
  return state.user;
}

export function selectUserRole(state: IAppReduxState): UserRole | null {
  return selectState(state).data.role;
}

export function selectIsLogged(state: IAppReduxState): boolean {
  return selectState(state).data.isLogged;
}

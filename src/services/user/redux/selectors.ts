import { IAppReduxState } from 'shared/types/app';
import { UserRole, IUser } from 'shared/types/models';
import { makeCommunicationSelector } from 'shared/helpers/redux';

import * as NS from '../namespace';

export function selectState(state: IAppReduxState): NS.IReduxState {
  return state.user;
}

export const selectCommunication = makeCommunicationSelector(selectState);

export function selectUserRole(state: IAppReduxState): UserRole | null {
  return selectState(state).data.role;
}

export function selectUser(state: IAppReduxState): IUser | null {
  return selectState(state).data.user;
}

export function selectIsLogged(state: IAppReduxState): boolean {
  return selectState(state).data.isLogged;
}

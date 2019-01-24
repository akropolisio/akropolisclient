import { IAppReduxState } from 'shared/types/app';
import { IUser } from 'shared/types/models';
import { makeCommunicationSelector } from 'shared/helpers/redux';

import * as NS from '../namespace';

export function selectState(state: IAppReduxState): NS.IReduxState {
  return state.user;
}

export const selectCommunication = makeCommunicationSelector(selectState);

export function selectConfirmedAddress(state: IAppReduxState): string | null {
  return selectState(state).data.confirmedAddress;
}

export function selectUser(state: IAppReduxState): IUser | null {
  return selectState(state).data.user;
}

export function selectIsLogged(state: IAppReduxState): boolean {
  return selectState(state).data.isLogged;
}

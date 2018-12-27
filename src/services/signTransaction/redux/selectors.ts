import { IAppReduxState } from 'shared/types/app';
import * as NS from '../namespace';
import { makeCommunicationSelector } from 'shared/helpers/redux';
import { ITransaction } from 'shared/types/models';

export function selectState(state: IAppReduxState): NS.IReduxState {
  return state.signTransaction;
}

export const selectCommunication = makeCommunicationSelector(selectState);

export function selectQRCodeData(state: IAppReduxState): NS.IQRCodeData | null {
  const { request, abiUrl } = selectState(state).data;
  return request && abiUrl !== null
    ? { abiUrl, uuid: request.uuid }
    : null;
}

export function selectIsOpenedModal(state: IAppReduxState): boolean {
  const { request } = selectState(state).data;
  return !!request;
}

export function selectSignedTransaction(state: IAppReduxState): ITransaction | null {
  return selectState(state).data.signedTransaction;
}

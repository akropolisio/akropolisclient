import { IAppReduxState } from 'shared/types/app';

import * as NS from '../namespace';

export function selectState(state: IAppReduxState): NS.IReduxState {
  return state.detectNetwork;
}

export function selectNetworkStatus(state: IAppReduxState): NS.NetworkStatus {
  return selectState(state).data.status;
}

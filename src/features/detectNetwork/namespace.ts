import { IAction } from 'shared/types/redux';

export type NetworkStatus = 'online' | 'offline';

export interface IReduxState {
  data: {
    status: NetworkStatus;
  };
}

export type ISetNetworkStatus = IAction<'DETECT_NETWORK:SET_NETWORK_STATUS', {status: NetworkStatus}>;

export type Action = ISetNetworkStatus;

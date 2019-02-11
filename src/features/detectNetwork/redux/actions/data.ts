import * as NS from '../../namespace';

export function setNetworkStatus(status: NS.NetworkStatus): NS.ISetNetworkStatus {
  return {
    type: 'DETECT_NETWORK:SET_NETWORK_STATUS',
    payload: { status },
  };
}

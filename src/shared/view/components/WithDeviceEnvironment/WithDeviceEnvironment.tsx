import * as React from 'react';
import { bind, debounce } from 'decko';

import { Omit } from 'shared/types/utils';
import { theme } from 'shared/styles/theme';

interface IDeviceEnvironment {
  isMobile: boolean;
  screenWidth: number;
}

interface IInjectedProps {
  deviceEnvironment: IDeviceEnvironment;
}

function withDeviceEnvironment<TProps extends IInjectedProps>(
  WrappedComponent: React.ComponentType<TProps>,
): React.ComponentClass<Omit<TProps, keyof IInjectedProps>> {
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  interface IState {
    deviceEnvironment: IDeviceEnvironment | null;
  }

  class DeviceEnvironmentProvider extends React.Component<TProps, IState> {

    public static displayName: string = `DeviceEnvironmentProvider(${wrappedComponentName})`;
    public state: IState = { deviceEnvironment: __CLIENT__ ? null : { isMobile: false, screenWidth: 0 } };

    private mobileMediaQueryList: MediaQueryList | null = null;

    public componentWillMount() {
      if (__CLIENT__) {
        this.mobileMediaQueryList = window.matchMedia(theme.adaptive.getMediaQueryByType('sm', false));
        this.onChangeScreenSize(this.mobileMediaQueryList);
        this.mobileMediaQueryList.addListener(this.onChangeScreenSize as unknown as (this: MediaQueryList) => void);
        window.addEventListener('resize', this.onWindowResize);
      }
    }

    public componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize);
      if (this.mobileMediaQueryList) {
        this.mobileMediaQueryList.removeListener(this.onChangeScreenSize as unknown as (this: MediaQueryList) => void);
      }
    }

    public render() {
      const { deviceEnvironment } = this.state;
      return (
        <WrappedComponent deviceEnvironment={deviceEnvironment} {...this.props} />
      );
    }

    @bind
    @debounce(300)
    private onWindowResize() {
      const { deviceEnvironment } = this.state;
      if (deviceEnvironment) {
        this.setState({ deviceEnvironment: { ...deviceEnvironment, screenWidth: window.innerWidth } });
      }
    }

    @bind
    private onChangeScreenSize(mobileMediaQueryList: MediaQueryList): any {
      const { deviceEnvironment } = this.state;
      const isMobile = mobileMediaQueryList.matches;
      if (!deviceEnvironment || deviceEnvironment.isMobile !== isMobile) {
        this.setState({ deviceEnvironment: { isMobile, screenWidth: window.innerWidth } });
      }
    }
  }

  return DeviceEnvironmentProvider;
}

export { IInjectedProps };
export default withDeviceEnvironment;

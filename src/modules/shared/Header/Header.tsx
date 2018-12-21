import * as React from 'react';
import { DesktopHeader, MobileHeader } from './view';
import routes from 'modules/routes';
import { WithDeviceEnvironment, IWithDeviceEnvironmentInjectedProps, ProfileMenu } from 'shared/view/components';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = IWithDeviceEnvironmentInjectedProps & RouteComponentProps;

class Header extends React.PureComponent<IProps> {
  public render() {
    const { deviceEnvironment: { isMobile } } = this.props;
    return isMobile ? this.renderMobileVersion() : this.renderDesktopVersion();
  }

  public renderDesktopVersion() {
    return (
      <DesktopHeader
        brandRedirectPath={routes.demo.getRoutePath()}
        menuRedirectPaths={{
          dashboard: routes.demo.header.dashboard.getRoutePath(),
          marketplace: routes.demo.header.marketplace.getRoutePath(),
        }}
        ProfileComponent={ProfileMenu}
      />
    );
  }

  public renderMobileVersion() {
    return (
      <MobileHeader
        brandRedirectPath={routes.demo.getRoutePath()}
        menuRedirectPaths={{
          dashboard: routes.demo.header.dashboard.getRoutePath(),
          marketplace: routes.demo.header.marketplace.getRoutePath(),
          profile: routes.demo.header.profile.getRoutePath(),
        }}
      />
    );
  }
}

export default withRouter(WithDeviceEnvironment(Header));

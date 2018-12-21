import * as React from 'react';

import { RowsLayout } from 'shared/view/elements';
import {
  DesktopHeader, MobileHeader, Footer, WithDeviceEnvironment, IWithDeviceEnvironmentInjectedProps,
} from 'shared/view/components';

import routes from 'modules/routes';

import { StylesProps, provideStyles } from './BaseLayout.style';

interface IOwnProps {
  children: React.ReactNode;
}

type Props = IOwnProps & StylesProps & IWithDeviceEnvironmentInjectedProps;

class BaseLayout extends React.PureComponent<Props> {
  public render() {
    const { classes, children, deviceEnvironment: { isMobile } } = this.props;
    const Header = isMobile ? MobileHeader : DesktopHeader;

    const desktopMenuRedirectPaths = {
      dashboard: routes.demo.header.dashboard.getRoutePath(),
      marketplace: routes.demo.header.marketplace.getRoutePath(),
    };

    const mobileMenuRedirectPaths = {
      ...desktopMenuRedirectPaths,
      profile: routes.demo.header.profile.getRoutePath(),
    };

    return (
      <RowsLayout
        isMobile={isMobile}
        footerContent={<Footer />}
        headerContent={(
          <Header
            brandRedirectPath={'homeRedirectPath'}
            menuRedirectPaths={isMobile ? mobileMenuRedirectPaths : desktopMenuRedirectPaths}
          >
            header
          </Header>
        )}
      >
        <div className={classes.content}>
          {children}
        </div>
      </RowsLayout>
    );
  }
}

export default WithDeviceEnvironment(provideStyles(BaseLayout));

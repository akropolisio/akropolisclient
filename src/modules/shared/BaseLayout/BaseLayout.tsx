import * as React from 'react';

import { RowsLayout } from 'shared/view/elements';
import {
  Footer, WithDeviceEnvironment, IWithDeviceEnvironmentInjectedProps,
} from 'shared/view/components';

import Header from '../Header/Header';

import { StylesProps, provideStyles } from './BaseLayout.style';

interface IOwnProps {
  children: React.ReactNode;
}

type Props = IOwnProps & StylesProps & IWithDeviceEnvironmentInjectedProps;

class BaseLayout extends React.PureComponent<Props> {
  public render() {
    const { classes, children, deviceEnvironment: { isMobile } } = this.props;

    return (
      <RowsLayout
        isMobile={isMobile}
        footerContent={<Footer />}
        headerContent={<Header />}
      >
        <div className={classes.content}>
          {children}
        </div>
      </RowsLayout>
    );
  }
}

export default WithDeviceEnvironment(provideStyles(BaseLayout));

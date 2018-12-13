import * as React from 'react';

import { RowsLayout } from 'shared/view/elements';
import { Header, Footer } from 'shared/view/components';

import { StylesProps, provideStyles } from './BaseLayout.style';

interface IOwnProps {
  children: React.ReactNode;
}

type Props = IOwnProps & StylesProps;

class BaseLayout extends React.PureComponent<Props> {
  public render() {
    const { classes, children } = this.props;

    return (
      <RowsLayout
        footerContent={<Footer />}
        headerContent={(
          <Header
            brandRedirectPath={'homeRedirectPath'}
            menuRedirectPaths={{ order: 'orderRedirectPath' }}
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

export default provideStyles(BaseLayout);

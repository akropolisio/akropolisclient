import * as React from 'react';

import { RowsLayout } from 'shared/view/elements';

import Header from '../Header/Header';

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
        headerContent={<Header />}
      >
        <div className={classes.content}>
          {children}
        </div>
      </RowsLayout>
    );
  }
}

export default provideStyles(BaseLayout);

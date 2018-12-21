import * as React from 'react';

import { BaseLayout } from 'modules/shared';

import { provideStyles, StylesProps } from './DemoHeader.style';

type IProps = StylesProps;

class DemoHeader extends React.PureComponent<IProps> {

  public render() {
    const { classes } = this.props;

    return (
      <BaseLayout>
        <div className={classes.root} />
      </BaseLayout>
    );
  }

}

export default provideStyles(DemoHeader);

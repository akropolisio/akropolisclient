import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import { provideStyles, StylesProps } from './Footer.style';

class Footer extends React.PureComponent<StylesProps> {
  public render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" color="default">
        <Toolbar classes={{ root: classes.toolbarRoot }} />
      </AppBar>
    );
  }
}

export default provideStyles(Footer);

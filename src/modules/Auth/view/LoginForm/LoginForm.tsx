import * as React from 'react';
import { Button } from 'shared/view/elements';

import { SelectRole } from './components';
import { StylesProps, provideStyles } from './LoginForm.style';
import * as logo from './images/logo.png';

class LoginForm extends React.PureComponent<StylesProps> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <img className={classes.logo} src={logo} />
          <div className={classes.subTitle}>decentralised pensions and savings infrastructure</div>
          <div className={classes.title}>a trustless financial future for everyone</div>
          <div className={classes.selectRole}>select your role</div>
          <div className={classes.roles}><SelectRole /></div>
          <div className={classes.signButtons}>
            <div style={{ marginBottom: '0.625rem' }}>
              <Button fullWidth variant="contained" color="primary">Sign in</Button>
            </div>
            <div>
              <Button fullWidth variant="outlined">Sign up</Button>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default provideStyles(LoginForm);

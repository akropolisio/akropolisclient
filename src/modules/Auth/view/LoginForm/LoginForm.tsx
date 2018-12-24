import * as React from 'react';
import { bind } from 'decko';
import { withRouter, RouteComponentProps } from 'react-router';

import { Button } from 'shared/view/elements';
import routes from 'modules/routes';
import { Logo } from 'modules/shared';

import { SelectRole, IRole, Role } from './components';
import { StylesProps, provideStyles } from './LoginForm.style';

interface IState {
  selectedRole: Role;
}

const roles: IRole[] = [
  { value: 'beneficiary', title: 'Beneficiary', hint: 'individual saver that acts as a provider of capital' },
  { value: 'fundOwner', title: 'Fund owner', hint: 'A creator of an Pension Fund' },
  { value: 'boardMember', title: 'Board member', hint: 'Party responsible for Asset Manager selection' },
  {
    value: 'assetManager', title: 'Asset manager',
    hint: 'Party responsible for investment management of Pension Fund’s',
  },
];

type IProps = RouteComponentProps & StylesProps;

class LoginForm extends React.PureComponent<IProps, IState> {
  public state: IState = { selectedRole: roles[0].value };

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <Logo linkTo={'/'} />
          </div>
          <div className={classes.subTitle}>decentralised pensions and savings infrastructure</div>
          <div className={classes.title}>a trustless financial future for everyone</div>
          <div className={classes.selectRole}>select your role</div>
          <div className={classes.roles}>
            <SelectRole selectedRole={this.state.selectedRole} roles={roles} onSelectRole={this.onSelectRole} />
          </div>
          <div className={classes.signButtons}>
            <div style={{ marginBottom: '0.625rem' }}>
              <Button onClick={this.onSignIn} fullWidth variant="contained" color="primary">Sign in</Button>
            </div>
            <div>
              <Button onClick={this.onSignUp} fullWidth variant="outlined">Sign up</Button>
            </div>
          </div>
        </div>
      </div>);
  }

  @bind
  public onSelectRole(role: Role) {
    this.setState({ selectedRole: role });
  }

  @bind
  public onSignIn() {
    this.props.history.push(routes.auth.signIn.getRedirectPath({ role: this.state.selectedRole }));
  }

  @bind
  public onSignUp() {
    this.props.history.push(routes.auth.signUp.getRedirectPath({ role: this.state.selectedRole }));

  }
}

export default withRouter(provideStyles(LoginForm));

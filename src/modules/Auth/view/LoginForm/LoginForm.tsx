import * as React from 'react';
import { bind } from 'decko';
import { withRouter, RouteComponentProps, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Logo } from 'modules/shared';
import routes from 'modules/routes';
import { tKeys, i18nConnect, ITranslateProps } from 'services/i18n';
import { Adaptive } from 'services/adaptability';
import { SignTransactionButton } from 'services/signTransaction';
import { SignUpModal } from 'features/signUp';

import { UserRole } from 'shared/types/models';
import { Button } from 'shared/view/elements';
import { withComponent } from 'shared/helpers/react';

import { SelectRole } from './components';
import { StylesProps, provideStyles } from './LoginForm.style';

const LinkButton = withComponent(Link)(Button);

const tKeysAuth = tKeys.modules.auth;

type IProps = RouteComponentProps<{ role: UserRole }> & StylesProps & ITranslateProps;

class LoginForm extends React.PureComponent<IProps> {

  public render() {
    const { classes, location, t, match } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Adaptive to="sm" className={classes.mobileLogo}>
            <Logo viewType="column" linkTo={'/'} />
          </Adaptive>
          <Adaptive from="sm" className={classes.desktopLogo}>
            <Logo viewType="row" linkTo={'/'} />
          </Adaptive>
          <div className={classes.subTitle}>{t(tKeysAuth.authForm.subTitle.getKey())}</div>
          <div className={classes.title}>{t(tKeysAuth.authForm.title.getKey())}</div>
          <div className={classes.selectRole}>{t(tKeysAuth.authForm.selectRole.getKey())}</div>
          <div className={classes.roles}>
            <SelectRole />
          </div>
          <div className={classes.signButtons}>
            <SignTransactionButton<'signIn'>
              transactionType="signIn"
              data={{ role: match.params.role }}
              className={classes.signInButton}
              fullWidth
              variant="contained"
              color="primary"
              onSuccess={this.onSignInSuccess}
            >
              {t(tKeysAuth.signIn.getKey())}
            </SignTransactionButton>
            <LinkButton to={location.pathname + '/signUp'} fullWidth variant="outlined">
              {t(tKeysAuth.signUp.getKey())}
            </LinkButton>
          </div>
        </div>
        <Route path={routes.auth.role.signUp.getRoutePath()}>
          {({ match: signUpMatch }: RouteComponentProps<{ role: UserRole }>) => (
            <SignUpModal
              size="medium"
              isOpen={Boolean(signUpMatch && signUpMatch.isExact)}
              role={match.params.role}
              onSuccess={this.onSignUpSuccess}
              onClose={this.onSignUpClose}
            />
          )}
        </Route>
      </div>);
  }

  @bind
  private onSignUpClose() {
    const { history, match } = this.props;
    history.push(routes.auth.role.getRedirectPath({ role: match.params.role }));
  }

  @bind
  private onSignInSuccess() {
    // do something
  }

  @bind
  private onSignUpSuccess() {
    this.onSignUpClose();
    // do something
  }
}

export default withRouter(i18nConnect(provideStyles(LoginForm)));

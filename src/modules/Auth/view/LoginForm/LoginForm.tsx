import * as React from 'react';
import { bind } from 'decko';
import { RouteComponentProps, Route } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Logo } from 'modules/shared';
import routes from 'modules/routes';

import { Adaptive } from 'services/adaptability';
import { tKeys, i18nConnect, ITranslateProps } from 'services/i18n';
import { SignTransactionButton } from 'services/signTransaction';
import * as userService from 'services/user';
import { SignUpModal } from 'features/signUp';

import { UserRole } from 'shared/types/models';
import { Button } from 'shared/view/elements';
import { withComponent } from 'shared/helpers/react';
import { InjectedAuthRouterProps } from 'shared/helpers/authWrapper';

import { StylesProps, provideStyles } from './LoginForm.style';

const LinkButton = withComponent(Link)(Button);

const tKeysAuth = tKeys.modules.auth;

type IActionProps = typeof mapDispatch;

type IProps =
  & IActionProps & StylesProps & ITranslateProps
  & InjectedAuthRouterProps & RouteComponentProps<{ role: UserRole }>;

const mapDispatch = {
  completeAuthentication: userService.actions.completeAuthentication,
};

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
    const { match, completeAuthentication } = this.props;
    setTimeout(() => completeAuthentication(match.params.role), 2000); // remove when endpoint will available
  }

  @bind
  private onSignUpSuccess() {
    this.onSignUpClose();
    this.onSignInSuccess();
  }
}

export default (
  connect(null, mapDispatch)(
    i18nConnect(provideStyles(LoginForm)),
  )
);

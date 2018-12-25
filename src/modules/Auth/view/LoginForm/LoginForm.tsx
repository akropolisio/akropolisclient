import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { Logo } from 'modules/shared';
import { tKeys, i18nConnect, ITranslateProps } from 'services/i18n';
import { Adaptive } from 'services/adaptability';

import { Button } from 'shared/view/elements';
import { withComponent } from 'shared/helpers';

import { SelectRole } from './components';
import { StylesProps, provideStyles } from './LoginForm.style';

const LinkButton = withComponent(Link)(Button);

const tKeysAuth = tKeys.modules.auth;

type IProps = RouteComponentProps & StylesProps & ITranslateProps;

class LoginForm extends React.PureComponent<IProps> {

  public render() {
    const { classes, location, t } = this.props;
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
            <LinkButton
              className={classes.signInButton}
              to={location.pathname + '/signIn'}
              fullWidth
              variant="contained"
              color="primary"
            >
              {t(tKeysAuth.signIn.getKey())}
            </LinkButton>
            <LinkButton to={location.pathname + '/signUp'} fullWidth variant="outlined">
              {t(tKeysAuth.signUp.getKey())}
            </LinkButton>
          </div>
        </div>
      </div>);
  }
}

export default withRouter(i18nConnect(provideStyles(LoginForm)));

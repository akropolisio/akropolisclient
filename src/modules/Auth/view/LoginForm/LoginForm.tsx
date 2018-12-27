import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { Logo } from 'modules/shared';
import { tKeys, i18nConnect, ITranslateProps } from 'services/i18n';
import { Adaptive } from 'services/adaptability';

import { Button } from 'shared/view/elements';
import { withComponent } from 'shared/helpers/react';

import { SelectRole } from './components';
import { StylesProps, provideStyles } from './LoginForm.style';
import { SignTransactionButton } from 'services/signTransaction';
import { UserRole } from 'shared/types/models';

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
              onSuccess={console.log.bind(null, '>> success >>')}
              onCancel={console.log.bind(null, '>> cancel >>')}
            >
              {t(tKeysAuth.signIn.getKey())}
            </SignTransactionButton>
            <LinkButton to={location.pathname + '/signUp'} fullWidth variant="outlined">
              {t(tKeysAuth.signUp.getKey())}
            </LinkButton>
          </div>
        </div>
      </div>);
  }
}

export default withRouter(i18nConnect(provideStyles(LoginForm)));

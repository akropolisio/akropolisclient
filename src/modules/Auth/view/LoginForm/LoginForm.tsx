import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import { Button } from 'shared/view/elements';
import routes from 'modules/routes';
import { Logo } from 'modules/shared';
import { tKeys, i18nConnect, ITranslateProps } from 'services/i18n';

import { SelectRole, IRole } from './components';
import { StylesProps, provideStyles } from './LoginForm.style';
import { withComponent } from 'shared/helpers';
import { Link } from 'react-router-dom';

const LinkButton = withComponent(Link)(Button);

const tKeysAuth = tKeys.modules.auth;
const roles: IRole[] = [
  {
    value: 'beneficiary',
    link: routes.auth.role.getRedirectPath({ role: 'beneficiary' }),
    title: tKeysAuth.roles.title.beneficiary.getKey(),
    hint: tKeysAuth.roles.hint.beneficiary.getKey(),
  },
  {
    value: 'fundOwner',
    link: routes.auth.role.getRedirectPath({ role: 'fundOwner' }),
    title: tKeysAuth.roles.title.fundOwner.getKey(),
    hint: tKeysAuth.roles.hint.fundOwner.getKey(),

  },
  {
    value: 'boardMember',
    link: routes.auth.role.getRedirectPath({ role: 'boardMember' }),
    title: tKeysAuth.roles.title.boardMember.getKey(),
    hint: tKeysAuth.roles.hint.boardMember.getKey(),

  },
  {
    value: 'assetManager',
    link: routes.auth.role.getRedirectPath({ role: 'assetManager' }),
    title: tKeysAuth.roles.title.assetManager.getKey(),
    hint: tKeysAuth.roles.hint.assetManager.getKey(),
  },
];

type IProps = RouteComponentProps & StylesProps & ITranslateProps;

class LoginForm extends React.PureComponent<IProps> {

  public render() {
    const { classes, location, t } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <Logo linkTo={'/'} />
          </div>
          <div className={classes.subTitle}>{t(tKeysAuth.authForm.subTitle.getKey())}</div>
          <div className={classes.title}>{t(tKeysAuth.authForm.title.getKey())}</div>
          <div className={classes.selectRole}>{t(tKeysAuth.authForm.selectRole.getKey())}</div>
          <div className={classes.roles}>
            <SelectRole roles={roles} />
          </div>
          <div className={classes.signButtons}>
            <div className={classes.signInButton}>
              <LinkButton to={location.pathname + '/signIn'} fullWidth variant="contained" color="primary">
                {t(tKeysAuth.signIn.getKey())}
              </LinkButton>
            </div>
            <div>
              <LinkButton to={location.pathname + '/signUp'} fullWidth variant="outlined">
                {t(tKeysAuth.signUp.getKey())}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default withRouter(i18nConnect(provideStyles(LoginForm)));

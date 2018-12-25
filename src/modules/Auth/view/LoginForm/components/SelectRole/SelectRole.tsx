import * as React from 'react';
import { Link } from 'react-router-dom';
import * as cn from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router';

import routes from 'modules/routes';
import { i18nConnect, ITranslateProps, tKeys } from 'services/i18n';
import { Adaptive } from 'services/adaptability';

import { ToggleButton, Tooltip, ToggleButtonGroup, TextInput, MenuItem } from 'shared/view/elements';
import { Question } from 'shared/view/elements/Icons';
import { withComponent } from 'shared/helpers';

import { Role } from '../../../../namespace';
import { StylesProps, provideStyles } from './SelectRole.style';

type IProps = StylesProps & ITranslateProps & RouteComponentProps<{ role: Role }>;

const NavToggleButton = withComponent(Link)(ToggleButton);
const NavMenuItem = withComponent(Link)(MenuItem);

const tKeysAuth = tKeys.modules.auth;
const roles: Role[] = ['beneficiary', 'fundOwner', 'boardMember', 'assetManager'];

class SelectRole extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, match: { params: { role: selectedRole } } } = this.props;

    return (
      <>
        <Adaptive to="sm">
          <TextInput
            value={selectedRole}
            variant="outlined"
            select
            fullWidth
            InputProps={{
              classes: { input: classes.overrideInput },
            }}
          >
            {roles.map(role => (
              <NavMenuItem to={routes.auth.role.getRedirectPath({ role })} key={role} value={role}>
                {t(tKeysAuth.roles.title[role].getKey())}
                <Tooltip placement="top" title={t(tKeysAuth.roles.hint[role].getKey())}>
                  <Question className={cn(classes.rightIcon, classes.inMenu)} />
                </Tooltip>
              </NavMenuItem>
            ))}
          </TextInput>
        </Adaptive>

        <Adaptive from="sm">
          <ToggleButtonGroup value={selectedRole} exclusive nullable={false} >
            {roles.map(role => (
              <NavToggleButton
                to={routes.auth.role.getRedirectPath({ role })}
                className={classes.roleButton}
                value={role}
                key={role}
                classes={{ selected: classes.isSelected }}
              >
                {t(tKeysAuth.roles.title[role].getKey())}
                <Tooltip placement="top" title={t(tKeysAuth.roles.hint[role].getKey())}>
                  <Question className={cn(classes.rightIcon)} />
                </Tooltip>
              </NavToggleButton>
            ))}
          </ToggleButtonGroup>
        </Adaptive>
      </>
    );
  }
}

export default withRouter(i18nConnect(provideStyles(SelectRole)));

import * as React from 'react';
import { Link } from 'react-router-dom';
import * as cn from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router';

import { ToggleButton, Tooltip, ToggleButtonGroup } from 'shared/view/elements';
import { Question } from 'shared/view/elements/Icons';
import { withComponent } from 'shared/helpers';
import { i18nConnect, ITranslateProps } from 'services/i18n';

import { StylesProps, provideStyles } from './SelectRole.style';

type Role = 'beneficiary' | 'fundOwner' | 'boardMember' | 'assetManager';

interface IRole {
  value: Role;
  title: string;
  hint: string;
  link: string;
}

export { Role, IRole };
interface IOwnProps {
  roles: IRole[];
}

type IProps = IOwnProps & StylesProps & ITranslateProps & RouteComponentProps<{ role: string }>;

const NavToggleButton = withComponent(Link)(ToggleButton);

class SelectRole extends React.PureComponent<IProps> {

  public render() {
    const { classes, t, roles, match: { params: { role: selectedRole } } } = this.props;

    return (
      <ToggleButtonGroup value={selectedRole} exclusive nullable={false} >
        {roles.map(role => (
          <NavToggleButton
            to={role.link}
            className={classes.roleButton}
            value={role.value}
            key={role.value}
          >
            {t(role.title)}
            <Tooltip placement="top" title={t(role.hint)}>
              <Question className={cn(classes.rightIcon, { [classes.isSelected]: selectedRole === role.value })} />
            </Tooltip>
          </NavToggleButton>
        ))}
      </ToggleButtonGroup>
    );
  }
}

export default withRouter(provideStyles(i18nConnect(SelectRole)));

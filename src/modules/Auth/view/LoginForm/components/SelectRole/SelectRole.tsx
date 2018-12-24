import * as React from 'react';
import { bind } from 'decko';
import { ToggleButton, Tooltip, ToggleButtonGroup } from 'shared/view/elements';
import { Question } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './SelectRole.style';

export type Role = 'beneficiary' | 'fundOwner' | 'boardMember' | 'assetManager';

export interface IRole {
  value: Role;
  title: string;
  hint: string;
}

interface IOwnProps {
  roles: IRole[];
  selectedRole: Role;
  onSelectRole(role: Role): void;
}

type IProps = IOwnProps & StylesProps;

class SelectRole extends React.PureComponent<IProps> {

  public render() {
    const { classes, roles, selectedRole } = this.props;
    return (
      <ToggleButtonGroup value={selectedRole} onChange={this.onSelectRole} exclusive nullable={false} >
        {roles.map(role => (
          <ToggleButton
            className={role.value === selectedRole ? classes.roleButtonSelected : classes.roleButton}
            value={role.value}
            key={role.value}
          >
            {role.title}
            <Tooltip placement="top" title={role.hint}>
              <Question className={classes.rightIcon} />
            </Tooltip>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    );
  }

  @bind
  public onSelectRole(event: React.MouseEvent<HTMLElement>, value: Role) {
    this.props.onSelectRole(value);
  }
}

export default (provideStyles(SelectRole));

import * as React from 'react';

import { ToggleButton, Tooltip } from 'shared/view/elements';
import { ToggleButtonGroupField } from 'shared/view/redux-form';
import { Question } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './SelectRole.style';
import { reduxForm, InjectedFormProps } from 'redux-form';
import uuid = require('uuid');

interface IFormData {
  selectedGroup: string;
}

function SelectRole(props: StylesProps & InjectedFormProps<IFormData>) {
  const { classes } = props;
  return (
    <ToggleButtonGroupField name="selectedGroup" exclusive nullable={false}>
      <ToggleButton value="beneficiary">
        Beneficiary
          <Tooltip placement="top" title="individual saver that acts as a provider of capital">
          <Question className={classes.rightIcon} />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="fund owner">
        Fund owner
          <Tooltip placement="top" title=" A creator of an Pension Fund">
          <Question className={classes.rightIcon} />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="board member">
        Board member
          <Tooltip placement="top" title="Party responsible for Asset Manager selection">
          <Question className={classes.rightIcon} />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="asset manager">
        Asset manager
          <Tooltip placement="top" title="Party responsible for investment management of Pension Fund’s ">
          <Question className={classes.rightIcon} />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroupField>
  );
}

export default (
  reduxForm<IFormData>({ form: uuid(), initialValues: { selectedGroup: 'beneficiary' } })(
    provideStyles(SelectRole),
  )
);

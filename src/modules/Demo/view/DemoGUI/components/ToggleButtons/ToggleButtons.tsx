import * as React from 'react';

import { SimpleList, ToggleButton, Tooltip } from 'shared/view/elements';
import { ToggleButtonGroupField } from 'shared/view/redux-form';
import { Question } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './ToggleButtons.style';
import { reduxForm, InjectedFormProps } from 'redux-form';
import uuid from 'uuid';

interface IOwnProps {
  variant: 'contained' | 'outlined';
}
interface IFormData {
  selectedGroup: string;
}

function ToggleButtons(props: IOwnProps & StylesProps & InjectedFormProps<IFormData, IOwnProps>) {
  const { classes, variant } = props;
  return (
    <SimpleList marginFactor={2} gutter>
      <ToggleButtonGroupField name="selectedGroup" exclusive nullable={false}>
        <ToggleButton variant={variant} value="beneficiary">
          Beneficiary
          <Tooltip placement="top" title="qweqwe">
            <Question className={classes.rightIcon} />
          </Tooltip>
        </ToggleButton>
        <ToggleButton variant={variant} value="fund owner">
          Fund owner
          <Tooltip placement="top" title="qweqwe">
            <Question className={classes.rightIcon} />
          </Tooltip>
        </ToggleButton>
        <ToggleButton disabled variant={variant} value="board member">
          Board member
          <Tooltip placement="top" title="qweqwe">
            <Question className={classes.rightIcon} />
          </Tooltip>
        </ToggleButton>
        <ToggleButton variant={variant} value="asset manager">
          Asset manager
          <Tooltip placement="top" title="qweqwe">
            <Question className={classes.rightIcon} />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroupField>
    </SimpleList>
  );
}

export default (
  reduxForm<IFormData, IOwnProps>({ form: uuid(), initialValues: { selectedGroup: 'beneficiary' } })(
    provideStyles(ToggleButtons),
  )
);

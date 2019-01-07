import * as React from 'react';
import { Form } from 'react-final-form';

import { SimpleList, ToggleButton, Tooltip } from 'shared/view/elements';
import { ToggleButtonGroupField } from 'shared/view/redux-form';
import { Question } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './ToggleButtons.style';

interface IOwnProps {
  variant: 'contained' | 'outlined';
}
interface IFormData {
  selectedGroup: string;
}

const initial: IFormData = {
  selectedGroup: 'beneficiary',
};

function ToggleButtons(props: StylesProps & IOwnProps) {
  const { classes, variant } = props;
  return (
    <Form onSubmit={console.log} initialValues={initial}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
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
        </form>
      )}
    </Form>
  );
}

export default provideStyles(ToggleButtons);

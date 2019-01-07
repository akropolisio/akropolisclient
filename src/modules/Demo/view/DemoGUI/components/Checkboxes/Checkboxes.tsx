import * as React from 'react';
import { Form } from 'react-final-form';

import { SimpleList, Typography } from 'shared/view/elements';
import { CheckboxInputField } from 'shared/view/redux-form';
import { isRequired } from 'shared/validators';

interface IFormData {
  box1: boolean;
  box2: boolean;
  box3: boolean;
}

const initial: IFormData = {
  box1: false,
  box2: false,
  box3: true,
};

function Checkboxes() {
  return (
    <Form onSubmit={console.log} initialValues={initial} >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <SimpleList marginFactor={0} gutter>
            <Typography variant="h4">CheckBoxes</Typography>
            <CheckboxInputField name="box1" label="Standard" />
            <CheckboxInputField name="box2" label="Required" required validate={isRequired} />
            <CheckboxInputField name="box3" label="Disabled checked" disabled />
          </SimpleList>
        </form>
      )}
    </Form>
  );
}

export default Checkboxes;

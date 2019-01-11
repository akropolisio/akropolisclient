import * as React from 'react';
import * as R from 'ramda';
import { Form, FormSpy } from 'react-final-form';

import { formatSliderLabelDefault } from 'shared/helpers/format';
import { SimpleList, Typography, MenuItem } from 'shared/view/elements';
import { SliderField, SliderSelectField, NumberInputField, TextInputField } from 'shared/view/form';

interface IFormData {
  default: number;
  select: string;
  withNumberInput: number;
  withSelectInput: string;
}

const initial: IFormData = {
  default: 0,
  select: 'day',
  withNumberInput: 0,
  withSelectInput: 'day',
};

function Sliders() {
  const menuItems = ['day', 'week', 'month', 'year'].map(item => (
    <MenuItem key={item} value={item}>Label for {item}</MenuItem>
  ));

  return (
    <Form onSubmit={console.log} initialValues={initial} subscription={{ submitting: true }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <SimpleList marginFactor={2} gutter alignItems="stretch">
            <Typography variant="h4">Sliders</Typography>
            <Typography variant="h5">Default slider: {renderValue('default')}</Typography>
            <SliderField name="default" min={-100} step={1} formatLabel={R.identity} />
            <Typography variant="h5">Select slider: {renderValue('select')}</Typography>
            <SliderSelectField name="select" formatLabel={formatSliderLabelDefault}>
              {menuItems}
            </SliderSelectField>
            <Typography variant="h5">Default slider with number input: {renderValue('withNumberInput')}</Typography>
            <NumberInputField
              fullWidth
              name="withNumberInput"
              label="Number input"
              variant="outlined"
              thousandSeparator
              prefix="$"
              decimalScale={2}
            />
            <SliderField name="withNumberInput" min={-100} step={1} formatLabel={R.identity} />
            <Typography variant="h5">Select slider with select input: {renderValue('withSelectInput')}</Typography>
            <TextInputField name="withSelectInput" label="Select" variant="outlined" select fullWidth>
              {menuItems}
            </TextInputField>
            <SliderSelectField name="withSelectInput" formatLabel={formatSliderLabelDefault}>
              {menuItems}
            </SliderSelectField>
          </SimpleList>
        </form>
      )}
    </Form>
  );
}

function renderValue(key: keyof IFormData) {
  return (
    <FormSpy subscription={{ values: true }}>
      {({ values }) => values[key]}
    </FormSpy>
  );
}

export default Sliders;

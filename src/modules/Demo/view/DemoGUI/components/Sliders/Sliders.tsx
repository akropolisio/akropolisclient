import * as React from 'react';
import * as R from 'ramda';
import uuid from 'uuid';
import { GetProps } from '_helpers';
import { connect } from 'react-redux';
import { reduxForm, InjectedFormProps, getFormValues } from 'redux-form';

import { IAppReduxState } from 'shared/types/app';
import { SimpleList, Typography, MenuItem } from 'shared/view/elements';
import { SliderField, SliderSelectField, NumberInputField, TextInputField } from 'shared/view/redux-form';

interface IFormData {
  default: number;
  select: string;
  withNumberInput: number;
  withSelectInput: string;
}

interface IStateProps {
  formData: IFormData;
}

type IProps = IStateProps & InjectedFormProps<IFormData>;

const formName = uuid();

function mapState(state: IAppReduxState): IStateProps {
  return {
    formData: getFormValues(formName)(state) as IFormData,
  };
}

function Sliders(props: IProps) {
  const { formData } = props;

  const menuItems = ['day', 'week', 'month', 'year'].map(item => (
    <MenuItem key={item} value={item}>Label for {item}</MenuItem>
  ));

  return (
    <SimpleList marginFactor={2} gutter alignItems="stretch">
      <Typography variant="h4">Sliders</Typography>
      <Typography variant="h5">Default slider: {formData.default}</Typography>
      <SliderField name="default" min={-100} step={1} formatLabel={R.identity} />
      <Typography variant="h5">Select slider: {formData.select}</Typography>
      <SliderSelectField name="select" formatLabel={formatSliderLabel}>
        {menuItems}
      </SliderSelectField>
      <Typography variant="h5">Default slider with number input: {formData.withNumberInput}</Typography>
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
      <Typography variant="h5">Select slider with select input: {formData.withSelectInput}</Typography>
      <TextInputField name="withSelectInput" label="Select" variant="outlined" select fullWidth>
        {menuItems}
      </TextInputField>
      <SliderSelectField name="withSelectInput" formatLabel={formatSliderLabel}>
        {menuItems}
      </SliderSelectField>
    </SimpleList>
  );
}

const formatSliderLabel: NonNullable<GetProps<typeof SliderSelectField>['formatLabel']> = item => item.label || '';

const initialValues: IFormData = {
  default: 0,
  select: 'day',
  withNumberInput: 0,
  withSelectInput: 'day',
};

export default (
  reduxForm<IFormData>({ form: formName, initialValues })(
    connect(mapState)(Sliders),
  )
);

import * as React from 'react';

import { SimpleList, Typography, SliderItem } from 'shared/view/elements';
import { SliderField, SliderSelectField } from 'shared/view/redux-form';

import { reduxForm, InjectedFormProps, getFormValues } from 'redux-form';
import uuid from 'uuid';
import * as R from 'ramda';
import { IAppReduxState } from 'shared/types/app';
import { connect } from 'react-redux';
import { GetProps } from '_helpers';

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
  return (
    <SimpleList marginFactor={2} gutter alignItems="stretch">
      <Typography variant="h4">Sliders</Typography>
      <Typography variant="h5">Default slider: {formData.default}</Typography>
      <SliderField name="default" min={-100} step={1} formatLabel={R.identity} />
      <Typography variant="h5">Select slider: {formData.select}</Typography>
      <SliderSelectField name="select" formatLabel={formatSliderLabel}>
        <SliderItem value="day">Label for day</SliderItem>
        <SliderItem value="week">Label for week</SliderItem>
        <SliderItem value="month">Label for month</SliderItem>
        <SliderItem value="year">Label for year</SliderItem>
      </SliderSelectField>
    </SimpleList>
  );
}

const formatSliderLabel: NonNullable<GetProps<typeof SliderSelectField>['formatLabel']> = item => item.label || '';

export default (
  reduxForm<IFormData>({ form: formName, initialValues: { default: 0, select: 'day' } })(
    connect(mapState)(Sliders),
  )
);

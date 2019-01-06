import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { GetProps } from '_helpers';

import { RadioGroupInput } from 'shared/view/elements';
import { getFieldWithComponent } from 'shared/helpers/react';

type IProps = GetProps<typeof RadioGroupInput> & WrappedFieldProps;

function RadioGroupInputField(props: IProps) {
  const { input, meta, ...rest } = props;
  const error = typeof rest.error === 'boolean'
    ? rest.error && meta.error
    : meta.touched && meta.error;
  return (
    <RadioGroupInput {...rest} helperText={error} error={Boolean(error)} {...input} />
  );
}

export default getFieldWithComponent(RadioGroupInputField);

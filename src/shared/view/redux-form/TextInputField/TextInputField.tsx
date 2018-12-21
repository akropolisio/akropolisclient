import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { GetProps } from '_helpers';

import { TextInput } from 'shared/view/elements';
import { getFieldWithComponent } from 'shared/helpers/react';

type IProps = GetProps<typeof TextInput> & WrappedFieldProps;

function TextInputField(props: IProps) {
  const { classes, input, meta, ...rest } = props;
  const error = typeof rest.error === 'boolean'
    ? rest.error && meta.error
    : meta.touched && meta.error;
  return (
    <TextInput helperText={error} error={Boolean(error)} {...rest} {...input} />
  );
}

export default getFieldWithComponent(TextInputField);

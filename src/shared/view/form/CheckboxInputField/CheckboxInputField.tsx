import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { GetProps } from '_helpers';

import { CheckboxInput } from 'shared/view/elements';
import { getFieldWithComponent } from 'shared/helpers/react';
import { ITranslateFunction } from 'services/i18n';

type IProps = GetProps<typeof CheckboxInput> & FieldRenderProps & { t?: ITranslateFunction };

function CheckboxInputField(props: IProps) {
  const { input, meta, t, ...rest } = props;
  const translatedError = meta.error && t ? t(meta.error) : meta.error;
  const error = typeof rest.error === 'boolean'
    ? rest.error && translatedError
    : meta.touched && translatedError;
  const value = typeof input.value === 'boolean' ? undefined : input.value;
  return (
    <CheckboxInput {...rest} helperText={error} error={Boolean(error)} {...input} value={value} />
  );
}

export default getFieldWithComponent(CheckboxInputField, 'checkbox');

import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { GetProps } from '_helpers';

import { TextInput } from 'shared/view/elements';
import { getFieldWithComponent } from 'shared/helpers/react';
import { ITranslateFunction } from 'services/i18n';

type IProps = GetProps<typeof TextInput> & FieldRenderProps & { t?: ITranslateFunction };

function TextInputField(props: IProps) {
  const { input, meta, t, ...rest } = props;
  const translatedError = meta.error && t ? t(meta.error) : meta.error;
  const error = typeof rest.error === 'boolean'
    ? rest.error && translatedError
    : meta.touched && translatedError;
  return (
    <TextInput {...rest} helperText={error} error={Boolean(error)} {...input} />
  );
}

export default getFieldWithComponent(TextInputField);

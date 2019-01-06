import * as React from 'react';
import { Field, WrappedFieldProps, BaseFieldProps } from 'redux-form';
import { Omit, MergeRight } from '_helpers';

type BaseWrappedFieldProps = WrappedFieldProps & {
  value?: any;
};

function getFieldWithComponent<P extends BaseWrappedFieldProps>(Component: React.ComponentType<P>) {
  type OwnProps = Omit<P, keyof BaseWrappedFieldProps>;
  type FieldProps = Omit<BaseFieldProps<OwnProps>, 'component'>;
  type ResultProps = MergeRight<OwnProps, FieldProps>;

  const result: React.StatelessComponent<ResultProps> = (props: ResultProps) =>
    <Field<OwnProps> {...props as any} component={Component} />;
  result.displayName = `FieldWithComponent(${Component.displayName || Component.name || 'Component'})`;
  return result;
}

export default getFieldWithComponent;

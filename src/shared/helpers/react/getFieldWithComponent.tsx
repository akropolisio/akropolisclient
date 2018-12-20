import * as React from 'react';
import { Omit } from 'react-redux';
import { Field, WrappedFieldProps, BaseFieldProps } from 'redux-form';

function getFieldWithComponent<P extends WrappedFieldProps>(Component: React.ComponentType<P>) {
  type OwnProps = Omit<P, keyof WrappedFieldProps>;
  type ResultProps = Omit<BaseFieldProps<OwnProps>, 'component'> & OwnProps;

  const result: React.StatelessComponent<ResultProps> = (props: ResultProps) =>
    <Field<OwnProps> {...props} component={Component} />;
  result.displayName = `FieldWithComponent(${Component.displayName || Component.name || 'Component'})`;
  return result;
}

export default getFieldWithComponent;

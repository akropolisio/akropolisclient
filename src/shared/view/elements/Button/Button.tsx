import * as React from 'react';
import { SubSet, Omit } from '_helpers';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';

type ICommonProps = Omit<ButtonProps, 'color'>;

type IProps = ICommonProps & {
  color?: SubSet<ButtonProps['color'], 'primary' | 'default'>;
};

function Button(props: IProps) {
  return (
    <MuiButton {...props} />
  );
}

export default Button;

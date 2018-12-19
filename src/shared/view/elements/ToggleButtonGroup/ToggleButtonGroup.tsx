import * as React from 'react';
import MuiToggleButtonGroup, { ToggleButtonGroupProps } from '@material-ui/lab/ToggleButtonGroup';
import { StylesProps, provideStyles } from './ToggleButtonGroup.style';
import { Omit } from '_helpers';

type IProps = Omit<ToggleButtonGroupProps, 'classes'> & StylesProps;

function ToggleButtonGroup(props: IProps) {
  return (
    <MuiToggleButtonGroup color="primary" {...props} />
  );
}

export default provideStyles(ToggleButtonGroup);

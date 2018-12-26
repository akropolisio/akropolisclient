import * as React from 'react';
import MuiSlider, {SliderProps} from '@material-ui/lab/Slider';
import { StylesProps, provideStyles } from './Slider.style';
import { Omit } from '_helpers';

type IProps = Omit<SliderProps, 'classes'> & StylesProps;

function Slider(props: IProps) {
  return (
    <MuiSlider value={20}classes={props.classes} {...props} />
  );
}

export default provideStyles(Slider);

import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

import { StylesProps, provideStyles } from './CircleProgressBar.style';
import { Omit } from '_helpers';

type IProps = Omit<CircularProgressProps, 'classes'> & StylesProps;

function CircleProgressBar(props: IProps) {
  return (
    <div className={props.classes.piechart}>
        <CircularProgress
          variant="determinate"
          value={100}
          className={props.classes.overlay}
          size={props.size}
        />
        <CircularProgress
          variant="static"
          disableShrink
          className={props.classes.progress}
          size={props.size}
          value={props.value}
        />
      </div>
  );
}

export default provideStyles(CircleProgressBar);

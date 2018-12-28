import * as React from 'react';
import MuiSlider, {SliderProps} from '@material-ui/lab/Slider';
import { StylesProps, provideStyles } from './Slider.style';
import { Omit } from '_helpers';

type IProps = Omit<SliderProps, 'classes'> & StylesProps;

interface IState {
  sliderValue: number;
}

class Slider extends React.Component<IProps> {
  public state: IState = {
    sliderValue: this.props.value ? this.props.value : 0,
  };

  public render() {
    const { classes } = this.props;
    const { sliderValue } = this.state;
    const thumb = (
      <div className={classes.runnerWrapper}>
        <div className={classes.runner} />
      </div>
    );
    return (
      <MuiSlider
        {...this.props}
        classes={{
          thumb: classes.thumb,
          track: classes.track,
          trackAfter: classes.trackAfter,
        }}
        thumb={thumb}
        value={sliderValue}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = (event: React.ChangeEvent, value: number) => {
    this.setState({ sliderValue: value });
  }
}

export { IProps };
export default provideStyles(Slider);

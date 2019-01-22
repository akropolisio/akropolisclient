import * as React from 'react';

import { Adaptive } from 'services/adaptability';
import { CircleProgressBar, Tooltip } from 'shared/view/elements';
import { Question, Arrow } from 'shared/view/elements/Icons';
import { formatUSDAmount } from 'shared/helpers/format';

import { IMetric } from '../../../namespace';
import { provideStyles, StylesProps } from './Metric.style';

interface IOwnProps {
  metric: IMetric;
  hint?: string;
}

type IProps = IOwnProps & StylesProps;

class Metric extends React.Component<IProps> {

  public render() {
    const { classes, metric: { percent, name, value, variation }, hint } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.percent}>
          <div className={classes.piechart}>
            <Adaptive to="sm">
              <CircleProgressBar variant="static" size={70} value={percent} />
            </Adaptive>
            <Adaptive from="sm" to="md">
              <CircleProgressBar variant="static" size={48} value={percent} />
            </Adaptive>
            <Adaptive from="md">
              <CircleProgressBar variant="static" size={70} value={percent} />
            </Adaptive>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.name}>
            {name}
            {hint &&
              <Adaptive from="sm">
                <Tooltip placement="top" title={hint}>
                  <Question className={classes.hintIcon} />
                </Tooltip>
              </Adaptive>
            }
          </div>
          <div className={classes.value}>{`${formatUSDAmount(value)}`}</div>
          {variation && this.renderVariation(variation)}
        </div>
      </div>
    );
  }

  public renderVariation(variation: number) {
    const { classes } = this.props;
    return (
      <div className={classes.variation}>
        {`${variation < 0 ? '-' : '+'}${Math.abs(variation)}%`}<Arrow className={classes.arrowIcon} />
      </div>
    );
  }
}

export { IProps };
export default provideStyles(Metric);

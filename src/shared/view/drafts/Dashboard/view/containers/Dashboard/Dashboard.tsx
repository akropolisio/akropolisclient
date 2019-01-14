import * as React from 'react';

import { i18nConnect, ITranslateProps, tKeys } from 'services/i18n';

import { IMetric } from '../../../namespace';
import { Metric } from '../../components';
import { provideStyles, StylesProps } from './Dashboard.style';

const metrics: IMetric[] = [
  { name: 'Total:', value: 33.500, percent: 75 },
  { name: 'Income Annually', value: 12.500, percent: 75, variation: 15 },
  { name: 'Income Monthly', value: 3.234, percent: 75, variation: -13 },
];

type IProps = StylesProps & ITranslateProps;

const tKeysDashboard = tKeys.features.dashboard;
class Dashboard extends React.Component<IProps> {

  public render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.metrics}>
          {metrics.map((metric, key) => (
            <div key={metric.name} className={classes.metric}>
              <Metric metric={metric} hint={key === 2 ? t(tKeysDashboard.hint.incomeMonthly.getKey()) : undefined} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { IProps };
export default i18nConnect(provideStyles(Dashboard));

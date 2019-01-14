import * as React from 'react';

import { Adaptive } from 'services/adaptability';
import { i18nConnect, ITranslateProps, tKeys as tKeysAll } from 'services/i18n';

import { StylesProps, provideStyles } from './Transaction.style';
import { ITransaction } from '../../../../../namespace';

const hiddenMetrics = ['amount'];

interface IOwnProps {
  transaction: ITransaction;
  index: number;
}

const tKeys = tKeysAll.features.transactions;

type IProps = IOwnProps & StylesProps & ITranslateProps;

class Transaction extends React.PureComponent<IProps> {

  public render() {
    const { classes, transaction, index } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.index}>{index}</div>
          <div className={classes.date}>{transaction.date}</div>
          <div className={classes.amount}>{`$${transaction.amount.toFixed(3)}`}</div>
        </div>
        <Adaptive from="sm"><div className={classes.index}>{index}</div></Adaptive>
        {this.renderMetrics()}
        <Adaptive className={classes.rightColumn} from="sm">
          <div className={classes.type}>{transaction.type}</div>
          <div className={classes.amount}>{`$${transaction.amount.toFixed(3)}`}</div>
        </Adaptive>
      </div>);
  }

  public renderMetrics() {
    const { classes, transaction, t } = this.props;

    const metrics = Object.keys(transaction)
      .filter(key => !hiddenMetrics.includes(key))
      .map((key: keyof ITransaction) => {
        const label = <div key={key} className={classes.metricLabel}>{t(tKeys[key] ? tKeys[key].getKey() : key)}</div>;
        const value = <div key={key} className={classes.metricValue}>{transaction[key]}</div>;
        return { label: this.addAdaptive(key, label), value: this.addAdaptive(key, value) };
      });

    return (
      <div className={classes.metrics}>
        <div className={classes.metricsLabels}>{metrics.map(m => m.label)}</div>
        <div className={classes.metricsValues}>{metrics.map(m => m.value)}</div>
      </div>);
  }

  public addAdaptive(key: keyof ITransaction, el: React.ReactElement<any>) {
    switch (key) {
      case 'date':
        return <Adaptive from="sm">{el}</Adaptive>;
      case 'type':
        return <Adaptive to="sm">{el}</Adaptive>;
      default:
        return el;
    }
  }
}

export { IProps };
export default i18nConnect(provideStyles(Transaction));

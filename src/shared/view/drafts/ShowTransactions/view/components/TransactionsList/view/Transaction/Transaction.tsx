import * as React from 'react';

import { StylesProps, provideStyles } from './Transaction.style';
import { ITransaction } from '../../../../../namespace';
import { Adaptive } from 'services/adaptability';
import { transactionFields } from 'shared/view/drafts/ShowTransactions/constants';

const hiddenMetrics = ['amount'];

interface IOwnProps {
  transaction: ITransaction;
  index: number;
}

type IProps = IOwnProps & StylesProps;

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
    const { classes, transaction } = this.props;
    const metricKeys = Object.keys(transaction)
      .filter(key => !hiddenMetrics.includes(key));

    const labels = metricKeys.map((key: keyof ITransaction) => {
      const _transaction = transactionFields.find(t => t.id === key);
      const metric = <div key={key} className={classes.metricLabel}>{_transaction && _transaction.label}</div>;
      return key === 'date' ? <Adaptive key={key} from="sm">{metric}</Adaptive> : metric;
    });

    const values = metricKeys.map((key: keyof ITransaction) => {
      const value = <div key={key} className={classes.metricValue}>{transaction[key]}</div>;
      return key === 'date' ? <Adaptive key={key} from="sm">{value}</Adaptive> : value;
    });

    return (
      <div className={classes.metrics}>
        <div className={classes.metricsLabels}>{labels}</div>
        <div className={classes.metricsValues}>{values}</div>
      </div>);
  }
}

export { IProps };
export default provideStyles(Transaction);

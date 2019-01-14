import * as React from 'react';

import { Adaptive } from 'services/adaptability';
import { transactionsMocks } from 'shared/helpers/mocks';

import { TransactionsTable, TransactionsList } from '../../components';
import { ITransaction } from '../../../namespace';
import { provideStyles, StylesProps } from './CompletedTransactions.style';

interface IState {
  order: 'desc' | 'asc';
  orderBy: keyof ITransaction;
}

class CompletedTransactions extends React.PureComponent<StylesProps, IState> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Adaptive from="md">
          <TransactionsTable transactions={transactionsMocks} />
        </Adaptive>
        <Adaptive to="md">
          <TransactionsList transactions={transactionsMocks} />
        </Adaptive>
      </div>
    );
  }
}

export default provideStyles(CompletedTransactions);

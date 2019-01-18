import * as React from 'react';

import { Adaptive } from 'services/adaptability';
import { IFundTransaction } from 'shared/types/models';
import { transactionsMock } from 'shared/helpers/mocks';

import { TransactionsTable, TransactionsList } from '../../components';
import { provideStyles, StylesProps } from './CompletedTransactions.style';

interface IState {
  order: 'desc' | 'asc';
  orderBy: keyof IFundTransaction;
}

class CompletedTransactions extends React.PureComponent<StylesProps, IState> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Adaptive from="md">
          <TransactionsTable transactions={transactionsMock} />
        </Adaptive>
        <Adaptive to="md">
          <TransactionsList transactions={transactionsMock} />
        </Adaptive>
      </div>
    );
  }
}

export default provideStyles(CompletedTransactions);

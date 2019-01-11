import * as React from 'react';

import { Adaptive } from 'services/adaptability';

import { TransactionsTable, TransactionsList } from '../../components';
import { ITransaction } from '../../../namespace';
import { provideStyles, StylesProps } from './CompletedTransactions.style';

const transactionMock: ITransaction = {
  date: '15/12/2018 15:35',
  fundName: 'StandartLife',
  sender: 'Pavel Klimov',
  receiver: 'Reciever',
  type: 'Вложение в ПФ',
  amount: 343.343,
};

const mocks = [transactionMock, transactionMock, transactionMock, transactionMock, transactionMock];

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
          <TransactionsTable transactions={mocks} />
        </Adaptive>
        <Adaptive to="md">
          <TransactionsList transactions={mocks} />
        </Adaptive>
      </div>
    );
  }
}

export default provideStyles(CompletedTransactions);

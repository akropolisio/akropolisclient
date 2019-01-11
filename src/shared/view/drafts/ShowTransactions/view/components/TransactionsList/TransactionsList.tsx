import * as React from 'react';

import Transaction from './view/Transaction/Transaction';
import { ITransaction } from '../../../namespace';
import { provideStyles, StylesProps } from './TransactionsList.style';

interface IOwnProps {
  transactions: ITransaction[];
}

type IProps = IOwnProps & StylesProps;

class TransactionsList extends React.PureComponent<IProps> {

  public render() {
    const { transactions, classes } = this.props;
    return (
      <div className={classes.root}>
        {transactions.map((transaction, index) => (
          <div key={index} className={classes.transaction}>
            <Transaction transaction={transaction} index={index + 1} />
          </div>
        ))}
      </div>
    );
  }
}

export default provideStyles(TransactionsList);

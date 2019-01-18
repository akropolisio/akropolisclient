import * as React from 'react';
import { IFundTransaction } from 'shared/types/models';

import Transaction from './view/Transaction/Transaction';
import { provideStyles, StylesProps } from './TransactionsList.style';

interface IOwnProps {
  transactions: IFundTransaction[];
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

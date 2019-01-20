import * as React from 'react';

import { Adaptive } from 'services/adaptability';
import { ListProvider, ShowMoreButton } from 'services/dataProvider';
import { IFundTransaction } from 'shared/types/models';
import { CircleProgressBar } from 'shared/view/elements';

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
      <ListProvider<'transaction'> resource="transaction">
        {({ items, loading, pagination }) => (
          <div className={classes.root}>
            {items.length === 0 && loading && (
              <div className={classes.preloader}>
                <CircleProgressBar size={80} variant="indeterminate" />
              </div>
            )}
            {items.length === 0 && !loading && (
              'Empty transactions'
            )}
            {items.length !== 0 && (<>
              <Adaptive from="md">
                <TransactionsTable transactions={items} />
              </Adaptive>
              <Adaptive to="md">
                <TransactionsList transactions={items} />
              </Adaptive>
              <ShowMoreButton fullWidth pagination={pagination} loading={loading} />
            </>)}
          </div>
        )}
      </ListProvider>
    );
  }
}

export default provideStyles(CompletedTransactions);

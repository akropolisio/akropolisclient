import * as React from 'react';
import { bind } from 'decko';
import { Table, TableBody, TableRow, TableCell, TableHead } from 'shared/view/elements';

import TableSortHead from './view/TableSortHead/TableSortHead';
import { ITransaction } from '../../../namespace';
import { transactionFields } from '../../../constants';
import { StylesProps, provideStyles } from './TransactionsTable.style';

interface IState {
  order: 'desc' | 'asc';
  orderBy: keyof ITransaction;
}

interface IOwnProps {
  transactions: ITransaction[];
}

type IProps = IOwnProps & StylesProps;

class CompletedTransactions extends React.PureComponent<IProps, IState> {

  public state: IState = { order: 'desc', orderBy: 'date' };
  public render() {
    const { orderBy, order } = this.state;
    const { transactions, classes } = this.props;
    return (
      <Table separated>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell />
            {transactionFields.map((column, i) => (
              <TableCell key={column.id}>
                <TableSortHead
                  columnId={column.id}
                  order={orderBy === column.id ? order : undefined}
                  active={orderBy === column.id}
                  align={i === transactionFields.length - 1 ? 'right' : 'left'}
                  onClick={this.sortBy}
                >
                  {column.label}
                </TableSortHead>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(
            (row, i) => (
              <TableRow key={i} className={classes.row}>
                <TableCell className={classes.cell}>{i}</TableCell>
                {Object.keys(row).map((key: keyof ITransaction, k) => (
                  <TableCell
                    key={key}
                    align={k === Object.keys(row).length - 1 ? 'right' : 'left'}
                    className={classes.cell}
                  >
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>))}
        </TableBody>
      </Table>
    );
  }

  @bind
  public sortBy(orderBy: keyof ITransaction) {
    if (this.state.orderBy !== orderBy) {
      this.setState({ orderBy, order: 'desc' });
    } else {
      this.setState((pState) => ({ orderBy, order: pState.order === 'desc' ? 'asc' : 'desc' }));
    }
  }
}

export default provideStyles(CompletedTransactions);

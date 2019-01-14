import * as React from 'react';
import { bind } from 'decko';

import { Table, TableBody, TableRow, TableCell, TableHead } from 'shared/view/elements';
import { i18nConnect, ITranslateProps, tKeys as tKeysAll } from 'services/i18n';
import { toFixed } from 'shared/helpers/integer';

import { ITransaction } from '../../../namespace';
import TableSortHead from './view/TableSortHead/TableSortHead';
import { StylesProps, provideStyles } from './TransactionsTable.style';

interface IState {
  order: 'desc' | 'asc';
  orderBy: keyof ITransaction;
}

interface IOwnProps {
  transactions: ITransaction[];
}

const tKeys = tKeysAll.features.transactions;

type IProps = IOwnProps & StylesProps & ITranslateProps;

class CompletedTransactions extends React.PureComponent<IProps, IState> {

  public state: IState = { order: 'desc', orderBy: 'date' };
  public render() {
    const { orderBy, order } = this.state;
    const { transactions, classes, t } = this.props;
    const rowKeys = transactions[0] && Object.keys(transactions[0]);
    return (
      <Table separated>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell />
            {rowKeys && rowKeys.map((key: keyof ITransaction, i) => (
              <TableCell key={key}>
                <TableSortHead
                  columnId={key}
                  order={orderBy === key ? order : undefined}
                  active={orderBy === key}
                  align={i === rowKeys.length - 1 ? 'right' : 'left'}
                  onClick={this.sortBy}
                >
                  {t(tKeys[key] ? tKeys[key].getKey() : key)}
                </TableSortHead>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowKeys && transactions.map(
            (row, i) => (
              <TableRow key={i} className={classes.row}>
                <TableCell className={classes.cell}>{i}</TableCell>
                {rowKeys.map((key: keyof ITransaction, k) => (
                  <TableCell
                    key={key}
                    align={k === rowKeys.length - 1 ? 'right' : 'left'}
                    className={classes.cell}
                  >
                    {key === 'amount' ? toFixed(row[key], 3) : row[key]}
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

export default i18nConnect(provideStyles(CompletedTransactions));

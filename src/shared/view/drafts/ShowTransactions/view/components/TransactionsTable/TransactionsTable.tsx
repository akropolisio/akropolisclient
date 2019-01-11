import * as React from 'react';
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeadCell } from 'shared/view/elements';

import TableSortHead from './view/TableSortHead/TableSortHead';
import { ITransaction } from '../../../namespace';

interface IColumn {
  id: keyof ITransaction;
  label: string;
}

const columnsMocks: IColumn[] = [
  { id: 'date', label: 'Date' },
  { id: 'fundName', label: 'Fund name' },
  { id: 'sender', label: 'Sender' },
  { id: 'receiver', label: 'Receiver' },
  { id: 'type', label: 'Type' },
  { id: 'amount', label: 'Amount' },
];

interface IState {
  order: 'desc' | 'asc';
  orderBy: keyof ITransaction;
}

interface IProps {
  transactions: ITransaction[];
}

class CompletedTransactions extends React.PureComponent<IProps, IState> {

  public state: IState = { order: 'desc', orderBy: 'date' };
  public render() {
    const { orderBy, order } = this.state;
    const { transactions } = this.props;
    return (
      <Table>
        <TableHead>
          <TableHeadCell />
          {columnsMocks.map((column, i) => (
            <TableHeadCell
              key={i}
            >
              <TableSortHead
                order={orderBy === column.id ? order : undefined}
                active={orderBy === column.id}
                align={i === columnsMocks.length - 1 ? 'right' : 'left'}
                onClick={this.sortMethod.bind(this, column.id)}
              >
                {column.label}
              </TableSortHead>
            </TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {transactions.map(
            (row, i) => (<TableRow key={i}>
              <TableCell>{i}</TableCell>
              {Object.keys(row).map((key, k) => (
                <TableCell
                  key={k}
                  align={k === Object.keys(row).length - 1 ? 'right' : 'left'}
                >
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>))}
        </TableBody>
      </Table>
    );
  }

  public sortMethod(orderBy: keyof ITransaction) {
    if (this.state.orderBy !== orderBy) {
      this.setState({ orderBy, order: 'desc' });
    } else {
      this.setState({ orderBy, order: this.state.order === 'desc' ? 'asc' : 'desc' });
    }
  }
}

export default CompletedTransactions;

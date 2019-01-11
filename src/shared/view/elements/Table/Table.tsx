import * as React from 'react';
import { bind } from 'decko';
import { StylesProps, provideStyles } from './Table.style';

// tslint:disable:max-line-length
// tslint:disable:max-classes-per-file

type MakeFnComponentProps<P = {}, C = any> = P & { children?: C };

type IProps = StylesProps;

interface ICellProps {
  align?: 'left' | 'center' | 'right';
}

class Table extends React.PureComponent<IProps> {

  public render() {
    const { classes, children } = this.props;

    return <table className={classes.root}>{children}</table>;
  }
}

const TableComponent = provideStyles(Table);

export { TableComponent as Table };

const TableHead = provideStyles(React.memo((props: MakeFnComponentProps) => {

  return <thead>{props.children}</thead>;
}));

const TableBody = provideStyles(React.memo((props: MakeFnComponentProps) => {

  return <tbody>{props.children}</tbody>;
}));

const TableRow = provideStyles(React.memo((props: MakeFnComponentProps<StylesProps>) => {

  const { classes, children } = props;

  return <tr className={classes.row}>{children}</tr>;
}));

const TableCell = provideStyles(React.memo((props: MakeFnComponentProps<StylesProps & ICellProps>) => {

  const { classes, children, align } = props;

  return <td align={align} className={classes.cell}>{children}</td>;
}));

const TableHeadCell = provideStyles(React.memo((props: MakeFnComponentProps<StylesProps & ICellProps>) => {

  const { classes, children, align } = props;

  return <th align={align} className={classes.headCell}>{children}</th>;
}));

export { TableHead, TableBody, TableRow, TableHeadCell, TableCell };

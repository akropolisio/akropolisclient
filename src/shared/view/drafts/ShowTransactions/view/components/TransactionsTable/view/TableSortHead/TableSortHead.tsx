import * as React from 'react';
import * as cn from 'classnames';
import { bind } from 'decko';

import { IFundTransaction } from 'shared/types/models';
import { AngleArrow } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './TableSortHead.style';

interface ITableSortHead {
  columnId: keyof IFundTransaction;
  active: boolean;
  order?: 'desc' | 'asc';
  align?: 'left' | 'center' | 'right';
  onClick?(columnId: keyof IFundTransaction): void;
}

type IProps = ITableSortHead & StylesProps;

class TableSortHead extends React.PureComponent<IProps> {

  public render() {
    const { classes, children, order, active } = this.props;

    return (
      <div className={cn(classes.root, { [classes.active]: active })} onClick={this.onClick}>
        <span className={classes.label}>{children}</span>
        <AngleArrow
          className={cn(classes.sortIcon, { [classes.desc]: order === 'desc', [classes.asc]: order === 'asc' })}
        />
      </div>);
  }

  @bind
  public onClick() {
    const { onClick, columnId } = this.props;
    if (onClick) {
      onClick(columnId);
    }
  }
}

export { IProps };
export default provideStyles(TableSortHead);

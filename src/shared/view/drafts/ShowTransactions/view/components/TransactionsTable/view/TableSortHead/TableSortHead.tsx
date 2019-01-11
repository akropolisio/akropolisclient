import * as React from 'react';
import * as cn from 'classnames';
import { AngleArrow } from 'shared/view/elements/Icons';

import { StylesProps, provideStyles } from './TableSortHead.style';

interface ITableSortHead {
  active: boolean;
  order?: 'desc' | 'asc';
  align?: 'left' | 'center' | 'right';
  onClick?(): void;
}

type IProps = ITableSortHead & StylesProps;

class TableSortHead extends React.PureComponent<IProps> {

  public render() {
    const { classes, children, order, active, onClick } = this.props;

    return (
      <div className={cn(classes.root, { [classes.active]: active })} onClick={onClick}>
        <span className={classes.label}>{children}</span>
        <AngleArrow
          className={cn(classes.sortIcon, { [classes.desc]: order === 'desc', [classes.asc]: order === 'asc' })}
        />
      </div>);
  }
}

export { IProps };
export default provideStyles(TableSortHead);

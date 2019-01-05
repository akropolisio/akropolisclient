import * as React from 'react';
import { bind } from 'decko';

import { TrashBasket } from 'shared/view/elements/Icons';

import { provideStyles, StylesProps } from './Contribution.style';

interface IOwnProps {
  id: number;
  title: string;
  onRemove(id: number): void;
}

type IProps = StylesProps & IOwnProps;
class Contribution extends React.PureComponent<IProps> {

  public render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <span className={classes.title}>{title}</span>
        <TrashBasket onClick={this.onRemove} className={classes.removeIcon} />
      </div>);
  }

  @bind
  public onRemove() {
    const { onRemove, id } = this.props;
    onRemove(id);
  }
}

export default provideStyles(Contribution);
